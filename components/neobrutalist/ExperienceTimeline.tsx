"use client";

import React from 'react';
import { experience } from '@/constants';
import NeobrutalistCard from '../NeobrutalistCard';
import NeobrutalistButton from '../NeobrutalistButton';

export default function ExperienceTimeline() {
    return (
        <section id="experience" className="grid grid-cols-1 lg:grid-cols-12 border-b-[4px] border-black text-black">
            {/* Left Block: Section Header (3 cols) */}
            <div className="lg:col-span-3 bg-rose-400 p-8 md:p-12 flex flex-col justify-between border-b-[4px] lg:border-b-0 lg:border-r-[4px] border-black select-none">
                <h2 className="text-3xl lg:text-4xl font-black uppercase tracking-tight leading-none">
                    Work <br className="hidden lg:inline" />
                    Experience
                </h2>
                <div className="hidden lg:block text-5xl font-black">
                    &rarr;
                </div>
            </div>

            {/* Middle Block: Experience Timeline List (6 cols) */}
            <div className="lg:col-span-6 p-8 md:p-12 bg-white border-b-[4px] lg:border-b-0 lg:border-r-[4px] border-black">
                <div className="relative border-l-[3px] border-black pl-6 md:pl-10 ml-4 md:ml-6 space-y-12 py-2">
                    {experience.map((exp) => (
                        <div key={exp.id} className="relative group">
                            {/* Bullet Point Indicator */}
                            <div className="absolute -left-[35px] md:-left-[51px] top-1.5 size-6 rounded-full border-[3px] border-black bg-yellow-300 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] group-hover:bg-lime-400 group-hover:scale-110 transition-all duration-200"></div>

                            {/* Job Entry info */}
                            <div>
                                <span className="inline-block font-mono text-xs text-gray-500 uppercase font-black mb-1">
                                    {exp.period}
                                </span>
                                <h3 className="font-black text-xl uppercase tracking-wide leading-tight">
                                    {exp.role}
                                </h3>
                                <h4 className="font-bold text-sm uppercase text-violet-500 mb-4">
                                    {exp.company}
                                </h4>

                                {/* Bullet achievements */}
                                <ul className="font-mono text-xs space-y-2 text-gray-700 list-inside list-disc">
                                    {exp.bullets.map((bullet, index) => (
                                        <li key={index} className="leading-relaxed">
                                            <span className="font-sans pl-1">{bullet}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Right Block: CTA Card Grid (3 cols) */}
            <div className="lg:col-span-3 bg-blue-500 bg-grid p-8 md:p-12 flex flex-col justify-center items-center text-center text-white">
                <h3 className="text-2xl font-black uppercase tracking-wide leading-snug mb-6">
                    Let&apos;s build <br />
                    something <br />
                    amazing <br />
                    together.
                </h3>
                <a href="/contact" className="w-full">
                    <NeobrutalistButton 
                        bgColor="bg-white text-black hover:bg-yellow-300 transition-colors w-full uppercase py-3"
                    >
                        Get In Touch &rarr;
                    </NeobrutalistButton>
                </a>
            </div>
        </section>
    );
}
