"use client";

import { motion } from "motion/react";

type Props = {
    text: string;
    className?: string;
    delay?: number;
    duration?: number;
    stagger?: number;
    animateBy?: "words" | "letters";
    direction?: "top" | "bottom";
};

export default function BlurText({
    text,
    className = "",
    delay = 0,
    duration = 0.6,
    stagger = 0.08,
    animateBy = "words",
    direction = "top",
}: Props) {
    const parts =
        animateBy === "words" ? text.split(" ") : Array.from(text);
    const fromY = direction === "top" ? -20 : 20;

    return (
        <span className={className}>
            {parts.map((part, i) => (
                <motion.span
                    key={`${part}-${i}`}
                    initial={{
                        opacity: 0,
                        filter: "blur(10px)",
                        y: fromY,
                    }}
                    animate={{
                        opacity: 1,
                        filter: "blur(0px)",
                        y: 0,
                    }}
                    transition={{
                        duration,
                        delay: delay + i * stagger,
                        ease: "easeOut",
                    }}
                    className="inline-block"
                >
                    {part}
                    {animateBy === "words" && i < parts.length - 1
                        ? " "
                        : ""}
                </motion.span>
            ))}
        </span>
    );
}
