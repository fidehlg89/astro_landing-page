import React from "react";
import ReactDOMServer from "react-dom/server";
import EmailTemplate from "../../components/shared/EmailTemplate";

const RESEND_API_KEY = import.meta.env.RESEND_API_KEY;
const EMAIL_TO = import.meta.env.TO_EMAIL;

export async function POST({ request }: { request: Request }) {
  try {
    // Parse the incoming form data
    const { name, email, message } = await request.json();

    // Render the email template to HTML
    const emailBody = ReactDOMServer.renderToStaticMarkup(
      React.createElement(EmailTemplate, { name, email, message })
    );

    // Send the email using the Resend API
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "Landing Page <onboarding@resend.dev>",
        to: [`${EMAIL_TO}`],
        subject: "New Contact Request from Landing Page",
        html: emailBody,
      }),
    });

    if (res.ok) {
      const data = await res.json();
      return new Response(JSON.stringify(data), { status: 200 });
    } else {
      const error = await res.json();
      return new Response(JSON.stringify({ error }), { status: res.status });
    }
  } catch (error) {
    console.error("Error processing request:", error);
    return new Response(
      JSON.stringify({ error: "Failed to send email." }),
      { status: 500 }
    );
  }
}
