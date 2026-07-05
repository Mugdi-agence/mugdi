import Marquee from '../marquee';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { getContent } from '@/app/locales';
import { CTASectionWrapper } from './CTA.client';
import { HoverLink } from '../_projects/Project.client';

export default function CTA({ lang = 'en' }) {
    const { cta, common } = getContent(lang);

    return (
        <CTASectionWrapper>
            <div className="cta-top">
                <div className="cta-card">
                    <div className="cta-left">
                        <h2 className="cta-title"><i>{cta.titleLine1}</i> <br /> {cta.titleLine2}</h2>
                        <p className="cta-paragraphe">{cta.paragraph}</p>
                    </div>
                    <div className="cta-right">
                        <HoverLink href="mailto:contact.mugdi@gmail.com" className="button-1">
                            {common.bookSession} <div className="box"><ArrowForwardIcon/></div>
                        </HoverLink>
                        <HoverLink href="#project" className="button-2">
                            {common.viewProjects} <div className="box"><ArrowForwardIcon/></div>
                        </HoverLink>
                    </div>
                </div>
            </div>
            <Marquee/>
        </CTASectionWrapper>
    );
}