'use client';

import LanguageIcon from '@mui/icons-material/Language';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { useRef, useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import gsap from "gsap";

export default function NavbarClient({ lang, links, ctaLabel }) {
    const [menuOpen, setMenuOpen] = useState(false);
    const buttonRef = useRef(null);
    const mobileMenuRef = useRef(null);
    const router = useRouter();

    const toggleLanguage = () => {
        const newLang = lang === 'en' ? 'fr' : 'en';
        document.cookie = `lang=${newLang}; path=/; max-age=31536000`;
        router.refresh(); // re-render les Server Components (Navbar, Hero, ...) avec la nouvelle langue
    };

    function onButtonEnter(ref) {
        if (!ref.current) return;
        gsap.killTweensOf(ref.current);
        gsap.to(ref.current, { scale: 1.05, duration: 0.3, opacity: 0.7, ease: "elastic.out(2, 1)" });
    }

    function onButtonLeave(ref) {
        if (!ref.current) return;
        gsap.killTweensOf(ref.current);
        gsap.to(ref.current, { scale: 1, duration: 0.4, opacity: 1, ease: "elastic.out(2, 1)" });
    }

    useEffect(() => {
        if (!mobileMenuRef.current) return;

        if (menuOpen) {
            gsap.set(mobileMenuRef.current, { display: "flex" });
            gsap.fromTo(mobileMenuRef.current,
                { opacity: 0, y: -20 },
                { opacity: 1, y: 0, duration: 0.4, ease: "power2.out" }
            );
            document.body.style.overflow = "hidden";
        } else {
            gsap.to(mobileMenuRef.current, {
                opacity: 0, y: -20, duration: 0.3, ease: "power2.in",
                onComplete: () => gsap.set(mobileMenuRef.current, { display: "none" })
            });
            document.body.style.overflow = "";
        }
    }, [menuOpen]);

    function closeMenu() {
        setMenuOpen(false);
    }

    return (
        <>
            <nav className="navbar">
                <img src={"/logo.png"} alt="" />

                <div className="nav-links">
                    {links.map(l => <a key={l.href} href={l.href}>{l.label}</a>)}
                </div>

                <div className="utilities">
                    <div className="languages" onClick={toggleLanguage}>
                        <LanguageIcon/>
                        <span>{(lang || 'en').toUpperCase()}</span>
                    </div>
                    <a
                        href="mailto:contact.mugdi@gmail.com"
                        className="button-1"
                        ref={buttonRef}
                        onMouseEnter={() => onButtonEnter(buttonRef)}
                        onMouseLeave={() => onButtonLeave(buttonRef)}
                    >
                        {ctaLabel} <div className="box"><ArrowForwardIcon/></div>
                    </a>
                </div>

                <button className="burger-btn" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
                    {menuOpen ? <CloseIcon/> : <MenuIcon/>}
                </button>
            </nav>

            <div className="mobile-menu" ref={mobileMenuRef}>
                <div className="mobile-links">
                    {links.map(l => <a key={l.href} href={l.href} onClick={closeMenu}>{l.label}</a>)}
                </div>

                <div className="mobile-utilities">
                    <div className="languages" onClick={toggleLanguage}>
                        <LanguageIcon/>
                        <span>{(lang || 'en').toUpperCase()}</span>
                    </div>
                    <a href="mailto:contact.mugdi@gmail.com" className="button-1" onClick={closeMenu}>
                        {ctaLabel} <div className="box"><ArrowForwardIcon/></div>
                    </a>
                </div>
            </div>
        </>
    );
}