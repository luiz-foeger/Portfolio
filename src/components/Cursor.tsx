'use client';

import React, { useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function Cursor() {
  // Tamanho da bolinha (px)
  const CURSOR_SIZE = 20;

  // Variáveis de movimento do Framer Motion
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Efeito de "Mola" (Spring) para o cursor não seguir o mouse secamente,
  // mas ter um leve atraso elegante (física).
  const smoothOptions = { damping: 20, stiffness: 300, mass: 0.5 };
  const smoothX = useSpring(mouseX, smoothOptions);
  const smoothY = useSpring(mouseY, smoothOptions);

  useEffect(() => {
    const manageMouseMove = (e: MouseEvent) => {
      // Atualiza a posição subtraindo metade do tamanho para centralizar
      mouseX.set(e.clientX - CURSOR_SIZE / 2);
      mouseY.set(e.clientY - CURSOR_SIZE / 2);
    };

    window.addEventListener('mousemove', manageMouseMove);

    return () => {
      window.removeEventListener('mousemove', manageMouseMove);
    };
  }, [mouseX, mouseY]);

  return (
    <motion.div
      style={{
        left: smoothX,
        top: smoothY,
      }}
      className="fixed pointer-events-none z-[9999] rounded-full mix-blend-difference bg-white"
    >
      {/* Estilização da bolinha:
         - w-[20px] h-[20px]: Tamanho definido na constante
         - bg-white: Cor base (mas o mix-blend-mode vai alterar isso)
         - rounded-full: Vira bolinha
         - mix-blend-difference: O TRUQUE DE MESTRE. 
           Se o fundo for preto, a bola fica branca. Se o fundo for branco, ela fica preta.
           Isso garante que o cursor nunca suma!
      */}
      <div 
        className="w-[20px] h-[20px] bg-white rounded-full"
      />
    </motion.div>
  );
}