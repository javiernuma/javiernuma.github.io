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
            role: 'Senior Software Developer',
            role2: 'Ingeniero de Sistemas Especializado',
            description: 'Ingeniero de Sistemas especializado en construir arquitecturas escalables, sistemas distribuidos y soluciones robustas en la nube.',
            cta1: 'Ver Trayectoria',
            cta2: 'Descargar CV',
            experience: 'Experience',
            years: '7+ Years',
        },
        stats: [
            { value: 7, label: 'Años Experiencia', suffix: '+', icon: '🏆' },
            { value: 50, label: 'Proyectos', suffix: '+', icon: '💼' },
            { value: 15, label: 'Tecnologías', suffix: '+', icon: '⚡' },
            { value: 100, label: 'Clientes Felices', suffix: '%', icon: '😊' },
        ],
        profile: {
            title: 'PERFIL',
            titleHighlight: 'PROFESIONAL',
            description1: 'Desarrollador Senior de Software con más de 7 años de experiencia liderando y construyendo soluciones robustas. Especializado en Java y el ecosistema Spring Framework, con sólidos conocimientos en multithreading, diseño orientado a objetos y TDD.',
            description2: 'He trabajado en la integración de servicios cloud con AWS (EC2, S3, RDS, DynamoDB, IAM), optimización de bases de datos (SQL, Oracle, MySQL) y actualmente exploro Elixir & Phoenix para sistemas de alta concurrencia.',
            description3: 'Me defino como una persona honesta y comprometida, con pasión por la innovación, la calidad del software y los entornos colaborativos de alto rendimiento.',
            languages: 'Idiomas',
            spanish: 'Español (Nativo)',
            english: 'Inglés (B2 Intermedio)',
            softSkills: 'Competencias Blandas',
            skills: [
                'Comunicación efectiva & Liderazgo',
                'Resolución de problemas complejos',
                'Adaptabilidad & Aprendizaje continuo',
                'Trabajo en equipo (Scrum/Agile)',
            ],
        },
        stack: {
            title: 'STACK &',
            titleHighlight: 'HERRAMIENTAS',
            filters: {
                all: 'ALL',
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
                    period: '2021 - 2024',
                    company: 'QUIPUX S.A.S',
                    role: 'Líder Técnico de Software',
                    description: 'Liderazgo en implementación de soluciones escalables con Java, Spring Boot y Elixir. Optimización de Oracle/MySQL, automatización CI/CD (GitLab, Azure DevOps) y arquitectura de microservicios.',
                    tags: ['Java', 'AWS', 'Elixir', 'Kubernetes'],
                },
                {
                    period: '2019 - 2021',
                    company: 'CIDENET S.A.S',
                    role: 'Desarrollador de Software',
                    description: 'Desarrollo de microservicios (Java/Spring Boot) y automatización con Python. Gestión documental en AWS S3 y seguridad con JWT.',
                    tags: ['Java', 'Python', 'AWS S3', 'Angular'],
                },
                {
                    period: '2018',
                    company: 'MLSTDATAOOLS',
                    role: 'Desarrollador de Software',
                    description: 'Diseño de infraestructura completa. Backend en GO (Golang) y Frontend en tecnologías web modernas.',
                    tags: ['Go', 'Docker', 'PostgreSQL'],
                },
            ],
        },
        projects: {
            title: 'PROYECTOS',
            titleHighlight: 'DESTACADOS',
            items: [
                {
                    title: 'Sistema de Gestión AWS',
                    description: 'Plataforma cloud para gestión de recursos AWS con monitoreo en tiempo real.',
                    tags: ['Java', 'Spring Boot', 'AWS', 'React'],
                    demoUrl: '#',
                    githubUrl: '#',
                },
                {
                    title: 'Microservicios Elixir',
                    description: 'Arquitectura de microservicios de alta concurrencia con Phoenix Framework.',
                    tags: ['Elixir', 'Phoenix', 'PostgreSQL', 'Docker'],
                    demoUrl: '#',
                    githubUrl: '#',
                },
                {
                    title: 'API REST Enterprise',
                    description: 'API RESTful con autenticación JWT y documentación Swagger.',
                    tags: ['Java', 'Spring Security', 'JWT', 'Swagger'],
                    demoUrl: '#',
                    githubUrl: '#',
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
                    title: 'AWS Academy Graduate',
                    institution: 'AWS Cloud Foundations (2025)',
                    details: ['Arquitectura de Soluciones en AWS (2024)'],
                    icon: '📜',
                },
                {
                    title: 'Google Cloud Skills',
                    institution: 'Modernización de Infraestructura',
                    details: ['Terraform en GCP', 'Kubernetes Engine', 'Redes y Seguridad'],
                    icon: '☁️',
                },
                {
                    title: 'Scrum Foundation',
                    institution: 'Certified (2025)',
                    icon: '👥',
                },
            ],
        },
        contact: {
            title: 'INICIAR',
            titleHighlight: 'CONEXIÓN',
            subtitle: '¿Tienes un proyecto en mente? Hablemos de arquitectura, código y soluciones.',
            phone: 'TELÉFONO',
            email: 'EMAIL',
            linkedin: 'LINKEDIN',
            linkedinText: 'Ver Perfil Profesional',
            terminal: {
                line1: 'contact --init',
                line2: 'Conectando con Javier Vidal Numa...',
                line3: 'Estado:',
                line3Value: 'En línea',
                line4: 'Ubicación: Colombia',
                line5: 'Habilidades: [Java, AWS, Spring, Python]'
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
            role: 'Senior Software Developer | Backend',
            role2: 'Specialized Systems Engineer',
            description: 'Systems Engineer specialized in building scalable architectures, distributed systems and robust cloud solutions.',
            cta1: 'View Career',
            cta2: 'Download CV',
            experience: 'Experience',
            years: '7+ Years',
        },
        stats: [
            { value: 7, label: 'Years Experience', suffix: '+', icon: '🏆' },
            { value: 50, label: 'Projects', suffix: '+', icon: '💼' },
            { value: 15, label: 'Technologies', suffix: '+', icon: '⚡' },
            { value: 100, label: 'Happy Clients', suffix: '%', icon: '😊' },
        ],
        profile: {
            title: 'PROFESSIONAL',
            titleHighlight: 'PROFILE',
            description1: 'Senior Software Developer with over 7 years of experience leading and building robust solutions. Specialized in Java and the Spring Framework ecosystem, with solid knowledge in multithreading, object-oriented design, and TDD.',
            description2: 'I have worked on cloud service integration with AWS (EC2, S3, RDS, DynamoDB, IAM), database optimization (SQL, Oracle, MySQL), and currently exploring Elixir & Phoenix for high-concurrency systems.',
            description3: 'I define myself as an honest and committed person, with a passion for innovation, software quality, and high-performance collaborative environments.',
            languages: 'Languages',
            spanish: 'Spanish (Native)',
            english: 'English (B2 Intermediate)',
            softSkills: 'Soft Skills',
            skills: [
                'Effective Communication & Leadership',
                'Complex Problem Solving',
                'Adaptability & Continuous Learning',
                'Teamwork (Scrum/Agile)',
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
                    period: '2021 - 2024',
                    company: 'QUIPUX S.A.S',
                    role: 'Technical Software Lead',
                    description: 'Leadership in implementing scalable solutions with Java, Spring Boot, and Elixir. Oracle/MySQL optimization, CI/CD automation (GitLab, Azure DevOps), and microservices architecture.',
                    tags: ['Java', 'AWS', 'Elixir', 'Kubernetes'],
                },
                {
                    period: '2019 - 2021',
                    company: 'CIDENET S.A.S',
                    role: 'Software Developer',
                    description: 'Microservices development (Java/Spring Boot) and automation with Python. Document management in AWS S3 and security with JWT.',
                    tags: ['Java', 'Python', 'AWS S3', 'Angular'],
                },
                {
                    period: '2018',
                    company: 'MLSTDATAOOLS',
                    role: 'Software Developer',
                    description: 'Complete infrastructure design. Backend in GO (Golang) and Frontend in modern web technologies.',
                    tags: ['Go', 'Docker', 'PostgreSQL'],
                },
            ],
        },
        projects: {
            title: 'PROJECTS',
            titleHighlight: 'FEATURED',
            items: [
                {
                    title: 'AWS Management System',
                    description: 'Cloud platform for AWS resource management with real-time monitoring.',
                    tags: ['Java', 'Spring Boot', 'AWS', 'React'],
                    demoUrl: '#',
                    githubUrl: '#',
                },
                {
                    title: 'Elixir Microservices',
                    description: 'High concurrency microservices architecture with Phoenix Framework.',
                    tags: ['Elixir', 'Phoenix', 'PostgreSQL', 'Docker'],
                    demoUrl: '#',
                    githubUrl: '#',
                },
                {
                    title: 'Enterprise REST API',
                    description: 'RESTful API with JWT authentication and Swagger documentation.',
                    tags: ['Java', 'Spring Security', 'JWT', 'Swagger'],
                    demoUrl: '#',
                    githubUrl: '#',
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
                    title: 'AWS Academy Graduate',
                    institution: 'AWS Cloud Foundations (2025)',
                    details: ['Solutions Architecture on AWS (2024)'],
                    icon: '📜',
                },
                {
                    title: 'Google Cloud Skills',
                    institution: 'Infrastructure Modernization',
                    details: ['Terraform on GCP', 'Kubernetes Engine', 'Networks and Security'],
                    icon: '☁️',
                },
                {
                    title: 'Scrum Foundation',
                    institution: 'Certified (2025)',
                    icon: '👥',
                },
            ],
        },
        contact: {
            title: 'START',
            titleHighlight: 'CONNECTION',
            subtitle: 'Do you have a project in mind? Let\'s talk about architecture, code and solutions.',
            phone: 'PHONE',
            email: 'EMAIL',
            linkedin: 'LINKEDIN',
            linkedinText: 'View Professional Profile',
            terminal: {
                line1: 'contact --init',
                line2: 'Connecting to Javier Vidal Numa...',
                line3: 'Status:',
                line3Value: 'Online',
                line4: 'Location: Colombia',
                line5: 'Skills: [Java, AWS, Spring, Python]'
            }
        },
        footer: {
            rights: '© 2025 Javier Vidal Numa. All rights reserved.',
        },
    },
};

export type Translation = typeof translations.es;
