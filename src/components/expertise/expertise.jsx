import './expertise.scss';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ConstructionIcon from '@mui/icons-material/Construction';
import AutoGraphIcon from '@mui/icons-material/AutoGraph';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect, useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);

const Services = {
    1: {
      icon: <DesignServicesIcon/>,
      title: "Branding & Identité Visuelle",
      p: "Nous créons des marques distinctives et mémorables, qui parlent à votre audience et la convertissent.",
      bullets: [
        "Direction artistique complète",
        "Logo et charte graphique haut de gamme",
        "Univers graphique cohérent pour tous vos supports"
      ],
      cta: "Voir nos créations"
    },
    2: {
      icon: <DashboardIcon/>,
      title: "UX/UI & Design sur-mesure",
      p: "Une interface élégante et intuitive qui transforme chaque visiteur en client fidèle.",
      bullets: [
        "Design premium responsive",
        "Parcours utilisateur optimisé pour la conversion",
        "Expériences interactives et animations subtiles"
      ]
    },
    3: {
      icon: <ConstructionIcon/>,
      title: "Développement Web & Performance",
      p: "Sites sur-mesure, rapides et fiables, pour une expérience digitale optimale.",
      bullets: [
        "Code propre & évolutif",
        "Optimisation SEO de base",
        "Intégration sur mesure (framework)"
      ]
    },
    4: {
      icon: <AutoGraphIcon/>,
      title: "Optimisation & Suivi Premium",
      p: "Assurez la pérennité et l’efficacité de votre site vitrine avec un suivi technique et visuel constant.",
      bullets: [
        "Tests de performance et compatibilité navigateurs",
        "Mises à jour et sécurité du site",
        "Support dédié et accompagnement personnalisé"
      ]
    }
  };
  
  
export default function Expertise() {
    const spany = useRef(null);
    const h11 = useRef(null);
    const h12 = useRef(null);
    const p = useRef(null);
    const list = useRef(null);
    const section = useRef(null);

    useEffect(() => {
      gsap.to(spany.current, {
        y: 0,
        scrollTrigger: {
          trigger: spany.current,
          start: "bottom 100%",
          end: "top 50%",   
          scrub: 1,
        }
      });

      gsap.to(h11.current, {
        y: 0,
        scrollTrigger: {
          trigger: spany.current,
          start: "bottom 90%",
          end: "top 60%",   
          scrub: 1,
        }
      });
      gsap.to(h12.current, {
        y: 0,
        scrollTrigger: {
          trigger: spany.current,
          start: "bottom 80%",
          end: "top 50%",   
          scrub: 1,
        }
      });
      gsap.to(p.current, {
        x: 0,
        scrollTrigger: {
          trigger: spany.current,
          start: "bottom 80%",
          end: "top 50%",   
          scrub: 1,
        }
      });
      
      gsap.to(list.current, {
        y: 0,
        scrollTrigger: {
          trigger: spany.current,
          start: "bottom 70%",
          end: "top 20%",   
          scrub: 1,
        }
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section.current,
          start: "bottom 90%",   // début du changement de bg
          end:   "bottom 50%",   // fin du scale / y
          scrub: 1,
          // markers: true,
        }
      });
    
      // 1️⃣ d'abord le changement de couleur
      tl.to(section.current, {
        background: "#333",
        duration: 0.3,    // proportion, pas un vrai temps (contrôlé par le scroll)
      })
    
      // 2️⃣ ensuite le scale + déplacement Y
      tl.to(section.current, {
        scale: 0.9,
        y: -200,
        borderRadius: 50,
        ease: "none"      // plus propre en scrub
      });
    }, []);
    return (
        <section className="expertise" ref={section} id="expertise">
            <div className="text">
                <div className="overlay">
                    <span ref={spany}>Nos Expertises Premium</span>
                </div>

                <div className="title">
                  <div className="titre">
                      <div className="overlay">
                          <h1 ref={h11}>Transformez votre vision en</h1>
                      </div>
                      <div className="overlay">
                          <h1 ref={h12}>expérience digitale</h1>
                      </div>
                  </div>
                <p ref={p}>
                    Chez MUGDI, nous combinons design, technologie et stratégie pour créer des sites web qui séduisent, convertissent 
                    et restent gravés dans l’esprit de vos clients.
                </p>
                </div>
            </div>

            <div className="services-list" ref={list}>
                {Object.entries(Services).map(([key, service]) => (
                    <div className="cards">
                        <div className="service-card" key={key}>
                        
                        <div className="service-icon">{service.icon}</div>

                        <h2>{service.title}</h2>
                        <hr/>
                        <p>{service.p}</p>

                        <ul>
                        {service.bullets.map((bullet, i) => (
                            <li key={i}>{bullet}</li>
                        ))}
                        </ul>

                        {key === "1" && (
                        <a className="cta" href="#project">{service.cta}</a>
                        )}
                    </div>
                    </div>
                    ))}
            </div>
            <div className="cta-bottom">
                <p>Transformez votre vision en site web d’exception  Commencez votre projet dès aujourd’hui</p>
                <div className="cta-btn">
                    <span>Premium, sur-mesure, livré rapidement</span>
                    <a href="mailto:contact.mugdi@gmail.com?subject=Demande de projet">Commencez votre projet</a>
                </div>
            </div>
        </section>

    )
}