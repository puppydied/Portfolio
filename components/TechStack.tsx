import {
    SiReact,
    SiNextdotjs,
    SiTypescript,
    SiTailwindcss,
    SiPython,
    SiJavascript,
    SiNodedotjs,
    SiGit,
    SiGithub,
    SiDocker,
    SiLinux,
    SiBurpsuite,
    SiParrotsecurity,
    SiPostgresql,
} from "react-icons/si";
import type { IconType } from "react-icons";
import type { CSSProperties } from "react";

type Tech = {
    name: string;
    icon: IconType;
    color: string;
};

type Category = {
    title: string;
    items: Tech[];
};

const CATEGORIES: Category[] = [
    {
        title: "Frontend",
        items: [
            { name: "React", icon: SiReact, color: "#61DAFB" },
            { name: "Next.js", icon: SiNextdotjs, color: "#ffffff" },
            { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
            { name: "Tailwind", icon: SiTailwindcss, color: "#06B6D4" },
        ],
    },
    {
        title: "Languages & Backend",
        items: [
            { name: "Python", icon: SiPython, color: "#3776AB" },
            { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
            { name: "Node.js", icon: SiNodedotjs, color: "#5FA04E" },
            { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
        ],
    },
    {
        title: "Tools",
        items: [
            { name: "Git", icon: SiGit, color: "#F05032" },
            { name: "GitHub", icon: SiGithub, color: "#ffffff" },
            { name: "Docker", icon: SiDocker, color: "#2496ED" },
        ],
    },
    {
        title: "Security",
        items: [
            { name: "Linux", icon: SiLinux, color: "#FCC624" },
            { name: "Burp Suite", icon: SiBurpsuite, color: "#FF6633" },
            { name: "Parrot OS", icon: SiParrotsecurity, color: "#15ACDD" },
        ],
    },
];

function TechCard({ tech }: { tech: Tech }) {
    const Icon = tech.icon;
    const style = { "--brand": tech.color } as CSSProperties;

    return (
        <div
            style={style}
            className="group relative flex flex-col items-center gap-3 p-6 rounded-xl border border-zinc-800 bg-zinc-900/30 transition-all duration-300 hover:border-(--brand)/40 hover:shadow-[0_0_30px_-10px_var(--brand)] hover:-translate-y-1"
        >
            <Icon
                className="w-10 h-10 text-zinc-300 transition-colors duration-300 group-hover:text-(--brand)"
            />
            <span className="text-xs font-mono text-zinc-400 group-hover:text-zinc-200 transition-colors">
                {tech.name}
            </span>
        </div>
    );
}

export default function TechStack() {
    return (
        <section
            id="tech"
            className="min-h-screen bg-[#080c10] text-white relative overflow-hidden scroll-mt-20"
        >
            <div className="max-w-6xl mx-auto px-8 md:px-16 py-24">
                <p className="font-mono text-sm text-[#48aaad] mb-4">
                    // tech_stack
                </p>
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                    Tools of the trade.
                </h2>
                <p className="text-zinc-400 text-base md:text-lg leading-relaxed max-w-2xl mb-16">
                    The stack I reach for when building, and the gear I run when
                    breaking. Nothing exotic &mdash; just tools I&apos;ve put
                    real hours into.
                </p>

                <div className="space-y-12">
                    {CATEGORIES.map((cat) => (
                        <div key={cat.title}>
                            <h3 className="font-mono text-sm text-zinc-500 mb-6 flex items-center gap-3">
                                <span className="text-[#48aaad]">&gt;</span>
                                {cat.title}
                                <span className="flex-1 h-px bg-zinc-800" />
                            </h3>
                            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                                {cat.items.map((tech) => (
                                    <TechCard key={tech.name} tech={tech} />
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
