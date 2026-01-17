import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import { z } from 'zod';
import EmailTemplate from '@/components/emails/EmailTemplate';
import { render } from '@react-email/render';
import React from 'react';

// NO inicializamos Resend aquí
// const resend = new Resend(process.env.RESEND_API_KEY);

// Esquema de validación con Zod
const contactSchema = z.object({
  name: z.string().min(2, 'El nombre debe tener al menos 2 caracteres.'),
  email: z.string().email('El correo electrónico no es válido.'),
  message: z.string().min(10, 'El mensaje debe tener al menos 10 caracteres.'),
  honeypot: z.string().optional(),
});

export async function POST(req: NextRequest) {
  try {
    // Inicializamos Resend DENTRO de la función POST
    const resend = new Resend(process.env.RESEND_API_KEY);

    const body = await req.json();

    if (body.honeypot) {
      return NextResponse.json({ message: 'Message received!' }, { status: 200 });
    }

    const parsed = contactSchema.safeParse(body);

    if (!parsed.success) {
      const { errors } = parsed.error;
      return NextResponse.json({ error: 'Datos inválidos.', details: errors }, { status: 400 });
    }

    const { name, email, message } = parsed.data;

    const emailHtml = await render(EmailTemplate({ name, email, message }) as React.ReactElement);

    const { data, error } = await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>',
      to: ['ing.javiernuma@gmail.com'],
      subject: `Nuevo mensaje de ${name} desde tu portafolio`,
      html: emailHtml,
      text: `Nombre: ${name}\nEmail: ${email}\nMensaje: ${message}`,
    });

    if (error) {
      console.error('Error al enviar el correo:', error);
      return NextResponse.json({ error: 'Error al enviar el correo.' }, { status: 500 });
    }

    return NextResponse.json({ message: 'Mensaje enviado con éxito.', data }, { status: 200 });

  } catch (error) {
    console.error('Error en la API:', error);
    return NextResponse.json({ error: 'Error interno del servidor.' }, { status: 500 });
  }
}