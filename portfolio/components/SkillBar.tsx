'use client';

import { motion } from 'framer-motion';

interface SkillBarProps {
    skill: string;
    percentage: number;
    icon?: string;
}

export default function SkillBar({ skill, percentage, icon }: SkillBarProps) {
    return (
        <div className="space-y-2">
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                    {icon && <span className="text-xl">{icon}</span>}
                    <h4 className="text-sm font-semibold text-white/90">{skill}</h4>
                </div>
                <span className="text-cyber-cyan text-sm font-bold">{percentage}%</span>
            </div>
            <div className="w-full h-2 bg-white/5 rounded-full overflow-hidden border border-white/5">
                <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${percentage}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className="h-full bg-gradient-to-r from-cyber-cyan to-cyber-magenta rounded-full shadow-[0_0_10px_rgba(0,217,255,0.5)]"
                />
            </div>
        </div>
    );
}