export default function Cybersec() {
    return (
        <section
            id="cybersec"
            className="min-h-screen bg-[#080c10] text-white relative overflow-hidden scroll-mt-20"
        >
            <div className="max-w-5xl mx-auto px-8 md:px-16 py-24">
                <p className="font-mono text-sm text-[#48aaad] mb-4">
                    // cybersec
                </p>
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                    When I&apos;m not building, I&apos;m breaking.
                </h2>
                <p className="text-zinc-400 text-base md:text-lg leading-relaxed max-w-2xl mb-12">
                    Security started as curiosity and stuck around as a habit.
                    Most weekends I&apos;m grinding PortSwigger labs,
                    dissecting writeups, or breaking sandboxed apps so I
                    don&apos;t break things at work.
                </p>

                <div className="rounded-xl overflow-hidden border border-zinc-800 bg-black shadow-2xl">
                    <div className="flex items-center gap-2 px-4 py-3 bg-zinc-900/80 border-b border-zinc-800">
                        <div className="flex gap-1.5">
                            <span className="w-3 h-3 rounded-full bg-red-500" />
                            <span className="w-3 h-3 rounded-full bg-yellow-500" />
                            <span className="w-3 h-3 rounded-full bg-green-500" />
                        </div>
                        <span className="ml-3 font-mono text-xs text-zinc-400">
                            ~/cybersec
                        </span>
                    </div>

                    <div className="p-4 md:p-8 font-mono text-xs md:text-sm leading-relaxed overflow-x-auto">
                        <p>
                            <span className="text-emerald-400">yuda@parrot</span>
                            <span className="text-zinc-500">:</span>
                            <span className="text-sky-400">~</span>
                            <span className="text-zinc-500">$</span>{" "}
                            <span className="text-zinc-200">whoami</span>
                        </p>
                        <p className="text-zinc-400 mt-1 mb-4">
                            Yuda &mdash; cybersecurity enthusiast, web pentest
                            student, builder.
                        </p>

                        <p>
                            <span className="text-emerald-400">yuda@parrot</span>
                            <span className="text-zinc-500">:</span>
                            <span className="text-sky-400">~</span>
                            <span className="text-zinc-500">$</span>{" "}
                            <span className="text-zinc-200">cat focus.txt</span>
                        </p>
                        <ul className="text-zinc-400 mt-1 mb-4 space-y-0.5">
                            <li>
                                <span className="text-[#48aaad]">-</span> Web
                                Application Security
                            </li>
                            <li>
                                <span className="text-[#48aaad]">-</span>{" "}
                                Authentication & Session Flaws
                            </li>
                            <li>
                                <span className="text-[#48aaad]">-</span> SQL
                                Injection & Web Cache Deception
                            </li>
                            <li>
                                <span className="text-[#48aaad]">-</span> OWASP
                                Top 10
                            </li>
                        </ul>

                        <p>
                            <span className="text-emerald-400">yuda@parrot</span>
                            <span className="text-zinc-500">:</span>
                            <span className="text-sky-400">~</span>
                            <span className="text-zinc-500">$</span>{" "}
                            <span className="text-zinc-200">
                                ls platforms/
                            </span>
                        </p>
                        <p className="text-zinc-400 mt-1 mb-4">
                            <span className="text-sky-400">portswigger/</span>
                            {"   "}
                            <span className="text-sky-400">hackthebox/</span>
                            {"   "}
                            <span className="text-sky-400">tryhackme/</span>
                        </p>

                        <p>
                            <span className="text-emerald-400">yuda@parrot</span>
                            <span className="text-zinc-500">:</span>
                            <span className="text-sky-400">~</span>
                            <span className="text-zinc-500">$</span>{" "}
                            <span className="text-zinc-200">
                                history | tail
                            </span>
                        </p>
                        <ul className="text-zinc-400 mt-1 mb-4 space-y-0.5">
                            <li>
                                <span className="text-emerald-400">✓</span>{" "}
                                Working through Burp Suite Practitioner Track
                                &mdash; 50% Web Cache Deception path
                            </li>
                            <li>
                                <span className="text-emerald-400">✓</span>{" "}
                                Reading security writeups &amp; docs &mdash;
                                PortSwigger, HackTricks, OWASP
                            </li>
                            <li>
                                <span className="text-emerald-400">✓</span>{" "}
                                Building secure web apps by day, breaking them
                                in labs by night
                            </li>
                        </ul>

                        <p>
                            <span className="text-emerald-400">yuda@parrot</span>
                            <span className="text-zinc-500">:</span>
                            <span className="text-sky-400">~</span>
                            <span className="text-zinc-500">$</span>{" "}
                            <span className="inline-block w-2 h-4 bg-[#48aaad] align-middle terminal-cursor" />
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
