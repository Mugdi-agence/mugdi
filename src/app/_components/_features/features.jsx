import HomeIcon from '@mui/icons-material/Home';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import { getContent } from '@/app/locales';
import { FeaturesButton } from './Features.client.jsx';

export default function Features({ lang = 'en' }) {
    const { features, common } = getContent(lang);
    const cards = features.cards;

    return (
        <section className="features-section" id="features">
            <div className="features-top">
                <div className="eyebrow">
                    <HomeIcon/>
                    <ArrowForwardIosIcon/>
                    <span>{features.eyebrow}</span>
                </div>
                <h2 className="features-title">
                    <i>{features.titleHighlight}</i> {features.titleRest}
                </h2>
                <FeaturesButton label={common.bookSession} />
            </div>
            <div className="features-cards">
                <div className="features-card1">
                    <ArrowOutwardIcon/>
                    <div className="img"></div>
                    <span>{cards.card1.symbol}</span>
                    <h3><i>{cards.card1.titleHighlight}</i> {cards.card1.titleRest}</h3>
                    <hr />
                    <p>{cards.card1.description}</p>
                </div>
                <div className="features-card2">
                    <ArrowOutwardIcon/>
                    <div className="img"></div>
                    <span>{cards.card2.symbol}</span>
                    <h3><i>{cards.card2.titleHighlight}</i> {cards.card2.titleRest}</h3>
                    <hr />
                    <p>{cards.card2.description}</p>
                </div>
                <div className="features-card3">
                    <ArrowOutwardIcon/>
                    <div className="img"></div>
                    <span>{cards.card3.symbol}</span>
                    <h3><i>{cards.card3.titleHighlight}</i> {cards.card3.titleRest}</h3>
                    <hr />
                    <p>{cards.card3.description}</p>
                </div>
            </div>
        </section>
    );
}