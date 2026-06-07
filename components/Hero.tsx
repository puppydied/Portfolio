import Aurora from "@/components/Aurora";
import BlurText from "@/components/BlurText";
import Lanyard from "@/components/Lanyard";
import RotatingText from "@/components/RotatingText";
import { Button } from "@/components/ui/button";
import { Mail, ArrowRight } from "lucide-react";
import { SiGithub } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";

// TODO: ganti dengan info lo
const NAME = "Yuda";
const GITHUB_URL = "https://github.com/puppydied";
const LINKEDIN_URL = "https://www.linkedin.com/in/yuda-agung-nugraha-b1895822a?utm_source=share_via&utm_content=profile&utm_medium=member_android";
const EMAIL = "rdhyuda@gmail.com";

export default function Hero() {
    return (
        <div className="relative h-screen overflow-hidden">
            <Aurora />

            <div className="absolute inset-0 z-10">
                <Lanyard position={[-1, 0, 12]} gravity={[0, -40, 0]} anchorX={2.5} />
            </div>

            <div className="relative z-20 h-full grid grid-cols-12 pointer-events-none">
                <div className="col-span-12 md:col-span-6 flex flex-col justify-center h-full px-8 md:px-16 gap-5">
                    <div className="pointer-events-auto w-fit">
                        <p className="font-mono text-sm text-[#48aaad]">
                            <span className="opacity-60">$</span> whoami
                        </p>
                    </div>

                    <div className="flex flex-wrap items-center gap-x-4 gap-y-3 pointer-events-auto w-fit">
                        <h1 className="text-white text-5xl md:text-6xl font-bold leading-tight">
                            <BlurText
                                text={`Hi, I'm ${NAME}`}
                                animateBy="words"
                                direction="top"
                                duration={1.2}
                                stagger={0.2}
                            />
                        </h1>
                        <RotatingText
                            texts={[
                                "SOFTWARE DEVELOPER",
                                "CYBERSECURITY ENTHUSIAST",
                                "LIFELONG LEARNER",
                            ]}
                            mainClassName="px-3 bg-[#48aaad] text-black overflow-hidden inline-flex w-fit py-1 justify-center rounded-lg text-xl md:text-3xl font-bold transition-all duration-300 ease-in-out"
                            staggerFrom="last"
                            initial={{ y: "100%" }}
                            animate={{ y: 0 }}
                            exit={{ y: "-120%" }}
                            staggerDuration={0.025}
                            splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                            transition={{ type: "spring", damping: 30, stiffness: 400 }}
                            rotationInterval={2000}
                        />
                    </div>

                    <p className="text-zinc-400 text-base md:text-lg max-w-md leading-relaxed pointer-events-auto w-fit">
                        <span className="text-white font-semibold">
                            Software Developer
                        </span>{" "}
                        &amp;{" "}
                        <span className="text-[#48aaad] font-semibold">
                            Cybersecurity Enthusiast
                        </span>
                        . Building secure, performant web experiences and
                        exploring the offensive side of security.
                    </p>

                    <div className="flex flex-wrap gap-3 mt-2 pointer-events-auto w-fit">
                        <Button
                            asChild
                            size="lg"
                            className="bg-[#48aaad] text-black hover:bg-[#48aaad]/85"
                        >
                            <a href="#projects">
                                View Projects
                                <ArrowRight />
                            </a>
                        </Button>
                        <Button
                            asChild
                            size="lg"
                            variant="outline"
                            className="bg-transparent border-zinc-700 text-white hover:bg-zinc-900/50 hover:text-white"
                        >
                            <a href="#contact">Get in Touch</a>
                        </Button>
                    </div>

                    <div className="flex gap-2 mt-1 pointer-events-auto w-fit">
                        <Button
                            asChild
                            size="icon-lg"
                            variant="ghost"
                            className="text-zinc-400 hover:text-white hover:bg-zinc-900/50"
                        >
                            <a
                                href={GITHUB_URL}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="GitHub"
                            >
                                <SiGithub />
                            </a>
                        </Button>
                        <Button
                            asChild
                            size="icon-lg"
                            variant="ghost"
                            className="text-zinc-400 hover:text-white hover:bg-zinc-900/50"
                        >
                            <a
                                href={LINKEDIN_URL}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="LinkedIn"
                            >
                                <FaLinkedin />
                            </a>
                        </Button>
                        <Button
                            asChild
                            size="icon-lg"
                            variant="ghost"
                            className="text-zinc-400 hover:text-white hover:bg-zinc-900/50"
                        >
                            <a href={`mailto:${EMAIL}`} aria-label="Email">
                                <Mail />
                            </a>
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}
