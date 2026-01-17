// ============================================
// components/SocialLinks.tsx
// Enlaces a redes sociales
// ============================================
'use client';

import { Github, Linkedin, Mail, Twitter } from 'lucide-react';

interface SocialLinksProps {
    github?: string;
    linkedin?: string;
    twitter?: string;
    email?: string;
}

export default function SocialLinks({ github, linkedin, twitter, email }: SocialLinksProps) {
    const socials = [
        { icon: Github, url: github, label: 'GitHub' },
        { icon: Linkedin, url: linkedin, label: 'LinkedIn' },
        { icon: Twitter, url: twitter, label: 'Twitter' },
        { icon: Mail, url: email ? `mailto:${email}` : undefined, label: 'Email' },
    ].filter(s => s.url);

    return (
        <div className="flex items-center gap-4">
            {socials.map((social) => {
                const Icon = social.icon;
                return (
                    <a
                        key={social.label}
                        href={social.url}
                        target={social.label !== 'Email' ? '_blank' : undefined}
                        rel="noopener noreferrer"
                        className="w-10 h-10 bg-cyber-cyan/10 border border-cyber-cyan/30 rounded-full flex items-center justify-center text-cyber-cyan hover:bg-cyber-cyan hover:text-black transition-all hover:scale-110"
                        aria-label={social.label}
                    >
                        <Icon className="w-5 h-5" />
                    </a>
                );
            })}
        </div>
    );
}