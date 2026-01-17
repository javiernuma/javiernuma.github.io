'use client';

import { useState, useEffect } from 'react';
import { Loader } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function LoadingScreen() {
    const [isLoading, setIsLoading] = useState(true);
    const [progress, setProgress] = useState(0);
    const [isDisintegrating, setIsDisintegrating] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(interval);
                    setIsDisintegrating(true);
                    setTimeout(() => setIsLoading(false), 700);
                    return 100;
                }
                return prev + 10;
            });
        }, 100);

        return () => clearInterval(interval);
    }, []);

    if (!isLoading) return null;

    return (
        <div className="fixed inset-0 z-[9999] bg-bg-dark flex items-center justify-center transition-opacity duration-500">
            <div className="text-center space-y-6 w-full max-w-md px-6"> {/* Contenedor con ancho máximo */}
                <AnimatePresence>
                    {!isDisintegrating && (
                        <motion.div
                            key="loader-icon"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1, rotate: 360 }}
                            exit={{ opacity: 0, scale: 0.5, filter: 'blur(5px)', transition: { duration: 0.6, ease: "easeOut" } }}
                            transition={{ 
                                opacity: { duration: 0.3 }, 
                                scale: { duration: 0.3 }, 
                                rotate: { duration: 2, repeat: Infinity, ease: "linear" }
                            }}
                            className="text-6xl text-cyber-cyan mb-4 w-fit mx-auto"
                        >
                            <Loader />
                        </motion.div>
                    )}
                </AnimatePresence>
                
                <h2 className="text-3xl font-heading font-bold text-gradient tracking-wider">
                    CARGANDO SISTEMA...
                </h2>

                {/* Barra de progreso con ancho completo del contenedor padre */}
                <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden border border-cyber-cyan/20">
                    <div
                        className="h-full bg-gradient-to-r from-cyber-cyan to-cyber-magenta rounded-full transition-all duration-300 shadow-[0_0_10px_rgba(0,217,255,0.5)]"
                        style={{ width: `${progress}%` }}
                    />
                </div>

                <p className="font-mono text-cyber-cyan">{progress}%</p>
            </div>
        </div>
    );
}