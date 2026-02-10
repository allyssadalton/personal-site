import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-soft-cream py-8 px-6 border-t border-border-soft text-center md:text-left flex flex-col md:flex-row justify-between items-center text-text-muted font-mono text-xs">
            <div className="mb-4 md:mb-0">
                &copy; {new Date().getFullYear()} ALLYSSA DALTON. ALL RIGHTS RESERVED.
            </div>
            <div className="flex gap-6">
                <span>EST. 2026</span>
                <span>USA</span>
            </div>
        </footer>
    );
};

export default Footer;
