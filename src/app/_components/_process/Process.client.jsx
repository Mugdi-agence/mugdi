'use client';

import { useRef } from 'react';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import gsap from "gsap";

export function ProcessButton({ label }) {
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
            href="mailto:contact.mugdi@gmail.com"
            className="button-1"
            ref={buttonRef}
            onMouseEnter={onButtonEnter}
            onMouseLeave={onButtonLeave}
        >
            {label}
            <div className="box"><ArrowForwardIcon/></div>
        </a>
    );
}