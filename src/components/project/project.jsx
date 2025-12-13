import { useEffect, useRef } from 'react';
import './project.scss';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Agence from "../../assets/landing/Agence Exemple.png"
import Start_up from "../../assets/landing/Start-up.png"
import Architecture_d_interieur from "../../assets/landing/Premium.png";
import Paysagiste from "../../assets/landing/Natural.png";


const structure_Data = {
    1: {
        number:"1/",
        src: Agence,
        title: "Agence Créative"
    },

    2: {
        number:"2/",
        src: Start_up,
        title: "Start-up Tech"
    },

    3: {
        number:"3/",
        src: Architecture_d_interieur,
        title: "Architecture d'interieur"
    },

    4: {
        number:"4/",
        src: Paysagiste,
        title: "Paysagiste"
    }
}

export default function Project() {
    const h1 = useRef(null);
    const p11 = useRef(null);
    const p12 = useRef(null);
    const cards = useRef(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        gsap.to(h1.current, {
            y: 0,
            scale: 1,
            scrollTrigger: {
                trigger: h1.current,
                start: "bottom 50%",
                end: "bottom 30%",
                scrub: 1,
            }
        });

        gsap.to(p11.current, {
            y: 0,
            scale: 1,
            scrollTrigger: {
                trigger: p11.current,
                start: "bottom 45%",
                end: "bottom 30%",
                scrub: 1,
            }
        });

        gsap.to(p12.current, {
            y: 0,
            scale: 1,
            scrollTrigger: {
                trigger: p12.current,
                start: "bottom 40%",
                end: "bottom 30%",
                scrub: 1,
            }
        });

        gsap.to(cards.current, {
            y: 0,
            scrollTrigger: {
                trigger: cards.current,
                start: "top 120%",
                end: "top 70%",
                scrub: 1,
            }
        });
    }, []);
    return (
        <section className="project" id="project">
            <div className="title">
                <div className="overlay">
                    <h1 ref={h1}>Nos Réalisations</h1>
                </div>
                <div className="overlay">
                    <p ref={p11}>Des projets conçus pour marquer, performer et refléter </p>
                </div>
                <div className="overlay">
                    <p ref={p12}>l’exigence de nos clients.</p>
                </div>
            </div>

            <div className="cards" ref={cards}>
            {Object.values(structure_Data).map((item, index) => (
                <div
                className="card"
                key={index}
                style={{ backgroundImage: `url(${item.src})` }}
                >
                <span className="number">{item.number}</span>
                <h3 className="card-title">{item.title}</h3>
                </div>
            ))}
            </div>
        </section>
    )
}