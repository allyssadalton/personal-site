import React from 'react';
import { motion } from 'framer-motion';

const experiences = [
    {
        title: 'Engineer Tutor',
        org: 'University of Indianapolis',
        orgLink: 'https://uindy.edu/cas/engineering/',
        dates: 'Oct 2025 - Present',
        bullets: [
            'Tutored engineering students in programming courses, providing one-on-one support in debugging, algorithms, and core software development concepts.',
            'Explained complex technical topics in a clear, approachable way to improve student understanding and problem-solving skills.',
            'Assisted with coursework, labs, and projects across multiple programming languages and development environments.',
            'Helped students develop effective coding practices, logical thinking, and confidence in tackling technical challenges.',
        ],
    },
    {
        title: 'Business Intelligence Intern',
        org: 'Entegrata',
        orgLink: 'https://entegrata.com/',
        dates: 'May 2025 - Oct 2025',
        bullets: [
            'Collaborated with Customer Success team and Power BI engineers to design and deploy interactive dashboard visualizations using DAX queries and measures for multiple law firms, improving client reporting efficiency.',
            'Performed quality assurance and data validation on Power BI dashboards weekly to ensure customer requirements were met before dashboards were released.',
            'Leveraged AI to generate SQL insert statements, creating diverse fake datasets that improved testing reliability across multiple law firm systems.',
            'Participated in sprint planning, daily stand-ups, and retrospective meetings to continuously improve team efficiency.',
        ],
    },
    {
        title: 'Code Sensei',
        org: 'Code Ninjas',
        orgLink: 'https://www.codeninjas.com/in-indianapolis/camps?utm_source=google&utm_medium=performance-max&utm_campaign=google&gad_source=1&gad_campaignid=21517898610&gbraid=0AAAAAoYJaOnylwyU73iJHwWW_Sjqh45Cm&gclid=Cj0KCQiAy6vMBhDCARIsAK8rOglM5a6Kf16KPm_3muLmqbVzoufvPR7-48xc3SQuv3ZsfNllYXyxltUaAkyiEALw_wcB',
        dates: 'Jan 2025 - May 2025',
        bullets: [
            'Assisted 5 students weekly in learning Javascript and Unity.',
            'Assisted 30+ students weekly in learning and using Microsoft MakeCode.',
            'Planned and hosted Minecraft Clubs for students.',
        ],
    },
    {
        title: 'Office of Student Billing and Payment Student Assistant',
        org: 'University of Indianapolis',
        orgLink: 'https://uindy.edu/student-billing/',
        dates: 'Summer 2025',
        bullets: [
            'Identified billing discrepancies that prevented invoicing errors, reducing reprocessing time for the department.',
            'Assisted students and parents with billing-related questions and concerns, providing clear and timely support.',
            'Collaborated with the director on data-driven projects to improve billing processes.',
            'Worked with two specialized ERP software, ensuring compliance with billing protocols.',
            'Prepared various reporting analyses to support financial decision-making and enhance operational efficiency.',
        ],
    },
];

const Experience = () => {
    return (
        <section id="experience" className="py-24 px-4 md:px-20 bg-soft-cream text-text-primary">
            <div className="max-w-7xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="font-display text-5xl md:text-8xl font-bold mb-16"
                >
                    EXPERIENCE
                </motion.h2>

                <div className="space-y-8">
                    {experiences.map((exp, index) => {
                        const CardTag = exp.orgLink ? 'a' : 'div';
                        const hoverTextClass = exp.orgLink ? 'group-hover:text-black transition-colors' : '';

                        return (
                            <motion.div
                                key={exp.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.08 }}
                            >
                                <CardTag
                                    href={exp.orgLink}
                                    target={exp.orgLink ? '_blank' : undefined}
                                    rel={exp.orgLink ? 'noreferrer' : undefined}
                                    className={`group relative block border border-border-soft bg-card-white p-8 md:p-10 overflow-hidden transition-colors duration-300 ${
                                            exp.orgLink
                                                ? 'hover:border-sun-yellow hover:bg-sun-yellow hover:text-black cursor-pointer'
                                                : ''
                                        }`}
                                >
                                        <div className="absolute inset-x-0 top-0 h-1 bg-sun-yellow opacity-20" />
                                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                                        <div>
                                            <h3 className={`font-display text-2xl md:text-3xl font-bold ${hoverTextClass}`}>
                                                {exp.title}
                                            </h3>
                                                <p className={`text-text-secondary mt-1 ${hoverTextClass}`}>
                                                {exp.org}
                                            </p>
                                        </div>
                                            <div className={`font-mono text-xs tracking-widest text-text-muted uppercase ${hoverTextClass}`}>
                                            {exp.dates}
                                        </div>
                                    </div>
                                        <ul className={`list-disc pl-5 space-y-3 text-text-secondary text-sm md:text-base leading-relaxed ${hoverTextClass}`}>
                                        {exp.bullets.map((bullet) => (
                                            <li key={bullet}>{bullet}</li>
                                        ))}
                                    </ul>
                                </CardTag>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Experience;
