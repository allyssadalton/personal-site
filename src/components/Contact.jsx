import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Phone } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contact" className="py-20 px-6 md:px-20 bg-dark-bg text-white min-h-[60vh] flex items-center relative">
            <div className="absolute bottom-0 right-0 w-full h-1/2 bg-gradient-to-t from-fluo/5 to-transparent pointer-events-none"></div>

            <div className="max-w-5xl mx-auto w-full">
                <div className="grid md:grid-cols-2 gap-16">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="font-display text-6xl md:text-8xl font-bold leading-tight mb-8">
                            LET'S<br />
                            <span className="text-fluo">TALK</span>
                        </h2>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="flex flex-col justify-center space-y-8"
                    >
                        <p className="text-xl text-gray-300">
                            I'm always open to discussing new projects, opportunities,
                            or just chatting about backend systems and AI.
                        </p>

                        <div className="space-y-6">
                            <a href="mailto:vizcainom@uindy.edu" className="flex items-center group text-2xl font-display hover:text-fluo transition-colors">
                                <Mail className="mr-4 text-gray-500 group-hover:text-fluo" />
                                vizcainom@uindy.edu
                            </a>
                            <a href="https://www.linkedin.com/in/martinvizcaino/" target="_blank" rel="noopener noreferrer" className="flex items-center group text-2xl font-display hover:text-fluo transition-colors">
                                <Linkedin className="mr-4 text-gray-500 group-hover:text-fluo" />
                                /in/martinvizcaino
                            </a>
                            <div className="flex items-center group text-2xl font-display text-gray-400">
                                <Phone className="mr-4 text-gray-500" />
                                (872) 319-3251
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
