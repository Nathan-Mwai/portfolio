"use client";

import React from 'react';
import { techStack } from '@/constants';

export default function SkillsBar() {
    // Extract all unique items across categories
    const allSkills = techStack.flatMap(stack => stack.items);

    return (
        <section id="skills" className="border-b-[4px] border-black flex flex-col md:flex-row text-black">
            {/* Title Block */}
            <div className="md:w-60 bg-violet-500 text-white font-black text-2xl uppercase tracking-wider py-6 px-8 flex items-center justify-between border-b-[4px] md:border-b-0 md:border-r-[4px] border-black select-none">
                Skills <span>&rarr;</span>
            </div>

            {/* Skills List Block */}
            <div className="flex-1 bg-yellow-300 py-6 px-8 flex flex-wrap items-center gap-4">
                {allSkills.map((skill, index) => (
                    <span 
                        key={`${skill}-${index}`}
                        className="px-4 py-2 bg-white text-black font-black uppercase text-xs tracking-wider border-[3px] border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all select-none"
                    >
                        {skill}
                    </span>
                ))}
            </div>
        </section>
    );
}
