'use client';

import { Translation } from '@/lib/i18n';
import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope, FaLinkedin } from 'react-icons/fa';
import { useForm } from 'react-hook-form';
import { useState } from 'react';

type FormData = {
    name: string;
    email: string;
    message: string;
    honeypot?: string;
};

export default function Contact({ t }: { t: Translation['contact'] }) {
    const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
    const { register, handleSubmit, reset } = useForm<FormData>();

    const onSubmit = async (data: FormData) => {
        setStatus('sending');
        try {
            const res = await fetch('/api/send', {
                method: 'POST',
                body: JSON.stringify(data),
                headers: { 'Content-Type': 'application/json' },
            });
            
            if (!res.ok) throw new Error('Failed to send');
            
            setStatus('success');
            reset();
            setTimeout(() => setStatus('idle'), 5000);
        } catch (e) {
            setStatus('error');
            setTimeout(() => setStatus('idle'), 5000);
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
                                        <a 
                                            key={item.label} 
                                            href={item.href} 
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-4 group"
                                        >
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

                        {/* Terminal Widget (Formulario Funcional) */}
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
                                    <input 
                                        id="name" 
                                        type="text" 
                                        {...register('name', { required: true })} 
                                        className="bg-transparent w-full focus:outline-none text-white border-b border-transparent focus:border-cyber-cyan/50 transition-colors"
                                        autoComplete="off"
                                    />
                                </div>

                                <div className="flex items-center gap-2">
                                    <label htmlFor="email" className="text-lime-400 shrink-0">$ email:</label>
                                    <input 
                                        id="email" 
                                        type="email" 
                                        {...register('email', { required: true })} 
                                        className="bg-transparent w-full focus:outline-none text-white border-b border-transparent focus:border-cyber-cyan/50 transition-colors"
                                        autoComplete="off"
                                    />
                                </div>

                                <div className="flex items-start gap-2">
                                    <label htmlFor="message" className="text-lime-400 shrink-0 pt-1">$ message:</label>
                                    <textarea 
                                        id="message" 
                                        {...register('message', { required: true })} 
                                        rows={3} 
                                        className="bg-transparent w-full focus:outline-none text-white resize-none border-b border-transparent focus:border-cyber-cyan/50 transition-colors"
                                    />
                                </div>

                                <div className="pt-4">
                                    <button 
                                        type="submit" 
                                        disabled={status === 'sending'} 
                                        className="text-cyber-cyan hover:text-white disabled:opacity-50 transition-colors flex items-center gap-2"
                                    >
                                        &gt; {status === 'sending' ? 'sending_packet...' : 'send_message'}
                                        {status === 'sending' && <span className="animate-pulse">_</span>}
                                    </button>
                                </div>

                                {/* System Messages */}
                                {status === 'success' && (
                                    <div className="pt-2 text-green-400">
                                        [SUCCESS] Message sent to Javier Numa. Status: 200 OK.
                                    </div>
                                )}
                                {status === 'error' && (
                                    <div className="pt-2 text-red-500">
                                        [ERROR] Connection failed. Please try again.
                                    </div>
                                )}
                            </form>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}