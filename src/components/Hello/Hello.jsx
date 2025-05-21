import React, { useEffect } from 'react';
import estilos from './Hello.module.css';
import { FaSquareGithub, FaLinkedin, FaSquareBehance, FaSquareEnvelope } from 'react-icons/fa6';

function Hello() {
  useEffect(() => {
    const titulos = [
      "{ Desenvolvedor Front-End }",
      "{ Designer Gráfico }",
      "{ Desenvolvedor Back-End }",
      "{ Web Designer }"
    ];
    let indiceAtual = 0;

    const intervalo = setInterval(() => {
      const tituloEl = document.getElementById('titulo');
      if (tituloEl) {
        indiceAtual = (indiceAtual + 1) % titulos.length;
        tituloEl.textContent = titulos[indiceAtual];
      }
    }, 2000);

    return () => clearInterval(intervalo); // limpar intervalo quando o componente for desmontado
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sectionSobre = document.querySelector('.section-sobre');
      const sectionProjetos = document.querySelector('.section-projetos');

      if (sectionSobre && sectionProjetos) {
        const posicaoSection = sectionSobre.getBoundingClientRect().top;
        const posicaoSectionSeguinte = sectionProjetos.getBoundingClientRect().top;
        const posicaoTela = window.innerHeight / 1.3;
        const posicaoTela2 = window.innerHeight / 1.6;

        if (posicaoSection < posicaoTela) {
          sectionSobre.classList.add('visible');
        }

        if (posicaoSectionSeguinte < posicaoTela2) {
          sectionProjetos.classList.add('visible');
        }
      }

      const fadeInSection = document.querySelector('.fade-in');
      const fadeInBelowSection = document.querySelector('.fade-in-below');

      if (fadeInSection && fadeInBelowSection) {
        const sectionPosition = fadeInSection.getBoundingClientRect().top;
        const belowSectionPosition = fadeInBelowSection.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;

        if (sectionPosition < screenPosition) {
          fadeInSection.classList.add('visible');
        }

        if (belowSectionPosition < screenPosition) {
          fadeInBelowSection.classList.add('visible');
        }
      }
    };

    document.addEventListener('scroll', handleScroll);
    return () => document.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className={estilos.sectionIntroducao}>
      <div>
        <h2>Olá, Bem vindo! ☕</h2>
        <h1>Me chamo <strong>L</strong>uiz <strong>F</strong>elipe</h1>
        <h3 className={estilos.colorido} id="titulo">&#123; Web Designer &#125;</h3>
      </div>

      <section className={estilos.links}>
        <div>
          <a target="_blank" rel="noopener noreferrer" href="https://github.com/luiz-foeger">
            <FaSquareGithub className={estilos.icon} />
          </a>
          <p>GitHub</p>
        </div>
        <div>
          <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/luiz-foeger/">
            <FaLinkedin className={estilos.icon} />
          </a>
          <p>LinkedIn</p>
        </div>
        <div>
          <a target="_blank" rel="noopener noreferrer" href="https://www.behance.net/plenta">
            <FaSquareBehance className={estilos.icon} />
          </a>
          <p>Behance</p>
        </div>
        <div>
          <a target="_blank" rel="noopener noreferrer" href="mailto:foegerluiz@gmail.com">
            <FaSquareEnvelope className={estilos.icon} />
          </a>
          <p>E-mail</p>
        </div>
      </section>
    </section>
  );
}

export default Hello;
