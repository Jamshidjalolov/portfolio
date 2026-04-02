import { ChangeEvent, FormEvent, useState } from 'react';
import { Mail, MapPin, Phone, Send } from 'lucide-react';
import Button from '../components/Button';
import Container from '../components/Container';
import MotionPanel from '../components/MotionPanel';
import Reveal from '../components/Reveal';
import SectionHeading from '../components/SectionHeading';
import SocialLinks from '../components/SocialLinks';
import { portfolioContent } from '../data/portfolio';
import { Locale } from '../types';

const EMAILJS_ENDPOINT = 'https://api.emailjs.com/api/v1.0/email/send';

const iconMap = {
  mail: Mail,
  'map-pin': MapPin,
  phone: Phone,
  send: Send,
};

type FormState = {
  name: string;
  email: string;
  message: string;
};

type SubmissionState = 'idle' | 'submitting' | 'success' | 'error';

const initialFormState: FormState = {
  name: '',
  email: '',
  message: '',
};

type ContactSectionProps = {
  locale: Locale;
};

function getEmailJsConfig() {
  return {
    publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY?.trim() || '',
    serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID?.trim() || '',
    templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID?.trim() || '',
  };
}

function buildMailtoHref(email: string, formState: FormState, locale: Locale) {
  const subject =
    locale === 'uz'
      ? `Portfolio orqali murojaat: ${formState.name}`
      : `Portfolio inquiry from ${formState.name}`;
  const body =
    locale === 'uz'
      ? `Ism: ${formState.name}\nEmail: ${formState.email}\n\nXabar:\n${formState.message}`
      : `Name: ${formState.name}\nEmail: ${formState.email}\n\nMessage:\n${formState.message}`;

  return `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

function getMailtoFallbackMessage(locale: Locale) {
  return locale === 'uz'
    ? 'Email oynasi ochildi, xabarni shu yerdan yuborishingiz mumkin.'
    : 'Your email client was opened so you can send the message from there.';
}

function getMissingEmailJsMessage(locale: Locale) {
  return locale === 'uz'
    ? "EmailJS sozlanmagan. `VITE_EMAILJS_PUBLIC_KEY`, `VITE_EMAILJS_SERVICE_ID` va `VITE_EMAILJS_TEMPLATE_ID` ni kiriting. Email oynasi ochildi."
    : 'EmailJS is not configured. Add `VITE_EMAILJS_PUBLIC_KEY`, `VITE_EMAILJS_SERVICE_ID`, and `VITE_EMAILJS_TEMPLATE_ID`. Your email client was opened.';
}

function getNetworkErrorMessage(locale: Locale) {
  return locale === 'uz'
    ? "EmailJS serveriga ulanib bo'lmadi. Email oynasi ochildi."
    : 'The app could not reach EmailJS. Your email client was opened.';
}

function getDeliveryErrorMessage(locale: Locale, detail: string) {
  if (locale === 'uz') {
    return detail ? `EmailJS xatolik berdi: ${detail}` : "EmailJS orqali yuborishda xatolik yuz berdi.";
  }

  return detail ? `EmailJS returned an error: ${detail}` : 'Something went wrong while sending through EmailJS.';
}

function ContactSection({ locale }: ContactSectionProps) {
  const content = portfolioContent[locale];
  const [formState, setFormState] = useState<FormState>(initialFormState);
  const [submissionState, setSubmissionState] = useState<SubmissionState>('idle');
  const [feedbackMessage, setFeedbackMessage] = useState('');

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setSubmissionState('idle');
    setFeedbackMessage('');

    setFormState((current) => ({
      ...current,
      [name]: value,
    }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (submissionState === 'submitting') {
      return;
    }

    setSubmissionState('submitting');
    setFeedbackMessage('');

    try {
      const mailtoHref = buildMailtoHref(content.profile.email, formState, locale);
      const emailJsConfig = getEmailJsConfig();

      if (!emailJsConfig.publicKey || !emailJsConfig.serviceId || !emailJsConfig.templateId) {
        window.location.href = mailtoHref;
        setSubmissionState('success');
        setFeedbackMessage(getMissingEmailJsMessage(locale));
        setFormState(initialFormState);
        return;
      }

      const sentAt = new Date().toLocaleString(locale === 'uz' ? 'uz-UZ' : 'en-US', {
        dateStyle: 'medium',
        timeStyle: 'short',
      });

      const response = await fetch(EMAILJS_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          service_id: emailJsConfig.serviceId,
          template_id: emailJsConfig.templateId,
          user_id: emailJsConfig.publicKey,
          template_params: {
            name: formState.name,
            from_name: formState.name,
            email: formState.email,
            reply_to: formState.email,
            message: formState.message,
            sent_at: sentAt,
            locale,
          },
        }),
      });

      const responseText = await response.text().catch(() => '');

      if (!response.ok) {
        window.location.href = mailtoHref;
        setSubmissionState('success');
        setFeedbackMessage(getDeliveryErrorMessage(locale, responseText));
        setFormState(initialFormState);
        return;
      }

      setSubmissionState('success');
      setFeedbackMessage(content.contact.successText);
      setFormState(initialFormState);
    } catch (error) {
      if (error instanceof TypeError) {
        window.location.href = buildMailtoHref(content.profile.email, formState, locale);
        setSubmissionState('success');
        setFeedbackMessage(getNetworkErrorMessage(locale));
        setFormState(initialFormState);
        return;
      }

      setSubmissionState('error');
      setFeedbackMessage(error instanceof Error ? error.message : content.contact.errorText);
    }
  };

  return (
    <section className="pb-16 pt-14 sm:pb-20 sm:pt-16 lg:pb-24 lg:pt-20" id="contact">
      <Container>
        <div className="grid gap-8 xl:gap-10 xl:grid-cols-[0.92fr_1.08fr] xl:items-start">
          <Reveal>
            <div className="mx-auto max-w-[34rem] xl:mx-0">
              <SectionHeading
                description={content.contact.description}
                eyebrow={content.contact.eyebrow}
                title={content.contact.title}
              />

              <div className="mt-8 space-y-4">
                {content.contact.methods.map((method) => {
                  const Icon = iconMap[method.icon];
                  const external = method.href.startsWith('http');

                  return (
                    <MotionPanel key={method.label}>
                      <a
                        className="group panel-soft flex items-center gap-4 p-4 transition duration-300 hover:border-white/20 sm:min-h-[88px] sm:p-5"
                        href={method.href}
                        rel={external ? 'noreferrer' : undefined}
                        target={external ? '_blank' : undefined}
                      >
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.05]">
                          <Icon className="h-5 w-5 text-cyan-200" />
                        </div>
                        <div className="min-w-0">
                          <div className="text-xs uppercase tracking-[0.28em] text-slate-400">
                            <span className="text-hover-soft">{method.label}</span>
                          </div>
                          <div className="mt-1 truncate text-sm font-semibold text-white sm:text-base">
                            <span className="text-hover-accent">{method.value}</span>
                          </div>
                        </div>
                      </a>
                    </MotionPanel>
                  );
                })}
              </div>

              <div className="mt-7 text-center xl:text-left">
                <div className="text-sm uppercase tracking-[0.28em] text-slate-400">
                  {content.contact.socialLabel}
                </div>
                <div className="mt-4 flex justify-center xl:justify-start">
                  <SocialLinks links={content.socialLinks} />
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <MotionPanel className="panel p-5 sm:p-6 lg:p-8" glow="rgba(103,232,249,0.16)">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <div className="text-xs uppercase tracking-[0.28em] text-slate-400">
                    <span className="text-hover-soft">{content.contact.formEyebrow}</span>
                  </div>
                  <div className="mt-2 text-2xl font-semibold text-white">
                    <span className="text-hover-accent">{content.contact.formTitle}</span>
                  </div>
                </div>
                <div className="self-start rounded-full border border-emerald-300/20 bg-emerald-300/[0.08] px-3 py-1.5 text-xs font-semibold text-emerald-200">
                  {content.contact.replyLabel}
                </div>
              </div>

              <div className="mt-6 soft-divider" />

              <form className="mt-8 space-y-5" onSubmit={handleSubmit}>
                <div className="grid gap-5 sm:grid-cols-2">
                  <label className="block">
                    <span className="mb-2 block text-sm font-medium text-slate-200">{content.contact.nameLabel}</span>
                    <input
                      className="input-field"
                      disabled={submissionState === 'submitting'}
                      name="name"
                      onChange={handleChange}
                      placeholder={content.contact.namePlaceholder}
                      required
                      type="text"
                      value={formState.name}
                    />
                  </label>

                  <label className="block">
                    <span className="mb-2 block text-sm font-medium text-slate-200">{content.contact.emailLabel}</span>
                    <input
                      className="input-field"
                      disabled={submissionState === 'submitting'}
                      name="email"
                      onChange={handleChange}
                      placeholder={content.contact.emailPlaceholder}
                      required
                      type="email"
                      value={formState.email}
                    />
                  </label>
                </div>

                <label className="block">
                  <span className="mb-2 block text-sm font-medium text-slate-200">{content.contact.messageLabel}</span>
                  <textarea
                    className="input-field min-h-[180px] resize-y"
                    disabled={submissionState === 'submitting'}
                    name="message"
                    onChange={handleChange}
                    placeholder={content.contact.messagePlaceholder}
                    required
                    value={formState.message}
                  />
                </label>

                <div className="panel-soft flex flex-col gap-4 rounded-[24px] p-4 sm:flex-row sm:items-center sm:justify-between">
                  <div className="max-w-xl text-sm leading-7 text-slate-400">{content.contact.helperText}</div>
                  <Button
                    className="w-full justify-center sm:min-w-[168px] sm:w-auto"
                    disabled={submissionState === 'submitting'}
                    showArrow
                    type="submit"
                  >
                    {submissionState === 'submitting' ? content.contact.sendingText : content.contact.submitLabel}
                  </Button>
                </div>

                {submissionState === 'success' && feedbackMessage ? (
                  <div
                    aria-live="polite"
                    className="rounded-2xl border border-emerald-300/20 bg-emerald-300/[0.08] px-4 py-3 text-sm text-emerald-100"
                  >
                    {feedbackMessage}
                  </div>
                ) : null}

                {submissionState === 'error' && feedbackMessage ? (
                  <div
                    aria-live="polite"
                    className="rounded-2xl border border-rose-300/20 bg-rose-300/[0.08] px-4 py-3 text-sm text-rose-100"
                  >
                    {feedbackMessage}
                  </div>
                ) : null}
              </form>
            </MotionPanel>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

export default ContactSection;
