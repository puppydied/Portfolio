import DecryptedText from "@/components/DecryptedText";
import CodeWindow from "@/components/CodeWindow";
import { GraduationCap, MapPin, Shield, Coffee, BookOpen } from "lucide-react";

// TODO: edit chip ini sesuai vibe lo
const CHIPS = [
    { icon: GraduationCap, label: "Final-year IT Student" },
    { icon: MapPin, label: "Based in Serang, ID" },
    { icon: Shield, label: "CTF Curious" },
    { icon: BookOpen, label: "Always learning" },
    { icon: Coffee, label: "Coffee fueled" },
];

export default function About() {
    return (
        <section id="about" className="min-h-screen bg-[#080c10] text-white relative overflow-hidden scroll-mt-20">
            <div className="max-w-6xl mx-auto px-8 md:px-16 py-24">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
            <p className="font-mono text-sm text-[#48aaad] mb-4">// about_me</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Behind the keyboard.</h2>
            <p className="text-xl md:text-2xl font-mono text-[#48aaad] mb-8">
                &gt;{" "}
                <DecryptedText text="Builder by day. Breaker by night." />
            </p>
            <p className="text-zinc-400 text-base md:text-lg leading-relaxed">
                I&apos;m a final-year IT student who already works full-time in IT at{" "}
                <span className="text-white font-semibold">Astra Infra Toll Road (Tangerang-Merak)</span>{" "}&mdash;
                managing real systems while finishing my degree. Outside of work, I build
                web apps with the modern Next.js + React stack, dive into CTFs, and read
                security write-ups for fun. I like things that work &mdash; and understanding{" "}
                <em>why</em> they break.
            </p>

            <div className="flex flex-wrap gap-2 mt-8">
                {CHIPS.map((chip) => {
                    const Icon = chip.icon;
                    return (
                        <span
                            key={chip.label}
                            className="inline-flex items-center gap-2 font-mono text-xs text-zinc-300 border border-zinc-800 bg-zinc-900/50 hover:border-zinc-700 hover:bg-zinc-900/80 transition-colors px-3 py-1.5 rounded-full"
                        >
                            <Icon className="w-3.5 h-3.5 text-[#48aaad]" />
                            {chip.label}
                        </span>
                    );
                })}
            </div>
        </div>
        
        <div>
            <CodeWindow />
        </div>
    </div>
</div>
        </section>
    );
}