"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
    { label: "About", href: "#about", id: "about" },
    { label: "Tech", href: "#tech", id: "tech" },
    { label: "Projects", href: "#projects", id: "projects" },
    { label: "Cybersec", href: "#cybersec", id: "cybersec" },
    { label: "Contact", href: "#contact", id: "contact" },
];

export default function Navbar() {
    const [activeSection, setActiveSection] = useState("");
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        const ratios = new Map<string, number>();

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    ratios.set(
                        entry.target.id,
                        entry.isIntersecting ? entry.intersectionRatio : 0
                    );
                });

                let topId = "";
                let topRatio = 0;
                ratios.forEach((ratio, id) => {
                    if (ratio > topRatio) {
                        topRatio = ratio;
                        topId = id;
                    }
                });
                setActiveSection(topRatio > 0 ? topId : "");
            },
            {
                threshold: [0, 0.25, 0.5, 0.75, 1],
                rootMargin: "-30% 0px -30% 0px",
            }
        );

        NAV_LINKS.forEach((link) => {
            const el = document.getElementById(link.id);
            if (el) observer.observe(el);
        });

        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener("scroll", onScroll);
        onScroll();
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 px-8 md:px-16 py-4 transition-all duration-300 ${
                scrolled
                    ? "bg-[#080c10]/80 backdrop-blur-md border-b border-white/10"
                    : "bg-transparent border-b border-transparent"
            }`}
        >
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                <a
                    href="#"
                    onClick={(e) => {
                        e.preventDefault();
                        setMobileOpen(false);
                        window.scrollTo({ top: 0, behavior: "smooth" });
                    }}
                    className="font-mono text-lg text-white hover:text-[#48aaad] transition-colors cursor-pointer"
                >
                    yuda<span className="text-[#48aaad]">.dev</span>
                </a>

                <ul className="hidden md:flex items-center gap-8">
                    {NAV_LINKS.map((link) => {
                        const isActive = activeSection === link.id;
                        return (
                            <li key={link.href} className="relative">
                                <a
                                    href={link.href}
                                    className={`font-mono text-sm transition-colors ${
                                        isActive
                                            ? "text-[#48aaad]"
                                            : "text-zinc-400 hover:text-white"
                                    }`}
                                >
                                    {link.label}
                                </a>
                                {isActive && (
                                    <span className="absolute -bottom-2 left-0 right-0 h-px bg-[#48aaad]" />
                                )}
                            </li>
                        );
                    })}
                </ul>

                <button
                    onClick={() => setMobileOpen(!mobileOpen)}
                    className="md:hidden text-white p-1"
                    aria-label="Toggle menu"
                >
                    {mobileOpen ? <X /> : <Menu />}
                </button>
            </div>

            {mobileOpen && (
                <div className="md:hidden mt-4 pb-2">
                    <ul className="flex flex-col gap-3 border-t border-white/5 pt-4">
                        {NAV_LINKS.map((link) => {
                            const isActive = activeSection === link.id;
                            return (
                                <li key={link.href}>
                                    <a
                                        href={link.href}
                                        onClick={() => setMobileOpen(false)}
                                        className={`font-mono text-sm block py-1 ${
                                            isActive
                                                ? "text-[#48aaad]"
                                                : "text-zinc-400"
                                        }`}
                                    >
                                        {link.label}
                                    </a>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            )}
        </nav>
    );
}
