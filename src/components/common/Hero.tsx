import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaCode, FaPaintBrush, FaArrowRight } from "react-icons/fa";
import { SiReact, SiTypescript } from "react-icons/si";

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-[rgb(16,23,28)] px-6 py-20">

      {/* glow background */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-cyan-500/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      <div className="absolute top-40 left-0 w-[600px] h-[600px] bg-teal-500/5 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/3 pointer-events-none" />

      <div className="container mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">

        {/* container textos */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-start space-y-8"
        >
          {/* badge disponibilidade */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-500/10 backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
            </span>
            <span className="text-xs font-mono text-cyan-300 uppercase tracking-widest">Open to Work</span>
          </div>

          <motion.h1 className="text-5xl font-black leading-[1.1] tracking-tighter text-white sm:text-7xl md:text-7xl">
            Criando no <br className="hidden sm:block" />
            limite entre
            {" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#46a7e8] to-[#8dcffb] pr-1">
              Código
            </span>
            <br /> e
            {" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8dcffb] to-[#46a7e8] pr-1">
              Design
            </span>.
          </motion.h1>

          <p className="text-lg text-slate-400 max-w-lg leading-relaxed">
            Olá, sou o Luiz. Minha missão é unir a robustez do back-end com a fluidez do front-end para criar produtos digitais que realmente resolvem problemas reais.
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <button className="group relative px-8 py-4 bg-[#46a7e8] rounded-full text-white font-bold overflow-hidden shadow-lg shadow-cyan-900/20 transition-all hover:scale-105 hover:shadow-cyan-500/40">
              <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-shimmer" />
              <span className="flex items-center gap-2">
                Ver Projetos <FaArrowRight size={14} className="-rotate-45 group-hover:rotate-0 transition-transform" />
              </span>
            </button>

            <div className="flex items-center gap-4 px-6">
              <a href="#" className="text-slate-400 hover:text-white transition-colors"><FaGithub size={24} /></a>
              <a href="#" className="text-slate-400 hover:text-cyan-400 transition-colors"><FaLinkedin size={24} /></a>
            </div>
          </div>
        </motion.div>

        {/* cards */}
        <div className="relative h-[400px] md:h-[500px] w-full block perspective-1000 mt-12 lg:mt-0">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0, rotate: -6 }}
            className="absolute top-0 left-0 md:top-10 md:left-10 w-[320px] md:w-80 p-6 bg-[#1e293b]/80 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl z-20 scale-90 md:scale-100"
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
            </div>
            <div className="space-y-2 font-mono text-xs">
              <div className="text-slate-400">// Foeger.tsx</div>
              <div className="text-purple-400">const <span className="text-yellow-300">Developer</span> = {'{'}</div>
              <div className="pl-4 text-cyan-300">stack: <span className="text-orange-300">['Front-End', 'Back-End']</span>,</div>
              <div className="pl-4 text-cyan-300">passion: <span className="text-green-300">true</span></div>
              <div className="text-purple-400">{'}'};</div>
            </div>
            <SiReact className="absolute -bottom-6 -right-6 text-cyan-500/20 text-9xl animate-spin-slow pointer-events-none" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0, rotate: 6 }}
            className="absolute top-32 right-0 md:top-24 md:right-10 w-[260px] md:w-72 h-72 md:h-80 bg-gradient-to-br from-cyan-600 to-teal-700 rounded-2xl shadow-2xl flex flex-col items-center justify-center text-white z-10 border border-white/10 scale-90 md:scale-100"
          >
            <div className="text-6xl mb-2"><FaPaintBrush /></div>
            <h3 className="font-bold text-xl tracking-wider">UI / UX</h3>
            <p className="text-cyan-100 text-sm opacity-80 mt-2">Graphic & Interface Designer</p>

            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-20 mix-blend-overlay"></div>
          </motion.div>

          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            // className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 mb:bottom-16 w-24 h-24 flex items-center justify-center"
            // Adaptação para responsividade para bottom 10 no desktop e menos em telas menores
            className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 mb:bottom-30 w-24 h-24 flex items-center justify-center">
            <div className="w-24 h-24 bg-[#007acc] rounded-2xl flex items-center justify-center shadow-lg shadow-blue-500/30 border-4 border-[rgb(16,23,28)]">
              <SiTypescript className="text-white text-5xl" />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;