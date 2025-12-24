import React, { useEffect, useState } from 'react';
import estilos from './Hero.module.css';
import { FaSquareGithub, FaLinkedin, FaSquareBehance, FaSquareEnvelope } from 'react-icons/fa6';

// Definimos uma "Interface" para os nossos links, deixando o código limpo
interface SocialLink {
  href: string;
  icon: React.ReactNode;
  label: string;
}
const Hero: React.FC = () => {
  // O TypeScript infere que é um estado de string
  const [titulo, setTitulo] = useState<string>("{ Web Designer }");

  useEffect(() => {
    const titulos: string[] = [
      "{ Desenvolvedor Front-End }",
      "{ Designer Gráfico }",
      "{ Desenvolvedor Back-End }",
      "{ Web Designer }"
    ];
    let indiceAtual = 0;

    const intervalo = setInterval(() => {
      indiceAtual = (indiceAtual + 1) % titulos.length;
      setTitulo(titulos[indiceAtual]);
    }, 2000);

    return () => clearInterval(intervalo);
  }, []);

  // Centralizei os dados em um array para um código mais DRY (Don't Repeat Yourself)
  const links: SocialLink[] = [
    { href: "https://github.com/luiz-foeger", icon: <FaSquareGithub />, label: "GitHub" },
    { href: "https://www.linkedin.com/in/luiz-foeger/", icon: <FaLinkedin />, label: "LinkedIn" },
    { href: "https://www.behance.net/plenta", icon: <FaSquareBehance />, label: "Behance" },
    { href: "mailto:foegerluiz@gmail.com", icon: <FaSquareEnvelope />, label: "E-mail" },
  ];

  return (
    <section className={`min-h-screen py-20 flex flex-col justify-center items-center text-center bg-cover bg-center ${estilos.sectionIntroducao}`}>
      <div className="mb-8 px-4">
        <h2 className="text-3xl md:text-5xl text-white my-4">Olá, Bem vindo! ☕</h2>

        <h1 className="text-5xl md:text-8xl text-white font-bold m-0 leading-tight">
          Me chamo <strong className={`text-6xl md:text-9xl mr-1.5 ${estilos.strongLetter}`}>L</strong>uiz
          <strong className={`text-6xl md:text-9xl mr-1.5 ml-2 ${estilos.strongLetter}`}>F</strong>elipe
        </h1>

        <h3 className="text-3xl md:text-5xl leading-[2em] text-[#8dcffb] min-h-[2em]">
          {titulo}
        </h3>
      </div>

      <div className="flex flex-wrap justify-center gap-6 md:gap-5 mt-8">
        {links.map((link) => (
          <div key={link.label} className={`group flex flex-col items-center ${estilos.iconWrapper}`}>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={link.href}
              className="text-white text-5xl md:text-6xl p-2 transition-all duration-300"
            >
              {React.isValidElement(link.icon) && React.cloneElement(link.icon as React.ReactElement<any>, {
                className: `${estilos.icon} transition-transform duration-300`
              })}
            </a>
            <p className="text-transparent text-sm transition-all duration-300 group-hover:text-white">
              {link.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Hero;