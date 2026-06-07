"use client";

import { useEffect, useRef, useState } from "react";

type Props = {
    text: string;
    className?: string;
    typingSpeed?: number;
    startDelay?: number;
    showCursor?: boolean;
};

export default function TextType({
    text,
    className = "",
    typingSpeed = 75,
    startDelay = 200,
    showCursor = true,
}: Props) {
    const [displayText, setDisplayText] = useState("");
    const [isDone, setIsDone] = useState(false);
    const ref = useRef<HTMLSpanElement>(null);

    useEffect(() => {
        const node = ref.current;
        if (!node) return;

        let started = false;
        let intervalId: ReturnType<typeof setInterval> | null = null;
        let startTimeoutId: ReturnType<typeof setTimeout> | null = null;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !started) {
                    started = true;
                    observer.disconnect();

                    startTimeoutId = setTimeout(() => {
                        let i = 0;
                        intervalId = setInterval(() => {
                            if (i < text.length) {
                                setDisplayText(text.slice(0, i + 1));
                                i++;
                            } else {
                                if (intervalId) clearInterval(intervalId);
                                setIsDone(true);
                            }
                        }, typingSpeed);
                    }, startDelay);
                }
            },
            { threshold: 0.3 }
        );

        observer.observe(node);

        return () => {
            observer.disconnect();
            if (intervalId) clearInterval(intervalId);
            if (startTimeoutId) clearTimeout(startTimeoutId);
        };
    }, [text, typingSpeed, startDelay]);

    return (
        <span ref={ref} className={className}>
            {displayText}
            {showCursor && (
                <span
                    className={`inline-block w-[3px] h-[0.9em] bg-current ml-1 align-middle ${
                        isDone ? "terminal-cursor" : ""
                    }`}
                />
            )}
        </span>
    );
}
