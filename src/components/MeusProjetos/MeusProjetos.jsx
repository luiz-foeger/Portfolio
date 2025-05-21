import React, { useState, useRef, useEffect } from 'react';
import estilos from './MeusProjetos.module.css';
import { FaAngleRight, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const projetos = [
    {
        titulo: 'Street&Wear',
        tecnologias: 'Loja Online',
        link: 'https://streetwear-project.vercel.app',
        imagem: 'https://res.cloudinary.com/dsmx8c5ug/image/upload/v1747835368/d7dec3e9-968d-4bd9-ad1b-e31bd0042dd8.png',
    },
    {
        titulo: 'CineDev',
        tecnologias: 'Catálogo Online',
        link: 'https://cinedev-project.vercel.app',
        imagem: 'https://res.cloudinary.com/dsmx8c5ug/image/upload/v1747835825/09bf52fc-277f-4396-a9c4-f7c765fcc8a4.png',
    },
    {
        titulo: 'EA SPORTS FC™ 24',
        tecnologias: 'Landing Page',
        link: 'https://res.cloudinary.com/dsmx8c5ug/image/upload/v1747846270/eb842b9e-e0e6-4253-a038-58952a1e1ed2.png',
        imagem: '/img/preview/projeto-1.png',
    },
    {
        titulo: 'Academia Equilíbrio',
        tecnologias: 'Landing Page',
        link: 'https://res.cloudinary.com/dsmx8c5ug/image/upload/v1747846279/2dec39bb-e83c-453b-a3d5-d53cd8e83a77.png',
        imagem: '/img/preview/projeto-4.png',
    },
];

const MeusProjetos = () => {
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
            <h1 id='projetos' style={{ marginTop: '80px' }} className={estilos.subtitulo}>Meus Projetos</h1>
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

export default MeusProjetos;
