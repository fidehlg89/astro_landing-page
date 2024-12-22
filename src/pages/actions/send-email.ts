import type { APIRoute } from 'astro';
import nodemailer from 'nodemailer';
import 'dotenv/config'; // For environment variables

export const post: APIRoute = async ({ request }) => {
  try {
    const { name, email, message } = await request.json();

    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({ message: 'Todos los campos son obligatorios' }),
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASSWORD,
      },
    });

    await transporter.sendMail({
      from: `"Formulario de Contacto" <${process.env.GMAIL_USER}>`,
      to: process.env.CONTACT_EMAIL,
      subject: 'Nuevo Mensaje del Formulario de Contacto',
      text: `Nombre: ${name}\nCorreo: ${email}\nMensaje: ${message}`,
    });

    return new Response(
      JSON.stringify({ message: 'Mensaje enviado con éxito' }),
      { status: 200 }
    );
  } catch (error) {
    console.error('Error al enviar el correo:', error);
    return new Response(
      JSON.stringify({ message: 'Error al enviar el mensaje. Intente nuevamente más tarde.' }),
      { status: 500 }
    );
  }
};
