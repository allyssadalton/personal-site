import React from 'react';
import { motion } from 'framer-motion';

const skills = [
    "Python · C · C++ · SQL · JavaScript · TypeScript · PHP",
    "MySQL · Power BI · Azure Databricks · Azure DevOps",
    "Microsoft 365 · Google Workspace · Balsamiq",
    "HTML · CSS",
    "Agile · Scrum · Six Sigma"
];

const About = () => {
    return (
        <section id="about" className="py-20 px-6 md:px-20 bg-soft-cream text-text-primary relative overflow-hidden">
            {/* Decorative vertical line */}
            <div className="absolute left-6 md:left-20 top-0 bottom-0 w-[1px] bg-gray-800"></div>

            <div className="max-w-4xl mx-auto relative z-10 pl-8 md:pl-0">
                <motion.h2
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="font-display text-5xl md:text-7xl font-bold mb-12"
                >
                    ANALYST.<br />
                    <span className="text-sun-yellow">ENGINEER.</span>
                </motion.h2>

                <div className="grid md:grid-cols-2 gap-12 font-sans">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                    >
                        <p className="text-text-secondary text-lg leading-relaxed mb-6">
                            Computer Science student with a strong foundation in programming, data analysis, and system design.
                            I focus on building data-driven applications, scalable backend systems, and efficient data workflows
                            that turn raw data into meaningful insights.
                        </p>
                        <p className="text-text-secondary text-lg leading-relaxed">
                            Passionate about data analytics, data engineering, and intelligent systems that solve real-world problems.
                            Currently studying Computer Science at the University of Indianapolis (GPA 3.7).
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4, duration: 0.6 }}
                    >
                        <h3 className="font-display text-xl mb-6 tracking-widest border-b border-border-soft pb-2">CORE SKILLS</h3>
                        <div className="grid grid-cols-1 gap-4">
                            {skills.map((skill, index) => (
                                <div key={index} className="flex items-center group">
                                    <span className="w-2 h-2 bg-sun-yellow mr-4 rounded-full group-hover:scale-150 transition-transform"></span>
                                    <span className="text-lg group-hover:text-sun-yellow transition-colors">{skill}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
