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
  <div style={{ fontFamily: 'sans-serif', color: '#333' }}>
    <h1 style={{ color: '#00d9ff' }}>Nuevo Mensaje del Portafolio</h1>
    <p><strong>De:</strong> {name}</p>
    <p><strong>Email:</strong> {email}</p>
    <hr style={{ borderColor: '#eee' }} />
    <h3>Mensaje:</h3>
    <p style={{ whiteSpace: 'pre-wrap' }}>{message}</p>
  </div>
);

export default EmailTemplate;