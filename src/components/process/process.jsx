import './process.scss';
import logo from '../../assets/Logo_Black.png';
import { useRef } from 'react';
import { useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import SearchIcon from '@mui/icons-material/Search';
import TrackChangesIcon from '@mui/icons-material/TrackChanges';
import PsychologyIcon from '@mui/icons-material/Psychology';
import SubjectIcon from '@mui/icons-material/Subject';
import FolderCopyIcon from '@mui/icons-material/FolderCopy';
import AssistantNavigationIcon from '@mui/icons-material/AssistantNavigation';
import SquareFootIcon from '@mui/icons-material/SquareFoot';
import ConstructionIcon from '@mui/icons-material/Construction';
import ColorLensIcon from '@mui/icons-material/ColorLens';
import ComputerIcon from '@mui/icons-material/Computer';
import BoltIcon from '@mui/icons-material/Bolt';
import ExtensionIcon from '@mui/icons-material/Extension';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import LockIcon from '@mui/icons-material/Lock';
import SettingsIcon from '@mui/icons-material/Settings';
import WifiTetheringIcon from '@mui/icons-material/WifiTethering';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';

const structureData = [
    {
      number: "01.",
      title: "Découverte",
      subtitle: "Comprendre avant de créer.",
      description:
        "Nous prenons le temps de comprendre votre projet, vos objectifs et vos contraintes afin de poser des bases solides avant toute création.",
      items: [
        { icon: <SearchIcon/>, text: "Analyse du besoin" },
        { icon: <TrackChangesIcon/>, text: "Objectifs" },
        { icon: <PsychologyIcon/>, text: "Vision" },
        { icon: <SubjectIcon/>, text: "Contraintes" },
      ],
    },
    {
      number: "02.",
      title: "Structuration",
      subtitle: "Donner une forme à la vision.",
      description:
        "Nous organisons le projet : structure du site, hiérarchie des contenus et logique de navigation.",
      items: [
        { icon: <FolderCopyIcon/>, text: "Architecture" },
        { icon: <AssistantNavigationIcon/>, text: "Navigation" },
        { icon: <SquareFootIcon/>, text: "Wireframe" },
        { icon: <ConstructionIcon/>, text: "Fondations" },
      ],
    },
    {
      number: "03.",
      title: "Production",
      subtitle: "Transformer la vision en réalité.",
      description:
        "Nous concevons et développons votre site avec une attention particulière portée aux détails, à la fluidité et à la performance.",
      items: [
        { icon: <ColorLensIcon/>, text: "Design" },
        { icon: <ComputerIcon/>, text: "Développement" },
        { icon: <BoltIcon/>, text: "Performance" },
        { icon: <ExtensionIcon/>, text: "Détails" },
      ],
    },
    {
      number: "04.",
      title: "Déploiement",
      subtitle: "Mettre en ligne, sans friction.",
      description:
        "Nous assurons une mise en ligne propre et contrôlée, avec tous les réglages nécessaires pour un lancement optimal.",
      items: [
        { icon: <RocketLaunchIcon/>, text: "Mise en ligne" },
        { icon: <LockIcon/>, text: "Sécurité" },
        { icon: <SettingsIcon/>, text: "Configuration" },
        { icon: <WifiTetheringIcon/>, text: "Monitoring" },
      ],
    },
  ];
  
  

export default function Process() {
    const p2 = useRef(null);
    const p1 = useRef(null);
    const h12 = useRef(null);
    const h11 = useRef(null);
    const cards = useRef(null);
    const section = useRef(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        gsap.to(h12.current, {
            y: 0,
            scrollTrigger: {
                trigger: h12.current,
                start: 'top 40%',
                end: 'bottom 20%',
                scrub: 1,
            }
        });

        gsap.to(h11.current, {
            y: 0,
            scrollTrigger: {
                trigger: h11.current,
                start: 'top 60%',
                end: 'bottom 30%',
                scrub: 1,

            }
        });

        gsap.to(p2.current, {
            y: 0,
            scrollTrigger: {
                trigger: p2.current,
                start: 'top 80%',
                end: 'bottom 50%',
                scrub: 1,
            }
        });

        gsap.to(p1.current, {
            y: 0,
            scrollTrigger: {
                trigger: p1.current,
                start: 'top 70%',
                end: 'bottom 50%',
                scrub: 1,
            }
        });

        gsap.to(cards.current, {
            y: 0,
            scrollTrigger: {
                trigger: cards.current,
                start: 'top 150%',
                end: '10% 90%',
                scrub: 1,
            }
        });

        const tl = gsap.timeline({
            scrollTrigger: {
              trigger: section.current,
              start: "bottom 100%",   // début du changement de bg
              end:   "bottom 45%",   // fin du scale / y
              scrub: 1,
            }
          });
        
          // 1️⃣ d'abord le changement de couleur
          tl.to(section.current, {
            borderLeft: '1px solid #111',
            borderRight: '1px solid #111',
            borderBottom: '1px solid #111',
            duration: 0.3,    // proportion, pas un vrai temps (contrôlé par le scroll)
          })
        
          // 2️⃣ ensuite le scale + déplacement Y
          tl.to(section.current, {
            scale: 0.9,
            y: -500,
            borderRadius: 50,
            filter: 'blur(5px)',
            ease: "power2.inOut"      // plus propre en scrub
          });
    }, []);
    return (
        <section className="process" ref={section} id={"process"}>
            <div className="title">
                <div className="overlay">
                    <h1 ref={h12}>Notre méthode — Simple.</h1>
                </div>
                <div className="overlay">
                    <h1 ref={h11}>Transparente. Efficace.</h1>
                </div>
                <div className="overlay">
                    <p ref={p1}>Chaque projet <img src={logo}/>suit un cadre précis pour garantir qualité, </p>
                </div>
                <div className="overlay">
                    <p ref={p2}>délais et sérénité. Découvrez notre approche étape par étape.</p>
                </div>
            </div>

            <div className="structure-cards" ref={cards}>
            {structureData.map((card, index) => (
                    <div className="cards" key={index}>
                    
                    {/* TOP */}
                    <div className="card-top">
                        <div className="card-number">
                        <span>{card.number}</span>
                        <div className="dot" />
                        </div>

                    <div className="card-title">
                        <h3>{card.title}</h3>
                        <p className="subtitle">{card.subtitle}</p>
                        <div className="line" />
                        </div>
                    </div>

                    {/* DESCRIPTION */}
                    <p className="card-description">
                        {card.description}
                    </p>

                    {/* ICONS */}
                    <div className="cards-bottom">
                    {card.items.map((item, i) => (
                        <div className="icon-item" key={i}>
                        <div className="icon-box">
                            {item.icon}
                        </div>
                        <span className="icon-text">
                            {item.text}
                        </span>
                        </div>
                    ))}
                    </div>


                    </div>
                ))}
            </div>

            <div className="cta-footer">
                <div className="cta-footer-content">

                    <p>
                    Découvrez nos créations, nos coulisses et nos inspirations.
                    </p>

                    <div className="social-links">
                        <a target='_blank' href="https://www.instagram.com/mugdi_agence/" aria-label="Instagram"><InstagramIcon className='icon'/></a>
                        <a target='_blank' href="https://www.youtube.com/@Mugdi-0E9" aria-label="Youtube"><YouTubeIcon className='icon'/></a>
                        <a target='_blank' href="https://www.facebook.com/profile.php?id=61578299896288" aria-label="facebook"><FacebookIcon className='icon'/></a>
                    </div>
                </div>
            </div>
        </section>
    )
}