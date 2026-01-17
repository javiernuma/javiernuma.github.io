'use client';

import { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export default function ScrollToTop() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.pageYOffset > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <>
            {isVisible && (
                <button
                    onClick={scrollToTop}
                    className="fixed bottom-8 right-8 z-50 w-12 h-12 bg-cyber-cyan text-black rounded-full shadow-lg shadow-cyber-cyan/50 hover:shadow-cyber-cyan/80 transition-all hover:scale-110 flex items-center justify-center group animate-fade-in-up"
                    aria-label="Scroll to top"
                >
                    <ArrowUp className="w-6 h-6 group-hover:animate-bounce" />
                </button>
            )}
        </>
    );
}