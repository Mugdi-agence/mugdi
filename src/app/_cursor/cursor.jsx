'use client';

import "./cursor.scss";
import { useEffect, useRef, useState } from 'react';
import LinkIcon from '@mui/icons-material/Link';
import gsap from 'gsap';

export default function Cursor() {
    const cursorRef = useRef(null);
    const [isHovering, setIsHovering] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        if (window.matchMedia('(pointer: coarse)').matches) return;

        gsap.set(cursorRef.current, { xPercent: -50, yPercent: -50 });

        const cursorX = gsap.quickTo(cursorRef.current, 'x', { duration: 0.25, ease: 'power3.out' });
        const cursorY = gsap.quickTo(cursorRef.current, 'y', { duration: 0.25, ease: 'power3.out' });

        function onMouseMove(e) {
            if (!isVisible) setIsVisible(true);
            cursorX(e.clientX);
            cursorY(e.clientY);
        }

        function onMouseEnterInteractive() {
            setIsHovering(true);
        }

        function onMouseLeaveInteractive() {
            setIsHovering(false);
        }

        function attachInteractiveListeners() {
            const interactiveEls = document.querySelectorAll(
                'a, button, .approach-card1, .approach-card2, .approach-card3, .approach-card4, .project-card, .features-card1, .features-card2, .features-card3, .cta-card'
            );
            interactiveEls.forEach((el) => {
                el.addEventListener('mouseenter', onMouseEnterInteractive);
                el.addEventListener('mouseleave', onMouseLeaveInteractive);
            });
            return interactiveEls;
        }

        window.addEventListener('mousemove', onMouseMove);
        const interactiveEls = attachInteractiveListeners();

        return () => {
            window.removeEventListener('mousemove', onMouseMove);
            interactiveEls.forEach((el) => {
                el.removeEventListener('mouseenter', onMouseEnterInteractive);
                el.removeEventListener('mouseleave', onMouseLeaveInteractive);
            });
        };
    }, [isVisible]);

    return (
        <div
            className={`custom-cursor ${isVisible ? 'is-visible' : ''} ${isHovering ? 'is-hovering' : ''}`}
            ref={cursorRef}
        >
            <span className="cursor-label">M</span>
            <LinkIcon className="cursor-icon" />
        </div>
    );
}