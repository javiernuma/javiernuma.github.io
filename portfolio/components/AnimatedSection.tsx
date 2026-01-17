'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface AnimatedSectionProps {
    children: ReactNode;
    className?: string;
    animation?: 'fade-up' | 'fade-in' | 'slide-left' | 'slide-right' | 'zoom-in';
    delay?: number;
}

export default function AnimatedSection({
                                            children,
                                            className = '',
                                            animation = 'fade-up',
                                            delay = 0
                                        }: AnimatedSectionProps) {
    const variants = {
        'fade-up': {
            hidden: { opacity: 0, y: 40 },
            visible: { opacity: 1, y: 0 }
        },
        'fade-in': {
            hidden: { opacity: 0 },
            visible: { opacity: 1 }
        },
        'slide-left': {
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 }
        },
        'slide-right': {
            hidden: { opacity: 0, x: 50 },
            visible: { opacity: 1, x: 0 }
        },
        'zoom-in': {
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1 }
        }
    };

    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay, ease: "easeOut" }}
            variants={variants[animation]}
            className={className}
        >
            {children}
        </motion.div>
    );
}