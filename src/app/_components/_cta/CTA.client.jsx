'use client';

import { useEffect, useRef } from 'react';
import gsap from "gsap";

export function CTASectionWrapper({ children }) {
    const ctaSectionRef = useRef();

    useEffect(() => {
        if (!ctaSectionRef.current) return;

        let mm = gsap.matchMedia();

        mm.add("(min-width: 1024px)", () => {
            gsap.to(ctaSectionRef.current, {
                scrollTrigger: {
                    trigger: ctaSectionRef.current,
                    start: "bottom 100%",
                    end: "bottom 0%",
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
        <section className="cta-section" ref={ctaSectionRef}>
            {children}
        </section>
    );
}