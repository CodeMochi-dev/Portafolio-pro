import React from 'react';
import { motion } from 'framer-motion';
import { User, Code, Coffee, Heart } from 'lucide-react';

const About: React.FC = () => {
  const stats = [
    { icon: Code, label: 'Proyectos Completados', value: '50+' },
    { icon: Coffee, label: 'Tazas de Café', value: '1000+' },
    { icon: Heart, label: 'Clientes Satisfechos', value: '30+' },
    { icon: User, label: 'Años de Experiencia', value: '5+' },
  ];

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Sobre Mí
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Soy un desarrollador apasionado por crear soluciones innovadoras y experiencias de usuario excepcionales.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl backdrop-blur-sm bg-white/80 dark:bg-gray-800/80">
              <h3 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">Mi Historia</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Comencé mi viaje en el desarrollo web hace más de 5 años, fascinado por la capacidad de transformar ideas en realidades digitales.
                Desde entonces, he trabajado en diversos proyectos, desde aplicaciones web simples hasta sistemas complejos de nivel empresarial.
              </p>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Mi enfoque se centra en escribir código limpio, mantenible y escalable, siempre buscando las mejores prácticas y las últimas tecnologías.
                Creo firmemente que la tecnología debe ser accesible y beneficiosa para todos.
              </p>
              <p className="text-gray-600 dark:text-gray-400">
                Cuando no estoy programando, me gusta aprender nuevas tecnologías, contribuir a proyectos open source y compartir conocimientos con la comunidad.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg backdrop-blur-sm bg-white/80 dark:bg-gray-800/80 text-center hover:shadow-xl transition-shadow"
                whileHover={{ scale: 1.05 }}
              >
                <stat.icon className="w-8 h-8 mx-auto mb-3 text-blue-500" />
                <div className="text-2xl font-bold text-gray-800 dark:text-white mb-1">{stat.value}</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;