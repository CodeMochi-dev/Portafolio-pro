"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Mail,
  MapPin,
  ExternalLink,
  Code2,
  Terminal,
  Database,
  Layout,
  ChevronRight,
  Globe,
  Briefcase,
  Sparkles,
  ArrowRight
} from "lucide-react";

export default function Portfolio() {
  const [mounted, setMounted] = useState(false);
  const [activeSection, setActiveSection] = useState("inicio");

  useEffect(() => {
    // eslint-disable-next-line
    setMounted(true);
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      let current = "inicio";
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (window.scrollY >= sectionTop - 200) {
          current = section.getAttribute("id") || "inicio";
        }
      });
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const tools = ["Vue.js", "JavaScript", "HTML5", "CSS3", "Firebase", "Git", "Tailwind CSS"];

  const projects = [
    {
      title: "EcoMarket",
      description:
        "Showcase de Productos Digitales con Vue.js. Arquitectura SPA con componentes reutilizables, estados reactivos y localización completa para el mercado chileno (CLP/Español). Diseño premium con Glassmorphism.",
      tags: ["Vue.js", "Composition API", "Scoped CSS", "Responsive Design"],
      icon: <Globe className="w-5 h-5 text-emerald-400 group-hover:text-teal-300 transition-colors" />,
      image: "/mockups/Ecomarket.png",
    },
    {
      title: "LibroApp",
      description:
        "Gestión de Catálogo Educativo. CRUD completo con integración de Firebase Firestore. Filtrado avanzado y experiencia de usuario fluida con arquitectura de datos escalable.",
      tags: ["Vue.js", "Firebase", "CRUD", "Firestore"],
      icon: <Database className="w-5 h-5 text-emerald-400 group-hover:text-teal-300 transition-colors" />,
      image: "/mockups/Libroapp.png",
    },
    {
      title: "SmartBudget",
      description:
        "Aplicación de Presupuesto Personal. Arquitectura moderna para gestión financiera personal, orientada al mercado global con diseño intuitivo.",
      tags: ["Vue.js", "JavaScript", "CSS3"],
      icon: <Layout className="w-5 h-5 text-emerald-400 group-hover:text-teal-300 transition-colors" />,
      image: "/mockups/SmartBudget.png",
    },
    {
      title: "Alkemi Wallet",
      description:
        "Mi primer proyecto de desarrollo. Aplicación web desarrollada desde cero aplicando fundamentos de HTML, CSS y JavaScript con control de versiones profesional.",
      tags: ["HTML", "CSS", "JavaScript", "Git", "GitHub"],
      icon: <Terminal className="w-5 h-5 text-emerald-400 group-hover:text-teal-300 transition-colors" />,
      image: "/mockups/AlkemiWallet1.png",
    },
  ];

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-[#030712] text-slate-300 font-sans selection:bg-emerald-500/30 selection:text-emerald-200 overflow-x-hidden">
      {/* Decorative Background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] rounded-full bg-emerald-900/10 blur-[150px]" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] rounded-full bg-teal-900/10 blur-[150px]" />
        <div className="absolute top-[40%] left-[50%] w-[40%] h-[40%] rounded-full bg-indigo-900/5 blur-[120px] translate-x-[-50%]" />
        <div className="absolute inset-0 opacity-[0.015] mix-blend-overlay" style={{ backgroundImage: "url('./noise.png')" }}></div>
      </div>

      {/* Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-[#030712]/70 backdrop-blur-xl border-b border-white/[0.05]">
        <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2 group cursor-pointer"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500/20 to-teal-500/20 border border-emerald-500/30 group-hover:border-emerald-400/50 transition-colors">
              <span className="text-xl font-bold bg-gradient-to-br from-emerald-400 to-teal-200 bg-clip-text text-transparent">
                V
              </span>
            </div>
            <span className="text-lg font-bold tracking-tight text-slate-200 group-hover:text-white transition-colors hidden sm:block">
              Valentina<span className="text-emerald-400">.</span>
            </span>
          </motion.div>
          <motion.nav
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="hidden md:flex items-center gap-1 p-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md"
          >
            {[
              { name: "Inicio", href: "#inicio" },
              { name: "Proyectos", href: "#proyectos" },
              { name: "Sobre mí", href: "#sobre-mi" },
            ].map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeSection === item.href.slice(1)
                    ? "bg-slate-800/80 text-white shadow-sm"
                    : "text-slate-400 hover:text-white hover:bg-white/5"
                }`}
              >
                {item.name}
              </a>
            ))}
            <a
              href="#contacto"
              className="ml-2 px-5 py-2 rounded-full text-sm font-semibold bg-emerald-500/10 text-emerald-400 hover:bg-emerald-500 hover:text-white transition-all duration-300 border border-emerald-500/20 hover:border-emerald-500 hover:shadow-[0_0_15px_rgba(16,185,129,0.3)]"
            >
              Contacto
            </a>
          </motion.nav>
        </div>
      </header>

      <main className="relative z-10 pt-32 pb-20 px-6 max-w-6xl mx-auto flex flex-col gap-32">
        {/* Impactful Header Section instead of just banner */}
        <section id="inicio" className="scroll-mt-32">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="flex flex-col items-center text-center gap-12"
          >
            {/* Banner Section - Optimized size and centering */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="w-full flex justify-center"
            >
              <div className="relative w-[85%] sm:w-[70%] max-w-[900px] aspect-[21/7] rounded-[20px] overflow-hidden border border-white/10 shadow-2xl group">
                <Image 
                  src="/mockups/banner.jpg" 
                  alt="Valentina Paz Portfolio Banner" 
                  fill
                  priority
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#030712]/60 via-transparent to-transparent" />
              </div>
            </motion.div>

            {/* Main Hero Content */}
            <div className="max-w-4xl space-y-8">
              <motion.div variants={fadeInUp} className="relative w-28 h-28 mx-auto -mb-4">
                <div className="absolute inset-0 bg-emerald-500 rounded-full blur-xl opacity-20 animate-pulse"></div>
                <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-emerald-500/30 p-1 bg-white/5 backdrop-blur-md">
                  <div className="w-full h-full rounded-full overflow-hidden relative">
                    <Image 
                      src="/mockups/foto de perfil.png" 
                      alt="Valentina Paz Profile" 
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </motion.div>
              <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-medium w-max backdrop-blur-md shadow-[0_0_20px_rgba(16,185,129,0.1)] mx-auto">
                <Sparkles className="w-4 h-4" />
                <span>Frontend Specialist · Vue.js & Next.js</span>
              </motion.div>

              <motion.h1 variants={fadeInUp} className="text-5xl sm:text-7xl lg:text-8xl font-black text-white tracking-tighter leading-[1.05]">
                Diseño que Conecta, <br />
                <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-indigo-400 bg-clip-text text-transparent drop-shadow-sm">
                  Código que Escala
                </span>
              </motion.h1>

              <motion.div variants={fadeInUp} className="max-w-2xl mx-auto">
                <h2 className="text-xl sm:text-2xl text-slate-300 font-light leading-relaxed">
                  Hola, soy <strong className="text-white font-semibold">Valentina Paz</strong> 👋. Junior Developer de Santiago, Chile. Transformo ideas complejas en experiencias digitales <span className="text-emerald-400 font-medium">vibrantes y sólidas</span> con un enfoque total en el usuario.
                </h2>
              </motion.div>

              <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-5 justify-center mt-10">
                <a href="#proyectos" className="inline-flex items-center gap-2 px-10 py-5 bg-emerald-500 text-slate-950 font-black rounded-2xl hover:bg-emerald-400 transition-all duration-300 transform hover:-translate-y-1 shadow-[0_10px_30px_rgba(16,185,129,0.3)]">
                  Ver Proyectos <ArrowRight className="w-5 h-5" />
                </a>
                <a href="https://linkedin.com/in/valentinapaz" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-10 py-5 bg-white/5 text-white font-bold rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300 backdrop-blur-sm">
                  <Linkedin className="w-5 h-5 text-emerald-400" /> Mi Conexión
                </a>
              </motion.div>
              <motion.div variants={staggerContainer} className="flex flex-wrap gap-4 justify-center mt-12">
                {[
                  { icon: <MapPin className="w-4 h-4 text-emerald-400" />, text: "Santiago, Chile" },
                  { icon: <Briefcase className="w-4 h-4 text-emerald-400" />, text: "Disponible Remoto" },
                  { icon: <Mail className="w-4 h-4 text-emerald-400" />, text: "valentinapazll.r@gmail.com" },
                ].map((item, idx) => (
                  <motion.div key={idx} variants={fadeInUp} className="flex items-center gap-2.5 text-sm text-slate-300 bg-slate-800/40 backdrop-blur-md px-5 py-2.5 rounded-full border border-slate-700/50 hover:bg-slate-800/70 hover:border-slate-600 transition-colors">
                    {item.icon}
                    <span className="font-medium">{item.text}</span>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* About Section */}
        <section id="sobre-mi" className="scroll-mt-32">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center"
          >
            <div className="lg:col-span-7 space-y-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-sm font-semibold mb-2">
                <Code2 className="w-4 h-4" /> Sobre mí
              </div>
              <h3 className="text-4xl sm:text-5xl font-bold text-white tracking-tight">
                Diseño, construyo e <br className="hidden sm:block" />
                <span className="text-emerald-400">implanto soluciones.</span>
              </h3>
              <div className="space-y-5 text-slate-400 leading-relaxed text-lg">
                <p>
                  Soy una desarrolladora <strong className="text-white font-medium">Full Stack Junior</strong> con una gran pasión por el ecosistema Frontend moderno, en particular <span className="text-emerald-400">Vue.js</span>. Me encanta transformar ideas en experiencias digitales pulidas y de alto rendimiento.
                </p>
                <div className="pl-4 border-l-2 border-emerald-500/30 py-2">
                  <p className="italic text-slate-300">
                    &quot;Mi compromiso es hacia el código limpio, las arquitecturas escalables y experiencias de usuario que realmente dejan una marca.&quot;
                  </p>
                </div>
                <ul className="space-y-3 mt-6">
                  {[
                    "Desarrollo de SPAs dinámicas optimizadas con Vue 3 y Composition API.",
                    "Lógica de negocio sólida con JavaScript (ES6+) y TypeScript foundations.",
                    "Integración eficiente de datos con Firebase Firestore y Realtime DB.",
                    "Enfoque centrado en conversión (UX) y diseños Mobile-First.",
                    "Graduada: Desarrollo Front-end Trainee · ISEG / SENCE 2026."
                  ].map((text, i) => (
                    <li key={i} className="flex items-start gap-4">
                      <div className="w-6 h-6 rounded-full bg-emerald-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                         <ChevronRight className="w-4 h-4 text-emerald-400" />
                      </div>
                      <span className="text-slate-300">{text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="lg:col-span-5 flex flex-col gap-8">
              {/* Profile Image card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative group"
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-3xl blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
                <div className="relative aspect-square sm:aspect-[4/5] rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
                  <Image 
                    src="/mockups/foto de perfil.png" 
                    alt="Valentina Paz" 
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
              </motion.div>

              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-3xl blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
                <div className="relative bg-[#0b1120] rounded-3xl p-8 border border-white/10 shadow-2xl">
                  <div className="space-y-8">
                    <div>
                      <h4 className="flex items-center gap-3 text-white font-semibold text-lg mb-4">
                        <Terminal className="w-5 h-5 text-emerald-400" />
                        Stack Principal
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {tools.map(tech => (
                          <span key={tech} className="px-3.5 py-1.5 bg-slate-800/50 text-slate-300 text-sm font-medium rounded-lg border border-slate-700/50 hover:border-emerald-500/50 hover:text-emerald-300 transition-colors cursor-default">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="pt-8 border-t border-slate-800">
                      <h4 className="flex items-center gap-3 text-white font-semibold text-lg mb-4">
                        <Database className="w-5 h-5 text-indigo-400" />
                        Herramientas & Entorno
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {["VS Code", "Vercel", "GitHub Actions", "Figma", "NPM / Yarn", "Java"].map(tech => (
                          <span key={tech} className="px-3.5 py-1.5 bg-slate-800/50 text-slate-300 text-sm font-medium rounded-lg border border-slate-700/50 cursor-default hover:border-indigo-500/50 hover:text-indigo-300 transition-colors">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Projects Section */}
        <section id="proyectos" className="scroll-mt-32">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16"
          >
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-teal-500/10 border border-teal-500/20 text-teal-400 text-sm font-semibold mb-4">
                <Layout className="w-4 h-4" /> Portafolio
              </div>
              <h3 className="text-4xl sm:text-5xl font-bold text-white tracking-tight">Proyectos Destacados</h3>
              <p className="text-slate-400 text-lg mt-4">Una selección de aplicaciones web donde aplico las mejores prácticas de la industria, desde la arquitectura de datos hasta el último pixel visual.</p>
            </div>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            {projects.map((project, idx) => (
              <motion.div
                key={project.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0, transition: { delay: idx * 0.1, duration: 0.6 } }
                }}
                className="group relative bg-[#0b1120] backdrop-blur-xl rounded-3xl border border-white/10 hover:border-emerald-500/40 transition-all duration-500 overflow-hidden flex flex-col h-full hover:shadow-[0_0_40px_rgba(16,185,129,0.1)]"
              >
                {/* Image Container */}
                <div className="w-full aspect-[16/9] sm:h-64 overflow-hidden relative border-b border-white/5">
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0b1120] to-transparent z-10 opacity-80 group-hover:opacity-40 transition-opacity duration-500" />
                  <div className="absolute inset-0 bg-emerald-900/20 group-hover:bg-transparent transition-colors duration-500 z-10 mix-blend-overlay" />
                  <Image 
                    src={project.image} 
                    alt={project.title} 
                    fill 
                    style={{ objectFit: 'cover' }}
                    className="transform group-hover:scale-110 transition-transform duration-700 ease-in-out" 
                  />
                  <div className="absolute top-5 right-5 z-20 p-3 bg-[#030712]/80 backdrop-blur-xl rounded-2xl border border-white/10 shadow-xl opacity-90 group-hover:opacity-100 group-hover:-translate-y-1 transition-all duration-300">
                    {project.icon}
                  </div>
                </div>
                
                {/* Content Container */}
                <div className="p-8 sm:p-10 flex flex-col flex-grow relative z-20 bg-gradient-to-b from-transparent to-[#0b1120]">
                  <h4 className="text-3xl font-bold text-white mb-4 group-hover:text-emerald-400 transition-colors">
                    {project.title}
                  </h4>
                
                  <p className="text-slate-400 leading-relaxed mb-8 flex-grow text-[1.05rem]">
                    {project.description}
                  </p>

                  <div className="space-y-8 mt-auto">
                    <div className="flex flex-wrap gap-2.5">
                      {project.tags.map(tag => (
                        <span key={tag} className="px-3 py-1 text-xs font-semibold tracking-wide text-emerald-300 bg-emerald-500/10 border border-emerald-500/20 rounded-lg">
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex items-center gap-5 pt-6 border-t border-slate-800">
                      <a href="#" className="flex items-center gap-2.5 text-sm font-semibold text-white hover:text-emerald-400 transition-colors group/link">
                        <ExternalLink className="w-4 h-4 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5 transition-transform" /> Demo en vivo
                      </a>
                      <a href="#" className="flex items-center gap-2.5 text-sm font-semibold text-white hover:text-emerald-400 transition-colors group/link">
                        <Github className="w-4 h-4 group-hover/link:rotate-[360deg] transition-transform duration-500" /> Repositorio
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="mt-16 text-center relative overflow-hidden bg-gradient-to-br from-slate-900/80 to-slate-900/40 rounded-[2rem] p-12 border border-slate-800 backdrop-blur-sm"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-[80px]" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-500/10 rounded-full blur-[80px]" />
            
            <div className="relative z-10">
              <div className="inline-flex p-4 rounded-2xl bg-white/5 border border-white/10 mb-6 text-white">
                <Github className="w-8 h-8" />
              </div>
              <h4 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                ¿Buscas ver más código?
              </h4>
              <p className="text-slate-400 mb-8 max-w-xl mx-auto text-lg">
                Explora mi perfil completo de GitHub donde alojo distintos repositorios, contribuciones, pequeñas aplicaciones y prácticas.
              </p>
              <a href="https://github.com/CodeMochi-dev" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 px-8 py-4 bg-emerald-500 text-slate-950 font-bold rounded-2xl hover:bg-emerald-400 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(16,185,129,0.3)]">
                Visitar GitHub <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </motion.div>
        </section>

        {/* Footer / Contact */}
        <footer id="contacto" className="border-t border-white/10 pt-20 mt-10 pb-10 scroll-mt-32 relative">
          <div className="absolute top-[-1px] left-1/2 -translate-x-1/2 w-1/3 h-[1px] bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent"></div>
          
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="flex flex-col items-center text-center max-w-2xl mx-auto"
          >
            <div className="w-16 h-16 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-3xl flex items-center justify-center mb-8 rotate-3 shadow-[0_0_30px_rgba(16,185,129,0.3)]">
              <Mail className="w-8 h-8 text-slate-950 rotate-[-3deg]" />
            </div>
            <h3 className="text-4xl sm:text-5xl font-black text-white mb-6 tracking-tight">Tomemos un <span className="text-emerald-400">Café ☕</span></h3>
            <p className="text-slate-400 mb-10 text-lg sm:text-xl leading-relaxed">
              Actualmente estoy abierta a nuevas oportunidades laborales. <br className="hidden sm:block"/> 
              Si quieres hablar de un proyecto o saludar, enviame un correo.
            </p>
            
            <div className="flex justify-center flex-wrap gap-4 mb-20">
              <a href="mailto:valentinapazll.r@gmail.com" className="flex items-center gap-3 px-8 py-4 bg-white text-slate-900 hover:bg-emerald-400 hover:text-white font-bold rounded-2xl transition-all duration-300 hover:shadow-[0_10px_20px_rgba(52,211,153,0.3)] group">
                <Mail className="w-5 h-5 transition-transform group-hover:scale-110" /> Escríbeme
              </a>
              <a href="https://linkedin.com/in/valentinapaz" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 px-8 py-4 bg-slate-800 text-white font-semibold rounded-2xl border border-slate-700 hover:bg-slate-700 hover:border-slate-500 transition-all duration-300">
                <Linkedin className="w-5 h-5" /> LinkedIn
              </a>
            </div>

            <div className="w-full border-t border-white/5 pt-10 flex flex-col sm:flex-row justify-between items-center gap-4 text-slate-500 text-sm">
              <p>
                © {new Date().getFullYear()} Valentina Paz. Todos los derechos reservados.
              </p>
              <div className="flex items-center gap-2">
                <span>Made with</span>
                <span className="text-emerald-400">❤</span>
                <span>in Chile</span>
              </div>
            </div>
          </motion.div>
        </footer>
      </main>
    </div>
  );
}
