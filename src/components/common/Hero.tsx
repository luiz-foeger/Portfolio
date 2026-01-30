import React, { useRef } from "react";
import { useCursor } from '../ui/CursorContext';
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useMotionValue
} from "framer-motion";

const RevealText = ({ children, delay = 0 }: { children: React.ReactNode, delay?: number }) => (
  //   <div className="overflow-hidden relative inline-block align-bottom px-1 pb-4 -mb-4">
  <div className="overflow-hidden inline-block align-bottom px-5 pb-4 pt-4 -mb-4">
    <motion.div
      initial={{ y: "100%" }}
      animate={{ y: 0 }}
      transition={{ duration: 1.2, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  </div>
);

const Hero: React.FC = () => {
  const { setCursorType, setCursorText } = useCursor();
  const targetRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"]
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // scroll effects
  const textScale = useTransform(smoothProgress, [0, 0.6], [1, 0.8]);
  const textOpacity = useTransform(smoothProgress, [0, 0.5], [1, 0]);
  const textBlur = useTransform(smoothProgress, [0, 0.5], ["blur(0px)", "blur(10px)"]);
  const textScrollY = useTransform(smoothProgress, [0, 0.6], ["0%", "20%"]);

  // mouse parallax 
  const mouseXRatio = useMotionValue(0.5);
  const mouseYRatio = useMotionValue(0.5);


  function handleGlobalMouseMove({ clientX, clientY }: React.MouseEvent) {
    // calculate mouse position ratio (0 to 1)
    mouseXRatio.set(clientX / window.innerWidth);
    mouseYRatio.set(clientY / window.innerHeight);
  }

  const textParallaxX = useTransform(mouseXRatio, [0, 1], ["30px", "-30px"]);
  const textParallaxY = useTransform(mouseYRatio, [0, 1], ["30px", "-30px"]);

  return (
    <>
      {/* spacer */}
      <section
        ref={targetRef}
        className="relative z-10 h-screen w-full flex items-center justify-center cursor-none"
        
        onMouseMove={handleGlobalMouseMove}
        onMouseEnter={() => {
          setCursorType('hero');
          setCursorText('Luiz Föeger');
        }}
        onMouseLeave={() => {
          setCursorType('default');
          setCursorText('');
        }}
      />

      <div
        onMouseMove={handleGlobalMouseMove}
        className="fixed top-0 left-0 h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-[#050505] z-0"
      >

        <div className="container mx-auto max-w-[1400px] flex flex-col items-center justify-center relative z-10 text-center px-4">

          {/* badge open to work */}
          <motion.div
            style={{ opacity: textOpacity }}
            className="mb-12 inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/5 bg-white/5 backdrop-blur-sm"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gray-200 opacity-80"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
            </span>
            <span className="text-xs font-mono text-gray-300 uppercase tracking-widest">[ Available for work ]</span>
          </motion.div>

          {/* parallax 3D text */}
          <motion.div
            style={{
              scale: textScale,
              opacity: textOpacity,
              filter: textBlur,
              y: textScrollY,
              x: textParallaxX,
              translateY: textParallaxY,
              rotateX: useTransform(smoothProgress, [0, 1], ["0deg", "15deg"])
            }}
            className="relative z-0 select-none w-full will-change-transform"
          >
            {/* blur overlays */}
            <div className="absolute top-0 left-0 h-screen w-[20%] z-20 pointer-events-none"
              style={{ backdropFilter: "blur(12px)", maskImage: "linear-gradient(to right, black, transparent)", WebkitMaskImage: "linear-gradient(to right, black, transparent)" }} />
            <div className="absolute top-0 right-0 h-screen w-[20%] z-20 pointer-events-none"
              style={{ backdropFilter: "blur(12px)", maskImage: "linear-gradient(to left, black, transparent)", WebkitMaskImage: "linear-gradient(to left, black, transparent)" }} />

            <h1 className="font-montserrat font-black tracking-tighter uppercase text-[#E0E0E0]
                           text-[13vw] leading-[0.8] 
                           md:text-[12vw] 
                           lg:text-[10rem]
                           flex flex-col items-center"
            >
              <RevealText delay={0.1}>CREATIVE</RevealText>
              <RevealText delay={0.2}>DEVELOPER</RevealText>
              <RevealText delay={0.3}>& DESIGNER</RevealText>
            </h1>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Hero;