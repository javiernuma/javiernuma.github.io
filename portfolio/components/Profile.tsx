'use client';

import React from "react";
import { Translation } from '@/lib/i18n';
import SkillBar from './SkillBar';
import { motion } from 'framer-motion';
import ParticlesBackground from './ParticlesBackground';
import { FaJava, FaAws } from 'react-icons/fa';
import { SiSpringboot } from 'react-icons/si';
import { RiTeamFill } from 'react-icons/ri';

// Helper para resaltar palabras clave
const Highlight = ({ children, color = 'text-cyber-cyan' }: { children: React.ReactNode, color?: string }) => (
    <span className={`${color} font-bold`}>{children}</span>
);

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
                                <p>
                                    Desarrollador Senior de Software con más de <Highlight>7 años de experiencia</Highlight> liderando y construyendo soluciones robustas. Especializado en <Highlight color="text-lime-400">Java</Highlight> y el ecosistema <Highlight color="text-lime-400">Spring Framework</Highlight>, con sólidos conocimientos en multithreading, diseño orientado a objetos y TDD.
                                </p>
                                <p>
                                    He trabajado en la integración de servicios cloud con <Highlight color="text-orange-400">AWS</Highlight> (EC2, S3, RDS, DynamoDB, IAM), optimización de bases de datos (SQL, Oracle, MySQL) y actualmente exploro <Highlight color="text-pink-500">Elixir & Phoenix</Highlight> para sistemas de alta concurrencia.
                                </p>
                                <p>
                                    Me defino como una persona honesta y comprometida, con pasión por la innovación, la calidad del software y los entornos colaborativos de alto rendimiento.
                                </p>
                            </div>
                        </motion.div>

                        {/* Tarjetas de Skills Principales */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
                            {[
                                { icon: FaJava, name: 'Java' },
                                { icon: FaAws, name: 'AWS' },
                                { icon: SiSpringboot, name: 'Spring' },
                                { icon: RiTeamFill, name: 'Leadership' },
                            ].map((tech, index) => {
                                const Icon = tech.icon;
                                return (
                                    <motion.div
                                        key={tech.name}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.5, delay: index * 0.1 }}
                                        className="bg-[#111827] border border-white/10 rounded-lg p-4 text-center group transition-all duration-300 hover:border-cyber-cyan hover:shadow-[0_0_20px_rgba(0,217,255,0.2)] hover:-translate-y-1"
                                    >
                                        <div className="text-4xl mb-3 text-text-gray group-hover:text-cyber-cyan transition-all duration-300">
                                            <Icon />
                                        </div>
                                        <p className="font-mono text-sm text-text-gray group-hover:text-white transition-colors duration-300">{tech.name}</p>
                                    </motion.div>
                                )
                            })}
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