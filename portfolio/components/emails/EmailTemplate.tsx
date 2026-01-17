'use client'; // <-- Añadido para marcarlo como Client Component

import React from 'react';

interface EmailTemplateProps {
  name: string;
  email: string;
  message: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  name,
  email,
  message,
}) => (
  <div>
    <h1>Nuevo Mensaje desde tu Portafolio</h1>
    <p>Has recibido un nuevo mensaje de:</p>
    <ul>
      <li><strong>Nombre:</strong> {name}</li>
      <li><strong>Email:</strong> {email}</li>
    </ul>
    <h2>Mensaje:</h2>
    <p>{message}</p>
  </div>
);

export default EmailTemplate;