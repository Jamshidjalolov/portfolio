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

const initialFormState: FormState = {
  name: '',
  email: '',
  message: '',
};

type ContactSectionProps = {
  locale: Locale;
};

function ContactSection({ locale }: ContactSectionProps) {
  const content = portfolioContent[locale];
  const [formState, setFormState] = useState<FormState>(initialFormState);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setSubmitted(false);

    setFormState((current) => ({
      ...current,
      [name]: value,
    }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const subject =
      locale === 'uz'
        ? `Portfolio orqali murojaat: ${formState.name}`
        : `Portfolio inquiry from ${formState.name}`;
    const body =
      locale === 'uz'
        ? `Ism: ${formState.name}%0AEmail: ${formState.email}%0A%0AXabar:%0A${encodeURIComponent(formState.message)}`
        : `Name: ${formState.name}%0AEmail: ${formState.email}%0A%0AMessage:%0A${encodeURIComponent(formState.message)}`;

    window.location.href = `mailto:${content.profile.email}?subject=${encodeURIComponent(subject)}&body=${body}`;
    setSubmitted(true);
    setFormState(initialFormState);
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
                    name="message"
                    onChange={handleChange}
                    placeholder={content.contact.messagePlaceholder}
                    required
                    value={formState.message}
                  />
                </label>

                <div className="panel-soft flex flex-col gap-4 rounded-[24px] p-4 sm:flex-row sm:items-center sm:justify-between">
                  <div className="max-w-xl text-sm leading-7 text-slate-400">{content.contact.helperText}</div>
                  <Button className="w-full justify-center sm:min-w-[168px] sm:w-auto" showArrow type="submit">
                    {content.contact.submitLabel}
                  </Button>
                </div>

                {submitted ? (
                  <div className="rounded-2xl border border-emerald-300/20 bg-emerald-300/[0.08] px-4 py-3 text-sm text-emerald-100">
                    {content.contact.successText}
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
