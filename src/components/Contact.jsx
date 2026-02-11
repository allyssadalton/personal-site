import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github } from 'lucide-react';

const Contact = () => {
    const hireMeLink = "mailto:allyssadalton4@gmail.com?subject=Potential%20Opportunity%20&body=Hi%20Allyssa,%0AI%20came%20across%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20potential%20opportunity.%0ABest,%0A%5BName%5D"

    return (
        <section id="contact" className="py-20 px-6 md:px-20 bg-soft-cream text-text-primary min-h-[60vh] flex items-center relative">
            <div className="absolute bottom-0 right-0 w-full h-1/2 bg-gradient-to-t from-sun-yellow/5 to-transparent pointer-events-none"></div>

            <div className="max-w-5xl mx-auto w-full">
                <div className="grid md:grid-cols-2 gap-16">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="font-display text-6xl md:text-8xl font-bold leading-tight mb-8">
                            LET'S<br />
                            <span className="text-sun-yellow">CHAT</span>
                        </h2>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="flex flex-col justify-center space-y-8"
                    >
                        <p className="text-xl text-text-secondary">
                            Open to data analytics and data engineering opportunities.
                        </p>

                        <div className="flex flex-col gap-4">
                            <a
                                href={hireMeLink}
                                className="inline-flex items-center justify-center px-6 py-3 border-2 border-sun-yellow text-black bg-sun-yellow font-mono text-xs uppercase tracking-widest hover:bg-transparent hover:text-sun-yellow transition-colors duration-300 w-fit"
                            >
                                Hire Me
                            </a>

                            <div className="space-y-4">
                                <a
                                    href="mailto:allyssadalton4@gmail.com"
                                    className="flex items-center group text-lg font-display text-text-secondary hover:text-sun-yellow transition-colors"
                                >
                                    <Mail className="mr-3 text-text-muted group-hover:text-sun-yellow" />
                                    allyssadalton4@gmail.com
                                </a>
                                <a
                                    href="https://www.linkedin.com/in/allyssa-dalton/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center group text-lg font-display text-text-secondary hover:text-sun-yellow transition-colors"
                                >
                                    <Linkedin className="mr-3 text-text-muted group-hover:text-sun-yellow" />
                                    /in/allyssadalton
                                </a>
                                 <a
                                    href="https://www.github.com/allyssadalton/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center group text-lg font-display text-text-secondary hover:text-sun-yellow transition-colors"
                                >
                                    <Github className="mr-3 text-text-muted group-hover:text-sun-yellow" />
                                    /github/allyssadalton
                                </a>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
