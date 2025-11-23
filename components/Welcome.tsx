"use client"

import {JSX, useRef} from "react";
import gsap from "gsap";
import {useGSAP} from "@gsap/react";

const FONT_WEIGHT = {
    subtitle: {min: 100, max: 400, default:100},
    title: {min: 400, max: 900, default:400},
}

const renderText = (
    text: string,
    className: string,
    baseWeight: number = 400
): JSX.Element[] => {
    return [...text].map((char, i) => (
        <span
            key={i}
            className={className}
            style={{ fontVariationSettings: `'wght' ${baseWeight}` }}
        >
      {char === " " ? "\u00A0" : char}
    </span>
    ))
}

const DISTANCE_DECAY = 20000

const setupTextHover = (container:HTMLElement | null, type: keyof typeof FONT_WEIGHT) => {
    if(!container) return;

    const letters = container.querySelectorAll("span");
    const {min, max, default: base} = FONT_WEIGHT[type];

    const animateLetter = (letter:Element, weight:number, duration = 0.25) =>
        gsap.to(letter, {
            duration,
            ease: "power2.out",
            fontVariationSettings: `'wght' ${weight}`,
        });

    const handleMouseMove = (e:MouseEvent) => {
        const { left } = container.getBoundingClientRect();
        const mouseX = e.clientX - left;

        letters.forEach((letter) => {
            const { left: l, width: w } = letter.getBoundingClientRect();
            const distance = Math.abs(mouseX - (l - left + w / 2));
            const intensity = Math.exp(-(distance ** 2) / DISTANCE_DECAY);

            animateLetter(letter, min + (max - min) * intensity);
        });
    };
    const handleMouseLeave = () => letters.forEach((letter) => animateLetter(letter, base,0.3));

    container.addEventListener("mousemove", handleMouseMove)
    container.addEventListener("mouseleave", handleMouseLeave)

    return () => {
        container.removeEventListener("mousemove", handleMouseMove);
        container.removeEventListener("mouseleave", handleMouseLeave);
    }
}

const Welcome = () => {
    const titleRef = useRef(null)
    const subtitleRef = useRef(null)

    useGSAP(() => {
        const titleCleanup = setupTextHover(titleRef.current, 'title');
        const subtitleCleanup =setupTextHover(subtitleRef.current, 'subtitle');

        return () => {
            subtitleCleanup?.();
            titleCleanup?.();
        }
    },[])
    return (
        <section id="welcome">
            <p ref={subtitleRef}>
                {renderText("Hey, I'm Nathan! Welcome to my",'text-3xl font-georama',FONT_WEIGHT.subtitle.default)}
            </p>
            <h1 ref={titleRef} className={"mt-7"}>
                {renderText("portfolio", 'text-9xl italic font-georama',FONT_WEIGHT.title.default)}
            </h1>
            <div className={"small-screen"}>
                <p>This Portfolio is designed for desktop/tablet screen only.</p>
            </div>
        </section>
    )
}
export default Welcome
