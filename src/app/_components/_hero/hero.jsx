'use client';

import { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import HomeIcon from '@mui/icons-material/Home';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import gsap from "gsap";

import dynamic from "next/dynamic";

const Background = dynamic(() => import("./renderer"), {
  ssr: false,
  loading: () => <div style={{ position: "absolute", inset: 0, background: "#0a0a0a", zIndex: -1 }} />
});

export default function Hero() {
    const { t } = useTranslation();
    const button1Ref = useRef(null);
    const button2Ref = useRef(null);
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
        <section className="hero-section" ref={heroSectionRef} id="hero">
            <div className="grided"></div>
            <Background/>
            <header>
                <div className="hero-top">
                    <div className="eyebrow">
                        <HomeIcon/>
                        <ArrowForwardIosIcon/>
                        <span>{t('hero.eyebrow')}</span>
                    </div>
                </div>
                <div className="hero-bottom">
                    <h1 className="hero-title">{t('hero.title')}</h1>
                    <p className="hero-para">{t('hero.paragraph')}</p>
                    <div className="hero-cta">
                        <a
                            href="#"
                            className="button-1"
                            ref={button1Ref}
                            onMouseEnter={() => onButtonEnter(button1Ref)}
                            onMouseLeave={() => onButtonLeave(button1Ref)}
                        >
                            {t('common.bookSession')}
                            <div className="box"><ArrowForwardIcon/></div>
                        </a>
                        <a
                            href=""
                            className="button-2"
                            ref={button2Ref}
                            onMouseEnter={() => onButtonEnter(button2Ref)}
                            onMouseLeave={() => onButtonLeave(button2Ref)}
                        >
                            {t('common.viewProjects')}
                            <div className="box"><ArrowForwardIcon/></div>
                        </a>
                    </div>
                </div>
            </header>
        </section>
    );
}