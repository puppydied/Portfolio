export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="bg-[#080c10] border-t border-white/5">
            <div className="max-w-7xl mx-auto px-8 md:px-16 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
                <p className="font-mono text-xs text-zinc-500">
                    <span className="text-[#48aaad]">©</span> {year}{" "}
                    <span className="text-zinc-300">yuda.dev</span> &mdash; All
                    rights reserved.
                </p>
                <p className="font-mono text-xs text-zinc-500">
                    Built with{" "}
                    <span className="text-zinc-300">Next.js</span>,{" "}
                    <span className="text-zinc-300">React</span>, and{" "}
                    <span className="text-zinc-300">Tailwind</span>.
                </p>
            </div>
        </footer>
    );
}
