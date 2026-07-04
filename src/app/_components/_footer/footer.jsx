'use client';

import dynamic from "next/dynamic";
import { useTranslation } from 'react-i18next';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import YouTubeIcon from '@mui/icons-material/YouTube';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import { useRef } from 'react';
import gsap from "gsap";

export default function Footer() {
    const { t } = useTranslation();

    // Créer un ref pour chaque CTA
    const ctaButtonRef = useRef(null);
    const youtubeButtonRef = useRef(null);
    const tiktokButtonRef = useRef(null);

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
        <footer className="footer-section">
            <div className="footer-content">
                <div className="footer-columns">
                    <div className="footer-branding">
                        <img src="/logo.png" alt="" className="footer-logo"/>
                        <div className="footer-subtitle">
                            {t('footer.subtitleLine1')}<br/>
                            {t('footer.subtitleLine2')}
                        </div>
                        <div className="footer-description">
                            {t('footer.description')}
                        </div>
                    </div>
                    <div className="footer-col navigation">
                        <div>{t('footer.navigationLabel')}</div>
                        <nav className="footer-nav">
                            <a href="#approach">{t('nav.approach')}</a>
                            <a href="#project">{t('nav.projects')}</a>
                            <a href="#features">{t('nav.expertise')}</a>
                            <a href="#process">{t('nav.process')}</a>
                        </nav>
                    </div>
                    {/* Bloc 3 : Contact & CTA */}
                    <div className="footer-col contact">
                        <div>{t('footer.contactLabel')}</div>
                        <a href="mailto:contact.mugdi@gmail.com">
                            contact.mugdi@gmail.com
                        </a>
                        <a
                            href={`mailto:contact.mugdi@gmail.com?subject=${encodeURIComponent(t('common.bookSession'))}`}
                            className="button-1"
                            ref={ctaButtonRef}
                            onMouseEnter={() => onButtonEnter(ctaButtonRef)}
                            onMouseLeave={() => onButtonLeave(ctaButtonRef)}
                        >
                            {t('common.bookSession')} <div className="box"><ArrowForwardIcon/></div>
                        </a>
                        <div className="footer-socials">
                            <a
                                href="https://www.youtube.com/@mugdi.agency"
                                target="_blank"
                                rel="noopener noreferrer"
                                ref={youtubeButtonRef}
                                onMouseEnter={() => onButtonEnter(youtubeButtonRef)}
                                onMouseLeave={() => onButtonLeave(youtubeButtonRef)}
                            >
                                <YouTubeIcon/>
                            </a>
                            <a
                                href="https://www.tiktok.com/@mugdi.agency"
                                target="_blank"
                                rel="noopener noreferrer"
                                ref={tiktokButtonRef}
                                onMouseEnter={() => onButtonEnter(tiktokButtonRef)}
                                onMouseLeave={() => onButtonLeave(tiktokButtonRef)}
                            >
                                <MusicNoteIcon/>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <div>
                        {t('footer.copyright', { year: new Date().getFullYear() })}
                    </div>
                    <div>
                        {t('footer.tagline')}
                    </div>
                </div>

            </div>
            <div className="decorations">
                MUGDI
            </div>
        </footer>
    )
}