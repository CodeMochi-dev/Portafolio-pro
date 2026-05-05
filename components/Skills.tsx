import React from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Server, Palette, Users, Lightbulb } from 'lucide-react';

interface Skill {
  name: string;
  level: number;
  icon: React.ComponentType<{ className?: string }>;
}

interface SkillCategory {
  title: string;
  icon: React.ComponentType<{ className?: string }>;
  skills: Skill[];
}

const skillCategories: SkillCategory[] = [
  {
    title: 'Frontend',
    icon: Code,
    skills: [
      { name: 'React/Next.js', level: 95, icon: Code },
      { name: 'TypeScript', level: 90, icon: Code },
      { name: 'Tailwind CSS', level: 92, icon: Palette },
      { name: 'JavaScript', level: 95, icon: Code },
    ],
  },
  {
    title: 'Backend',
    icon: Server,
    skills: [
      { name: 'Node.js', level: 88, icon: Server },
      { name: 'Python', level: 85, icon: Code },
      { name: 'Express.js', level: 90, icon: Server },
      { name: 'REST APIs', level: 92, icon: Server },
    ],
  },
  {
    title: 'Bases de Datos',
    icon: Database,
    skills: [
      { name: 'MongoDB', level: 87, icon: Database },
      { name: 'PostgreSQL', level: 85, icon: Database },
      { name: 'Redis', level: 80, icon: Database },
      { name: 'MySQL', level: 83, icon: Database },
    ],
  },
  {
    title: 'DevOps',
    icon: Server,
    skills: [
      { name: 'Docker', level: 82, icon: Server },
      { name: 'AWS', level: 78, icon: Server },
      { name: 'Git', level: 95, icon: Code },
      { name: 'CI/CD', level: 80, icon: Server },
    ],
  },
  {
    title: 'Diseño',
    icon: Palette,
    skills: [
      { name: 'Figma', level: 85, icon: Palette },
      { name: 'UI/UX', level: 88, icon: Palette },
      { name: 'Responsive Design', level: 95, icon: Palette },
      { name: 'Adobe XD', level: 75, icon: Palette },
    ],
  },
  {
    title: 'Soft Skills',
    icon: Users,
    skills: [
      { name: 'Trabajo en Equipo', level: 95, icon: Users },
      { name: 'Comunicación', level: 90, icon: Users },
      { name: 'Resolución de Problemas', level: 92, icon: Lightbulb },
      { name: 'Aprendizaje Continuo', level: 95, icon: Lightbulb },
    ],
  },
];

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Habilidades
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Tecnologías y competencias que domino para crear soluciones excepcionales.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-50 dark:bg-gray-900 rounded-2xl p-6 shadow-xl backdrop-blur-sm bg-white/80 dark:bg-gray-900/80 hover:shadow-2xl transition-shadow"
            >
              <div className="flex items-center mb-6">
                <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl mr-4">
                  <category.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                  {category.title}
                </h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: skillIndex * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-700 dark:text-gray-300 font-medium">
                        {skill.name}
                      </span>
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1.5, delay: skillIndex * 0.1, ease: "easeOut" }}
                        viewport={{ once: true }}
                        className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full relative"
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full animate-pulse"></div>
                      </motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills Tags */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-semibold mb-8 text-gray-800 dark:text-white">
            Tecnologías Adicionales
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              'GraphQL', 'WebSockets', 'Jest', 'Cypress', 'Webpack', 'Vite',
              'Framer Motion', 'Three.js', 'Socket.io', 'Prisma', 'tRPC', 'Zustand'
            ].map((tech, index) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium hover:shadow-lg transition-shadow cursor-default"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;