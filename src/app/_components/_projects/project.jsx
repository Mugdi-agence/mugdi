import Marquee from "../marquee";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import HomeIcon from '@mui/icons-material/Home';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import YouTubeIcon from '@mui/icons-material/YouTube';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import { getContent } from '@/app/locales';
import { ProjectSectionWrapper, HoverLink } from './Project.client';

const projectImages = ["/streetwear.png", "/hotel.png"];
const projectLinks = ["https://streetwear.mugdi.com/", "https://hotel.mugdi.com/"];

export default function Project({ lang = 'en' }) {
    const { projects, common } = getContent(lang);
    const items = projects.items;
    const itemKeys = Object.keys(items);

    return (
        <ProjectSectionWrapper>
            <Marquee/>
            <div className="project-top">
                <div className="left">
                    <div className="eyebrow">
                        <HomeIcon/>
                        <ArrowForwardIosIcon/>
                        <span>{projects.eyebrow}</span>
                    </div>
                    <h2 className="project-title">
                        <i>{projects.titleHighlight}</i> {projects.titleRest}
                    </h2>
                </div>
                <div className="right">
                    <HoverLink href="mailto:contact.mugdi@gmail.com" className="button-1">
                        {common.bookSession} <div className="box"><ArrowForwardIcon/></div>
                    </HoverLink>
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
                                    <HoverLink href={projectLinks[idx]} target="_blank">
                                        <ArrowOutwardIcon />
                                    </HoverLink>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
            <div className="bottom">
                <p>{projects.bottomText}</p>
                <div className="social">
                    <span>{projects.followLabel}</span>
                    <div className="links">
                        <HoverLink href="https://www.youtube.com/@mugdi.agency" target="_blank">
                            <YouTubeIcon/>
                        </HoverLink>
                        <HoverLink href="https://www.tiktok.com/@mugdi.agency" target="_blank">
                            <MusicNoteIcon/>
                        </HoverLink>
                    </div>
                </div>
            </div>
        </ProjectSectionWrapper>
    );
}