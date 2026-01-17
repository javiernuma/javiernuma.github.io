# 🚀 Dsion Portfolio Architecture — Javier Vidal Numa
### Founder & CTO @ Dsion Group

[![Next.js](https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)

Este proyecto es la representación visual y técnica de mi trayectoria como arquitecto de software. Ha sido desarrollado bajo los estándares de ingeniería de **Dsion Group**, aplicando el conocimiento adquirido en la creación de infraestructuras **Multi-SaaS** escalables y robustas.

## 🏛️ Filosofía de Ingeniería
Este portafolio trasciende la estética; es una implementación de **mejores prácticas de desarrollo** y tecnología avanzada. Mi objetivo es demostrar cómo la arquitectura limpia y la soberanía tecnológica (desarrollo *desde scratch*) generan productos digitales de alto valor.

## 🛠️ Stack Tecnológico

| Capa | Tecnología | Justificación |
| :--- | :--- | :--- |
| **Framework** | Next.js 15 | Estándar actual para aplicaciones web de alto rendimiento y SEO optimizado. |
| **Estilos** | Tailwind CSS | Control total de la UI Cyberpunk sin comprometer la velocidad de carga. |
| **Animaciones** | Framer Motion | Orquestación de efectos de glitch y estados de terminal inmersivos. |
| **Infraestructura** | GitHub Pages | Despliegue estático de alta disponibilidad. |
| **Messaging** | EmailJS | Integración de servicios de comunicación en entornos *serverless*. |

## 📐 Registro de Decisiones de Arquitectura (ADR)
Siguiendo nuestra metodología interna en Dsion Group, documentamos cada paso crítico:

* **ADR-001: Glitch & Neon UI:** Implementación de efectos visuales mediante `clip-path` y pseudo-elementos para mantener un **Lighthouse Score de 100**.
* **ADR-002: Terminal Functional Logic:** Se decidió usar un sistema de estados en React para simular una sesión SSH real en la sección de contacto.
* **ADR-003: Privacy First:** Toda la información sensible de la compañía se mantiene fuera del repositorio público, utilizando secretos de GitHub Actions para el despliegue.

## 💻 Configuración del Entorno

1.  **Clonar repositorio:**
    ```bash
    git clone [https://github.com/tu-usuario/portfolio-dsion.git](https://github.com/tu-usuario/portfolio-dsion.git)
    ```
2.  **Instalar dependencias:**
    ```bash
    npm install
    ```
3.  **Variables de Entorno (.env.local):**
    ```env
    NEXT_PUBLIC_EMAILJS_SERVICE_ID=tu_id
    NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=tu_template
    NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=tu_key
    ```
4.  **Lanzar servidor de desarrollo:**
    ```bash
    npm run dev
    ```

## 🎨 Características Destacadas
* **Hero Section:** Animación cromática "Vidal Numa" con estilo retro-futurista.
* **Interactive Terminal:** Formulario de contacto funcional integrado en un shell simulado.
* **Professional Profile:** Visualización detallada de competencias técnicas y arsenal tecnológico.
* **Timeline:** Línea de tiempo dinámica de trayectoria laboral.

## 🤝 Contacto y Visión
**Javier Vidal Numa**
*Founder & CTO en Dsion Group*

Mi mayor recurso es mi conocimiento, y este portafolio es la evidencia de cómo aplico dicho conocimiento como arquitecto para el beneficio de la compañía.

---
*Este proyecto es propiedad intelectual de Javier Vidal Numa. Desarrollado con el rigor técnico que define a Dsion Group.*