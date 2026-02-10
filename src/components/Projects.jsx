import React from 'react';
import { motion } from 'framer-motion';

const projects = [
    {
        title: 'ETL Pipeline for Financial Loan Data ',
        stack: 'Python',
        summary:
            'Built an end-to-end ETL pipeline to ingest, transform, validate, and store loan data from multiple financial institutions.',
    },
    {
        title: 'KSPT Curriculum Map App',
        stack: 'Python, TypeScript, Svelte',
        summary:
            'Led a 6-person team to build an AI-assisted web application that automates curriculum alignment with accreditation standards using agile SCRUM practices.',
    },
    {
        title: 'Faculty Academy Events Management System ',
        stack: 'FastAPI, PostgreSQL, Svelte',
        summary:
            'Developed a full-stack academic event management platform with Google Calendar API integration, automated approval workflows, and live publishing tools.',
    },
];

const Projects = () => {
    return (
        <section id="projects" className="py-24 px-4 md:px-20 bg-dark-bg text-white">
            <div className="max-w-7xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="font-display text-5xl md:text-8xl font-bold mb-16"
                >
                    PROJECTS
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group relative bg-dark-secondary/40 p-7 md:p-8 border border-gray-800 hover:border-fluo transition-colors duration-500 rounded-none"
                        >
                            <div className="space-y-4">
                                <h3 className="font-display text-2xl md:text-3xl font-bold group-hover:text-fluo transition-colors">
                                    {project.title}
                                </h3>
                                <div className="font-mono text-xs uppercase tracking-widest text-gray-400">
                                    {project.stack}
                                </div>
                                <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                                    {project.summary}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
