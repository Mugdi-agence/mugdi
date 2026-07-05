'use client';

import { useEffect, useRef } from 'react';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import gsap from "gsap";

export function ApproachSectionWrapper({ children }) {
    const approachSectionRef = useRef(null);

    useEffect(() => {
        if (!approachSectionRef.current) return;

        let mm = gsap.matchMedia();

        mm.add("(min-width: 1024px)", () => {
            gsap.to(approachSectionRef.current, {
                scrollTrigger: {
                    trigger: approachSectionRef.current,
                    start: "top 75%",
                    end: "top 0%",
                    scrub: true,
                },
                y: -200,
                duration: 1,
                ease: "power2.inOut"
            });
        });

        return () => mm.revert();
    }, []);

    return (
        <section className="approach-section" id="approach" ref={approachSectionRef}>
            {children}
        </section>
    );
}

export function ApproachButton({ label }) {
    const button1Ref = useRef(null);

    function onButtonEnter() {
        if (!button1Ref.current) return;
        gsap.killTweensOf(button1Ref.current);
        gsap.to(button1Ref.current, {
            scale: 1.05,
            duration: 0.3,
            opacity: 0.7,
            ease: "elastic.out(2, 1)"
        });
    }

    function onButtonLeave() {
        if (!button1Ref.current) return;
        gsap.killTweensOf(button1Ref.current);
        gsap.to(button1Ref.current, {
            scale: 1,
            duration: 0.4,
            opacity: 1,
            ease: "elastic.out(2, 1)"
        });
    }

    return (
        <a
            href="mailto:contact.mugdi@gmail.com"
            className="button-1"
            ref={button1Ref}
            onMouseEnter={onButtonEnter}
            onMouseLeave={onButtonLeave}
        >
            {label}
            <div className="box"><ArrowForwardIcon/></div>
        </a>
    );
}