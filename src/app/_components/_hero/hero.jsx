import HomeIcon from '@mui/icons-material/Home';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { HeroSectionWrapper, HeroButton } from './Hero.client';
import { getContent } from '@/app/locales';

export default function Hero({ lang = 'en' }) {
    const { hero, common } = getContent(lang);

    return (
        <HeroSectionWrapper>
            <header>
                <div className="hero-top">
                    <div className="eyebrow">
                        <HomeIcon/>
                        <ArrowForwardIosIcon/>
                        <span>{hero.eyebrow}</span>
                    </div>
                </div>
                <div className="hero-bottom">
                    <h1 className="hero-title">{hero.title}</h1>
                    <p className="hero-para">{hero.paragraph}</p>
                    <div className="hero-cta">
                        <HeroButton
                            href="mailto:contact.mugdi@gmail.com"
                            className="button-1"
                            label={common.bookSession}
                        />
                        <HeroButton
                            href="#project"
                            className="button-2"
                            label={common.viewProjects}
                        />
                    </div>
                </div>
            </header>
        </HeroSectionWrapper>
    );
}