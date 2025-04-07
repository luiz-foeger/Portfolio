import React from 'react';
import { Link } from 'react-router-dom';
import estilos from './MeusProjetos.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';

const MeusProjetos = () => {
    return (
        <>
            <>
                <h1 id="section-projetos" className={estilos.subtitulo}>Meus Projetos</h1><br />
                <section className={estilos.sectionTipos}>
                    <Link to="/projetos/landing-pages" id="tipo-1" style={{ borderLeft: '1px solid #21262d' }}>
                        <div>
                            <p>Landing Pages</p>
                            <h4>
                                Ver projetos <FontAwesomeIcon icon={faAngleRight} />
                            </h4>
                        </div>
                    </Link>

                    <Link to="/projetos/catalogos" id="tipo-2">
                        <div>
                            <p>Catálogos</p>
                            <h4>
                                Ver projetos <FontAwesomeIcon icon={faAngleRight} />
                            </h4>
                        </div>
                    </Link>

                    <Link to="/projetos/e-commerce" id="tipo-3">
                        <div>
                            <p>E-commerce</p>
                            <h4>
                                Ver projetos <FontAwesomeIcon icon={faAngleRight} />
                            </h4>
                        </div>
                    </Link>
                </section>
            </>
        </>
    )
}

export default MeusProjetos;
