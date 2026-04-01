const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function normalizeField(value, maxLength) {
  if (typeof value !== 'string') {
    return '';
  }

  return value.trim().slice(0, maxLength);
}

function escapeHtml(value) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function getCopy(locale) {
  return locale === 'uz'
    ? {
        invalidBody: "Yuborilgan ma'lumot noto'g'ri formatda.",
        required: "Ism, email va xabar maydonlari to'ldirilishi kerak.",
        invalidEmail: "Email manzili noto'g'ri ko'rinmoqda.",
        notConfigured: "Serverda email yuborish sozlanmagan.",
        success: 'Xabar muvaffaqiyatli yuborildi.',
        serverError: "Xabarni yuborishda xatolik yuz berdi. Keyinroq yana urinib ko'ring.",
        subject: 'Portfolio orqali yangi murojaat',
        heading: 'Portfolio orqali yangi xabar',
        name: 'Ism',
        email: 'Email',
        message: 'Xabar',
        submittedAt: 'Vaqt',
      }
    : {
        invalidBody: 'The submitted payload is invalid.',
        required: 'Name, email, and message are required.',
        invalidEmail: 'The email address looks invalid.',
        notConfigured: 'Email delivery is not configured on the server.',
        success: 'Your message was sent successfully.',
        serverError: 'Something went wrong while sending the message. Please try again later.',
        subject: 'New portfolio inquiry',
        heading: 'New portfolio message',
        name: 'Name',
        email: 'Email',
        message: 'Message',
        submittedAt: 'Time',
      };
}

function buildMessage({ name, email, message, locale, submittedAt }) {
  const copy = getCopy(locale);
  const readableDate = new Date(submittedAt).toLocaleString(locale === 'uz' ? 'uz-UZ' : 'en-US', {
    dateStyle: 'medium',
    timeStyle: 'short',
  });

  return {
    subject: `${copy.subject}: ${name}`,
    text: [
      copy.heading,
      '',
      `${copy.name}: ${name}`,
      `${copy.email}: ${email}`,
      `${copy.submittedAt}: ${readableDate}`,
      '',
      `${copy.message}:`,
      message,
    ].join('\n'),
    html: `
      <div style="font-family:Arial,sans-serif;line-height:1.6;color:#0f172a">
        <h2 style="margin:0 0 16px">${escapeHtml(copy.heading)}</h2>
        <p style="margin:0 0 8px"><strong>${escapeHtml(copy.name)}:</strong> ${escapeHtml(name)}</p>
        <p style="margin:0 0 8px"><strong>${escapeHtml(copy.email)}:</strong> ${escapeHtml(email)}</p>
        <p style="margin:0 0 16px"><strong>${escapeHtml(copy.submittedAt)}:</strong> ${escapeHtml(readableDate)}</p>
        <p style="margin:0 0 8px"><strong>${escapeHtml(copy.message)}:</strong></p>
        <pre style="margin:0;white-space:pre-wrap;font-family:inherit;background:#f8fafc;border:1px solid #e2e8f0;border-radius:12px;padding:16px">${escapeHtml(
          message,
        )}</pre>
      </div>
    `,
  };
}

async function sendEmail(payload, env) {
  const emailRequest = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${env.RESEND_API_KEY}`,
      'Content-Type': 'application/json',
      'User-Agent': 'portfolio-contact-form/1.0',
    },
    body: JSON.stringify({
      from: env.CONTACT_FROM_EMAIL,
      to: [env.CONTACT_TO_EMAIL],
      reply_to: payload.email,
      subject: payload.subject,
      text: payload.text,
      html: payload.html,
    }),
  });

  if (!emailRequest.ok) {
    const detail = await emailRequest.text();
    throw new Error(`Email delivery failed: ${detail}`);
  }
}

export async function handleContactSubmission(payload, env = process.env) {
  const locale = payload?.locale === 'uz' ? 'uz' : 'en';
  const copy = getCopy(locale);

  try {
    if (!payload || typeof payload !== 'object') {
      return {
        statusCode: 400,
        body: { message: copy.invalidBody },
      };
    }

    const name = normalizeField(payload.name, 120);
    const email = normalizeField(payload.email, 200);
    const message = normalizeField(payload.message, 4000);

    if (!name || !email || !message) {
      return {
        statusCode: 400,
        body: { message: copy.required },
      };
    }

    if (!EMAIL_PATTERN.test(email)) {
      return {
        statusCode: 400,
        body: { message: copy.invalidEmail },
      };
    }

    const emailConfigured = Boolean(env.RESEND_API_KEY) && Boolean(env.CONTACT_FROM_EMAIL) && Boolean(env.CONTACT_TO_EMAIL);

    if (!emailConfigured) {
      return {
        statusCode: 500,
        body: { message: copy.notConfigured },
      };
    }

    const submittedAt = new Date().toISOString();
    const deliveryPayload = buildMessage({
      name,
      email,
      message,
      locale,
      submittedAt,
    });

    await sendEmail(
      {
        ...deliveryPayload,
        email,
      },
      env,
    );

    return {
      statusCode: 200,
      body: { message: copy.success },
    };
  } catch (error) {
    console.error(error);

    return {
      statusCode: 500,
      body: { message: copy.serverError },
    };
  }
}
