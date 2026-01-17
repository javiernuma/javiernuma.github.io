// ============================================
// components/ContactForm.tsx
// Formulario de contacto funcional
// ============================================
'use client';

import { useState } from 'react';
import { Send } from 'lucide-react';

export default function ContactForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });
    const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('sending');

        // Aquí integrarías con tu servicio de email (Formspree, EmailJS, etc.)
        try {
            // Simulación de envío
            await new Promise((resolve) => setTimeout(resolve, 2000));
            setStatus('success');
            setFormData({ name: '', email: '', subject: '', message: '' });

            setTimeout(() => setStatus('idle'), 3000);
        } catch (error) {
            setStatus('error');
            setTimeout(() => setStatus('idle'), 3000);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
                <div>
                    <label htmlFor="name" className="block text-sm font-semibold mb-2">
                        Nombre
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-bg-dark border border-cyber-cyan/30 rounded-lg focus:outline-none focus:border-cyber-cyan transition-colors"
                        placeholder="Tu nombre"
                    />
                </div>

                <div>
                    <label htmlFor="email" className="block text-sm font-semibold mb-2">
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-bg-dark border border-cyber-cyan/30 rounded-lg focus:outline-none focus:border-cyber-cyan transition-colors"
                        placeholder="tu@email.com"
                    />
                </div>
            </div>

            <div>
                <label htmlFor="subject" className="block text-sm font-semibold mb-2">
                    Asunto
                </label>
                <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-bg-dark border border-cyber-cyan/30 rounded-lg focus:outline-none focus:border-cyber-cyan transition-colors"
                    placeholder="¿Sobre qué quieres hablar?"
                />
            </div>

            <div>
                <label htmlFor="message" className="block text-sm font-semibold mb-2">
                    Mensaje
                </label>
                <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-bg-dark border border-cyber-cyan/30 rounded-lg focus:outline-none focus:border-cyber-cyan transition-colors resize-none"
                    placeholder="Cuéntame sobre tu proyecto..."
                />
            </div>

            <button
                type="submit"
                disabled={status === 'sending'}
                className="w-full md:w-auto px-8 py-3 bg-cyber-cyan text-black font-bold rounded-lg hover:bg-cyan-400 transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed group"
            >
                {status === 'sending' ? (
                    <>
                        <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin" />
                        Enviando...
                    </>
                ) : status === 'success' ? (
                    <>
                        ✓ Enviado!
                    </>
                ) : (
                    <>
                        Enviar Mensaje
                        <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </>
                )}
            </button>

            {status === 'error' && (
                <p className="text-red-500 text-sm">
                    Error al enviar el mensaje. Por favor intenta de nuevo.
                </p>
            )}
        </form>
    );
}
