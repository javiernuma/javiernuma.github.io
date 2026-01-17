'use client';

import { useState } from 'react';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import Profile from '@/components/Profile';
import Stack from '@/components/Stack';
import Experience from '@/components/Experience';
import Education from '@/components/Education';
import Contact from '@/components/Contact';
import ScrollToTop from '@/components/ScrollToTop';
import AnimatedSection from '@/components/AnimatedSection';
import ParticlesBackground from '@/components/ParticlesBackground';
import LoadingScreen from '@/components/LoadingScreen';
import Stats from '@/components/Stats';
import ProjectCard from '@/components/ProjectCard';
import SocialLinks from '@/components/SocialLinks';
import { Language, translations } from '@/lib/i18n';

export default function Home() {
  const [lang, setLang] = useState<Language>('es');
  const t = translations[lang];

  return (
    <main className="min-h-screen relative">
      {/* Loading Screen */}
      <LoadingScreen />

      {/* Fondo con partículas */}
      <ParticlesBackground />

      {/* Navegación */}
      <Navigation t={t} lang={lang} setLang={setLang} />

      {/* Hero Section */}
      <AnimatedSection>
        <Hero t={t.hero} />
      </AnimatedSection>

      {/* Estadísticas */}
      <AnimatedSection className="py-20 px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <Stats stats={t.stats} />
        </div>
      </AnimatedSection>

      {/* Profile Section */}
      <AnimatedSection animation="slide-left">
        <Profile t={t.profile} />
      </AnimatedSection>

      {/* Stack Section */}
      <AnimatedSection animation="fade-in">
        <Stack t={t.stack} />
      </AnimatedSection>

      {/* Experience Section */}
      <AnimatedSection animation="slide-right">
        <Experience t={t.experience} />
      </AnimatedSection>

      {/* Projects Section (Opcional) */}
      <AnimatedSection className="py-20 px-6 bg-bg-darker relative z-10">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black text-center mb-16 uppercase tracking-widest">
            {t.projects.title} <span className="text-cyber-cyan">{t.projects.titleHighlight}</span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {t.projects.items.map((project, index) => (
              <AnimatedSection key={index} animation="fade-up">
                <ProjectCard {...project} />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Education Section */}
      <AnimatedSection animation="fade-in">
        <Education t={t.education} />
      </AnimatedSection>

      {/* Contact Section */}
      <AnimatedSection animation="slide-left">
        <Contact t={t.contact} />
      </AnimatedSection>

      {/* Footer */}
      <footer className="bg-bg-darker py-12 border-t border-cyber-cyan/10 relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Logo y descripción */}
            <div>
              <div className="text-3xl font-bold text-cyber-cyan mb-4 tracking-widest">JVM</div>
              <p className="text-text-gray text-sm leading-relaxed">
                {lang === 'es'
                  ? 'Desarrollador Senior especializado en arquitecturas escalables y soluciones cloud.'
                  : 'Senior Developer specialized in scalable architectures and cloud solutions.'}
              </p>
            </div>

            {/* Links rápidos */}
            <div>
              <h4 className="font-bold mb-4 text-lg">{lang === 'es' ? 'Enlaces Rápidos' : 'Quick Links'}</h4>
              <ul className="space-y-2">
                {[
                  { label: t.nav.home, href: '#home' },
                  { label: t.nav.profile, href: '#profile' },
                  { label: t.nav.experience, href: '#experience' },
                  { label: t.nav.education, href: '#education' },
                  { label: t.nav.contact, href: '#contact' },
                ].map((link) => (
                  <li key={link.href}>
                    <a href={link.href} className="text-text-gray hover:text-cyber-cyan transition text-sm">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Redes sociales */}
            <div>
              <h4 className="font-bold mb-4 text-lg">{lang === 'es' ? 'Sígueme' : 'Follow Me'}</h4>
              <SocialLinks
                github="https://github.com/javiernuma"
                linkedin="https://www.linkedin.com/in/ing-javier-vidal-numa-mendoza/"
                email="ing.javiernuma@gmail.com"
              />
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-cyber-cyan/10 pt-8 text-center">
            <p className="text-text-gray text-sm">{t.footer.rights}</p>
            <p className="text-text-gray text-xs mt-2">Made with ❤️ using Next.js, TypeScript & Tailwind CSS</p>
          </div>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      <ScrollToTop />
    </main>
  );
}