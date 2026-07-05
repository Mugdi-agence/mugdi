import Marquee from "../marquee";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import HomeIcon from '@mui/icons-material/Home';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import { getContent } from '@/app/locales';
import { ApproachSectionWrapper, ApproachButton } from './Approach.client.jsx';

export default function Approach({ lang = 'en' }) {
    const { approach, common } = getContent(lang);
    const cards = approach.cards;

    return (
        <ApproachSectionWrapper>
            <Marquee/>
            <div className="approach-main">
                <div className="approach-top">
                    <div className="approach-left">
                        <div className="eyebrow">
                            <HomeIcon/>
                            <ArrowForwardIosIcon/>
                            <span>{approach.eyebrow}</span>
                        </div>
                        <h2 className="approach-title">
                            <i>{approach.titleHighlight}</i> {approach.titleRest}
                        </h2>
                    </div>
                    <div className="approach-right">
                        <ApproachButton label={common.bookSession} />
                    </div>
                </div>

                <div className="approach-cards">
                    <div className="approach-card1">
                        <ArrowOutwardIcon/>
                        <div className="img"></div>
                        <span>{cards.card1.number}</span>
                        <h3><i>{cards.card1.titleHighlight}</i> {cards.card1.titleRest}</h3>
                        <hr />
                        <p>{cards.card1.description}</p>
                    </div>
                    <div className="approach-card2">
                        <div className="img"></div>
                        <div className="pop">
                            <div className="left">
                                <h3>{cards.card2.title}</h3>
                                <p>{cards.card2.description}</p>
                            </div>
                            <hr />
                            <div className="right">
                                <ArrowOutwardIcon/>
                            </div>
                        </div>
                    </div>
                    <div className="approach-card3">
                        <div className="img"></div>
                        <div className="pop">
                            <div className="left">
                                <h3>{cards.card3.title}</h3>
                                <p>{cards.card3.description}</p>
                            </div>
                            <hr />
                            <div className="right">
                                <ArrowOutwardIcon/>
                            </div>
                        </div>
                    </div>
                    <div className="approach-card4">
                        <ArrowOutwardIcon/>
                        <div className="img"></div>
                        <span>{cards.card4.number}</span>
                        <h3><i>{cards.card4.titleHighlight}</i> {cards.card4.titleRest}</h3>
                        <hr />
                        <p>{cards.card4.description}</p>
                    </div>
                </div>
            </div>
        </ApproachSectionWrapper>
    );
}