"use client"

import { useEffect, useRef, useState } from "react";

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*";

type Props = {
    text: string;
    speed?: number;
    className?: string;
};

export default function DecryptedText({
    text,
    speed = 40,
    className,
}: Props) {
    const [displayText, setDisplayText] = useState(text);
    const ref = useRef<HTMLSpanElement>(null);

    useEffect(() => {
    const node = ref.current;
    if (!node) return;

    let intervalId: ReturnType<typeof setInterval> | null = null;

    const observer = new IntersectionObserver(
        ([entry]) => {
            if (entry.isIntersecting) {
                observer.disconnect();

                let iteration = 0;
                intervalId = setInterval(() => {
                    setDisplayText(
                        text
                            .split("")
                            .map((char, idx) => {
                                if (idx < iteration) return char;
                                if (char === " ") return " ";
                                return CHARS[Math.floor(Math.random() * CHARS.length)];
                            })
                            .join("")
                    );

                    if (iteration >= text.length) {
                        if (intervalId) clearInterval(intervalId);
                    }
                    iteration += 1 / 3;
                }, speed);
            }
        },
        { threshold: 0.3 }
    );

    observer.observe(node);

    return () => {
        observer.disconnect();
        if (intervalId) clearInterval(intervalId);
    };
}, [text, speed]);

    return <span ref={ref} className={className}>{displayText}</span>;
}