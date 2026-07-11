"use client";

import React, { useState } from 'react';
import Header from "@/components/neobrutalist/Header";
import Footer from "@/components/neobrutalist/Footer";
import NeobrutalistCard from "@/components/NeobrutalistCard";
import NeobrutalistButton from "@/components/NeobrutalistButton";
import { Copy, Check, ArrowUpRight } from 'lucide-react';
import { socials } from '@/constants';
import { getSocialIcon } from '@/utils/social';

export default function ContactContent() {
    const [copyState, setCopyState] = useState<'idle' | 'success' | 'error'>('idle');
    const emailAddress = "mwaimwaniki001@gmail.com";

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(emailAddress);
            setCopyState('success');
            setTimeout(() => setCopyState('idle'), 2000);
        } catch (err) {
            console.error('Failed to copy text: ', err);
            setCopyState('error');
            setTimeout(() => setCopyState('idle'), 2000);
        }
    };

    return (
        <main className="w-full min-h-screen bg-[#FDFBF7] text-black flex flex-col justify-between">
            {/* Header */}
            <Header />

            {/* Main Contact Container */}
            <div className="flex-1 bg-grid py-12 px-6 flex items-center justify-center">
                <div className="max-w-4xl w-full flex flex-col gap-10">
                    
                    {/* Page Header */}
                    <div className="text-center space-y-4">
                        <span className="inline-block px-4 py-1.5 text-sm font-black uppercase tracking-wider text-white bg-violet-500 border-[3px] border-black shadow-[2px_2px_0px_0px_#000]">
                            GET IN TOUCH
                        </span>
                        <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tight">
                            Say Hello
                        </h1>
                        <p className="font-mono text-sm md:text-base text-gray-700 max-w-xl mx-auto leading-relaxed">
                            Have a question, proposal, or project idea? Feel free to send an email or reach out on any of my professional channels.
                        </p>
                    </div>

                    {/* Contact Info Card Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                        
                        {/* Primary Email Card (7 cols) */}
                        <NeobrutalistCard bgColor="bg-yellow-300" className="md:col-span-7 p-6 md:p-8 flex flex-col justify-between gap-8 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
                            <div>
                                <span className="inline-block px-3 py-1 bg-white text-black font-black uppercase text-xs tracking-wider border-[2.5px] border-black mb-4">
                                    Primary Email
                                </span>
                                <h2 className="text-2xl md:text-3xl font-black font-mono break-all leading-none select-all text-black">
                                    {emailAddress}
                                </h2>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <NeobrutalistButton 
                                    href={`mailto:${emailAddress}?subject=Let's%20build%20something%20together!`}
                                    bgColor="bg-lime-400" 
                                    className="flex-1 flex items-center justify-center gap-2 uppercase py-3 text-sm"
                                >
                                    Open Mail Client <ArrowUpRight className="size-4" />
                                </NeobrutalistButton>
                                <NeobrutalistButton 
                                    onClick={handleCopy}
                                    bgColor="bg-white" 
                                    className="flex items-center justify-center gap-2 uppercase py-3 text-sm min-w-[130px]"
                                >
                                    {copyState === 'success' ? (
                                        <>Copied! <Check className="size-4 text-green-600" /></>
                                    ) : copyState === 'error' ? (
                                        <>Failed to copy <span className="text-rose-600 font-bold ml-1">x</span></>
                                    ) : (
                                        <>Copy Email <Copy className="size-4" /></>
                                    )}
                                </NeobrutalistButton>
                            </div>
                        </NeobrutalistCard>

                        {/* Social Links Cards (5 cols) */}
                        <div className="md:col-span-5 flex flex-col gap-4">
                            {socials.map((social) => (
                                <a 
                                    key={social.id}
                                    href={social.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block group"
                                >
                                    <NeobrutalistCard 
                                        bgColor="bg-white group-hover:bg-rose-100 transition-colors" 
                                        className="p-4 flex items-center justify-between shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] group-hover:translate-x-[-1px] group-hover:translate-y-[-1px] group-hover:shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] transition-all"
                                    >
                                        <div className="flex items-center gap-4">
                                            <div className="p-2 border-[2.5px] border-black rounded-lg bg-[#FAF8F5]">
                                                {getSocialIcon(social.text, 'size-8')}
                                            </div>
                                            <span className="font-black uppercase tracking-wider text-sm">
                                                {social.text}
                                            </span>
                                        </div>
                                        <ArrowUpRight className="size-5 text-gray-400 group-hover:text-black transition-colors" />
                                    </NeobrutalistCard>
                                </a>
                            ))}
                        </div>

                    </div>

                    {/* Quick Phone Callout */}
                    <div className="text-center font-mono text-xs uppercase tracking-widest text-gray-500">
                        Prefer phone calls? Ring me at: (+254) 712-672450
                    </div>

                </div>
            </div>

            {/* Footer */}
            <Footer />
        </main>
    );
}
