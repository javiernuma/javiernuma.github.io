// ============================================
// components/Stats.tsx
// Estadísticas animadas
// ============================================
'use client';

import { useEffect, useRef, useState } from 'react';

interface Stat {
    value: number;
    label: string;
    suffix?: string;
    icon?: string;
}

export default function Stats({ stats }: { stats: Stat[] }) {
    return (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
                <StatItem key={index} {...stat} />
            ))}
        </div>
    );
}

function StatItem({ value, label, suffix = '', icon }: Stat) {
    const [count, setCount] = useState(0);
    const statRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    let start = 0;
                    const end = value;
                    const duration = 2000;
                    const increment = end / (duration / 16);

                    const timer = setInterval(() => {
                        start += increment;
                        if (start >= end) {
                            setCount(end);
                            clearInterval(timer);
                        } else {
                            setCount(Math.floor(start));
                        }
                    }, 16);

                    return () => clearInterval(timer);
                }
            },
            { threshold: 0.5 }
        );

        if (statRef.current) {
            observer.observe(statRef.current);
        }

        return () => {
            if (statRef.current) {
                observer.unobserve(statRef.current);
            }
        };
    }, [value]);

    return (
        <div
            ref={statRef}
            className="bg-bg-card border border-cyber-cyan/30 rounded-2xl p-6 text-center border-glow"
        >
            {icon && <div className="text-4xl mb-2">{icon}</div>}
            <div className="text-4xl font-black text-gradient mb-2">
                {count}{suffix}
            </div>
            <p className="text-text-gray text-sm uppercase tracking-wider">{label}</p>
        </div>
    );
}
