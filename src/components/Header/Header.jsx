import React from 'react';
import estilos from './Header.module.css';


const Header = () => {
    return (
        <header>
            <section id="inicio" className={estilos.sectionHeader}>
                <ul>
                    <li><a href="">Introdução</a></li>
                    <li><a href="#sobre-mim">Sobre mim</a></li>
                    <li><a href="#section-projetos">Meus projetos</a></li>
                </ul>
            </section>
        </header>
    )
}

export default Header
