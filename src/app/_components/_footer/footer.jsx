import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import YouTubeIcon from '@mui/icons-material/YouTube';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import { getContent } from '@/app/locales';
import { HoverLink } from '../_projects/Project.client';

export default function Footer({ lang = 'en' }) {
    const { footer, nav, common } = getContent(lang);
    const copyright = footer.copyright.replace('{{year}}', new Date().getFullYear());
    const ctaSubject = encodeURIComponent(common.bookSession);

    return (
        <footer className="footer-section">
            <div className="footer-content">
                <div className="footer-columns">
                    <div className="footer-branding">
                        <img src="/white.png" alt="Premium Agency" className="footer-logo"/>
                        <div className="footer-subtitle">
                            {footer.subtitleLine1}<br/>
                            {footer.subtitleLine2}
                        </div>
                        <div className="footer-description">
                            {footer.description}
                        </div>
                    </div>
                    <div className="footer-col navigation">
                        <div>{footer.navigationLabel}</div>
                        <nav className="footer-nav">
                            <a href="#approach">{nav.approach}</a>
                            <a href="#project">{nav.projects}</a>
                            <a href="#features">{nav.expertise}</a>
                            <a href="#process">{nav.process}</a>
                        </nav>
                    </div>
                    <div className="footer-col contact">
                        <div>{footer.contactLabel}</div>
                        <a href="mailto:contact.mugdi@gmail.com">
                            contact.mugdi@gmail.com
                        </a>
                        <HoverLink
                            href={`mailto:contact.mugdi@gmail.com?subject=${ctaSubject}`}
                            className="button-1"
                        >
                            {common.bookSession} <div className="box"><ArrowForwardIcon/></div>
                        </HoverLink>
                        <div className="footer-socials">
                            <HoverLink href="https://www.youtube.com/@mugdi.agency" target="_blank">
                                <YouTubeIcon/>
                            </HoverLink>
                            <HoverLink href="https://www.tiktok.com/@mugdi.agency" target="_blank">
                                <MusicNoteIcon/>
                            </HoverLink>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <div>{copyright}</div>
                    <div>{footer.tagline}</div>
                </div>
            </div>
            <div className="decorations">
                MUGDI
            </div>
        </footer>
    );
}