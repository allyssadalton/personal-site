import React from 'react';
import { motion } from 'framer-motion';
import headshot from '../assets/allyssa_dalton_headshot.jpeg';

const Hero = () => {
    return (
        <section id="hero" className="relative h-screen w-full flex flex-col justify-center items-center overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 bg-topo opacity-10 pointer-events-none"></div>
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-sun-yellow rounded-full blur-[150px] opacity-20 animate-pulse"></div>

            <div className="relative z-10 w-full max-w-6xl px-4 grid grid-cols-1 lg:grid-cols-[1fr_auto] items-center gap-10 lg:gap-16">
                <div className="text-center lg:text-left">
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="font-sans text-sun-yellow tracking-[0.3em] text-sm md:text-base mb-4"
                >
                    DATA ANALYST & ENGINEER
                </motion.p>

                <motion.h1
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="font-display text-5xl md:text-9xl font-bold leading-none tracking-tighter"
                    >
                    ALLYSSA<br />
                    <span className="text-outline stroke-white stroke-2">DALTON</span>
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.35 }}
                    className="mt-4 text-text-secondary font-sans text-sm md:text-base tracking-wide"
                >
                Data-driven systems · Analytics · Product-minded
                </motion.p>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1 }}
                        className="mt-8 flex flex-col items-center lg:items-start"
                    >
                        <div className="w-[1px] h-24 bg-gradient-to-b from-sun-yellow to-transparent"></div>
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="mx-auto lg:mx-0 order-2 lg:order-none"
                >
                    <div className="w-[240px] md:w-[300px] lg:w-[360px] aspect-[3/4] overflow-hidden rounded-[10px] bg-card-white/40 ring-2 ring-sun-yellow/20 shadow-[0_10px_28px_rgba(0,0,0,0.08)]">
                        <img
                            src={headshot}
                            alt="Allyssa Dalton - Data Engineering & Analytics"
                            width="360"
                            height="450"
                            loading="eager"
                            fetchPriority="high"
                            className="w-full h-full object-cover object-center scale-[1.08] brightness-[0.95] contrast-[1.06] saturate-[0.92]"
                        />
                    </div>
                </motion.div>
            </div>

            {/* Aesthetic decorative text */}
            <div className="absolute bottom-10 left-10 font-mono text-xs text-text-muted hidden md:block">
                EST. 2026<br />
                LOC: GLOBAL
            </div>
            <div className="absolute bottom-10 right-10 font-mono text-xs text-text-muted hidden md:block text-right">
                SCROLL<br />
                TO EXPLORE
            </div>
        </section>
    );
};

export default Hero;
