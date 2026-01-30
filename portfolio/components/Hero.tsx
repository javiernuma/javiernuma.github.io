'use client';

import { TypeAnimation } from "react-type-animation";
import { Translation } from '@/lib/i18n';
import { motion } from 'framer-motion';

export default function Hero({ t }: { t: Translation['hero'] }) {
    return (
        <section id="home" className="min-h-screen flex items-center pt-24 px-6 overflow-hidden relative">
            {/* Background Elements (Parallax/Floating hints) */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <motion.div
                    animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-1/4 left-10 w-12 h-12 border border-cyber-cyan/20 rounded-full"
                />
                <motion.div
                    animate={{ y: [0, 30, 0], rotate: [0, -10, 0] }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute bottom-1/3 right-20 w-16 h-16 border border-cyber-magenta/20 rotate-45"
                />
            </div>

            <div className="max-w-7xl mx-auto w-full relative z-10">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Content */}
                    <div className="space-y-6">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="inline-block"
                        >
                            <code className="text-cyber-cyan font-mono text-sm px-4 py-2 border border-cyber-cyan/30 rounded-full bg-cyber-cyan/5">
                                &gt; System.init(Profile.Load);
                            </code>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="text-5xl lg:text-7xl font-heading font-bold mb-4 tracking-widest uppercase leading-tight"
                        >
                            <span className="text-white mr-4">JAVIER</span>
                            <span className="glitch-text inline-block" data-text={t.subtitle}>{t.subtitle}</span>
                        </motion.h1>

                        <motion.h2
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            className="text-2xl lg:text-3xl font-mono text-cyber-cyan mb-6 h-16 md:h-auto flex items-center"
                        >
                            <span className="mr-2 text-cyber-magenta">&gt;</span>
                            <TypeAnimation
                                sequence={[
                                    t.role2,
                                    1000,
                                    t.role,
                                    1000,
                                ]}
                                wrapper="span"
                                speed={50}
                                repeat={Infinity}
                                cursor={true}
                                className="border-r-2 border-cyber-cyan"
                            />
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.6 }}
                            className="text-lg text-text-gray leading-relaxed max-w-xl font-sans"
                        >
                            {t.description}
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.8 }}
                            className="flex flex-wrap gap-4 pt-4"
                        >
                            <a
                                href="#experience"
                                className="relative overflow-hidden flex items-center gap-2 px-8 py-3 bg-cyber-cyan text-black rounded-md font-bold uppercase tracking-wider hover:scale-105 transition-transform duration-300 group shadow-[0_0_20px_rgba(0,217,255,0.4)]"
                            >
                                <span className="relative z-10">{t.cta1}</span>
                                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                            </a>
                            <a
                                href="/docs/hojadevidaDeveloper.pdf" // Ruta al archivo PDF
                                download="Javier_Vidal_Numa_CV.pdf" // Nombre sugerido para la descarga
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 px-8 py-3 border border-cyber-cyan/50 text-cyber-cyan rounded-md font-bold uppercase tracking-wider hover:bg-cyber-cyan/10 transition-all duration-300 hover:shadow-[0_0_15px_rgba(0,217,255,0.2)]"
                            >
                                <span>↓</span>
                                {t.cta2}
                            </a>
                        </motion.div>
                    </div>

                    {/* Profile Image / Avatar Frame */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        className="flex justify-center relative"
                    >
                        <div className="relative w-[400px] h-[400px] flex items-center justify-center">
                            
                            {/* 1. Círculo Exterior: Borde discontinuo rotando lentamente */}
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                                className="absolute inset-0 rounded-full border-2 border-dashed border-cyber-cyan/40 shadow-[0_0_20px_rgba(34,211,238,0.2)]"
                            />

                            {/* 2. Círculo Interior: Borde sólido fino */}
                            <div className="absolute inset-4 rounded-full border border-cyber-cyan/60" />

                            {/* 3. La Imagen (Foto Real) */}
                            <div className="absolute inset-6 rounded-full overflow-hidden bg-bg-card border border-white/10 shadow-[0_0_30px_rgba(34,211,238,0.15)] z-10 aspect-square">
                                <img 
                                    src="/images/javier-numa2.jpeg" 
                                    alt="Javier Vidal Numa" 
                                    className="w-full h-full object-cover"
                                />
                                
                                {/* Efecto de escaneo sobre la imagen */}
                                <motion.div 
                                    animate={{ top: ['0%', '100%', '0%'] }}
                                    transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                                    className="absolute left-0 right-0 h-1 bg-cyber-cyan/30 shadow-[0_0_10px_#00d9ff] z-20 pointer-events-none"
                                />
                            </div>

                            {/* 4. Badge de Experiencia */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 1, duration: 0.5 }}
                                className="absolute bottom-10 -right-4 bg-[#0A0C16] border border-white/10 rounded-xl px-4 py-3 shadow-lg flex items-center gap-3 z-30"
                            >
                                <div className="w-8 h-8 bg-yellow-500/20 rounded-full flex items-center justify-center border border-yellow-500 text-sm">
                                    ✨
                                </div>
                                <div>
                                    <p className="text-[0.65rem] text-text-gray uppercase tracking-wider font-bold">
                                        Experience
                                    </p>
                                    <p className="text-lg font-heading font-bold text-white">
                                        9+ Years
                                    </p>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}