import gsap from "gsap";
import { useEffect } from "react";

export default function Texted() {
    useEffect(() => {
        const marquee = document.querySelector(".marquee");
      
        gsap.to(marquee, {
          xPercent: -50,
          duration: 20,
          ease: "none",
          repeat: -1,
        });
      }, []);
      
    return (
        <>
            <div className="texted">
                <div className="marquee">
                    <h1>EXCLUSIVE CREATION • PREMIUM DIGITAL STUDIO • SUR-MESURE & LUXE • UX/UI HAUT DE GAMME • EXCELLENCE DIGITALE • </h1>
                    <h1>EXCLUSIVE CREATION • PREMIUM DIGITAL STUDIO • SUR-MESURE & LUXE • UX/UI HAUT DE GAMME • EXCELLENCE DIGITALE • </h1>
                </div>
            </div>
        </>
    )
}