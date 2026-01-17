// ============================================
// components/Education.tsx
// ============================================
'use client';

import { Translation } from '@/lib/i18n';

export default function Education({ t }: { t: Translation['education'] }) {
    return (
        <section id="education" className="py-20 px-6 bg-bg-darker">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-heading font-bold text-center mb-16 uppercase tracking-widest">
                    {t.title} <span className="text-cyber-cyan">{t.titleHighlight}</span>
                </h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {t.items.map((item, index) => (
                        <div
                            key={index}
                            className="bg-bg-card border border-cyber-cyan/30 rounded-2xl p-8 card-hover"
                        >
                            <div className="text-5xl mb-6">{item.icon}</div>
                            <h3 className="text-xl font-heading font-bold mb-2">{item.title}</h3>
                            <p className="text-cyber-cyan text-sm mb-4">{item.institution}</p>

                            {item.details && (
                                <ul className="space-y-2">
                                    {item.details.map((detail: string, i: number) => (
                                        <li key={i} className="text-text-gray text-sm">
                                            • {detail}
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}