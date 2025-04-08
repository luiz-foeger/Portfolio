import { SiReact, SiJavascript, SiHtml5, SiCss3, SiNodedotjs, SiPhp, SiPython, SiAdobephotoshop } from 'react-icons/si';
import React from 'react'
import estilos from './Icones.module.css';

const Icones = () => {
  return (
    <div className={estilos.tecnologias}>
        <SiHtml5 title="HTML5" className={estilos.icone}/>
        <SiCss3 title="CSS3" className={estilos.icone}/>
        <SiJavascript title="JavaScript" className={estilos.icone}/>
        <SiPhp title="PHPs" className={estilos.icone}/>
        <SiPython title="Python" className={estilos.icone}/>
        <SiReact title="React" className={estilos.icone}/>
        <SiNodedotjs title="Node.js" className={estilos.icone}/>
        <SiAdobephotoshop title="Photoshop" className={estilos.icone}/>
    </div>
  )
}

export default Icones
