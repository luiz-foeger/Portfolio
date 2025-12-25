import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import estilos from './Hero.module.css';
import { FaSquareGithub, FaLinkedin, FaSquareBehance, FaSquareEnvelope } from 'react-icons/fa6';
import { HiArrowDown } from 'react-icons/hi2';

interface SocialLink {
  href: string;
  icon: React.ReactNode;
  label: string;
}

const Hero: React.FC = () => {

  const roles = [
    "TypeScript Enthusiast",
    "React Developer",
    "UI/UX Designer",
    "Front-End Specialist",
    "Creative Developer",
  ];

  const [roleIndex, setRoleIndex] = useState(0);

  // Troca apenas o texto do cargo a cada 2.5s
  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 2500);
    return () => clearInterval(interval);
  }, [roles.length]);

  const links: SocialLink[] = [
    { href: "https://github.com/luiz-foeger", icon: <FaSquareGithub />, label: "GitHub" },
    { href: "https://www.linkedin.com/in/luizfoeger/", icon: <FaLinkedin />, label: "LinkedIn" },
    { href: "https://www.behance.net/foeger", icon: <FaSquareBehance />, label: "Behance" },
    { href: "mailto:foegerluiz@gmail.com", icon: <FaSquareEnvelope />, label: "E-mail" },
  ];

  return (
    // <section className={`relative min-h-screen py-20 flex flex-col justify-center items-center text-center bg-neutral-950 overflow-hidden ${estilos.sectionIntroducao}`}>
    <section className={`relative min-h-screen py-20 flex flex-col justify-center items-center text-center overflow-hidden ${estilos.sectionIntroducao}`}>

      {/* background effect */}
      {/* <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" /> */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full blur-[120px] pointer-events-none" />

      <div className="z-10 flex flex-col items-center px-4 w-full max-w-7xl">

        {/* <span className="text-neutral-400 font-medium tracking-wider text-sm md:text-base uppercase mb-6 animate-pulse">
          Olá, bem-vindo! ☕
        </span> */}

        <span className="text-neutral-400 font-medium tracking-wider text-sm md:text-base uppercase mb-6">
          Olá, bem-vindo!
        </span>

        <h1 className="text-5xl md:text-8xl text-white font-bold m-0 leading-tight tracking-tight mb-2">
          Me chamo <br className="md:hidden" />
          <span className="inline-block text-white drop-shadow-xl font-bold">
            Luiz Felipe
          </span>
        </h1>

        {/* skills */}
        <div className="mt-61 flex justify-center items-center h-24 w-full max-w-4xl overflow-hidden relative">
          <AnimatePresence mode="wait">
            <motion.span
              key={roles[roleIndex]}
              className="absolute w-full text-center text-xl md:text-4xl font-bold tracking-wide text-[#8dcffb] px-4 font-sans"

              initial={{ y: 40, opacity: 0, filter: 'blur(5px)' }}  // Começa mais embaixo
              animate={{ y: 0, opacity: 1, filter: 'blur(0px)' }}   // Sobe e foca no centro
              exit={{ y: -40, opacity: 0, filter: 'blur(5px)' }}    // Sai mais pra cima

              transition={{ duration: 0.5, ease: "backOut" }}
            >
              {roles[roleIndex]}
            </motion.span>
          </AnimatePresence>
        </div>

        {/* CTA */}
        {/* <div className="mt-10 mb-12">
          <a
            href="#projetos"
            className="px-8 py-3.5 rounded-full bg-white text-black font-semibold text-sm tracking-wide hover:bg-blue-50 transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.15)] hover:shadow-[0_0_35px_rgba(255,255,255,0.4)] hover:-translate-y-1 flex items-center gap-2"
          >
            Conheça meu trabalho
          </a>
        </div> */}

        {/* social medias */}
        <div className="flex flex-wrap justify-center gap-5 mt-10">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-400 hover:text-white hover:-translate-y-1 transition-all duration-300 text-5xl"
              aria-label={link.label}
            >
              {link.icon}
            </a>
          ))}
        </div>
      </div>

      <div className="absolute bottom-8 left-1-translate-x-1/2 animate-bounce text-neutral-600 opacity-70">
        <HiArrowDown size={24} />
      </div>

    </section>
  );
}

export default Hero;