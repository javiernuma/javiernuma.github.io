import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import { z } from 'zod';
import EmailTemplate from '@/components/emails/EmailTemplate';
import { render } from '@react-email/render';
import React from 'react';

// Esquema de validación
const contactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  message: z.string().min(10),
  honeypot: z.string().optional(), // Campo oculto anti-spam
});

export async function POST(req: NextRequest) {
  try {
    // Inicializar Resend dentro del handler para evitar errores de build estático
    const resend = new Resend(process.env.RESEND_API_KEY);
    
    const body = await req.json();

    // Protección simple anti-spam (Honeypot)
    if (body.honeypot) {
      return NextResponse.json({ message: 'Message received' }, { status: 200 });
    }

    const { name, email, message } = contactSchema.parse(body);

    // Renderizar el template a HTML
    const emailHtml = await render(EmailTemplate({ name, email, message }) as React.ReactElement);

    const { data, error } = await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>', // Usar dominio de prueba de Resend o uno propio verificado
      to: ['ing.javiernuma@gmail.com'], // TU CORREO AQUÍ
      subject: `Nuevo mensaje de ${name}`,
      html: emailHtml,
      replyTo: email, // Para que puedas responder directamente al remitente
    });

    if (error) {
      return NextResponse.json({ error }, { status: 500 });
    }

    return NextResponse.json({ message: 'Email sent successfully', data }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}