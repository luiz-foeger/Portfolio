'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Icones from '../Icones/Icones';

const SobreMim = () => {
    return (
        <section
            id="sobre-mim"
            className="relative min-h-[700px] w-full flex flex-col justify-center items-center px-6 py-16 md:py-24 overflow-hidden bg-transparent border-t border-[#21262d]"
        >
            {/* texto de fundo */}
            <motion.h1
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 0.10 }}
                viewport={{ once: true }}
                transition={{ duration: 2 }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none z-0 whitespace-nowrap font-['Imperial_Script'] text-[25vw] md:text-[20rem] text-transparent leading-none"
                style={{ WebkitTextStroke: '1px rgba(255, 255, 255, 0.4)' }}
            >
                Sobre Mim
            </motion.h1>

            <div className="relative z-10 w-full max-w-[1050px] flex flex-col items-center">
                {/* título principal */}
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-white font-bold text-3xl md:text-6xl text-center mb-8 md:mb-12 tracking-tight"
                >
                    Sobre Mim
                </motion.h2>

                {/* biografia */}
                <motion.article
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                    className="text-left md:text-justify space-y-5 md:space-y-8 mb-10 md:mb-16 max-w-[950px]"
                >
                    <p className="text-white/90 text-sm sm:text-base md:text-2xl leading-relaxed">
                        Minha trajetória une a precisão do <span className="text-white font-semibold">Design Gráfico</span> com a lógica do <span className="text-white font-semibold text-[#8dcffb]">Desenvolvimento Full-Stack</span>. Essa combinação me permite enxergar o produto como um todo: da estética à funcionalidade.
                    </p>

                    <p className="text-white/90 text-sm sm:text-base md:text-2xl leading-relaxed">
                        Sou apaixonado por construir ecossistemas digitais completos. Utilizo ferramentas como
                        <strong className="text-[#8dcffb] font-bold hover:text-white transition-colors duration-300"> React</strong>,
                        <strong className="text-[#8dcffb] font-bold hover:text-white transition-colors duration-300"> Next.js</strong>,
                        <strong className="text-[#8dcffb] font-bold hover:text-white transition-colors duration-300"> JavaScript </strong>
                        e <strong className="text-[#8dcffb] font-bold hover:text-white transition-colors duration-300">TypeScript</strong> para interfaces fluidas, e
                        <strong className="text-[#8dcffb] font-bold hover:text-white transition-colors duration-300"> Node.js </strong> para criar sistemas robustos e escaláveis.
                    </p>

                    <p className="text-white/90 text-sm sm:text-base md:text-2xl leading-relaxed">
                        Meu objetivo não é apenas escrever código, mas criar <span className="text-white font-semibold not-italic">experiências digitais memoráveis</span> onde a performance técnica encontra um design intuitivo e centrado no usuário.
                    </p>

                    <p className="text-white/90 text-sm sm:text-base md:text-2xl leading-relaxed">
                        Meu foco principal é criar interfaces <span className="text-white font-semibold not-italic">criativas e intuitivas</span>, sempre com uma abordagem centrada na
                        Experiência do Usuário.
                    </p>
                </motion.article>

                {/* skill icons */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className="w-full flex justify-center"
                >
                    <Icones />
                </motion.div>
            </div>
        </section>
    );
};

export default SobreMim;