'use client';

import { useTranslation } from 'react-i18next';
import { useEffect, useRef } from 'react';
import Marquee from "../marquee";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import HomeIcon from '@mui/icons-material/Home';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import YouTubeIcon from '@mui/icons-material/YouTube';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import gsap from "gsap";

const projectImages = ["/streetwear.png", "/hotel.png"];
const projectLinks = ["https://streetwear.mugdi.com/", "https://hotel.mugdi.com/"];

export default function Project() {
    const { t } = useTranslation();
    const items = t('projects.items', { returnObjects: true });
    const itemKeys = Object.keys(items);

    // Ref pour le CTA principal
    const button1Ref = useRef(null);
    // Refs pour les boutons de liens des projets
    const projectCardLinkRefs = itemKeys.map(() => useRef(null));

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

    // Refs pour les boutons sociaux
    const youtubeButtonRef = useRef(null);
    const musicButtonRef = useRef(null);

    return (
        <section className="project-section" ref={heroSectionRef} id="project">
            <Marquee/>
            <div className="project-top">
                <div className="left">
                    <div className="eyebrow">
                        <HomeIcon/>
                        <ArrowForwardIosIcon/>
                        <span>{t('projects.eyebrow')}</span>
                    </div>
                    <h2 className="project-title">
                        <i>{t('projects.titleHighlight')}</i> {t('projects.titleRest')}
                    </h2>
                </div>
                <div className="right">
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
            </div>
        <div className="project-cards">
            {itemKeys.map((key, idx) => {
                const project = items[key];
                return (
                    <div key={key} className="project-card">
                            <img src={projectImages[idx]} alt={project.title}/>
                        <div className="project-tags">
                            {project.tags.map((tag, tagIdx) => (
                                <span key={tagIdx} className="project-tag">{tag}</span>
                            ))}
                        </div>
                        <div className="project-pop">
                            <div className="left">
                                <h3 className="project-card-title">{project.title}</h3>
                                <p className="project-card-description">{project.description}</p>
                            </div>
                            <hr />
                            <div className="project-card-link">
                                <a
                                    href={projectLinks[idx]}
                                    ref={projectCardLinkRefs[idx]} target='_blank'
                                    onMouseEnter={() => onButtonEnter(projectCardLinkRefs[idx])}
                                    onMouseLeave={() => onButtonLeave(projectCardLinkRefs[idx])}
                                >
                                    <ArrowOutwardIcon />
                                </a>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
        <div className="bottom">
            <p>{t('projects.bottomText')}</p>
            <div className="social">
                <span>{t('projects.followLabel')}</span>
                <div className="links">
                    <a
                        href="https://www.youtube.com/@mugdi.agency" target='_blank'
                        ref={youtubeButtonRef}
                        onMouseEnter={() => onButtonEnter(youtubeButtonRef)}
                        onMouseLeave={() => onButtonLeave(youtubeButtonRef)}
                    >
                        <YouTubeIcon/>
                    </a>
                    <a
                        href="https://www.tiktok.com/@mugdi.agency" target='_blank'
                        ref={musicButtonRef}
                        onMouseEnter={() => onButtonEnter(musicButtonRef)}
                        onMouseLeave={() => onButtonLeave(musicButtonRef)}
                    >
                        <MusicNoteIcon/>
                    </a>
                </div>
            </div>
        </div>
        </section>
    )
}