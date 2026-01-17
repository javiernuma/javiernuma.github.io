'use client';

import { Translation } from '@/lib/i18n';
import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope, FaLinkedin } from 'react-icons/fa';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useState } from 'react';

// Esquema de validación del cliente con Zod
const contactSchema = z.object({
  name: z.string().min(2, 'Nombre requerido.'),
  email: z.string().email('Email inválido.'),
  message: z.string().min(10, 'El mensaje es muy corto.'),
  honeypot: z.string().optional(),
});

type ContactFormInputs = z.infer<typeof contactSchema>;

type Status = 'idle' | 'sending' | 'success' | 'error';

export default function Contact({ t }: { t: Translation['contact'] }) {
    const [status, setStatus] = useState<Status>('idle');
    const [systemMessage, setSystemMessage] = useState<string>('');

    const { register, handleSubmit, formState: { errors }, reset } = useForm<ContactFormInputs>({
        resolver: zodResolver(contactSchema),
    });

    const onSubmit = async (data: ContactFormInputs) => {
        setStatus('sending');
        setSystemMessage('[SYSTEM] Sending message via secure protocol....');

        try {
            const response = await fetch('/api/send', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            setStatus('success');
            setSystemMessage('[SUCCESS] Message sent to Javier Numa. Status: 200 OK.');
            reset();
        } catch (error) {
            setStatus('error');
            setSystemMessage('[ERROR] Failed to establish connection. Please try again or contact via LinkedIn.');
        } finally {
            setTimeout(() => {
                setStatus('idle');
                setSystemMessage('');
            }, 5000); // Limpiar mensaje después de 5 segundos
        }
    };

    return (
        <section id="contact" className="py-20 px-6 bg-bg-darker relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-5 pointer-events-none" />

            <div className="max-w-7xl mx-auto relative z-10">
                <h2 className="text-4xl md:text-5xl font-heading font-bold text-center mb-16 uppercase tracking-widest">
                    {t.title} <span className="text-cyber-cyan">{t.titleHighlight}</span>
                </h2>

                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="max-w-5xl mx-auto bg-black/20 border border-cyber-cyan/30 rounded-2xl p-8 md:p-12 shadow-[0_0_40px_rgba(0,217,255,0.15)]"
                >
                    <div className="grid md:grid-cols-2 gap-12">
                        {/* Formulario Terminal */}
                        <div className="bg-[#0D1117] rounded-xl p-4 border border-white/10 font-mono text-sm shadow-lg h-full flex flex-col">
                            <div className="flex gap-2 mb-4 px-2">
                                <div className="w-3 h-3 rounded-full bg-red-500" />
                                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                                <div className="w-3 h-3 rounded-full bg-green-500" />
                            </div>

                            <form onSubmit={handleSubmit(onSubmit)} className="flex-grow flex flex-col space-y-3 px-2">
                                {/* Honeypot Field (oculto) */}
                                <input type="text" {...register('honeypot')} className="hidden" />

                                <div className="flex items-center gap-2">
                                    <label htmlFor="name" className="text-lime-400 shrink-0">$ name:</label>
                                    <input id="name" type="text" {...register('name')} className="bg-transparent w-full focus:outline-none text-white" />
                                </div>
                                {errors.name && <p className="text-red-500 text-xs pl-12">{errors.name.message}</p>}

                                <div className="flex items-center gap-2">
                                    <label htmlFor="email" className="text-lime-400 shrink-0">$ email:</label>
                                    <input id="email" type="email" {...register('email')} className="bg-transparent w-full focus:outline-none text-white" />
                                </div>
                                {errors.email && <p className="text-red-500 text-xs pl-12">{errors.email.message}</p>}

                                <div className="flex items-start gap-2">
                                    <label htmlFor="message" className="text-lime-400 shrink-0 pt-1">$ message:</label>
                                    <textarea id="message" {...register('message')} rows={3} className="bg-transparent w-full focus:outline-none text-white resize-none" />
                                </div>
                                {errors.message && <p className="text-red-500 text-xs pl-12">{errors.message.message}</p>}

                                <div className="pt-2">
                                    <button type="submit" disabled={status === 'sending'} className="text-cyber-cyan hover:text-white disabled:opacity-50">
                                        &gt; send_message
                                    </button>
                                </div>

                                {/* System Messages */}
                                {systemMessage && (
                                    <div className="pt-4 text-sm">
                                        <p className={
                                            status === 'success' ? 'text-lime-400' : 
                                            status === 'error' ? 'text-red-500' : 'text-text-gray'
                                        }>
                                            {systemMessage}
                                        </p>
                                    </div>
                                )}
                            </form>
                        </div>

                        {/* Contact Info */}
                        <div>
                            <h3 className="text-3xl font-heading font-bold mb-4">
                                {t.title} <span className="text-cyber-cyan">{t.titleHighlight}</span>
                            </h3>
                            <p className="text-text-gray mb-8 font-sans">{t.subtitle}</p>

                            <div className="space-y-6 font-mono">
                                {[
                                    { icon: FaPhone, label: t.phone, value: '+57 3113413943', href: 'tel:+573113413943' },
                                    { icon: FaEnvelope, label: t.email, value: 'ing.javiernuma@gmail.com', href: 'mailto:ing.javiernuma@gmail.com' },
                                    { icon: FaLinkedin, label: t.linkedin, value: t.linkedinText, href: 'https://www.linkedin.com/in/ing-javier-vidal-numa-mendoza/' },
                                ].map((item) => {
                                    const Icon = item.icon;
                                    return (
                                        <a key={item.label} href={item.href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
                                            <div className="w-12 h-12 bg-cyber-cyan/10 border border-cyber-cyan/20 rounded-full flex items-center justify-center text-2xl text-cyber-cyan group-hover:scale-110 transition-transform duration-300">
                                                <Icon />
                                            </div>
                                            <div>
                                                <h4 className="text-xs text-text-gray uppercase tracking-wider mb-1">
                                                    {item.label}
                                                </h4>
                                                <p className="font-semibold text-white group-hover:text-cyber-cyan transition-colors duration-300">{item.value}</p>
                                            </div>
                                        </a>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}