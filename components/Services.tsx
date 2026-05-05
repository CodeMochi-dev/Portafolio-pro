import React from 'react';
import { motion } from 'framer-motion';
import { Code, Smartphone, Cloud, Palette, Zap, Shield } from 'lucide-react';

interface Service {
  id: number;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  features: string[];
}

const services: Service[] = [
  {
    id: 1,
    title: 'Desarrollo Web',
    description: 'Creo aplicaciones web modernas y escalables utilizando las últimas tecnologías y mejores prácticas.',
    icon: Code,
    features: ['React/Next.js', 'TypeScript', 'Responsive Design', 'SEO Optimization'],
  },
  {
    id: 2,
    title: 'Desarrollo Mobile',
    description: 'Desarrollo aplicaciones móviles nativas e híbridas para iOS y Android.',
    icon: Smartphone,
    features: ['React Native', 'Flutter', 'iOS/Android', 'App Store Deployment'],
  },
  {
    id: 3,
    title: 'Cloud Solutions',
    description: 'Implemento soluciones en la nube escalables y seguras para tu negocio.',
    icon: Cloud,
    features: ['AWS/Azure', 'Serverless', 'Microservices', 'DevOps'],
  },
  {
    id: 4,
    title: 'UI/UX Design',
    description: 'Diseño interfaces de usuario intuitivas y experiencias de usuario excepcionales.',
    icon: Palette,
    features: ['Figma/Adobe XD', 'Prototyping', 'User Research', 'Design Systems'],
  },
  {
    id: 5,
    title: 'Consultoría Técnica',
    description: 'Asesoramiento técnico para optimizar procesos y arquitecturas de software.',
    icon: Zap,
    features: ['Code Review', 'Architecture Design', 'Performance Optimization', 'Best Practices'],
  },
  {
    id: 6,
    title: 'Ciberseguridad',
    description: 'Implemento medidas de seguridad para proteger tus aplicaciones y datos.',
    icon: Shield,
    features: ['Security Audits', 'Encryption', 'Authentication', 'Compliance'],
  },
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Servicios
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Ofrezco una amplia gama de servicios tecnológicos para ayudar a tu negocio a crecer y destacar.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-gray-50 dark:bg-gray-900 rounded-2xl p-6 h-full shadow-xl backdrop-blur-sm bg-white/80 dark:bg-gray-900/80 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl mr-4 group-hover:scale-110 transition-transform">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                    {service.title}
                  </h3>
                </div>

                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  {service.description}
                </p>

                <div>
                  <h4 className="text-sm font-semibold text-gray-800 dark:text-white mb-3 uppercase tracking-wide">
                    Incluye
                  </h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <motion.li
                        key={idx}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: idx * 0.1 }}
                        viewport={{ once: true }}
                        className="flex items-center text-gray-600 dark:text-gray-400 text-sm"
                      >
                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3"></div>
                        {feature}
                      </motion.li>
                    ))}
                  </ul>
                </div>

                <motion.button
                  className="w-full mt-6 bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 px-6 rounded-xl font-medium hover:shadow-lg transition-all"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => {
                    const element = document.getElementById('contact');
                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Solicitar Servicio
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              ¿Tienes un proyecto en mente?
            </h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Estoy disponible para discutir tus ideas y ayudarte a convertirlas en realidad.
              Contáctame para una consulta gratuita.
            </p>
            <motion.button
              className="bg-white text-blue-600 px-8 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Empezar Proyecto
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;