'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import { InfiniteLogo } from '../InfiniteLogo';

const Header = () => {
    const [isShifted, setIsShifted] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isHidden, setIsHidden] = useState(false);

    const [resetKey, setResetKey] = useState(0);

    useEffect(() => {
        const handleVisibilityChange = () => {
            if (document.visibilityState === 'visible') {
                setResetKey(prev => prev + 1);
            }
        };

        document.addEventListener("visibilitychange", handleVisibilityChange);
        return () => document.removeEventListener("visibilitychange", handleVisibilityChange);
    }, []);

    useEffect(() => {
        setIsShifted(false);

        const startLoop = setTimeout(() => {
            setIsShifted(true);
            const interval = setInterval(() => {
                setIsShifted((prev) => !prev);
            }, 5000);
            return () => clearInterval(interval);
        }, 4500);

        return () => clearTimeout(startLoop);
    }, [resetKey]);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => setIsHidden(entry.isIntersecting),
            { threshold: 0.1 }
        );
        const footerElement = document.querySelector('footer');
        if (footerElement) observer.observe(footerElement);
        return () => { if (footerElement) observer.unobserve(footerElement); };
    }, []);

    return (
        <header className="fixed top-0 left-0 w-full h-24 z-50 pointer-events-none">
            <motion.div
                key={resetKey}

                className="absolute top-1/2 left-1/2 w-28 md:w-32 pointer-events-auto"
                initial={{ x: "-50%", y: "-50%", scale: 1, opacity: 1 }}
                animate={{
                    x: isShifted ? "-75%" : "-50%",
                    y: "-50%",
                    scale: isScrolled ? 0.75 : 1,
                    opacity: isHidden ? 0 : 1
                }}
                transition={{
                    type: "spring", stiffness: 60, damping: 20,
                    opacity: { duration: 0.3 }
                }}
            >
                <a href="#">
                    <InfiniteLogo />
                </a>
            </motion.div>
        </header>
    );
};

export default Header;