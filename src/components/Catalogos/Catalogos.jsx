import React, { useState, useRef, useEffect } from 'react';
import estilos from '../LandingPages/LandingPages.module.css';
import { FaAngleRight, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const projetos = [
    {
        titulo: 'CineDev',
        tecnologias: 'JavaScript, Node.js, Fetch-Api',
        link: 'https://cinedev-project.vercel.app',
        imagem: '/img/preview/projeto-2.png',
    },
    {
        titulo: 'CineDev',
        tecnologias: 'JavaScript, Node.js, Fetch-Api',
        link: 'https://cinedev-project.vercel.app',
        imagem: '/img/preview/projeto-2.png',
    },
];

const PageCatalogos = () => {
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
            <h1 style={{ marginTop: '80px' }} className={estilos.subtitulo}>Catálogos</h1>
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

export default PageCatalogos;
