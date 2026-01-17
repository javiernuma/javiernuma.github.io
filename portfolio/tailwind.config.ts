import type { Config } from 'tailwindcss'

const config: Config = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['var(--font-inter)', 'sans-serif'],
                heading: ['var(--font-orbitron)', 'sans-serif'],
                mono: ['var(--font-roboto-mono)', 'monospace'],
            },
            colors: {
                'cyber-cyan': '#00d9ff',
                'cyber-magenta': '#e040fb',
                'cyber-purple': '#b942ff',
                'bg-dark': '#0a0e27',
                'bg-card': '#1a1f3a',
                'bg-darker': '#050810',
                'text-gray': '#94a3b8',
            },
            animation: {
                'fade-in-up': 'fadeInUp 0.8s ease-out',
                'glow': 'glow 2s ease-in-out infinite',
                'spin-slow': 'spin 10s linear infinite',
            },
            keyframes: {
                fadeInUp: {
                    '0%': { opacity: '0', transform: 'translateY(30px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
                glow: {
                    '0%, 100%': { boxShadow: '0 0 20px rgba(0, 217, 255, 0.5)' },
                    '50%': { boxShadow: '0 0 40px rgba(0, 217, 255, 0.8)' },
                },
            },
        },
    },
    plugins: [],
}
export default config