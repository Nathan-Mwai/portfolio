"use client";

import React, { useState } from 'react';
import NeobrutalistButton from '../NeobrutalistButton';
import { Menu, X } from 'lucide-react';

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const navItems = [
        { name: 'Skills', href: '#skills' },
        { name: 'Projects', href: '#projects' },
        { name: 'Certifications', href: '#certifications' },
        { name: 'Experience', href: '#experience' }
    ];

    const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        if (typeof window !== 'undefined' && window.location.pathname === '/') {
            e.preventDefault();
            const targetId = href.startsWith('/') ? href.slice(1) : href;
            const element = document.querySelector(targetId);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
            setIsOpen(false);
        }
    };

    return (
        <header className="sticky top-0 z-50 bg-[#FDFBF7] border-b-[4px] border-black text-black">
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                {/* Logo / Title */}
                <a 
                    href="/" 
                    onClick={(e) => {
                        if (typeof window !== 'undefined' && window.location.pathname === '/') {
                            e.preventDefault();
                            window.scrollTo({ top: 0, behavior: 'smooth' });
                        }
                    }}
                    className="flex items-center h-16 px-6 font-black text-lg border-r-[4px] border-black bg-lime-400 select-none hover:bg-lime-300 transition-colors"
                >
                    &lt;/&gt; NATHAN DEV
                </a>

                {/* Desktop Nav Items */}
                <nav className="hidden md:flex items-center flex-1 justify-center gap-10 font-bold uppercase tracking-wider text-sm">
                    {navItems.map((item) => (
                        <a 
                            key={item.name}
                            href={`/${item.href}`}
                            onClick={(e) => handleScroll(e, item.href)}
                            className="hover:underline hover:text-rose-500 transition-all"
                        >
                            {item.name}
                        </a>
                    ))}
                </nav>

                {/* Right CTA / Menu Toggle */}
                <div className="flex items-center h-16">
                    <a 
                        href="/contact"
                        className="hidden md:flex items-center justify-center h-full px-6 font-black uppercase text-sm border-l-[4px] border-black bg-violet-500 text-white hover:bg-violet-400 transition-colors"
                    >
                        Contact Me &rarr;
                    </a>

                    {/* Mobile Hamburger Toggle */}
                    <button 
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden flex items-center justify-center h-full w-16 border-l-[4px] border-black cursor-pointer hover:bg-yellow-300 transition-colors"
                    >
                        {isOpen ? <X className="size-6" /> : <Menu className="size-6" />}
                    </button>
                </div>
            </div>

            {/* Mobile Nav Menu Drawer */}
            {isOpen && (
                <div className="md:hidden border-t-[4px] border-black bg-yellow-200 flex flex-col font-bold uppercase tracking-wider text-center py-6 gap-6">
                    {navItems.map((item) => (
                        <a 
                            key={item.name}
                            href={`/${item.href}`}
                            onClick={(e) => handleScroll(e, item.href)}
                            className="text-lg hover:underline py-2"
                        >
                            {item.name}
                        </a>
                    ))}
                    <a 
                        href="/contact"
                        className="mx-6 py-3 border-[3px] border-black bg-violet-500 text-white text-base font-black uppercase shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:translate-x-[4px] active:translate-y-[4px] active:shadow-[0px_0px_0px_0px_rgba(0,0,0,1)] transition-all text-center"
                    >
                        Contact Me &rarr;
                    </a>
                </div>
            )}
        </header>
    );
}
