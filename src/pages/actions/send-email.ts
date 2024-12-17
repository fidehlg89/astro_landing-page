import type { APIRoute } from "astro";
import { sendEmail } from "../../utils/email";

export const prerender = false;

export const POST: APIRoute = async ({ request, redirect }) => {
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
