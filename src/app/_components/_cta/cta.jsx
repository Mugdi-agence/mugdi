'use client';

import { useTranslation } from 'react-i18next';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Marquee from '../marquee';
import { useEffect, useRef } from 'react';
import gsap from "gsap";

export default function CTA() {
    const { t } = useTranslation();
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

    // Créer des refs pour chaque bouton CTA
    const button1Ref = useRef(null); // pour .button-1
    const button2Ref = useRef(null); // pour .button-2

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
        <section className="cta-section" ref={ctaSectionRef}>
            <div className="cta-top">
                <div className="cta-card">
                    <div className="cta-left">
                        <h2 className="cta-title"><i>{t('cta.titleLine1')}</i> <br /> {t('cta.titleLine2')}</h2>
                        <p className="cta-paragraphe">{t('cta.paragraph')}</p>
                    </div>
                    <div className="cta-right">
                        <a
                            href="mailto:contact.mugdi@gmail.com"
                            className="button-1"
                            ref={button1Ref}
                            onMouseEnter={() => onButtonEnter(button1Ref)}
                            onMouseLeave={() => onButtonLeave(button1Ref)}
                        >
                            {t('common.bookSession')} <div className="box"><ArrowForwardIcon/></div>
                        </a>
                        <a
                            href="#project"
                            className="button-2"
                            ref={button2Ref}
                            onMouseEnter={() => onButtonEnter(button2Ref)}
                            onMouseLeave={() => onButtonLeave(button2Ref)}
                        >
                            {t('common.viewProjects')} <div className="box"><ArrowForwardIcon/></div>
                        </a>
                    </div>
                </div>
            </div>
            <Marquee/>
        </section>
    )
}