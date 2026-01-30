/** @type {import('next').NextConfig} */

// Detectamos si estamos en Vercel
const isVercel = process.env.VERCEL === '1';

const nextConfig = {
    // Solo usamos 'export' si NO estamos en Vercel
    output: isVercel ? undefined : 'export',
    
    images: {
        unoptimized: true,
    },
    
    // Configuración de CORS para las API Routes (solo aplica cuando se ejecuta en Vercel/Node)
    async headers() {
        return [
            {
                // Coincidir con todas las rutas de API
                source: "/api/:path*",
                headers: [
                    { key: "Access-Control-Allow-Credentials", value: "true" },
                    { key: "Access-Control-Allow-Origin", value: "*" }, 
                    { key: "Access-Control-Allow-Methods", value: "GET,DELETE,PATCH,POST,PUT,OPTIONS" },
                    { key: "Access-Control-Allow-Headers", value: "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version" },
                ]
            }
        ]
    }
}

export default nextConfig;