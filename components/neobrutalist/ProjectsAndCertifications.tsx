"use client";

import React, { useState } from 'react';
import NeobrutalistCard from '../NeobrutalistCard';
import NeobrutalistButton from '../NeobrutalistButton';
import { locations, education } from '@/constants';
import { 
    ArrowUpRight, 
    Figma, 
    ChevronLeft, 
    ChevronRight, 
    Award, 
    Sparkles, 
    Bike, 
    TrendingUp, 
    CodeXml, 
    FileText 
} from 'lucide-react';

function ProjectGraphicPanel({ projectName }: { projectName: string }) {
    const name = projectName.toLowerCase();
    
    if (name.includes('resume') || name.includes('analyzer')) {
        return (
            <div className="w-full h-full bg-yellow-300 bg-grid flex flex-col items-center justify-center p-6 select-none relative">
                <div className="border-[3px] border-black bg-white p-4 shadow-[4px_4px_0px_0px_#000] -rotate-2 max-w-[240px] w-full">
                    <div className="flex justify-between items-center mb-3">
                        <FileText className="size-8 text-violet-500" />
                        <Sparkles className="size-5 text-yellow-500 fill-yellow-500 animate-pulse" />
                    </div>
                    <div className="h-2 bg-gray-200 rounded w-3/4 mb-2"></div>
                    <div className="h-2 bg-gray-200 rounded w-1/2 mb-4"></div>
                    <div className="border-[2px] border-black bg-lime-300 px-2 py-1 text-[10px] font-black text-center uppercase">
                        AI Score: 98%
                    </div>
                </div>
            </div>
        );
    }
    
    if (name.includes('food') || name.includes('delivery')) {
        return (
            <div className="w-full h-full bg-rose-300 bg-grid flex flex-col items-center justify-center p-6 select-none relative">
                <div className="border-[3px] border-black bg-white p-4 shadow-[4px_4px_0px_0px_#000] rotate-3 max-w-[240px] w-full text-center">
                    <div className="flex justify-center mb-3">
                        <Bike className="size-12 text-rose-500" />
                    </div>
                    <div className="font-black text-xs uppercase tracking-wide mb-1">
                        Fast Delivery
                    </div>
                    <div className="font-mono text-[9px] text-gray-500">
                        ETA: 12 MINS • ACTIVE
                    </div>
                </div>
            </div>
        );
    }
    
    if (name.includes('wananchi') || name.includes('economic')) {
        return (
            <div className="w-full h-full bg-violet-300 bg-grid flex flex-col items-center justify-center p-6 select-none relative">
                <div className="border-[3px] border-black bg-white p-4 shadow-[4px_4px_0px_0px_#000] -rotate-1 max-w-[240px] w-full">
                    <div className="flex items-center gap-2 mb-3">
                        <TrendingUp className="size-6 text-green-500" />
                        <span className="font-black text-xs uppercase">Ecosystem</span>
                    </div>
                    <div className="h-16 border-[2px] border-black border-dashed relative bg-gray-50 flex items-end p-1 overflow-hidden">
                        <svg className="w-full h-full text-violet-500" viewBox="0 0 100 50">
                            <path d="M 0 45 L 20 35 L 40 40 L 60 15 L 80 25 L 100 5" fill="none" stroke="currentColor" strokeWidth="4" />
                        </svg>
                    </div>
                </div>
            </div>
        );
    }
    
    return (
        <div className="w-full h-full bg-lime-300 bg-grid flex flex-col items-center justify-center p-6 select-none relative">
            <div className="border-[3px] border-black bg-white p-4 shadow-[4px_4px_0px_0px_#000] rotate-2 max-w-[240px] w-full">
                <div className="flex items-center gap-2 mb-3">
                    <CodeXml className="size-6 text-black" />
                    <span className="font-black text-xs uppercase">Code Log</span>
                </div>
                <div className="font-mono text-[10px] leading-tight text-gray-700 bg-gray-100 p-2 border-[2px] border-black">
                    $ git log -n 1<br />
                    commit 92a7f1...
                </div>
            </div>
        </div>
    );
}

export default function ProjectsAndCertifications() {
    // Parse projects dynamically from locations.work.children
    const projects = locations.work.children.map((projectNode: any) => {
        const txtFile = projectNode.children?.find((c: any) => c.fileType === 'txt');
        const urlFile = projectNode.children?.find((c: any) => c.fileType === 'url');
        const imgFile = projectNode.children?.find((c: any) => c.fileType === 'img');
        const figFile = projectNode.children?.find((c: any) => c.fileType === 'fig');

        // Extract bullet tags if any
        let tags: string[] = ['React', 'TypeScript', 'Tailwind'];
        if (projectNode.name.toLowerCase().includes('resume')) {
            tags = ['Next.js', 'Tailwind', 'AI / Gemini'];
        } else if (projectNode.name.toLowerCase().includes('food')) {
            tags = ['React Native', 'Expo', 'Mobile'];
        }

        return {
            id: projectNode.id,
            name: projectNode.name,
            description: txtFile?.description?.join(' ') || 'A project built with modern technologies.',
            liveUrl: urlFile?.href || '#',
            imageUrl: imgFile?.imageUrl || '/images/project-2.png',
            figmaUrl: figFile?.href || null,
            tags
        };
    });

    const [activeProjectIdx, setActiveProjectIdx] = useState(0);

    const handleNext = () => {
        setActiveProjectIdx((prev) => (prev + 1) % projects.length);
    };

    const handlePrev = () => {
        setActiveProjectIdx((prev) => (prev - 1 + projects.length) % projects.length);
    };

    const currentProject = projects[activeProjectIdx];

    return (
        <section id="projects" className="grid grid-cols-1 lg:grid-cols-12 border-b-[4px] border-black text-black">
            {/* Left side: Featured Projects (8 cols) */}
            <div className="lg:col-span-8 p-8 md:p-12 flex flex-col justify-between border-b-[4px] lg:border-b-0 lg:border-r-[4px] border-black bg-white">
                <div>
                    <div className="flex items-center justify-between mb-8">
                        <h2 className="text-3xl font-black uppercase tracking-tight">
                            Featured Projects
                        </h2>
                        {/* Carousel Arrows */}
                        <div className="flex gap-2">
                            <NeobrutalistButton 
                                onClick={handlePrev}
                                className="p-2 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] active:shadow-[0px_0px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[1px] hover:translate-y-[1px] active:translate-x-[2px] active:translate-y-[2px]"
                            >
                                <ChevronLeft className="size-5" />
                            </NeobrutalistButton>
                            <NeobrutalistButton 
                                onClick={handleNext}
                                bgColor="bg-rose-400"
                                className="p-2 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] active:shadow-[0px_0px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[1px] hover:translate-y-[1px] active:translate-x-[2px] active:translate-y-[2px]"
                            >
                                <ChevronRight className="size-5" />
                            </NeobrutalistButton>
                        </div>
                    </div>

                    {/* Active Project Card */}
                    {currentProject && (
                        <NeobrutalistCard bgColor="bg-white" className="p-5 flex flex-col gap-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all duration-300">
                            {/* Project Graphic Panel */}
                            <div className="border-[3px] border-black overflow-hidden relative aspect-video">
                                <ProjectGraphicPanel projectName={currentProject.name} />
                            </div>

                            {/* Project Details */}
                            <div className="space-y-4">
                                <h3 className="text-2xl font-black uppercase tracking-wide">
                                    {currentProject.name}
                                </h3>
                                <p className="font-mono text-sm leading-relaxed text-gray-700">
                                    {currentProject.description}
                                </p>
                                
                                {/* Technology Tags */}
                                <div className="flex flex-wrap gap-2 pt-2">
                                    {currentProject.tags.map((tag) => (
                                        <span 
                                            key={tag} 
                                            className="px-3 py-1 bg-yellow-200 text-black border-[2px] border-black text-xs font-black uppercase tracking-wider"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Project Action Links */}
                            <div className="flex flex-wrap gap-3 border-t-[3px] border-black pt-5">
                                <a href={currentProject.liveUrl} target="_blank" rel="noopener noreferrer">
                                    <NeobrutalistButton bgColor="bg-lime-400" className="flex items-center gap-1.5 text-xs uppercase py-2">
                                        View Details <ArrowUpRight className="size-4" />
                                    </NeobrutalistButton>
                                </a>
                                {currentProject.figmaUrl && (
                                    <a href={currentProject.figmaUrl} target="_blank" rel="noopener noreferrer">
                                        <NeobrutalistButton bgColor="bg-white" className="flex items-center gap-1.5 text-xs uppercase py-2">
                                            Figma Design <Figma className="size-4" />
                                        </NeobrutalistButton>
                                    </a>
                                )}
                            </div>
                        </NeobrutalistCard>
                    )}
                </div>

                {/* Slider pagination indicators */}
                <div className="flex justify-center gap-2 mt-8 select-none">
                    {projects.map((_, idx) => (
                        <button 
                            key={idx}
                            onClick={() => setActiveProjectIdx(idx)}
                            className={`size-3 rounded-full border-[2px] border-black transition-all cursor-pointer ${
                                idx === activeProjectIdx ? 'bg-black w-6' : 'bg-white hover:bg-gray-200'
                            }`}
                        ></button>
                    ))}
                </div>
            </div>

            {/* Right side: Certifications & Education (4 cols) */}
            <div id="certifications" className="lg:col-span-4 bg-lime-400 p-8 md:p-12 flex flex-col justify-between">
                <div>
                    <h2 className="text-3xl font-black uppercase tracking-tight mb-8">
                        Education &amp; Certs
                    </h2>

                    <div className="flex flex-col gap-5 max-h-[500px] overflow-y-auto pr-2 custom-scrollbar">
                        {education.map((edu) => (
                            <NeobrutalistCard 
                                key={edu.id} 
                                bgColor="bg-white" 
                                className="p-5 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] transition-all flex flex-col gap-3 text-black"
                            >
                                <div className="flex gap-3 items-start">
                                    <div className="p-2 bg-yellow-300 border-[2.5px] border-black rounded-lg shrink-0">
                                        <Award className="size-5" />
                                    </div>
                                    <div className="min-w-0 flex-1">
                                        <h4 className="font-black text-xs uppercase tracking-wider text-rose-500 mb-1 truncate" title={edu.school}>
                                            {edu.school}
                                        </h4>
                                        <h3 className="font-black text-sm uppercase leading-tight mb-1 text-black break-words">
                                            {edu.degree}
                                        </h3>
                                        <p className="font-mono text-[10px] text-gray-500 uppercase tracking-widest">
                                            {edu.period}
                                        </p>
                                        {edu.credentialId && (
                                            <p className="font-mono text-[9px] text-gray-400 mt-1 select-all">
                                                ID: {edu.credentialId}
                                            </p>
                                        )}
                                    </div>
                                </div>

                                {edu.skills && edu.skills.length > 0 && (
                                    <div className="flex flex-wrap gap-1 mt-1">
                                        {edu.skills.map((skill) => (
                                            <span 
                                                key={skill} 
                                                className="px-1.5 py-0.5 bg-yellow-100 text-black border-[1.5px] border-black text-[9px] font-black uppercase tracking-wider"
                                            >
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                )}

                                {edu.link && (
                                    <a 
                                        href={edu.link} 
                                        target="_blank" 
                                        rel="noopener noreferrer" 
                                        className="w-full mt-2 block"
                                    >
                                        <NeobrutalistButton 
                                            bgColor="bg-white hover:bg-yellow-300" 
                                            className="w-full text-[10px] py-1.5 uppercase flex items-center justify-center gap-1 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] active:shadow-[0px_0px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[1px] hover:translate-y-[1px] active:translate-x-[2px] active:translate-y-[2px]"
                                        >
                                            Verify Credential <ArrowUpRight className="size-3" />
                                        </NeobrutalistButton>
                                    </a>
                                )}
                            </NeobrutalistCard>
                        ))}
                    </div>
                </div>

                {/* Badge decoration or link */}
                <div className="mt-8">
                    <NeobrutalistCard bgColor="bg-white" className="p-4 text-center font-black uppercase text-xs tracking-wider shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                        👩‍🎓 100% Moringa Alum &amp; UoN Economist
                    </NeobrutalistCard>
                </div>
            </div>
        </section>
    );
}
