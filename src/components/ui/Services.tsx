'use client';
import React, { useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { FiArrowUpRight } from 'react-icons/fi';

const SERVICES = [
  {
    id: 1,
    title: "Digital Products",
    description: "Selected Works",
    image: "https://res.cloudinary.com/db43xalo3/image/upload/v1766800107/937bb523-0ec2-4ab7-8365-ea6ed0557761.png"
  },
  {
    id: 2,
    title: "Web Prototyping",
    description: "Architecture & UI/UX",
    image: "https://res.cloudinary.com/db43xalo3/image/upload/v1786410664/700d1bad-5eca-4bbf-a307-874e8e0d81e5.png"
  },
  {
    id: 3,
    title: "Graphic & Visuals",
    description: "Branding & Design",
    image: "https://res.cloudinary.com/db43xalo3/image/upload/v1786410468/5171e707-4d5f-4f39-92a9-17e340cf528c.png"
  },
  {
    id: 4,
    title: "Experimental Lab",
    description: "Testing & Prototyping",
    image: "https://res.cloudinary.com/db43xalo3/image/upload/v1786410965/c4c90e1b-6748-4894-844c-c63886ca0b92.png"
  }
];

const Services = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  // Valores de posição do mouse
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Suavização da movimentação (Spring)
  const smoothX = useSpring(mouseX, { stiffness: 150, damping: 15 });
  const smoothY = useSpring(mouseY, { stiffness: 150, damping: 15 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    // Calcula a posição do mouse em relação ao card atual
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  return (
    <section className="bg-black py-20 md:py-32 relative z-20 overflow-hidden w-full">
      {/* <div className="w-full px-6 md:px-16 lg:px-24"> */}
      <div className="w-full px-6 md:px-4 lg:px-0">

        {/* LISTA DE SERVIÇOS */}
        <div className="flex flex-col border-t border-white/10">
          {SERVICES.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              onMouseMove={handleMouseMove}
              className="group relative border-b border-white/10 py-10 md:py-16 cursor-pointer transition-colors duration-500 hover:bg-white/5"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between relative z-10 pointer-events-none px-4 md:px-8">

                {/* Título Gigante */}
                <h3 className="text-4xl sm:text-6xl md:text-7xl lg:text-[5.5vw] font-black font-montserrat uppercase text-[#656565] group-hover:text-white transition-colors duration-500 tracking-tight">
                  {service.title}
                </h3>

                {/* Descrição + Seta */}
                <div className={`flex items-center gap-4 md:gap-12 mt-6 md:mt-0 transition-all duration-500 transform ${hoveredIndex === index
                  ? 'opacity-100 translate-x-0'
                  : 'opacity-100 md:opacity-0 translate-x-0 md:translate-x-10' // Mantém opaco no mobile sempre
                  }`}>
                  <p className="text-xs md:text-sm lg:text-base text-gray-400 font-montserrat uppercase tracking-widest hidden md:block">
                    {service.description}
                  </p>
                  <div className="p-3 md:p-5 rounded-full bg-[#8DCFFB] text-black">
                    <FiArrowUpRight className="w-5 h-5 md:w-7 md:h-7" />
                  </div>
                </div>

              </div>

              {/* IMAGEM QUE SEGUE O MOUSE (Apenas em Desktop/Telas Médias+) */}
              {hoveredIndex === index && (
                <motion.div
                  style={{
                    x: smoothX,
                    y: smoothY,
                    translateX: '-50%',
                    translateY: '-50%',
                  }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.2 }}
                  className="hidden md:block absolute top-0 left-0 w-[350px] lg:w-[450px] h-[220px] lg:h-[280px] pointer-events-none z-20 rounded-3xl overflow-hidden shadow-2xl"
                >
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                  {/* Overlay azulada pra combinar com o site */}
                  <div className="absolute inset-0 bg-[#8DCFFB] mix-blend-color opacity-20" />
                </motion.div>
              )}

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Services;