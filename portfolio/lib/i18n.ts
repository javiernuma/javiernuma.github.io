export type Language = 'es' | 'en';

export const translations = {
    es: {
        nav: {
            home: 'Inicio',
            profile: 'Perfil',
            experience: 'Experiencia',
            technologies: 'Tecnologías',
            education: 'Educación',
            contact: 'Contactar',
        },
        hero: {
            title: 'JAVIER',
            subtitle: 'VIDAL NUMA',
            role: 'Senior Backend Engineer | Platform Engineering',
            role2: 'Java & Scala Specialist',
            description: 'Ingeniero de Software Senior con 9 años de experiencia diseñando sistemas escalables de misión crítica. Especialista en Java (Spring Boot) y Scala funcional (ZIO), con expertise en arquitecturas Event-Driven, Cloud-Native en AWS y Platform Engineering.',
            cta1: 'Ver Trayectoria',
            cta2: 'Descargar CV',
            experience: 'Experiencia',
            years: '9+ Años',
        },
        stats: [
            { value: 9, label: 'Años Experiencia', suffix: '+', icon: '🏆' },
            { value: 2, label: 'Transacciones Diarias', suffix: 'M+', icon: '🚀' },
            { value: 70, label: 'Reducción Deploy Time', suffix: '%', icon: '⚡' },
            { value: 99.9, label: 'Uptime Sistemas', suffix: '%', icon: '✅' },
        ],
        profile: {
            title: 'PERFIL',
            titleHighlight: 'PROFESIONAL',
            description1: 'Senior Backend Engineer con 9 años de experiencia diseñando sistemas de misión crítica para sectores financiero y empresarial. Especialista en el ecosistema Java (Spring Boot) y Scala funcional (ZIO), con un profundo dominio en arquitecturas Event-Driven, Event Sourcing + CQRS y diseño Cloud-Native en AWS.',
            description2: 'Track record comprobado de excelencia operativa: mantenimiento de 99.9% de uptime en sistemas que procesan más de 2 millones de transacciones diarias. He liderado transformaciones DevOps logrando una reducción del 70% en tiempos de despliegue y una optimización del 35% en costos de infraestructura cloud mediante estrategias avanzadas de Platform Engineering.',
            description3: 'Comprometido con la calidad de software a través de Clean Architecture, principios SOLID y TDD. Me destaco por liderar equipos técnicos hacia una cultura de "You build it, you run it", combinando visión arquitectónica con ejecución pragmática para alinear la tecnología con los objetivos estratégicos del negocio.',
            languages: 'Idiomas',
            spanish: 'Español (Nativo)',
            english: 'Inglés (B2 - Intermedio)',
            softSkills: 'Competencias Blandas',
            skills: [
                'Arquitectura de Software & DDD',
                'Liderazgo Técnico & Mentoring',
                'Platform Engineering & DevOps',
                'Programación Funcional (Scala/ZIO)',
            ],
        },
        stack: {
            title: 'STACK &',
            titleHighlight: 'HERRAMIENTAS',
            filters: {
                all: 'TODO',
                backend: 'BACKEND',
                cloud: 'CLOUD & DEVOPS',
                frontend: 'FRONTEND',
            },
        },
        experience: {
            title: 'TRAYECTORIA',
            titleHighlight: 'LABORAL',
            jobs: [
                {
                    period: '2025 - Presente',
                    company: 'DSION GROUP',
                    role: 'Principal Engineer',
                    description: 'Arquitectura de plataforma SaaS híbrida (Java/Scala) con Event Sourcing y CQRS. Implementación de Internal Developer Platform con AWS EKS, ArgoCD e Istio. Estrategia de tecnología híbrida optimizando latencias (<100ms) y escalabilidad.',
                    tags: ['Java 21', 'Scala 3', 'AWS EKS', 'Kafka', 'ArgoCD', 'Terraform'],
                },
                {
                    period: '2021 - 2024',
                    company: 'QUIPUX S.A.S',
                    role: 'Líder Técnico de Software',
                    description: 'Gestión de infraestructura crítica procesando 2M+ transacciones diarias (99.9% uptime). Reducción del 70% en tiempo de despliegue mediante reingeniería CI/CD. Optimización de rendimiento en bases de datos reduciendo latencia en un 35%.',
                    tags: ['Java 17', 'Spring Boot', 'AWS', 'Kubernetes', 'GitLab CI', 'Redis'],
                },
                {
                    period: '2019 - 2021',
                    company: 'CIDENET S.A.S',
                    role: 'Senior Backend Developer',
                    description: 'Arquitectura de sistemas distribuidos Event-Driven con Apache Kafka. Desarrollo de motores de cálculo financiero inmutables con Scala. Migración de monolitos a microservicios contenerizados.',
                    tags: ['Java', 'Scala', 'Spring Boot', 'Kafka', 'AWS Lambda', 'Docker'],
                },
                {
                    period: '2018 - 2019',
                    company: 'MLSTDATAOOLS',
                    role: 'Backend Engineer & DevOps',
                    description: 'Construcción de APIs de alto rendimiento con Go (Golang) y Google Cloud Platform. Optimización de concurrencia para procesamiento paralelo.',
                    tags: ['Go', 'GCP', 'Docker', 'Angular', 'NgRx'],
                },
                {
                    period: '2017 - 2018',
                    company: 'KUBESOFT S.A.S',
                    role: 'Full-Stack Developer',
                    description: 'Desarrollo de plataformas web empresariales con stack LAMP. Diseño y optimización de esquemas de base de datos MySQL mejorando el rendimiento en un 50%.',
                    tags: ['PHP', 'Laravel', 'MySQL', 'Linux', 'REST API'],
                },
            ],
        },
        projects: {
            title: 'PROYECTOS',
            titleHighlight: 'DESTACADOS',
            items: [
                {
                    title: 'Event Sourcing & CQRS Reference Architecture',
                    description: 'Implementación robusta de un sistema distribuido utilizando Java/Spring Boot y el framework Axon. Este proyecto ilustra la segregación de modelos de lectura y escritura, garantizando una auditabilidad completa y escalabilidad horizontal en sistemas transaccionales.',
                    tags: ['Java', 'Spring Boot', 'Axon Framework', 'CQRS', 'Event Sourcing'],
                    demoUrl: 'https://github.com/javiernuma',
                    githubUrl: 'https://github.com/javiernuma',
                    image: '/images/Event-Sourcing-CQRS-Reference-Architecture.png' // Imagen añadida
                },
                {
                    title: 'Functional Reactive Microservices con Scala 3',
                    description: 'Desarrollo de una API REST de alto rendimiento utilizando Scala 3 y el ecosistema ZIO. Se enfoca en el manejo de efectos puros, concurrencia segura (fibers) y tipos fuertemente tipados para eliminar errores en tiempo de ejecución.',
                    tags: ['Scala 3', 'ZIO', 'Functional Programming', 'REST API'],
                    demoUrl: 'https://github.com/javiernuma',
                    githubUrl: 'https://github.com/javiernuma',
                    image: '/images/Functional-Microservices-Pattern.png'
                },
                {
                    title: 'Cloud-Native Infrastructure with Terraform',
                    description: 'Automatización de infraestructura en AWS utilizando Terraform. Incluye la provisión de clústeres de Kubernetes (EKS), bases de datos gestionadas y redes virtuales (VPC), aplicando el paradigma de GitOps para despliegues consistentes.',
                    tags: ['Terraform', 'AWS', 'Kubernetes', 'IaC', 'DevOps'],
                    demoUrl: 'https://github.com/javiernuma',
                    githubUrl: 'https://github.com/javiernuma',
                    image: '/images/Cloud-Native-Infrastructure-Terraform.png'
                }
            ]
        },
        education: {
            title: 'EDUCACIÓN |',
            titleHighlight: 'CERTIFICACIONES',
            items: [
                {
                    title: 'Ingeniería de Sistemas',
                    institution: 'Universidad Francisco de Paula Santander (2021)',
                    icon: '🎓',
                },
                {
                    title: 'AWS Academy Cloud Foundations',
                    institution: 'AWS (2025)',
                    details: ['AWS Certified Solutions Architect – Associate (En progreso)'],
                    icon: '☁️',
                },
                {
                    title: 'Software Architecture & Platform Engineering',
                    institution: 'Udemy (2025)',
                    icon: '🏗️',
                },
                {
                    title: 'Scrum Foundation Professional',
                    institution: 'CertiProf (2025)',
                    icon: '📜',
                },
            ],
        },
        contact: {
            title: 'INICIAR',
            titleHighlight: 'CONEXIÓN',
            subtitle: '¿Buscas un experto en arquitectura escalable y Platform Engineering? Hablemos.',
            phone: 'TELÉFONO',
            email: 'EMAIL',
            linkedin: 'LINKEDIN',
            linkedinText: 'Ver Perfil Profesional',
            terminal: {
                line1: 'contact --init',
                line2: 'Conectando con Javier Vidal Numa...',
                line3: 'Estado:',
                line3Value: 'Disponible para relocalización',
                line4: 'Ubicación: Cúcuta, Colombia',
                line5: 'Skills: [Java, Scala, AWS, Kubernetes, Architecture]'
            }
        },
        footer: {
            rights: '© 2025 Javier Vidal Numa. Todos los derechos reservados.',
        },
    },
    en: {
        nav: {
            home: 'Home',
            profile: 'Profile',
            experience: 'Experience',
            technologies: 'Technologies',
            education: 'Education',
            contact: 'Contact',
        },
        hero: {
            title: 'JAVIER',
            subtitle: 'VIDAL NUMA',
            role: 'Senior Backend Engineer | Platform Engineering',
            role2: 'Java & Scala Specialist',
            description: 'Senior Software Engineer with 9 years of experience designing mission-critical scalable systems. Specialist in Java (Spring Boot) and functional Scala (ZIO), with expertise in Event-Driven architectures, Cloud-Native design on AWS, and Platform Engineering.',
            cta1: 'View Career',
            cta2: 'Download CV',
            experience: 'Experience',
            years: '9+ Years',
        },
        stats: [
            { value: 9, label: 'Years Experience', suffix: '+', icon: '🏆' },
            { value: 2, label: 'Daily Transactions', suffix: 'M+', icon: '🚀' },
            { value: 70, label: 'Deploy Time Reduction', suffix: '%', icon: '⚡' },
            { value: 99.9, label: 'System Uptime', suffix: '%', icon: '✅' },
        ],
        profile: {
            title: 'PROFESSIONAL',
            titleHighlight: 'PROFILE',
            description1: 'Senior Backend Engineer with 9 years of experience designing mission-critical systems for financial and enterprise sectors. Specialist in the Java (Spring Boot) ecosystem and functional Scala (ZIO), with deep mastery of Event-Driven architectures, Event Sourcing + CQRS, and Cloud-Native design on AWS.',
            description2: 'Proven track record of operational excellence: maintaining 99.9% uptime in systems processing over 2 million daily transactions. I have led DevOps transformations achieving a 70% reduction in deployment times and a 35% optimization in cloud infrastructure costs through advanced Platform Engineering strategies.',
            description3: 'Committed to software quality through Clean Architecture, SOLID principles, and TDD. I excel at leading technical teams towards a "You build it, you run it" culture, combining architectural vision with pragmatic execution to align technology with strategic business goals.',
            languages: 'Languages',
            spanish: 'Spanish (Native)',
            english: 'English (B2 - Intermediate)',
            softSkills: 'Soft Skills',
            skills: [
                'Software Architecture & DDD',
                'Technical Leadership & Mentoring',
                'Platform Engineering & DevOps',
                'Functional Programming (Scala/ZIO)',
            ],
        },
        stack: {
            title: 'STACK &',
            titleHighlight: 'TOOLS',
            filters: {
                all: 'ALL',
                backend: 'BACKEND',
                cloud: 'CLOUD & DEVOPS',
                frontend: 'FRONTEND',
            },
        },
        experience: {
            title: 'WORK',
            titleHighlight: 'EXPERIENCE',
            jobs: [
                {
                    period: '2025 - Present',
                    company: 'DSION GROUP',
                    role: 'Principal Engineer',
                    description: 'Architecture of hybrid SaaS platform (Java/Scala) with Event Sourcing and CQRS. Implementation of Internal Developer Platform with AWS EKS, ArgoCD, and Istio. Hybrid technology strategy optimizing latencies (<100ms) and scalability.',
                    tags: ['Java 21', 'Scala 3', 'AWS EKS', 'Kafka', 'ArgoCD', 'Terraform'],
                },
                {
                    period: '2021 - 2024',
                    company: 'QUIPUX S.A.S',
                    role: 'Technical Software Lead',
                    description: 'Management of critical infrastructure processing 2M+ daily transactions (99.9% uptime). 70% reduction in deployment time via CI/CD reengineering. Database performance optimization reducing latency by 35%.',
                    tags: ['Java 17', 'Spring Boot', 'AWS', 'Kubernetes', 'GitLab CI', 'Redis'],
                },
                {
                    period: '2019 - 2021',
                    company: 'CIDENET S.A.S',
                    role: 'Senior Backend Developer',
                    description: 'Architecture of distributed Event-Driven systems with Apache Kafka. Development of immutable financial calculation engines with Scala. Migration from monoliths to containerized microservices.',
                    tags: ['Java', 'Scala', 'Spring Boot', 'Kafka', 'AWS Lambda', 'Docker'],
                },
                {
                    period: '2018 - 2019',
                    company: 'MLSTDATAOOLS',
                    role: 'Backend Engineer & DevOps',
                    description: 'Construction of high-performance APIs with Go (Golang) and Google Cloud Platform. Concurrency optimization for parallel processing.',
                    tags: ['Go', 'GCP', 'Docker', 'Angular', 'NgRx'],
                },
                {
                    period: '2017 - 2018',
                    company: 'KUBESOFT S.A.S',
                    role: 'Full-Stack Developer',
                    description: 'Development of enterprise web platforms with LAMP stack. Design and optimization of MySQL database schemas improving performance by 50%.',
                    tags: ['PHP', 'Laravel', 'MySQL', 'Linux', 'REST API'],
                },
            ],
        },
        projects: {
            title: 'PROJECTS',
            titleHighlight: 'FEATURED',
            items: [
                {
                    title: 'Event Sourcing & CQRS Reference Architecture',
                    description: 'Robust implementation of a distributed system using Java/Spring Boot and the Axon framework. This project illustrates the segregation of read and write models, ensuring full auditability and horizontal scalability in transactional systems.',
                    tags: ['Java', 'Spring Boot', 'Axon Framework', 'CQRS', 'Event Sourcing'],
                    demoUrl: 'https://github.com/javiernuma',
                    githubUrl: 'https://github.com/javiernuma',
                    image: '/images/Event-Sourcing-CQRS-Reference-Architecture.png' // Imagen añadida
                },
                {
                    title: 'Functional Reactive Microservices with Scala 3',
                    description: 'Development of a high-performance REST API using Scala 3 and the ZIO ecosystem. Focuses on pure effect handling, safe concurrency (fibers), and strong typing to eliminate runtime errors.',
                    tags: ['Scala 3', 'ZIO', 'Functional Programming', 'REST API'],
                    demoUrl: 'https://github.com/javiernuma',
                    githubUrl: 'https://github.com/javiernuma',
                    image: '/images/Functional-Microservices-Pattern.png'
                },
                {
                    title: 'Cloud-Native Infrastructure with Terraform',
                    description: 'Infrastructure automation on AWS using Terraform. Includes provisioning of Kubernetes clusters (EKS), managed databases, and virtual networks (VPC), applying the GitOps paradigm for consistent deployments.',
                    tags: ['Terraform', 'AWS', 'Kubernetes', 'IaC', 'DevOps'],
                    demoUrl: 'https://github.com/javiernuma',
                    githubUrl: 'https://github.com/javiernuma',
                }
            ]
        },
        education: {
            title: 'EDUCATION |',
            titleHighlight: 'CERTIFICATIONS',
            items: [
                {
                    title: 'Systems Engineering',
                    institution: 'Francisco de Paula Santander University (2021)',
                    icon: '🎓',
                },
                {
                    title: 'AWS Academy Cloud Foundations',
                    institution: 'AWS (2025)',
                    details: ['AWS Certified Solutions Architect – Associate (In progress)'],
                    icon: '☁️',
                },
                {
                    title: 'Software Architecture & Platform Engineering',
                    institution: 'Udemy (2025)',
                    icon: '🏗️',
                },
                {
                    title: 'Scrum Foundation Professional',
                    institution: 'CertiProf (2025)',
                    icon: '📜',
                },
            ],
        },
        contact: {
            title: 'START',
            titleHighlight: 'CONNECTION',
            subtitle: 'Looking for an expert in scalable architecture and Platform Engineering? Let\'s talk.',
            phone: 'PHONE',
            email: 'EMAIL',
            linkedin: 'LINKEDIN',
            linkedinText: 'View Professional Profile',
            terminal: {
                line1: 'contact --init',
                line2: 'Connecting to Javier Vidal Numa...',
                line3: 'Status:',
                line3Value: 'Available for relocation',
                line4: 'Location: Cúcuta, Colombia',
                line5: 'Skills: [Java, Scala, AWS, Kubernetes, Architecture]'
            }
        },
        footer: {
            rights: '© 2025 Javier Vidal Numa. All rights reserved.',
        },
    },
};

export type Translation = typeof translations.es;
