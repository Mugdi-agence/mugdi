'use client';

import { useEffect, useRef } from 'react';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import gsap from "gsap";
import dynamic from "next/dynamic";

const Background = dynamic(() => import("./renderer"), {
  ssr: false,
  loading: () => <div style={{ position: "absolute", inset: 0, background: "#0a0a0a", zIndex: -1 }} />
});

export function HeroSectionWrapper({ children }) {
    const heroSectionRef = useRef(null);

    useEffect(() => {
        if (!heroSectionRef.current) return;

        let mm = gsap.matchMedia();

        mm.add("(min-width: 1024px)", () => {
            gsap.to(heroSectionRef.current, {
                scrollTrigger: {
                    trigger: heroSectionRef.current,
                    start: "bottom 75%",
                    end: "120% 0%",
                    scrub: true,
                },
                filter: "blur(10px)",
                scale: 1.1,
                duration: 1,
                ease: "power2.inOut"
            });
        });

        return () => mm.revert();
    }, [heroSectionRef]);

    return (
        <section className="hero-section" ref={heroSectionRef} id="hero">
            <div className="grided"></div>
            <Background/>
            {children}
        </section>
    );
}

export function HeroButton({ href, className, label }) {
    const buttonRef = useRef(null);

    function onButtonEnter() {
        if (!buttonRef.current) return;
        gsap.killTweensOf(buttonRef.current);
        gsap.to(buttonRef.current, {
            scale: 1.05,
            duration: 0.3,
            opacity: 0.7,
            ease: "elastic.out(2, 1)"
        });
    }

    function onButtonLeave() {
        if (!buttonRef.current) return;
        gsap.killTweensOf(buttonRef.current);
        gsap.to(buttonRef.current, {
            scale: 1,
            duration: 0.4,
            opacity: 1,
            ease: "elastic.out(2, 1)"
        });
    }

    return (
        <a
            href={href}
            className={className}
            ref={buttonRef}
            onMouseEnter={onButtonEnter}
            onMouseLeave={onButtonLeave}
        >
            {label}
            <div className="box"><ArrowForwardIcon/></div>
        </a>
    );
}