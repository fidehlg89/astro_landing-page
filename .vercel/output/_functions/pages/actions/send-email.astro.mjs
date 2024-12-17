import { createTransport } from 'nodemailer';
export { renderers } from '../../renderers.mjs';

async function sendEmail(options) {
  const transporter = await getEmailTransporter();
  return new Promise(async (resolve, reject) => {
    const { to, subject, html } = options;
    const from = "fidehlg89@gmail.com";
    const message = { to, subject, html, from };
    transporter.sendMail(message, (err, info) => {
      if (err) {
        console.error(err);
        reject(err);
      }
      console.log("Message sent:", info.messageId);
      resolve(info);
    });
  });
}
async function getEmailTransporter() {
  return new Promise((resolve, reject) => {
    const transporter = createTransport({
      host: "smtp.resend.com",
      secure: true,
      port: 465,
      auth: { user: "resend", pass: "re_S8E2nX9J_MuLpa1rsy9Z1DXvVUa4GgVe8" }
    });
    resolve(transporter);
  });
}

const prerender = false;
const POST = async ({ request, redirect }) => {
  const to = "fidehlg89@gmail.com";
  const subject = "New message from your website";
  const { name, email, message } = await request.json();
  if (!name || !email || !message) {
    throw new Error("Missing required fields");
  }
  try {
    const html = `<div>${message}</div>`;
    await sendEmail({ to, subject, html });
  } catch (error) {
    throw new Error("Failed to send email");
  }
  return redirect("/");
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST,
  prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
