import './header.scss';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import gsap from 'gsap';
import { useEffect, useRef } from 'react';

export default function Header() {
    const h11 = useRef(null);
    const h12 = useRef(null);
    const p1 = useRef(null);
    const p2 = useRef(null);
    const etik = useRef(null);

    useEffect(() => {
        gsap.to(h11.current, {
            y: 0,
            scale: 1,
            duration: 1,
            ease: 'power2.out'
        });

        gsap.to(h12.current, {
            y: 0,
            scale: 1,
            duration: 1,
            delay: 0.1,
            ease: 'power2.out'
        });

        gsap.to(p1.current, {
            y: 0,
            scale: 1,
            duration: 1,
            delay: 0.5,
            ease: 'power2.out'
        });

        gsap.to(p2.current, {
            y: 0,
            scale: 1,
            duration: 1,
            delay: 0.7,
            ease: 'power2.out'
        });

        gsap.to(etik.current, {
            opacity: 1,
            scale: 1,
            duration: 1,
            delay: 0.9,
            ease: 'power2.out'
        });
    }, []);
    return (
        <header id='home'>
            <div className="etiquette" ref={etik}>
                <div className="circle"><AddCircleIcon/></div><span>EXCLUSIVE CREATION</span>
            </div>
                <div className="overlay">
                    <h1 ref={h11}>Nous créons des sites web d’exception</h1>
                </div>
                <div className="overlay">
                    <h1 ref={h12}>pour des marques ambitieuses.</h1>
                </div>
                <div className="overlay">
                    <p ref={p1}>Nous concevons des plateformes digitales sur-mesure qui renforcent votre image, inspirent confiance et</p>
                </div>
                <div className="overlay">
                    <p ref={p2}>convertissent vos visiteurs en clients.</p>
                </div>

                <div className="cta">
                    <div className="cta-1">
                        <a href="mailto:contact.mugdi@gmail.com?subject=Demande de projet">Commencer mon projet</a>
                        <span>Réponse sous 24h — Aucun engagement</span>
                    </div>
                    
                    <div className="cta-2">
                        <a href="#project">Voir nos réalisations</a>
                        <span>Sur-mesure</span>
                    </div>
                </div>

        </header>
    )
}