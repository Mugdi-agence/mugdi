'use client';

import { useTranslation } from 'react-i18next';
import { useRef } from 'react';
import gsap from "gsap";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import HomeIcon from '@mui/icons-material/Home';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';

export default function Features() {
    const { t } = useTranslation();

    const button1Ref = useRef(null); // Ref for top CTA
    const card1BtnRef = useRef(null); // Optionally, if you later add CTAs in cards
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
        <section className="features-section" id="features">
            <div className="features-top">
                <div className="eyebrow">
                    <HomeIcon/>
                    <ArrowForwardIosIcon/>
                    <span>{t('features.eyebrow')}</span>
                </div>
                <h2 className="features-title">
                    <i>{t('features.titleHighlight')}</i> {t('features.titleRest')}
                </h2>
                <a
                    href="mailto:contact.mugdi@gmail.com"
                    className="button-1"
                    ref={button1Ref}
                    onMouseEnter={() => onButtonEnter(button1Ref)}
                    onMouseLeave={() => onButtonLeave(button1Ref)}
                >
                    {t('common.bookSession')} <div className="box"><ArrowForwardIcon/></div>
                </a>
            </div>
            <div className="features-cards">
                <div className="features-card1">
                    <ArrowOutwardIcon/>
                    <div className="img"></div>
                    <span>{t('features.cards.card1.symbol')}</span>
                    <h3><i>{t('features.cards.card1.titleHighlight')}</i> {t('features.cards.card1.titleRest')}</h3>
                    <hr />
                    <p>
                        {t('features.cards.card1.description')}
                    </p>
                </div>
                <div className="features-card2">
                    <ArrowOutwardIcon/>
                    <div className="img"></div>
                    <span>{t('features.cards.card2.symbol')}</span>
                    <h3><i>{t('features.cards.card2.titleHighlight')}</i> {t('features.cards.card2.titleRest')}</h3>
                    <hr />
                    <p>
                        {t('features.cards.card2.description')}
                    </p>
                </div>
                <div className="features-card3">
                    <ArrowOutwardIcon/>
                    <div className="img"></div>
                    <span>{t('features.cards.card3.symbol')}</span>
                    <h3><i>{t('features.cards.card3.titleHighlight')}</i> {t('features.cards.card3.titleRest')}</h3>
                    <hr />
                    <p>
                        {t('features.cards.card3.description')}
                    </p>
                </div>
            </div>
        </section>
    )
}