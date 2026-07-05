'use client';

import { useRef } from 'react';
import gsap from "gsap";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

export function FeaturesButton({ label }) {
    const button1Ref = useRef(null);
    // Refs présentes dans l'original mais jamais attachées à un élément (card1BtnRef, card2BtnRef, card3BtnRef).
    // Conservées à l'identique pour ne rien retirer, même si elles n'ont aucun effet.
    const card1BtnRef = useRef(null);
    const card2BtnRef = useRef(null);
    const card3BtnRef = useRef(null);

    function onButtonEnter(ref) {
        if (!ref.current) return;
        gsap.killTweensOf(ref.current);
        gsap.to(ref.current, {
            scale: 1.05,
            duration: 0.3,
            opacity: 0.7,
            ease: "elastic.out(2, 1)"
        });
    }

    function onButtonLeave(ref) {
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
            href="mailto:contact.mugdi@gmail.com"
            className="button-1"
            ref={button1Ref}
            onMouseEnter={() => onButtonEnter(button1Ref)}
            onMouseLeave={() => onButtonLeave(button1Ref)}
        >
            {label} <div className="box"><ArrowForwardIcon/></div>
        </a>
    );
}