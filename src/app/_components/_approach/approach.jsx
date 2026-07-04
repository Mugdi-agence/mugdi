'use client';

import { useTranslation } from 'react-i18next';
import { useEffect, useRef } from 'react';
import Marquee from "../marquee";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import HomeIcon from '@mui/icons-material/Home';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import gsap from "gsap";

export default function Approach() {
    const { t } = useTranslation();
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
    
        return () => mm.revert(); // nettoie les animations + ScrollTriggers si on repasse sous 1024px
    }, []);

    // Refs for each CTA/button
    const button1Ref = useRef(null);

    // Animation functions
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
        <section className="approach-section" id="approach" ref={approachSectionRef}>
            <Marquee/>
            <div className="approach-main">
                <div className="approach-top">
                    <div className="approach-left">
                        <div className="eyebrow">
                            <HomeIcon/>
                            <ArrowForwardIosIcon/>
                            <span>{t('approach.eyebrow')}</span>
                        </div>
                        <h2 className="approach-title">
                            <i>{t('approach.titleHighlight')}</i> {t('approach.titleRest')}
                        </h2>
                    </div>
                    <div className="approach-right">
                        <a
                            href="mailto:contact.mugdi@gmail.com"
                            className="button-1"
                            ref={button1Ref}
                            onMouseEnter={() => onButtonEnter(button1Ref)}
                            onMouseLeave={() => onButtonLeave(button1Ref)}
                        >
                            {t('common.bookSession')}
                            <div className="box"><ArrowForwardIcon/></div>
                        </a>
                    </div>
                </div>

                <div className="approach-cards">
                    <div className="approach-card1">
                        <ArrowOutwardIcon/>
                        <div className="img"></div>
                        <span>{t('approach.cards.card1.number')}</span>
                        <h3><i>{t('approach.cards.card1.titleHighlight')}</i> {t('approach.cards.card1.titleRest')}</h3>
                        <hr />
                        <p>{t('approach.cards.card1.description')}</p>
                    </div>
                    <div className="approach-card2">
                        <div className="img"></div>
                        <div className="pop">

                            <div className="left">
                                <h3>{t('approach.cards.card2.title')}</h3>
                                <p>{t('approach.cards.card2.description')}</p>
                            </div>

                            <hr />

                            <div className="right">
                                <ArrowOutwardIcon/>
                            </div>
                        </div>
                    </div>
                    <div className="approach-card3">
                        <div className="img"></div>
                        <div className="pop">
                            <div className="left">
                                <h3>{t('approach.cards.card3.title')}</h3>
                                <p>{t('approach.cards.card3.description')}</p>
                            </div>
                            <hr />
                            <div className="right">
                                <ArrowOutwardIcon/>
                            </div>
                        </div>
                    </div>
                    <div className="approach-card4">
                        <ArrowOutwardIcon/>
                        <div className="img"></div>
                        <span>{t('approach.cards.card4.number')}</span>
                        <h3><i>{t('approach.cards.card4.titleHighlight')}</i> {t('approach.cards.card4.titleRest')}</h3>
                        <hr />
                        <p>{t('approach.cards.card4.description')}</p>
                    </div>

                </div>

            </div>
        </section>
    );
}