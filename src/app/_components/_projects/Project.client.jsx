'use client';

import { useEffect, useRef } from 'react';
import gsap from "gsap";

export function ProjectSectionWrapper({ children }) {
    const heroSectionRef = useRef();

    useEffect(() => {
        if (!heroSectionRef.current) return;

        let mm = gsap.matchMedia();

        mm.add("(min-width: 1024px)", () => {
            gsap.fromTo(heroSectionRef.current, {
                y: 0
            }, {
                scrollTrigger: {
                    trigger: heroSectionRef.current,
                    start: "top 100%",
                    end: "top 0%",
                    scrub: true,
                },
                y: -400,
                duration: 1,
                ease: "none"
            });

            gsap.fromTo(heroSectionRef.current,
                { y: -400 },
                {
                    y: -600,
                    scale: 0.9,
                    borderBottomRightRadius: 60,
                    borderBottomLeftRadius: 60,
                    ease: "none",
                    scrollTrigger: {
                        trigger: heroSectionRef.current,
                        start: "bottom 100%",
                        end: "bottom 0%",
                        scrub: true,
                    }
                }
            );
        });

        return () => mm.revert();
    }, []);

    return (
        <section className="project-section" ref={heroSectionRef} id="project">
            {children}
        </section>
    );
}

export function HoverLink({ href, className, target, children }) {
    const ref = useRef(null);

    function onButtonEnter() {
        if (!ref.current) return;
        gsap.killTweensOf(ref.current);
        gsap.to(ref.current, {
            scale: 1.05,
            duration: 0.3,
            opacity: 0.7,
            ease: "elastic.out(2, 1)"
        });
    }

    function onButtonLeave() {
        if (!ref.current) return;
        gsap.killTweensOf(ref.current);
        gsap.to(ref.current, {
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
            target={target}
            ref={ref}
            onMouseEnter={onButtonEnter}
            onMouseLeave={onButtonLeave}
        >
            {children}
        </a>
    );
}