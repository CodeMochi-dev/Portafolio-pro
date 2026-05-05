import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, Calendar } from 'lucide-react';

interface EducationItem {
  id: number;
  institution: string;
  degree: string;
  period: string;
  description: string;
  achievements: string[];
}

const educationData: EducationItem[] = [
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

const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Educación
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Mi trayectoria académica y formación profesional.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-600"></div>

            {educationData.map((item, index) => (
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
                        <GraduationCap className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-1">
                          {item.degree}
                        </h3>
                        <p className="text-blue-600 dark:text-blue-400 font-medium mb-2">
                          {item.institution}
                        </p>
                        <div className="flex items-center text-gray-600 dark:text-gray-400 text-sm mb-3">
                          <Calendar className="w-4 h-4 mr-2" />
                          {item.period}
                        </div>
                      </div>
                    </div>

                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      {item.description}
                    </p>

                    <div>
                      <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-3 flex items-center">
                        <Award className="w-5 h-5 mr-2 text-yellow-500" />
                        Logros
                      </h4>
                      <ul className="space-y-2">
                        {item.achievements.map((achievement, idx) => (
                          <motion.li
                            key={idx}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            viewport={{ once: true }}
                            className="flex items-center text-gray-600 dark:text-gray-400"
                          >
                            <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                            {achievement}
                          </motion.li>
                        ))}
                      </ul>
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

export default Education;