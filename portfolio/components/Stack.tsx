// ============================================
// components/Stack.tsx
// ============================================
'use client';

import { useState } from 'react';
import { Translation } from '@/lib/i18n';
import { motion } from 'framer-motion';
import { 
    FaJava, FaPython, FaDocker, FaAws, FaAngular, FaHtml5, FaReact 
} from 'react-icons/fa';
import { 
    SiSpringboot, SiElixir, SiGo, SiKubernetes, SiGooglecloud, SiTypescript, SiReactivex,
    SiScala, SiPostgresql, SiMongodb, SiRedis, SiTerraform, SiGrafana, SiPrometheus,
    SiGraphql, SiApachekafka, SiHibernate, SiHelm, SiIstio, SiElasticsearch
} from 'react-icons/si';
import { GrCycle } from 'react-icons/gr';
import { TbSql, TbApi } from 'react-icons/tb';

type Category = 'all' | 'backend' | 'cloud' | 'frontend';

export default function Stack({ t }: { t: Translation['stack'] }) {
    const [filter, setFilter] = useState<Category>('all');

    const technologies = [
        // Backend
        { name: 'Java', icon: FaJava, category: 'backend' },
        { name: 'Scala', icon: SiScala, category: 'backend' },
        { name: 'Spring Boot', icon: SiSpringboot, category: 'backend' },
        { name: 'Elixir', icon: SiElixir, category: 'backend' },
        { name: 'Go', icon: SiGo, category: 'backend' },
        { name: 'Python', icon: FaPython, category: 'backend' },
        { name: 'Hibernate', icon: SiHibernate, category: 'backend' },
        { name: 'PostgreSQL', icon: SiPostgresql, category: 'backend' },
        { name: 'Oracle/SQL', icon: TbSql, category: 'backend' },
        { name: 'MongoDB', icon: SiMongodb, category: 'backend' },
        { name: 'Redis', icon: SiRedis, category: 'backend' },
        { name: 'Kafka', icon: SiApachekafka, category: 'backend' },
        { name: 'GraphQL', icon: SiGraphql, category: 'backend' },
        { name: 'gRPC/REST', icon: TbApi, category: 'backend' },

        // Cloud & DevOps
        { name: 'AWS', icon: FaAws, category: 'cloud' },
        { name: 'Google Cloud', icon: SiGooglecloud, category: 'cloud' },
        { name: 'Kubernetes', icon: SiKubernetes, category: 'cloud' },
        { name: 'Docker', icon: FaDocker, category: 'cloud' },
        { name: 'Terraform', icon: SiTerraform, category: 'cloud' },
        { name: 'Helm', icon: SiHelm, category: 'cloud' },
        { name: 'Istio', icon: SiIstio, category: 'cloud' },
        { name: 'CI/CD', icon: GrCycle, category: 'cloud' },
        { name: 'Prometheus', icon: SiPrometheus, category: 'cloud' },
        { name: 'Grafana', icon: SiGrafana, category: 'cloud' },
        { name: 'ELK Stack', icon: SiElasticsearch, category: 'cloud' },

        // Frontend
        { name: 'Angular', icon: FaAngular, category: 'frontend' },
        { name: 'React/Next.js', icon: FaReact, category: 'frontend' },
        { name: 'TypeScript', icon: SiTypescript, category: 'frontend' },
        { name: 'RxJS', icon: SiReactivex, category: 'frontend' },
        { name: 'HTML5', icon: FaHtml5, category: 'frontend' },
    ];

    const filtered = filter === 'all'
        ? technologies
        : technologies.filter(tech => tech.category === filter);

    return (
        <section id="stack" className="py-20 px-6 bg-bg-darker relative overflow-hidden">
            {/* Background Grid Decoration */}
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-5 pointer-events-none" />

            <div className="max-w-7xl mx-auto relative z-10">
                <h2 className="text-4xl md:text-5xl font-heading font-bold text-center mb-12 uppercase tracking-widest">
                    {t.title} <span className="text-cyber-cyan">{t.titleHighlight}</span>
                </h2>

                {/* Filters */}
                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {(['all', 'backend', 'cloud', 'frontend'] as Category[]).map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setFilter(cat)}
                            className={`px-6 py-2 rounded-full font-mono font-semibold text-sm uppercase tracking-wider transition-all duration-300 ${
                                filter === cat
                                    ? 'bg-cyber-cyan text-black shadow-[0_0_15px_rgba(34,211,238,0.4)]'
                                    : 'border border-white/10 text-text-gray hover:border-cyber-cyan hover:text-cyber-cyan hover:bg-white/5'
                            }`}
                        >
                            {t.filters[cat]}
                        </button>
                    ))}
                </div>

                {/* Stack Grid */}
                <motion.div 
                    layout
                    className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6"
                >
                    {filtered.map((tech) => {
                        const Icon = tech.icon;
                        return (
                            <motion.div
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.3 }}
                                key={tech.name}
                                className="bg-[#111827] border border-white/5 rounded-xl p-6 text-center cursor-pointer card-hover group relative overflow-hidden"
                            >
                                {/* Glow Effect on Hover */}
                                <div className="absolute inset-0 bg-gradient-to-br from-cyber-cyan/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                
                                <div className="text-4xl mb-4 relative z-10 text-text-gray group-hover:text-cyber-cyan transform group-hover:scale-110 transition-all duration-300 flex justify-center">
                                    <Icon />
                                </div>
                                <h3 className="font-mono font-medium text-sm text-text-light group-hover:text-cyber-cyan transition-colors duration-300 relative z-10">
                                    {tech.name}
                                </h3>
                            </motion.div>
                        )
                    })}
                </motion.div>
            </div>
        </section>
    );
}