import type { Metadata } from 'next'
import { Inter, Orbitron, Roboto_Mono } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const orbitron = Orbitron({ 
    subsets: ['latin'], 
    variable: '--font-orbitron',
    weight: ['400', '500', '600', '700', '800', '900'] // Especificamos los pesos
})
const robotoMono = Roboto_Mono({ subsets: ['latin'], variable: '--font-roboto-mono' })

export const metadata: Metadata = {
    title: 'Javier Vidal Numa - Senior Software Developer',
    icons:{
      icon: '/favicon.svg'
    },
    description: 'Portfolio de Javier Vidal Numa - Senior Software Developer especializado en Java, Spring Boot, AWS y arquitecturas escalables',
    keywords: ['desarrollador', 'java', 'backend', 'aws', 'spring boot', 'developer', 'portfolio'],
    authors: [{ name: 'Javier Vidal Numa' }],
    openGraph: {
        title: 'Javier Vidal Numa - Portfolio',
        description: 'Senior Software Developer | Backend',
        type: 'website',
    },
}

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="es" className="scroll-smooth">
        <body className={`${inter.variable} ${orbitron.variable} ${robotoMono.variable} font-sans antialiased bg-bg-dark text-white`}
              suppressHydrationWarning={true}>{children}</body>
        </html>
    )
}