"use client";

import { useRef } from "react";
import { ExternalLink } from "lucide-react";
import { SiGithub } from "react-icons/si";
import type { CSSProperties, MouseEvent } from "react";

// TODO: ganti dengan project lo sendiri
type Project = {
    title: string;
    description: string;
    stack: string[];
    github?: string;
    live?: string;
    featured?: boolean;
};

const PROJECTS: Project[] = [
    {
        title: "SIPATROL",
        description:
            "Production internal ticketing system used by Astra Infra Solutions ops team. Built with hybrid 2-layer auth (NextAuth v5 + Prisma on Edge runtime), WhatsApp notifications via Fonnte API, server-side Excel report generation, and automated image compression with Sharp.",
        stack: ["Next.js", "PostgreSQL", "Prisma", "NextAuth v5", "Fonnte API"],
        live: "https://hd.astrainfrasolutions.id/",
        featured: true,
    },
    {
        title: "yuda.dev",
        description:
            "This portfolio site. Built with Next.js 16, React 19, Tailwind 4, and a custom DecryptedText animation. Server components by default, client components only where needed.",
        stack: ["Next.js", "React", "TypeScript", "Tailwind"],
        github: "https://github.com/puppydied/Portfolio",
    },
    {
        title: "Burp Suite Practitioner Track",
        description:
            "Self-directed learning track on PortSwigger Web Security Academy — working toward Burp Suite Certified Practitioner. Currently 50% through the Web Cache Deception path, with focus on SQL injection and authentication flaws. Learning by breaking, one lab at a time.",
        stack: ["Burp Suite", "PortSwigger", "Web Security", "OWASP"],
    },
];

function ProjectCard({ project }: { project: Project }) {
    const ref = useRef<HTMLDivElement>(null);

    const onMouseMove = (e: MouseEvent<HTMLDivElement>) => {
        if (!ref.current) return;
        const rect = ref.current.getBoundingClientRect();
        ref.current.style.setProperty(
            "--mouse-x",
            `${e.clientX - rect.left}px`
        );
        ref.current.style.setProperty(
            "--mouse-y",
            `${e.clientY - rect.top}px`
        );
    };

    return (
        <div
            ref={ref}
            onMouseMove={onMouseMove}
            className={`group relative overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900/30 p-6 transition-all duration-300 hover:border-zinc-700 hover:-translate-y-1 ${
                project.featured ? "md:col-span-2" : ""
            }`}
        >
            <div
                aria-hidden
                className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                style={
                    {
                        background:
                            "radial-gradient(400px circle at var(--mouse-x) var(--mouse-y), rgba(72,170,173,0.15), transparent 40%)",
                    } as CSSProperties
                }
            />

            <div className="relative z-10 flex h-full flex-col gap-4">
                <div className="flex items-start justify-between gap-4">
                    <h3 className="text-xl md:text-2xl font-bold text-white">
                        {project.title}
                    </h3>
                    {project.featured && (
                        <span className="font-mono text-[10px] uppercase tracking-wider text-[#48aaad] border border-[#48aaad]/40 px-2 py-0.5 rounded-full">
                            Featured
                        </span>
                    )}
                </div>

                <p className="text-sm md:text-base text-zinc-400 leading-relaxed flex-1">
                    {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                        <span
                            key={tech}
                            className="font-mono text-[11px] text-zinc-300 bg-zinc-800/60 px-2 py-1 rounded"
                        >
                            {tech}
                        </span>
                    ))}
                </div>

                <div className="flex items-center gap-4 pt-2">
                    {project.github && (
                        <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-sm text-zinc-400 hover:text-white transition-colors"
                            aria-label={`${project.title} on GitHub`}
                        >
                            <SiGithub className="w-4 h-4" />
                            <span className="font-mono">code</span>
                        </a>
                    )}
                    {project.live && (
                        <a
                            href={project.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-sm text-zinc-400 hover:text-white transition-colors"
                            aria-label={`${project.title} live site`}
                        >
                            <ExternalLink className="w-4 h-4" />
                            <span className="font-mono">live</span>
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
}

export default function Projects() {
    return (
        <section
            id="projects"
            className="min-h-screen bg-[#080c10] text-white relative overflow-hidden scroll-mt-20"
        >
            <div className="max-w-6xl mx-auto px-8 md:px-16 py-24">
                <p className="font-mono text-sm text-[#48aaad] mb-4">
                    // projects
                </p>
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                    Things I&apos;ve built.
                </h2>
                <p className="text-zinc-400 text-base md:text-lg leading-relaxed max-w-2xl mb-16">
                    A mix of shipped work, side projects, and security writeups.
                    Hover the cards to inspect them &mdash; literally.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {PROJECTS.map((project) => (
                        <ProjectCard key={project.title} project={project} />
                    ))}
                </div>
            </div>
        </section>
    );
}
