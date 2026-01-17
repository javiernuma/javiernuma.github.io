import React, { useState, useEffect } from 'react';

// Define el tipo de dato para una partícula (ajusta según tus valores reales)
type Particle = {
    id: number;
    left: string;
    top: string;
    animation: string;
    animationDelay: string;
};

// Número de partículas que quieres renderizar (ej. 20)
const PARTICLE_COUNT = 20;

// Función para generar un valor aleatorio entre min y max para la duración/retraso
const getRandomValue = (min: number, max: number) =>
    (Math.random() * (max - min) + min);

const ParticlesBackground = () => {
    // 1. Inicializa el estado de las partículas como un array vacío o null
    const [particles, setParticles] = useState<Particle[]>([]);

    // 2. useEffect se ejecuta SOLO en el cliente (después de la hidratación inicial)
    useEffect(() => {
        const generatedParticles: Particle[] = Array.from({ length: PARTICLE_COUNT }, (_, i) => {
            // Generar valores aleatorios *SOLO* en el cliente
            const left = `${getRandomValue(0, 100)}%`;
            const top = `${getRandomValue(0, 100)}%`;
            const duration = `${getRandomValue(8, 15)}s`;
            const delay = `${getRandomValue(0, 5)}s`;

            return {
                id: i,
                left,
                top,
                animation: `float ${duration} linear infinite`,
                animationDelay: delay,
            };
        });

        setParticles(generatedParticles);
    }, []); // El array vacío asegura que solo se ejecute una vez al montar

    // 3. Renderiza solo si las partículas se han generado en el cliente
    // Esto asegura que el SSR (Server) envíe un div vacío o un fallback,
    // y el cliente (Browser) renderice las posiciones aleatorias.
    if (particles.length === 0) {
        // Devuelve un elemento de marcador de posición idéntico al que renderiza el servidor.
        // En tu caso, el contenedor fijo.
        return (
            <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
                {/* No hay partículas para el SSR */}
            </div>
        );
    }

    return (
        <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
            {particles.map((particle) => (
                <div
                    key={particle.id} // <-- Usamos el 'id' como key, que es simplemente 'i'
                    className="absolute w-1 h-1 bg-cyber-cyan rounded-full opacity-20"
                    style={{
                        left: particle.left,
                        top: particle.top,
                        animation: particle.animation,
                        animationDelay: particle.animationDelay,
                    }}
                ></div>
            ))}
        </div>
    );
};

export default ParticlesBackground;