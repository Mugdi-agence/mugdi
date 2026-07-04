'use client';

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

export default function Loader({ onComplete }) {
    const loaderRef = useRef(null);
    const counterRef = useRef(null);
    const barRef = useRef(null);
    const [progress, setProgress] = useState(0);
    const [isDone, setIsDone] = useState(false);

    useEffect(() => {
        const counterObj = { value: 0 };

        const tl = gsap.timeline({
            onComplete: () => {
                // Petite pause avant la sortie pour laisser le "100%" respirer
                gsap.delayedCall(0.3, exitLoader);
            }
        });

        tl.to(counterObj, {
            value: 100,
            duration: 2.2,
            ease: 'power2.inOut',
            onUpdate: () => setProgress(Math.round(counterObj.value))
        });

        gsap.to(barRef.current, {
            width: '100%',
            duration: 2.2,
            ease: 'power2.inOut'
        });

        function exitLoader() {
            setIsDone(true);
            gsap.to(loaderRef.current, {
                yPercent: -100,
                duration: 1,
                ease: 'power3.inOut',
                onComplete: () => {
                    if (onComplete) onComplete();
                }
            });
        }

        return () => tl.kill();
    }, [onComplete]);

    return (
        <div className={`loader-screen ${isDone ? 'is-done' : ''}`} ref={loaderRef}>
            <div className="loader-grid"></div>
            <div className="loader-content">
                <div className="loader-center">
                    <div className="loader-logo">
                        <span>M</span>
                    </div>
                    <div className="loader-counter" ref={counterRef}>
                        {String(progress).padStart(3, '0')}
                        <span>%</span>
                    </div>
                </div>
            </div>
            <div className="loader-bar-track">
                <div className="loader-bar-fill" ref={barRef}></div>
            </div>
        </div>
    );
}