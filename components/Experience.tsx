import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, MapPin, Calendar, CheckCircle } from 'lucide-react';

interface ExperienceItem {
  id: number;
  position: string;
  company: string;
  period: string;
  location: string;
  description: string;
  responsibilities: string[];
  technologies: string[];
}

const experienceData: ExperienceItem[] = [
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
  {
    id: 3,
    position: 'Frontend Developer',
    company: 'Digital Agency',
    period: '2019 - 2020',
    location: 'Monterrey, México',
    description: 'Desarrollo de sitios web y aplicaciones web para clientes de diversos sectores.',
    responsibilities: [
      'Creación de interfaces de usuario responsive',
      'Optimización de rendimiento web',
      'Trabajo con CMS y e-commerce platforms',
      'Mantenimiento y actualización de código legacy',
    ],
    technologies: ['JavaScript', 'HTML/CSS', 'WordPress', 'Shopify', 'jQuery'],
  },
];

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Experiencia Profesional
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Mi trayectoria profesional y los roles que he desempeñado en diferentes empresas.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-600"></div>

            {experienceData.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`relative flex items-start mb-12 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
              >
                {/* Timeline dot */}
                <div className="absolute left-8 w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full border-4 border-white dark:border-gray-900 transform -translate-x-1/2"></div>

                {/* Content */}
                <div className={`ml-16 ${index % 2 === 0 ? 'mr-8' : 'mr-16'} flex-1`}>
                  <motion.div
                    className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-xl backdrop-blur-sm bg-white/80 dark:bg-gray-800/80 hover:shadow-2xl transition-shadow"
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="flex items-start gap-4 mb-4">
                      <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl">
                        <Briefcase className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-1">
                          {item.position}
                        </h3>
                        <p className="text-blue-600 dark:text-blue-400 font-medium mb-2">
                          {item.company}
                        </p>
                        <div className="flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-400 mb-3">
                          <div className="flex items-center">
                            <Calendar className="w-4 h-4 mr-1" />
                            {item.period}
                          </div>
                          <div className="flex items-center">
                            <MapPin className="w-4 h-4 mr-1" />
                            {item.location}
                          </div>
                        </div>
                      </div>
                    </div>

                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      {item.description}
                    </p>

                    <div className="mb-4">
                      <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">
                        Responsabilidades
                      </h4>
                      <ul className="space-y-2">
                        {item.responsibilities.map((responsibility, idx) => (
                          <motion.li
                            key={idx}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            viewport={{ once: true }}
                            className="flex items-start text-gray-600 dark:text-gray-400"
                          >
                            <CheckCircle className="w-4 h-4 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                            {responsibility}
                          </motion.li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">
                        Tecnologías
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {item.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;