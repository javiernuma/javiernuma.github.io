'use client';

import { useState } from 'react';
import { Language, Translation } from '@/lib/i18n';
import { motion } from 'framer-motion';

interface NavigationProps {
    t: Translation;
    lang: Language;
    setLang: (lang: Language) => void;
}

export default function Navigation({ t, lang, setLang }: NavigationProps) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="fixed top-0 w-full bg-bg-dark/95 backdrop-blur-lg z-50 border-b border-cyber-cyan/10">
            <div className="max-w-7xl mx-auto px-6 py-4">
                <div className="flex justify-between items-center">
                    {/* Logo Animado */}
                    <motion.div
                        className="relative cursor-pointer"
                        whileHover={{ scale: 1.2 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                        <div className="text-2xl font-bold tracking-widest text-gradient font-heading">
                            JVM
                        </div>
                        <span className="absolute -top-2 -right-6 text-[0.6rem] font-bold text-cyber-magenta tracking-wider font-mono">
                            _DEV
                        </span>
                    </motion.div>

                    {/* Desktop Menu */}
                    <ul className="hidden md:flex items-center gap-8 font-mono text-sm font-medium">
                        <li><a href="#home" className="hover:text-cyber-cyan transition-colors duration-300">{t.nav.home}</a></li>
                        <li><a href="#profile" className="hover:text-cyber-cyan transition-colors duration-300">{t.nav.profile}</a></li>
                        <li><a href="#experience" className="hover:text-cyber-cyan transition-colors duration-300">{t.nav.experience}</a></li>
                        <li><a href="#stack" className="hover:text-cyber-cyan transition-colors duration-300">{t.nav.technologies}</a></li>
                        <li><a href="#education" className="hover:text-cyber-cyan transition-colors duration-300">{t.nav.education}</a></li>
                        <li>
                            <a
                                href="#contact"
                                className="bg-cyber-cyan text-black px-6 py-2 rounded-md font-bold uppercase tracking-wider hover:bg-cyan-400 transition-all duration-300 shadow-[0_0_10px_rgba(0,217,255,0.3)] hover:shadow-[0_0_20px_rgba(0,217,255,0.6)]"
                            >
                                {t.nav.contact}
                            </a>
                        </li>
                        <li>
                            <button
                                onClick={() => setLang(lang === 'es' ? 'en' : 'es')}
                                className="border border-cyber-cyan text-cyber-cyan px-4 py-2 rounded-md font-bold hover:bg-cyber-cyan hover:text-black transition-all duration-300"
                            >
                                {lang === 'es' ? 'EN' : 'ES'}
                            </button>
                        </li>
                    </ul>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden text-cyber-cyan"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>

                {/* Mobile Menu */}
                {isOpen && (
                    <div className="md:hidden mt-4 pb-4 font-mono">
                        <ul className="flex flex-col gap-4">
                            <li><a href="#home" className="block hover:text-cyber-cyan">{t.nav.home}</a></li>
                            <li><a href="#profile" className="block hover:text-cyber-cyan">{t.nav.profile}</a></li>
                            <li><a href="#experience" className="block hover:text-cyber-cyan">{t.nav.experience}</a></li>
                            <li><a href="#stack" className="block hover:text-cyber-cyan">{t.nav.technologies}</a></li>
                            <li><a href="#education" className="block hover:text-cyber-cyan">{t.nav.education}</a></li>
                            <li><a href="#contact" className="block hover:text-cyber-cyan">{t.nav.contact}</a></li>
                        </ul>
                    </div>
                )}
            </div>
        </nav>
    );
}