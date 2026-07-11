"use client";

import React from 'react';
import { socials } from '@/constants';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

export default function Footer() {
    const getSocialIcon = (text: string) => {
        switch (text.toLowerCase()) {
            case 'github': return <Github className="size-5" />;
            case 'linkedin': return <Linkedin className="size-5" />;
            case 'twitter/x': return <Twitter className="size-5" />;
            default: return <Mail className="size-5" />;
        }
    };

    return (
        <footer className="bg-[#FDFBF7] text-black">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between border-t-[4px] border-black">
                {/* Brand label */}
                <div className="w-full md:w-auto h-16 px-6 font-black text-base flex items-center justify-center border-b-[4px] md:border-b-0 md:border-r-[4px] border-black bg-lime-400 select-none">
                    &lt;/&gt; NATHAN DEV
                </div>

                {/* Copyright info */}
                <div className="flex-1 h-16 flex items-center justify-center font-mono text-xs uppercase text-gray-500 border-b-[4px] md:border-b-0 border-black px-6 text-center">
                    &copy; {new Date().getFullYear()} Nathan Mwai Mwaniki. All rights reserved.
                </div>

                {/* Social icons */}
                <div className="flex items-center h-16 border-l-0 md:border-l-[4px] border-black divide-x-[4px] divide-black w-full md:w-auto justify-center">
                    {socials.map((social) => (
                        <a 
                            key={social.id}
                            href={social.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="h-full w-14 flex items-center justify-center hover:bg-yellow-300 transition-colors"
                            title={social.text}
                        >
                            {getSocialIcon(social.text)}
                        </a>
                    ))}
                </div>
            </div>
        </footer>
    );
}
