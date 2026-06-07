export default function CodeWindow() {
    return (
        <div className="rounded-xl overflow-hidden border border-zinc-800 bg-[#0d1117] shadow-2xl transition-all duration-300 hover:border-zinc-700 hover:shadow-[0_0_40px_-15px_rgba(72,170,173,0.3)]">
            <div className="flex items-center gap-2 px-4 py-3 bg-zinc-900/60 border-b border-zinc-800">
                <div className="flex gap-1.5">
                    <span className="w-3 h-3 rounded-full bg-red-500" />
                    <span className="w-3 h-3 rounded-full bg-yellow-500" />
                    <span className="w-3 h-3 rounded-full bg-green-500" />
                </div>
                <span className="ml-3 font-mono text-xs text-zinc-400">about.ts</span>
            </div>

            <div className="p-4 md:p-6 font-mono text-xs md:text-sm leading-relaxed overflow-x-auto">
    <p>
        <span className="text-zinc-500">{`// Who's behind the keyboard?`}</span>
    </p>

    <p className="mt-3">
        <span className="text-purple-400">const</span>{" "}
        <span className="text-sky-400">yuda</span>{" "}
        <span className="text-zinc-400">=</span>{" "}
        <span className="text-zinc-200">{"{"}</span>
    </p>

    <p className="pl-6">
        <span className="text-emerald-400">role</span>
        <span className="text-zinc-400">:</span>{" "}
        <span className="text-zinc-200">[</span>
        <span className="text-amber-300">{`"Software Dev"`}</span>
        <span className="text-zinc-400">,</span>{" "}
        <span className="text-amber-300">{`"Cybersec Enthusiast"`}</span>
        <span className="text-zinc-200">],</span>
    </p>

    <p className="pl-6">
        <span className="text-emerald-400">location</span>
        <span className="text-zinc-400">:</span>{" "}
        <span className="text-amber-300">{`"Serang, Indonesia"`}</span>
        <span className="text-zinc-400">,</span>
    </p>

    <p className="pl-6">
        <span className="text-emerald-400">stack</span>
        <span className="text-zinc-400">:</span>{" "}
        <span className="text-zinc-200">[</span>
        <span className="text-amber-300">{`"Next.js"`}</span>
        <span className="text-zinc-400">,</span>{" "}
        <span className="text-amber-300">{`"React"`}</span>
        <span className="text-zinc-400">,</span>{" "}
        <span className="text-amber-300">{`"Python"`}</span>
        <span className="text-zinc-200">],</span>
    </p>

    <p className="pl-6">
        <span className="text-emerald-400">learning</span>
        <span className="text-zinc-400">:</span>{" "}
        <span className="text-zinc-200">[</span>
        <span className="text-amber-300">{`"Web Security"`}</span>
        <span className="text-zinc-400">,</span>{" "}
        <span className="text-amber-300">{`"Pentesting Basics"`}</span>
        <span className="text-zinc-200">],</span>
    </p>

    <p className="pl-6">
        <span className="text-emerald-400">currently</span>
        <span className="text-zinc-400">:</span>{" "}
        <span className="text-amber-300">{`"Building internal tools @ Astra Infra Toll Road (Tangerang - Merak)"`}</span>
        <span className="text-zinc-400">,</span>
    </p>

    <p className="pl-6">
        <span className="text-emerald-400">fuel</span>
        <span className="text-zinc-400">:</span>{" "}
        <span className="text-amber-300">{`"Coffee & curiosity"`}</span>
        <span className="text-zinc-400">,</span>
    </p>

    <p>
        <span className="text-zinc-200">{"}"}</span>
        <span className="text-zinc-400">;</span>
    </p>
            </div>
        </div>
    );
}
