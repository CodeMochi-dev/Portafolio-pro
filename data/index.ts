// Personal Information
export const personalInfo = {
  name: 'Tu Nombre',
  title: 'Desarrollador Full Stack',
  description: 'Creo experiencias digitales excepcionales con tecnologías modernas. Apasionado por el desarrollo web, la innovación y la resolución de problemas complejos.',
  avatar: '/api/placeholder/150/150',
  email: 'tu@email.com',
  phone: '+52 55 1234 5678',
  location: 'Ciudad de México, México',
  socialLinks: {
    github: 'https://github.com',
    linkedin: 'https://linkedin.com',
    whatsapp: 'https://wa.me/525512345678',
  },
};

// Skills Data
export const skillsData = {
  frontend: [
    { name: 'React/Next.js', level: 95 },
    { name: 'TypeScript', level: 90 },
    { name: 'Tailwind CSS', level: 92 },
    { name: 'JavaScript', level: 95 },
  ],
  backend: [
    { name: 'Node.js', level: 88 },
    { name: 'Python', level: 85 },
    { name: 'Express.js', level: 90 },
    { name: 'REST APIs', level: 92 },
  ],
  databases: [
    { name: 'MongoDB', level: 87 },
    { name: 'PostgreSQL', level: 85 },
    { name: 'Redis', level: 80 },
    { name: 'MySQL', level: 83 },
  ],
  devops: [
    { name: 'Docker', level: 82 },
    { name: 'AWS', level: 78 },
    { name: 'Git', level: 95 },
    { name: 'CI/CD', level: 80 },
  ],
  design: [
    { name: 'Figma', level: 85 },
    { name: 'UI/UX', level: 88 },
    { name: 'Responsive Design', level: 95 },
    { name: 'Adobe XD', level: 75 },
  ],
  softSkills: [
    { name: 'Trabajo en Equipo', level: 95 },
    { name: 'Comunicación', level: 90 },
    { name: 'Resolución de Problemas', level: 92 },
    { name: 'Aprendizaje Continuo', level: 95 },
  ],
};

// Projects Data
export const projectsData = [
  {
    id: 1,
    title: 'E-commerce Platform',
    description: 'Plataforma de comercio electrónico completa con carrito de compras, pagos integrados y panel de administración.',
    image: '/api/placeholder/400/300',
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    category: 'Full Stack',
    demoUrl: 'https://demo.com',
    codeUrl: 'https://github.com',
    featured: true,
  },
  {
    id: 2,
    title: 'Task Management App',
    description: 'Aplicación de gestión de tareas con colaboración en tiempo real y notificaciones push.',
    image: '/api/placeholder/400/300',
    technologies: ['React Native', 'Firebase', 'Redux'],
    category: 'Mobile',
    demoUrl: 'https://demo.com',
    codeUrl: 'https://github.com',
    featured: true,
  },
  {
    id: 3,
    title: 'Portfolio Website',
    description: 'Sitio web de portafolio moderno con animaciones y diseño responsive.',
    image: '/api/placeholder/400/300',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    category: 'Frontend',
    demoUrl: 'https://demo.com',
    codeUrl: 'https://github.com',
    featured: true,
  },
];

// Education Data
export const educationData = [
  {
    id: 1,
    institution: 'Universidad Tecnológica',
    degree: 'Ingeniería en Sistemas Computacionales',
    period: '2018 - 2022',
    description: 'Formación integral en desarrollo de software, algoritmos, estructuras de datos y arquitectura de sistemas.',
    achievements: [
      'Promedio: 9.2/10',
      'Proyecto Final: Sistema de Gestión Empresarial',
      'Certificación en Desarrollo Web',
    ],
  },
  {
    id: 2,
    institution: 'Instituto Tecnológico',
    degree: 'Técnico en Programación',
    period: '2016 - 2018',
    description: 'Fundamentos sólidos en programación, bases de datos y desarrollo de aplicaciones.',
    achievements: [
      'Mejor Proyecto del Año',
      'Certificación Microsoft',
      'Participación en Hackathons',
    ],
  },
];

// Experience Data
export const experienceData = [
  {
    id: 1,
    position: 'Senior Full Stack Developer',
    company: 'TechCorp Solutions',
    period: '2022 - Presente',
    location: 'Ciudad de México, México',
    description: 'Lidero el desarrollo de aplicaciones web escalables y sistemas de alto rendimiento para clientes empresariales.',
    responsibilities: [
      'Desarrollo de aplicaciones React/Next.js con TypeScript',
      'Implementación de APIs REST y GraphQL',
      'Mentoría de desarrolladores junior',
      'Arquitectura de sistemas y optimización de rendimiento',
    ],
    technologies: ['React', 'Node.js', 'TypeScript', 'PostgreSQL', 'AWS'],
  },
  {
    id: 2,
    position: 'Full Stack Developer',
    company: 'StartupTech',
    period: '2020 - 2022',
    location: 'Guadalajara, México',
    description: 'Desarrollo de MVPs y productos digitales para startups en etapa inicial.',
    responsibilities: [
      'Construcción de prototipos rápidos con React y Node.js',
      'Integración de servicios de terceros (Stripe, Firebase)',
      'Colaboración con equipos de diseño UX/UI',
      'Implementación de CI/CD pipelines',
    ],
    technologies: ['React', 'Express.js', 'MongoDB', 'Firebase', 'Docker'],
  },
];

// Testimonials Data
export const testimonialsData = [
  {
    id: 1,
    name: 'María González',
    position: 'CEO',
    company: 'TechStart Inc.',
    content: 'Trabajar con este desarrollador fue una experiencia excepcional. Entregó el proyecto antes de tiempo y superó todas nuestras expectativas.',
    rating: 5,
    avatar: '/api/placeholder/64/64',
  },
  {
    id: 2,
    name: 'Carlos Rodríguez',
    position: 'CTO',
    company: 'InnovateLab',
    content: 'La calidad del código y la arquitectura del sistema que desarrolló han sido fundamentales para el crecimiento de nuestra plataforma.',
    rating: 5,
    avatar: '/api/placeholder/64/64',
  },
];

// Services Data
export const servicesData = [
  {
    id: 1,
    title: 'Desarrollo Web',
    description: 'Creo aplicaciones web modernas y escalables utilizando las últimas tecnologías.',
    icon: 'Code',
    features: ['React/Next.js', 'TypeScript', 'Responsive Design', 'SEO Optimization'],
  },
  {
    id: 2,
    title: 'Desarrollo Mobile',
    description: 'Desarrollo aplicaciones móviles nativas e híbridas para iOS y Android.',
    icon: 'Smartphone',
    features: ['React Native', 'Flutter', 'iOS/Android', 'App Store Deployment'],
  },
  {
    id: 3,
    title: 'Cloud Solutions',
    description: 'Implemento soluciones en la nube escalables y seguras.',
    icon: 'Cloud',
    features: ['AWS/Azure', 'Serverless', 'Microservices', 'DevOps'],
  },
];