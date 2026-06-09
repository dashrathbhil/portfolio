import nodemailer from "nodemailer";

interface SendEmailParams {
  name: string;
  email?: string;
  phone?: string;
  message: string;
}

export const sendEmail = async ({ name, email, phone, message }: SendEmailParams) => {
  if (!process.env.SMTP_HOST || !process.env.SMTP_USER || !process.env.SMTP_PASS || !process.env.CONTACT_RECEIVER) {
    throw new Error("Missing SMTP credentials or contact receiver email in environment variables");
  }

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT) || 587,
    secure: Number(process.env.SMTP_PORT) === 465,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },

  });

  const mailOptions = {
    from: `"Dashrath Bhil" <${process.env.SMTP_USER}>`,
    to: process.env.CONTACT_RECEIVER,
    replyTo: email || undefined,
    subject: `New Contact from ${name}`,
    text: `Name: ${name}\nEmail: ${email || "Not provided"}\nPhone: ${phone || "Not provided"}\n\nMessage:\n${message}`,
    html: `
      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; padding: 24px; color: #111; max-width: 600px; line-height: 1.6; border: 1px solid #eaeaea; border-radius: 8px;">
        <h2 style="font-size: 18px; font-weight: 600; margin-bottom: 16px; border-bottom: 1px solid #eaeaea; padding-bottom: 12px;">New Contact Submission</h2>
        <div style="margin-bottom: 24px;">
          <p style="margin: 4px 0;"><strong style="color: #666;">Name:</strong> ${name}</p>
          <p style="margin: 4px 0;"><strong style="color: #666;">Email:</strong> ${email ? `<a href="mailto:${email}" style="color: #0070f3;">${email}</a>` : 'Not provided'}</p>
          <p style="margin: 4px 0;"><strong style="color: #666;">Phone:</strong> ${phone || 'Not provided'}</p>
        </div>
        <div style="background-color: #f9f9f9; padding: 16px; border-radius: 6px; font-size: 15px; color: #333; white-space: pre-wrap;">${message}</div>
      </div>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    return { success: true };
  } catch (error) {
    console.error("[sendEmail] Error sending email:", error);
    throw new Error("Failed to send email");
  }
};
