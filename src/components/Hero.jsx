import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <section id="hero" className="relative h-screen w-full flex flex-col justify-center items-center overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 bg-topo opacity-10 pointer-events-none"></div>
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-fluo rounded-full blur-[150px] opacity-20 animate-pulse"></div>

            <div className="relative z-10 text-center px-4">
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="font-sans text-fluo tracking-[0.3em] text-sm md:text-base mb-4"
                >
                    FULL STACK DEVELOPER
                </motion.p>

                <motion.h1
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="font-display text-7xl md:text-9xl font-bold leading-none tracking-tighter"
                >
                    MARTIN<br />
                    <span className="text-outline text-transparent stroke-white stroke-2">VIZCAINO</span>
                </motion.h1>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                    className="mt-8 flex flex-col items-center"
                >
                    <div className="w-[1px] h-24 bg-gradient-to-b from-fluo to-transparent"></div>
                </motion.div>
            </div>

            {/* Aesthetic decorative text */}
            <div className="absolute bottom-10 left-10 font-mono text-xs text-gray-500 hidden md:block">
                EST. 2026<br />
                LOC: GLOBAL
            </div>
            <div className="absolute bottom-10 right-10 font-mono text-xs text-gray-500 hidden md:block text-right">
                SCROLL<br />
                TO EXPLORE
            </div>
        </section>
    );
};

export default Hero;
