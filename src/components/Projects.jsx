import React from 'react';
import { motion } from 'framer-motion';

const projects = [
    {
        title: "CARROT",
        role: "Co-Founder & Backend Engineer",
        year: "2025",
        desc: "Architected a production-grade multi-LLM routing system (FastAPI + Supabase) with dynamic model selection.",
        tags: ["FastAPI", "Supabase", "LLMs"],
        size: "large"
    },
    {
        title: "CAPTE PLATFORM",
        role: "Tech Lead",
        year: "2025",
        desc: "Led engineering for an enterprise accreditation platform. Designed an LLM mapping pipeline reducing prep time from hours to minutes.",
        tags: ["Python", "Firebase", "Gemini"],
        size: "large" // Changed to large for emphasis
    },
    {
        title: "HOOSIER RACING",
        role: "Software Intern",
        year: "2025",
        desc: "Built a cross-platform inventory app tracking 5+ warehouses. Enabled real-time tracking with SQL & Flutter.",
        tags: ["Flutter", "SQL", "Mobile"],
        size: "small"
    },
    {
        title: "SANCTUM",
        role: "Chrome Extension",
        year: "2025",
        desc: "Privacy filter that redacts PII before prompts are sent to ChatGPT/Claude. Built with TypeScript.",
        tags: ["TypeScript", "Security", "Chrome"],
        size: "small"
    },
    {
        title: "SCARA ROBOT",
        role: "Researcher",
        year: "2024",
        desc: "Engineered a 3-DOF robotic arm with vision-guided pick-and-place using inverse kinematics.",
        tags: ["Robotics", "MATLAB", "Vision"],
        size: "small"
    },
    {
        title: "CSV CLEANER",
        role: "iOS App",
        year: "2025",
        desc: "Offline on-device AI tool for PII removal and privacy-compliant data prep.",
        tags: ["Swift", "CoreML", "On-Device"],
        size: "small"
    }
];

const Projects = () => {
    return (
        <section id="projects" className="py-20 px-4 md:px-20 bg-dark-bg text-white">
            <div className="max-w-7xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="font-display text-5xl md:text-8xl font-bold mb-16 text-right md:text-left"
                >
                    SELECTED<br /><span className="text-outline text-transparent stroke-white stroke-1">WORKS</span>
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[minmax(300px,auto)]">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className={`group relative bg-dark-secondary p-8 flex flex-col justify-between border border-gray-800 hover:border-fluo transition-colors duration-500 rounded-none overflow-hidden ${project.size === 'large' ? 'md:col-span-2' : 'md:col-span-1'
                                }`}
                        >
                            {/* Hover Glow Effect */}
                            <div className="absolute top-0 right-0 w-64 h-64 bg-fluo rounded-full blur-[100px] opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none transform translate-x-1/2 -translate-y-1/2"></div>

                            <div>
                                <div className="flex justify-between items-start mb-4">
                                    <span className="font-mono text-fluo text-xs tracking-widest">{project.year}</span>
                                    <span className="font-sans text-gray-500 text-xs uppercase">{project.role}</span>
                                </div>
                                <h3 className="font-display text-3xl md:text-4xl font-bold mb-4 group-hover:text-fluo transition-colors">{project.title}</h3>
                                <p className="text-gray-400 font-sans text-sm md:text-base leading-relaxed mb-6">{project.desc}</p>
                            </div>

                            <div className="flex flex-wrap gap-2">
                                {project.tags.map((tag) => (
                                    <span key={tag} className="px-3 py-1 border border-gray-700 rounded-full text-xs text-gray-400 font-mono group-hover:border-fluo group-hover:text-fluo transition-colors">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
