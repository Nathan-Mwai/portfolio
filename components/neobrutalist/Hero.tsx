"use client";

import React from 'react';
import NeobrutalistButton from '../NeobrutalistButton';
import NeobrutalistCard from '../NeobrutalistCard';
import { Github, Linkedin, Twitter, Mail, ArrowUpRight, Download } from 'lucide-react';
import { socials } from '@/constants';

export default function Hero() {
    // Map socials from constants so they correspond to real links
    const getSocialIcon = (text: string) => {
        switch (text.toLowerCase()) {
            case 'github': return <Github className="size-6" />;
            case 'linkedin': return <Linkedin className="size-6" />;
            case 'twitter/x': return <Twitter className="size-6" />;
            default: return <Mail className="size-6" />;
        }
    };

    return (
        <section className="grid grid-cols-1 lg:grid-cols-12 border-b-[4px] border-black text-black">
            {/* Left side: Bio and Actions */}
            <div className="lg:col-span-7 bg-grid p-8 md:p-16 flex flex-col justify-center border-b-[4px] lg:border-b-0 lg:border-r-[4px] border-black">
                <span className="inline-block w-fit px-4 py-1.5 mb-6 text-sm font-black uppercase tracking-wider text-white bg-violet-500 border-[3px] border-black shadow-[2px_2px_0px_0px_#000]">
                    HEY, I'M NATHAN 👋
                </span>
                
                <h1 className="text-5xl md:text-7xl font-black uppercase leading-none tracking-tight mb-6">
                    SOFTWARE <br />
                    ENGINEER
                </h1>
                
                <p className="font-mono text-base md:text-lg mb-8 leading-relaxed max-w-xl text-gray-800">
                    I build scalable web applications, engineer secure SaaS infrastructures, and make code better. Specializing in full-stack architecture, web development, and mobile apps.
                </p>

                {/* Main buttons */}
                <div className="flex flex-col sm:flex-row gap-4 mb-10">
                    <a href="#projects" className="w-full sm:w-auto">
                        <NeobrutalistButton bgColor="bg-lime-400" className="w-full sm:w-auto flex items-center justify-center gap-2 uppercase tracking-wide">
                            View My Work <ArrowUpRight className="size-5" />
                        </NeobrutalistButton>
                    </a>
                    <a href="/files/resume.pdf" download className="w-full sm:w-auto">
                        <NeobrutalistButton bgColor="bg-white" className="w-full sm:w-auto flex items-center justify-center gap-2 uppercase tracking-wide">
                            Download Resume <Download className="size-5" />
                        </NeobrutalistButton>
                    </a>
                </div>

                {/* Social icons */}
                <div>
                    <h3 className="font-bold text-xs uppercase tracking-wider text-gray-500 mb-3">
                        Connect with me
                    </h3>
                    <div className="flex flex-wrap gap-3">
                        {socials.map((social) => (
                            <a 
                                key={social.id} 
                                href={social.link} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                title={social.text}
                            >
                                <NeobrutalistButton 
                                    bgColor="bg-white hover:bg-yellow-300 transition-colors" 
                                    className="p-3 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:shadow-[1.5px_1.5px_0px_0px_rgba(0,0,0,1)] active:shadow-[0px_0px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[1.5px] hover:translate-y-[1.5px] active:translate-x-[3px] active:translate-y-[3px]"
                                >
                                    {getSocialIcon(social.text)}
                                </NeobrutalistButton>
                            </a>
                        ))}
                    </div>
                </div>
            </div>

            {/* Right side: Image and Stats Box */}
            <div className="lg:col-span-5 bg-rose-400 p-8 md:p-16 flex flex-col items-center justify-center gap-10">
                {/* Photo with Neobrutalist borders */}
                <div className="relative group max-w-sm w-full">
                    {/* Background decoration offset card */}
                    <div className="absolute inset-0 bg-lime-400 border-[3px] border-black translate-x-4 translate-y-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"></div>
                    {/* Image card container */}
                    <NeobrutalistCard bgColor="bg-white" className="relative z-10 p-3 overflow-hidden shadow-none hover:-translate-x-1 hover:-translate-y-1 transition-all duration-300">
                        {/* Defaulting to nathan.webp or custom placeholder */}
                        <img 
                            src="/images/nathan.webp" 
                            alt="Nathan Mwai Mwaniki" 
                            className="w-full h-80 object-cover border-[3px] border-black"
                            onError={(e) => {
                                // Fallback image if nathan.webp fails
                                e.currentTarget.src = "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=600";
                            }}
                        />
                    </NeobrutalistCard>
                </div>

                {/* Code Block Container */}
                <NeobrutalistCard bgColor="bg-violet-500" className="w-full max-w-sm p-5 font-mono text-xs text-white shadow-[6px_6px_0px_0px_#000]">
                    <div className="flex gap-1.5 mb-3 border-b border-violet-400 pb-2">
                        <div className="size-2.5 rounded-full bg-red-400"></div>
                        <div className="size-2.5 rounded-full bg-yellow-400"></div>
                        <div className="size-2.5 rounded-full bg-green-400"></div>
                    </div>
                    <div className="space-y-1 select-none">
                        <p className="text-violet-200">&gt; const developer = &#123;</p>
                        <p className="pl-4">code: <span className="text-yellow-300">&apos;TypeScript&apos;</span>,</p>
                        <p className="pl-4">build: [<span className="text-yellow-300">&apos;React&apos;</span>, <span className="text-yellow-300">&apos;Next.js&apos;</span>],</p>
                        <p className="pl-4">deploy: <span className="text-yellow-300">&apos;Vercel&apos;</span>,</p>
                        <p className="pl-4">passion: <span className="text-yellow-300">&apos;Solving Problems&apos;</span></p>
                        <p className="text-violet-200">&#125;</p>
                    </div>
                </NeobrutalistCard>
            </div>
        </section>
    );
}
