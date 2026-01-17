'use client';

import { Translation } from '@/lib/i18n';
import { motion } from 'framer-motion';
import { FaCode, FaChartBar, FaProjectDiagram } from 'react-icons/fa';

const icons = [FaProjectDiagram, FaCode, FaChartBar];

export default function Experience({ t }: { t: Translation['experience'] }) {
    return (
        <section id="experience" className="py-20 px-6 bg-bg-dark relative overflow-hidden">
            {/* Fondo de partículas */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/subtle-carbon.png')] opacity-[0.03]" />
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                <h2 className="text-4xl md:text-5xl font-heading font-bold text-center mb-24 uppercase tracking-widest">
                    {t.title} <span className="text-cyber-cyan">{t.titleHighlight}</span>
                </h2>

                <div className="relative">
                    {/* Línea Central con Degradado */}
                    <div className="hidden md:block absolute left-1/2 top-0 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-cyber-cyan to-cyber-purple opacity-30" />

                    <div className="space-y-24">
                        {t.jobs.map((job, index) => {
                            const Icon = icons[index % icons.length];
                            const isRightSide = index % 2 !== 0;

                            return (
                                <div
                                    key={index}
                                    className="grid md:grid-cols-2 gap-8 items-center relative"
                                >
                                    {/* Nodo de Actividad (Icono Pulsante) */}
                                    <div className={`hidden md:flex justify-center items-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2`}>
                                        <motion.div
                                            whileInView={{ scale: [1, 1.2, 1] }}
                                            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                                            className="w-16 h-16 bg-bg-dark border-2 border-cyber-cyan rounded-full flex items-center justify-center text-2xl text-cyber-cyan shadow-[0_0_20px_rgba(0,217,255,0.4)] z-20"
                                        >
                                            <Icon />
                                        </motion.div>
                                    </div>

                                    {/* Tarjeta de Proyecto */}
                                    <motion.div
                                        initial={{ opacity: 0, x: isRightSide ? 50 : -50 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.6 }}
                                        className={`bg-bg-card border border-white/10 rounded-xl p-8 shadow-lg ${isRightSide ? 'md:col-start-2' : ''}`}
                                    >
                                        <p className="text-sm font-mono text-cyber-magenta mb-2">
                                            {job.period}
                                        </p>
                                        <h3 className="text-2xl font-heading font-bold text-cyber-cyan mb-1">
                                            {job.company}
                                        </h3>
                                        <h4 className="text-lg font-mono text-text-gray mb-4">{job.role}</h4>
                                        <p className="text-text-gray leading-relaxed mb-6 font-sans">
                                            {job.description}
                                        </p>

                                        <div className="flex flex-wrap items-center gap-2 border-t border-white/10 pt-4">
                                            <span className="font-mono text-xs text-cyber-cyan mr-2">Tech:</span>
                                            {job.tags.map((tag: string) => (
                                                <span
                                                    key={tag}
                                                    className="px-3 py-1 bg-cyber-cyan/10 border border-cyber-cyan/20 rounded-full text-cyber-cyan text-xs font-mono"
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </motion.div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}