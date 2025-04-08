import React, { useState, useRef, useEffect } from 'react';
import estilos from './LandingPages.module.css';
import { FaAngleRight, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const projetos = [
    {
        titulo: 'EA SPORTS FC™ 24',
        tecnologias: 'JavaScript, HTML, CSS',
        link: 'https://ea-sports-fc.vercel.app',
        imagem: '/img/preview/projeto-1.png',
    },
    {
        titulo: 'Academia Equilíbrio',
        tecnologias: 'JavaScript, HTML, CSS',
        link: 'https://academia-equilibrio.vercel.app/',
        imagem: '/img/preview/projeto-4.png',
    },
];

const PageLandingPages = () => {
    const [indiceAtual, setIndiceAtual] = useState(0);
    const carouselRef = useRef(null);

    useEffect(() => {
        const offset = -indiceAtual * 100;
        if (carouselRef.current) {
            carouselRef.current.style.transform = `translateX(${offset}%)`;
        }
    }, [indiceAtual]);

    const proximo = () => {
        setIndiceAtual((prevIndex) =>
            prevIndex < projetos.length - 1 ? prevIndex + 1 : 0
        );
    };

    const anterior = () => {
        setIndiceAtual((prevIndex) =>
            prevIndex > 0 ? prevIndex - 1 : projetos.length - 1
        );
    };

    return (
        <>
            <h1 style={{ marginTop: '100px' }} className={estilos.subtitulo}>Landing Pages</h1>
            <section className={estilos.sectionProjetos}>

                <section className={estilos.carousel}>
                    <div
                        className={estilos.carouselInner}
                        ref={carouselRef}
                        style={{
                            display: 'flex',
                            transition: 'transform 0.5s ease-in-out',
                            width: `${projetos.length * 100}%`,
                        }}
                    >
                        {projetos.map((projeto, index) => (
                            <div
                                key={index}
                                className={estilos.carouselItem}
                                style={{ width: '100%' }}
                            >
                                <h3>{projeto.titulo}</h3>
                                <p>{projeto.tecnologias}</p>
                                <a
                                    href={projeto.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Visualizar <FaAngleRight />
                                </a>
                                <div className={estilos.divProjeto}>
                                    <img
                                        src="/img/laptop.png"
                                        alt="Imagem de laptop"
                                        className={estilos.laptop}
                                    />
                                    <div className={estilos.divImagem}>
                                        <img
                                            src={projeto.imagem}
                                            alt={`Demonstração de ${projeto.titulo}`}
                                            className={estilos.demoProjeto}
                                        />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className={estilos.carouselButtons}>
                        <button onClick={anterior}>
                            <FaChevronLeft />
                        </button>
                        <button onClick={proximo}>
                            <FaChevronRight />
                        </button>
                    </div>
                </section>
            </section>
        </>
    );
};

export default PageLandingPages;
