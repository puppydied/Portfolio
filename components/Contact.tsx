import { Button } from "@/components/ui/button";
import { Mail, ArrowUpRight } from "lucide-react";
import { SiGithub } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import TextType from "@/components/TextType";

// TODO: ganti URL & email lo sendiri
const GITHUB_URL = "https://github.com/puppydied";
const LINKEDIN_URL = "#";
const EMAIL = "hello@example.com";

export default function Contact() {
    return (
        <section
            id="contact"
            className="min-h-screen bg-[#080c10] text-white relative overflow-hidden scroll-mt-20 flex items-center"
        >
            <div className="max-w-5xl mx-auto px-8 md:px-16 py-24 w-full">
                <p className="font-mono text-sm text-[#48aaad] mb-4">
                    // contact
                </p>
                <h2 className="text-4xl md:text-6xl font-bold mb-6">
                    <TextType text="Let's build something." typingSpeed={80} />
                </h2>
                <p className="text-zinc-400 text-base md:text-lg leading-relaxed max-w-2xl mb-12">
                    Open to collaboration, freelance, or just a chat about web,
                    security, or anything in between. My inbox is open &mdash;
                    drop a line and I&apos;ll get back to you.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 mb-12">
                    <Button
                        asChild
                        size="lg"
                        className="bg-[#48aaad] text-black hover:bg-[#48aaad]/85"
                    >
                        <a href={`mailto:${EMAIL}`}>
                            <Mail />
                            Email me
                            <ArrowUpRight />
                        </a>
                    </Button>
                    <Button
                        asChild
                        size="lg"
                        variant="outline"
                        className="bg-transparent border-zinc-700 text-white hover:bg-zinc-900/50 hover:text-white"
                    >
                        <a
                            href={GITHUB_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <SiGithub />
                            GitHub
                        </a>
                    </Button>
                    <Button
                        asChild
                        size="lg"
                        variant="outline"
                        className="bg-transparent border-zinc-700 text-white hover:bg-zinc-900/50 hover:text-white"
                    >
                        <a
                            href={LINKEDIN_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FaLinkedin />
                            LinkedIn
                        </a>
                    </Button>
                </div>

                <div className="font-mono text-sm text-zinc-500">
                    <span className="text-[#48aaad]">&gt;</span> Response time:
                    usually within 24h.
                </div>
            </div>
        </section>
    );
}
