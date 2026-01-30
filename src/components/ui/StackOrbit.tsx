'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
    SiNextdotjs, SiTypescript, SiJavascript, SiTailwindcss,
    SiFigma, SiReact, SiWordpress, SiGit, SiAdobephotoshop, SiNodedotjs,
    SiDocker, SiVisualstudiocode, SiGithub
} from 'react-icons/si';

interface OrbitItem {
    icon: React.ElementType;
    color: string;
    label: string;
}

const INNER_ORBIT: OrbitItem[] = [
    { icon: SiReact, color: '#61DAFB', label: 'React' },
    { icon: SiTailwindcss, color: '#38B2AC', label: 'Tailwind' },
    { icon: SiDocker, color: '#2496ED', label: 'Docker' },
];

const MIDDLE_ORBIT: OrbitItem[] = [
    { icon: SiNextdotjs, color: '#FFFFFF', label: 'Next.js' },
    { icon: SiTypescript, color: '#3178C6', label: 'TypeScript' },
    { icon: SiNodedotjs, color: '#339933', label: 'Node.js' },
    { icon: SiJavascript, color: '#F7DF1E', label: 'JavaScript' },
];

const OUTER_ORBIT: OrbitItem[] = [
    { icon: SiAdobephotoshop, color: '#31A8FF', label: 'Photoshop' },
    { icon: SiGit, color: '#F05032', label: 'Git' },
    { icon: SiWordpress, color: '#21759B', label: 'WordPress' },
    { icon: SiVisualstudiocode, color: '#47A248', label: 'VSCode' },
    { icon: SiFigma, color: '#F24E1E', label: 'Figma' },
    //   { icon: SiMongodb, color: '#47A248', label: 'MongoDB' },
];

const TechOrbit = () => {
    return (
        <div className="relative flex items-center justify-center w-full min-h-[700px] md:min-h-[800px] py-20 md:py-0">

            {/* núcleo central */}
            <div className="absolute z-20 flex items-center justify-center">
                <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-[#0A0A0A] border border-white/10 flex items-center justify-center shadow-[0_0_50px_rgba(141,207,251,0.2)] relative z-10 cursor-pointer p-4"
                >
                     {/* <a href="https://github.com/luiz-foeger" target="_blank" rel="noopener noreferrer"><img src="/icon.svg" alt="Logo Föeger.dev" className="w-full h-full object-contain p-0 md:p-1" /></a> */}
                     <a href="https://github.com/luiz-foeger" target="_blank" rel="noopener noreferrer"><SiGithub className="text-5xl md:text-5xl text-white" /></a>
                </motion.div>
                <div className="absolute inset-0 bg-[#8DCFFB]/20 blur-3xl rounded-full animate-pulse"></div>
            </div>

            {/* órbitas */}
            <OrbitRing size={280} duration={25} items={INNER_ORBIT} />
            <OrbitRing size={450} duration={40} reverse items={MIDDLE_ORBIT} />
            <OrbitRing size={620} duration={60} items={OUTER_ORBIT} />

            {/* grid background */}
            <div className="absolute inset-0 opacity-[0.05] pointer-events-none"
                style={{ backgroundImage: 'radial-gradient(circle at center, #fff 1px, transparent 1px)', backgroundSize: '30px 30px' }}>
            </div>
        </div>
    );
};

const OrbitRing = ({ size, duration, reverse = false, items }: { size: number, duration: number, reverse?: boolean, items: OrbitItem[] }) => {
    const angleStep = 360 / items.length;

    return (
        <div className="absolute flex items-center justify-center pointer-events-none">
            {/* anel visual */}
            <div
                className={`rounded-full border border-white/10 absolute`}
                style={{ width: size, height: size, transform: 'scale(0.65) md:scale(1)' }}
            />

            {/* container giratório */}
            <motion.div
                animate={{ rotate: reverse ? -360 : 360 }}
                transition={{ duration: duration, repeat: Infinity, ease: "linear" }}
                className={`relative rounded-full flex items-center justify-center`}
                style={{ width: size, height: size }}
            >
                {items.map((item, index) => {
                    const angle = index * angleStep;
                    return (
                        <div
                            key={index}
                            className="absolute flex items-center justify-center pointer-events-auto"
                            style={{
                                transform: `rotate(${angle}deg) translate(${size / 2}px) rotate(-${angle}deg)`,
                            }}
                        >
                            {/* icons com física de arrastar */}
                            <motion.div
                                animate={{ rotate: reverse ? 360 : -360 }}
                                transition={{ duration: duration, repeat: Infinity, ease: "linear" }}
                                style={{ transformOrigin: 'center center' }}
                            >
                                <motion.div
                                    drag
                                    dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
                                    dragElastic={0.2}
                                    whileHover={{ scale: 1.2, backgroundColor: "rgba(255,255,255,0.1)" }}
                                    whileTap={{ scale: 0.9, cursor: "grabbing" }}
                                    className="w-11 h-11 md:w-16 md:h-16 bg-[#0A0A0A] border border-white/10 rounded-xl flex items-center justify-center shadow-lg group hover:border-[#8DCFFB] hover:shadow-[#8DCFFB]/30 transition-colors duration-300 cursor-grab"
                                >
                                    <item.icon className="text-xl md:text-3xl text-gray-400 group-hover:text-white transition-colors" />

                                    {/* tooltip */}
                                    <div className="absolute -top-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity text-[10px] font-mono text-[#8DCFFB] whitespace-nowrap bg-black/80 px-2 py-1 rounded border border-white/10 pointer-events-none z-20">
                                        {item.label}
                                    </div>
                                </motion.div>
                            </motion.div>
                        </div>
                    );
                })}
            </motion.div>
        </div>
    );
};

export default TechOrbit;