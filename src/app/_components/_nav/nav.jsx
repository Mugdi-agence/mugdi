import "./nav.scss";
import { getContent } from '@/app/locales';
import NavbarClient from './Navbar.client';

export default function Navbar({ lang = 'en' }) {
    const { nav } = getContent(lang);
    const ctaLabel = nav.cta;

    const links = [
        { href: "#approach", label: nav.approach },
        { href: "#project",  label: nav.projects },
        { href: "#features", label: nav.expertise },
        { href: "#process",  label: nav.process },
    ];

    return <NavbarClient lang={lang} links={links} ctaLabel={ctaLabel} />;
}