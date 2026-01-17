import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import { z } from 'zod';
import EmailTemplate from '@/components/emails/EmailTemplate';
import { renderToStaticMarkup } from 'react-dom/server'; // Usamos react-dom/server

const resend = new Resend(process.env.RESEND_API_KEY);

// Esquema de validación con Zod
const contactSchema = z.object({
  name: z.string().min(2, 'El nombre debe tener al menos 2 caracteres.'),
  email: z.string().email('El correo electrónico no es válido.'),
  message: z.string().min(10, 'El mensaje debe tener al menos 10 caracteres.'),
  // Campo Honeypot para detectar bots
  honeypot: z.string().optional(),
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    // 1. Validar el campo Honeypot
    if (body.honeypot) {
      return NextResponse.json({ message: 'Message received!' }, { status: 200 });
    }

    // 2. Validar los datos con Zod
    const parsed = contactSchema.safeParse(body);

    if (!parsed.success) {
      const { errors } = parsed.error;
      return NextResponse.json({ error: 'Datos inválidos.', details: errors }, { status: 400 });
    }

    const { name, email, message } = parsed.data;

    // 3. Renderizar el componente de React a un string de HTML estático
    // Forzamos el tipo a 'any' temporalmente para evitar conflictos de tipado con componentes de servidor
    const emailHtml = renderToStaticMarkup(EmailTemplate({ name, email, message }) as any);

    // 4. Enviar el correo con Resend usando la propiedad 'html'
    const { data, error } = await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>', // Dominio verificado en Resend
      to: ['ing.javiernuma@gmail.com'],
      subject: `Nuevo mensaje de ${name} desde tu portafolio`,
      html: emailHtml, // Usamos la propiedad 'html' con el string renderizado
      text: `Nombre: ${name}\nEmail: ${email}\nMensaje: ${message}`, // Versión de texto plano
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