import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  position: string;
  company: string;
  content: string;
  rating: number;
  avatar: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'María González',
    position: 'CEO',
    company: 'TechStart Inc.',
    content: 'Trabajar con este desarrollador fue una experiencia excepcional. Entregó el proyecto antes de tiempo y superó todas nuestras expectativas. Su atención al detalle y conocimientos técnicos son impresionantes.',
    rating: 5,
    avatar: '/api/placeholder/64/64',
  },
  {
    id: 2,
    name: 'Carlos Rodríguez',
    position: 'CTO',
    company: 'InnovateLab',
    content: 'La calidad del código y la arquitectura del sistema que desarrolló han sido fundamentales para el crecimiento de nuestra plataforma. Es un profesional altamente recomendado.',
    rating: 5,
    avatar: '/api/placeholder/64/64',
  },
  {
    id: 3,
    name: 'Ana Martínez',
    position: 'Product Manager',
    company: 'DigitalFlow',
    content: 'Su capacidad para entender los requerimientos del negocio y traducirlos en soluciones técnicas efectivas es notable. Ha sido un placer colaborar con él en múltiples proyectos.',
    rating: 5,
    avatar: '/api/placeholder/64/64',
  },
  {
    id: 4,
    name: 'Luis Sánchez',
    position: 'Founder',
    company: 'StartupXYZ',
    content: 'Desde el primer día demostró un compromiso excepcional con el proyecto. Su proactividad y habilidades de resolución de problemas nos ayudaron a lanzar nuestro MVP exitosamente.',
    rating: 5,
    avatar: '/api/placeholder/64/64',
  },
];

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Testimonios
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Lo que dicen mis clientes sobre mi trabajo y colaboración.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-xl backdrop-blur-sm bg-white/80 dark:bg-gray-800/80 hover:shadow-2xl transition-shadow"
            >
              <div className="flex items-center mb-4">
                <Quote className="w-8 h-8 text-blue-500 mr-4 flex-shrink-0" />
                <div className="flex">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
              </div>

              <p className="text-gray-600 dark:text-gray-400 mb-6 italic">
                &ldquo;{testimonial.content}&rdquo;
              </p>

              <div className="flex items-center">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full mr-4 object-cover"
                />
                <div>
                  <h4 className="font-semibold text-gray-800 dark:text-white">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {testimonial.position} en {testimonial.company}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
        >
          {[
            { number: '50+', label: 'Proyectos Completados' },
            { number: '30+', label: 'Clientes Satisfechos' },
            { number: '5+', label: 'Años de Experiencia' },
            { number: '100%', label: 'Compromiso' },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 dark:text-gray-400 text-sm">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;