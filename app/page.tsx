import Header from "@/components/neobrutalist/Header";
import Hero from "@/components/neobrutalist/Hero";
import SkillsBar from "@/components/neobrutalist/SkillsBar";
import ProjectsAndCertifications from "@/components/neobrutalist/ProjectsAndCertifications";
import ExperienceTimeline from "@/components/neobrutalist/ExperienceTimeline";
import Footer from "@/components/neobrutalist/Footer";

export default function Page() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Person",
        "name": "Nathan Mwai Mwaniki",
        "url": "https://nathanmwai.com",
        "image": "https://nathanmwai.com/images/nathan.webp",
        "jobTitle": "Full-Stack Software Engineer",
        "alumniOf": [
            {
                "@type": "EducationalOrganization",
                "name": "Moringa School"
            },
            {
                "@type": "EducationalOrganization",
                "name": "University of Nairobi"
            }
        ],
        "knowsAbout": [
            "Software Engineering",
            "Web Development",
            "Mobile Development",
            "TypeScript",
            "React",
            "Next.js",
            "Node.js",
            "SaaS Infrastructures"
        ],
        "sameAs": [
            "https://github.com/Nathan-Mwai",
            "https://www.linkedin.com/in/nathan-mwaniki/",
            "https://x.com/CodebaseJournal"
        ]
    };

    return (
        <main className="w-full min-h-screen bg-[#FDFBF7] text-black">
            {/* Structured Schema for Search Engines */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            {/* Header / Nav */}
            <Header />

            {/* Hero Grid Block */}
            <Hero />

            {/* Scrolling / static tech stack list */}
            <SkillsBar />

            {/* Projects & Education / Certifications grid */}
            <ProjectsAndCertifications />

            {/* Professional timeline experience */}
            <ExperienceTimeline />

            {/* Copyright & Social links */}
            <Footer />
        </main>
    );
}
