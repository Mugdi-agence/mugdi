'use client';

import "./nav.scss";
import LanguageIcon from '@mui/icons-material/Language';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { useTranslation } from 'react-i18next';
import { useRef, useState, useEffect } from 'react';
import gsap from "gsap";

export default function Navbar() {
  const { t, i18n } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);

  const buttonRef = useRef(null);
  const mobileMenuRef = useRef(null);

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'fr' : 'en';
    i18n.changeLanguage(newLang);
    localStorage.setItem('lang', newLang);
  };

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

  // Animation d'ouverture/fermeture du menu mobile
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
        opacity: 0,
        y: -20,
        duration: 0.3,
        ease: "power2.in",
        onComplete: () => {
          gsap.set(mobileMenuRef.current, { display: "none" });
        }
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

        {/* Liens desktop */}
        <div className="nav-links">
          <a href="#approach">{t('nav.approach')}</a>
          <a href="#project">{t('nav.projects')}</a>
          <a href="#features">{t('nav.expertise')}</a>
          <a href="#process">{t('nav.process')}</a>
        </div>

        {/* Utilities desktop */}
        <div className="utilities">
          <div className="languages" onClick={toggleLanguage}>
            <LanguageIcon/>
            <span>{(i18n.language || 'en').toUpperCase()}</span>
          </div>
          <a
            href="mailto:contact.mugdi@gmail.com"
            className="button-1"
            ref={buttonRef}
            onMouseEnter={() => onButtonEnter(buttonRef)}
            onMouseLeave={() => onButtonLeave(buttonRef)}
          >
            {t('nav.cta')} <div className="box"><ArrowForwardIcon/></div>
          </a>
        </div>

        {/* Bouton hamburger — visible uniquement en mobile via CSS */}
        <button
          className="burger-btn"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          {menuOpen ? <CloseIcon/> : <MenuIcon/>}
        </button>
      </nav>

      {/* Menu plein écran mobile */}
      <div className="mobile-menu" ref={mobileMenuRef}>
        <div className="mobile-links">
          <a href="#approach" onClick={closeMenu}>{t('nav.approach')}</a>
          <a href="#project" onClick={closeMenu}>{t('nav.projects')}</a>
          <a href="#features" onClick={closeMenu}>{t('nav.expertise')}</a>
          <a href="#process" onClick={closeMenu}>{t('nav.process')}</a>
        </div>

        <div className="mobile-utilities">
          <div className="languages" onClick={toggleLanguage}>
            <LanguageIcon/>
            <span>{(i18n.language || 'en').toUpperCase()}</span>
          </div>
          <a href="mailto:contact.mugdi@gmail.com" className="button-1" onClick={closeMenu}>
            {t('nav.cta')} <div className="box"><ArrowForwardIcon/></div>
          </a>
        </div>
      </div>
    </>
  );
}