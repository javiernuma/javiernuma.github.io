'use client';

import React from "react";
import { Translation } from '@/lib/i18n';
import SkillBar from './SkillBar';
import { motion } from 'framer-motion';
import ParticlesBackground from './ParticlesBackground';
import { FaJava, FaAws, FaSitemap } from 'react-icons/fa';
import { SiKubernetes, SiGooglecloud } from 'react-icons/si';

// Helper para resaltar palabras clave
const Highlight = ({ children, color = 'text-cyber-cyan' }: { children: React.ReactNode, color?: string }) => (
    <span className={`${color} font-bold`}>{children}</span>
);

// Función para resaltar palabras clave en el texto dinámico
const renderWithHighlights = (text: string) => {
    // Lista de palabras clave y sus colores
    const keywords = [
        { word: 'Senior Backend Engineer', color: 'text-cyber-cyan' },
        { word: '9 años de experiencia', color: 'text-cyber-cyan' },
        { word: 'Java', color: 'text-lime-400' },
        { word: 'Spring Boot', color: 'text-lime-400' },
        { word: 'Scala', color: 'text-pink-500' },
        { word: 'ZIO', color: 'text-pink-500' },
        { word: 'AWS', color: 'text-orange-400' },
        { word: 'Event-Driven', color: 'text-purple-400' },
        { word: 'Platform Engineering', color: 'text-blue-400' },
        { word: '99.9% uptime', color: 'text-green-400' },
        { word: '2M+ transacciones', color: 'text-green-400' },
        { word: '70% en tiempos de despliegue', color: 'text-green-400' },
        { word: 'Clean Architecture', color: 'text-yellow-400' },
        { word: 'SOLID', color: 'text-yellow-400' },
        { word: 'TDD', color: 'text-yellow-400' },
    ];

    let parts = [text];

    keywords.forEach(({ word, color }) => {
        const newParts: (string | React.ReactNode)[] = [];
        parts.forEach((part) => {
            if (typeof part === 'string') {
                const split = part.split(word);
                split.forEach((s, i) => {
                    if (i > 0) {
                        newParts.push(<Highlight key={`${word}-${i}`} color={color}>{word}</Highlight>);
                    }
                    newParts.push(s);
                });
            } else {
                newParts.push(part);
            }
        });
        parts = newParts;
    });

    return <>{parts}</>;
};

export default function Profile({ t }: { t: Translation['profile'] }) {
    return (
        <section id="profile" className="py-20 px-6 bg-bg-dark relative">
            {/* Fondo de partículas (igual que en Hero) */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <ParticlesBackground />
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Título de Sección */}
                <div className="flex items-center mb-16">
                    <div className="w-12 h-0.5 bg-cyber-cyan mr-4" />
                    <h2 className="text-3xl md:text-4xl font-heading font-bold text-white uppercase tracking-widest">
                        {t.title} <span className="text-cyber-cyan">{t.titleHighlight}</span>
                    </h2>
                </div>

                {/* Layout de 2 columnas */}
                <div className="grid lg:grid-cols-5 gap-12">
                    {/* Columna Izquierda (60%) */}
                    <div className="lg:col-span-3">
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="border border-cyber-cyan/30 rounded-xl p-8 bg-black/20 shadow-[0_0_30px_rgba(0,217,255,0.1)]"
                        >
                            <div className="space-y-6 text-text-gray font-mono text-base leading-relaxed">
                                <p>{renderWithHighlights(t.description1)}</p>
                                <p>{renderWithHighlights(t.description2)}</p>
                                <p>{renderWithHighlights(t.description3)}</p>
                            </div>
                        </motion.div>

                        {/* Tarjetas de Skills Principales */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
                            {/* Java / Scala */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0 }}
                                className="bg-[#111827] border border-white/10 rounded-lg p-4 text-center group transition-all duration-300 hover:border-cyber-cyan hover:shadow-[0_0_20px_rgba(0,217,255,0.2)] hover:-translate-y-1"
                            >
                                <div className="text-4xl mb-3 text-text-gray group-hover:text-cyber-cyan transition-all duration-300 flex justify-center">
                                    <FaJava />
                                </div>
                                <p className="font-mono text-sm text-text-gray group-hover:text-white transition-colors duration-300">Java / Scala</p>
                            </motion.div>

                            {/* Multi-Cloud (AWS + GCP) */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.1 }}
                                className="bg-[#111827] border border-white/10 rounded-lg p-4 text-center group transition-all duration-300 hover:border-cyber-cyan hover:shadow-[0_0_20px_rgba(0,217,255,0.2)] hover:-translate-y-1"
                            >
                                <div className="text-4xl mb-3 text-text-gray group-hover:text-cyber-cyan transition-all duration-300 flex justify-center gap-3">
                                    <FaAws />
                                    <SiGooglecloud />
                                </div>
                                <p className="font-mono text-sm text-text-gray group-hover:text-white transition-colors duration-300">Multi-Cloud</p>
                            </motion.div>

                            {/* Architecture */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                                className="bg-[#111827] border border-white/10 rounded-lg p-4 text-center group transition-all duration-300 hover:border-cyber-cyan hover:shadow-[0_0_20px_rgba(0,217,255,0.2)] hover:-translate-y-1"
                            >
                                <div className="text-4xl mb-3 text-text-gray group-hover:text-cyber-cyan transition-all duration-300 flex justify-center">
                                    <FaSitemap />
                                </div>
                                <p className="font-mono text-sm text-text-gray group-hover:text-white transition-colors duration-300">Architecture</p>
                            </motion.div>

                            {/* Platform Eng */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.3 }}
                                className="bg-[#111827] border border-white/10 rounded-lg p-4 text-center group transition-all duration-300 hover:border-cyber-cyan hover:shadow-[0_0_20px_rgba(0,217,255,0.2)] hover:-translate-y-1"
                            >
                                <div className="text-4xl mb-3 text-text-gray group-hover:text-cyber-cyan transition-all duration-300 flex justify-center">
                                    <SiKubernetes />
                                </div>
                                <p className="font-mono text-sm text-text-gray group-hover:text-white transition-colors duration-300">Platform Eng</p>
                            </motion.div>
                        </div>
                    </div>

                    {/* Columna Derecha (40%) */}
                    <div className="lg:col-span-2 space-y-8">
                        {/* Tarjeta de Idiomas */}
                        <motion.div 
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="bg-black/20 border border-cyber-cyan/30 rounded-xl p-6 shadow-[0_0_30px_rgba(0,217,255,0.1)]"
                        >
                            <h3 className="text-xl font-heading font-bold mb-6 flex items-center gap-3">
                                <span className="text-cyber-cyan">🌐</span> {t.languages}
                            </h3>
                            <div className="space-y-6 font-mono">
                                <SkillBar skill={t.spanish} percentage={100} />
                                <SkillBar skill={t.english} percentage={75} />
                            </div>
                        </motion.div>

                        {/* Tarjeta de Competencias Blandas */}
                        <motion.div 
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="bg-gradient-to-br from-black/20 to-[#110e27] border border-cyber-purple/30 rounded-xl p-6 shadow-[0_0_30px_rgba(185,66,255,0.1)] relative overflow-hidden"
                        >
                            {/* Fondo de red de partículas */}
                            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/connected-dots.png')] opacity-[0.03] pointer-events-none" />
                            <h3 className="text-xl font-heading font-bold mb-6 flex items-center gap-3 relative z-10">
                                <span className="text-cyber-purple">💡</span> {t.softSkills}
                            </h3>
                            <ul className="space-y-3 font-mono relative z-10">
                                {t.skills.map((skill: string, i: number) => (
                                    <li key={i} className="flex items-start gap-3 text-text-gray text-sm">
                                        <span className="text-lime-400 font-bold text-lg mt-0.5">✓</span>
                                        <span>{skill}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}