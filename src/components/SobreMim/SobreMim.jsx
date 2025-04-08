import React from 'react'
import Icones from '../Icones/Icones';

import estilos from './SobreMim.module.css';

const SobreMim = () => {
    return (
        <>
            <section id="sobre-mim" className={estilos.sectionSobre}>
                <h1 className={estilos.subtitulo}>Sobre Mim</h1>
                <h1 className={estilos.subtituloFundo}>Sobre Mim</h1>

                <article>
                    <p>
                        Minha jornada no mundo da tecnologia começou com um forte interesse em Design Gráfico, porém,
                        desde 2023, tenho me dedicado ao Desenvolvimento Front-End e Back-End.<br /><br />
                    </p>

                    <p>
                        Essa paixão pela programação me levou a explorar diversas linguagens e bibliotecas, como <strong>JavaScript</strong>, <strong>Python</strong>, <strong>PHP</strong>, <strong>Node.js</strong>,  <strong>Flutter</strong>, <strong>React</strong>, etc. — habilidades que busco expandir e aperfeiçoar
                        constantemente! <br /><br />
                    </p>

                    <p>
                        Meu foco principal é criar interfaces criativas e intuitivas, sempre com uma abordagem centrada na
                        Experiência do Usuário, proporcionando uma experiência digital divertida e envolvente.
                    </p>
                </article>
                <Icones />

            </section>
        </>
    )
}

export default SobreMim
