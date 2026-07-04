"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Marquee() {
  const trackRef = useRef(null);

  useEffect(() => {
    const track = trackRef.current;
    const items = track.querySelectorAll(".marquee-item");
    const itemWidth = items[0].getBoundingClientRect().width;

    const baseSpeed = 60; // px/s vitesse au repos
    const boostSpeed = 140; // px/s vitesse pendant le scroll
    const lerpFactor = 0.05; // 0 -> 1, plus petit = plus fluide/lent

    let currentVelocity = baseSpeed; // valeur signée (vitesse * direction)
    let targetVelocity = baseSpeed;
    let xPos = 0;
    let lastTime = null;
    let rafId;

    const loop = (time) => {
      if (lastTime === null) lastTime = time;
      const dt = (time - lastTime) / 1000;
      lastTime = time;

      // Interpolation douce vers la vitesse cible
      currentVelocity += (targetVelocity - currentVelocity) * lerpFactor;

      xPos += currentVelocity * dt;

      if (xPos <= -itemWidth) xPos += itemWidth;
      if (xPos >= 0) xPos -= itemWidth;

      gsap.set(track, { x: xPos });
      rafId = requestAnimationFrame(loop);
    };

    rafId = requestAnimationFrame(loop);

    let lastScrollY = window.scrollY;
    let scrollTimeout;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY) {
        // scroll bas -> marquee à droite (vitesse positive inversée)
        targetVelocity = -boostSpeed;
      } else if (currentScrollY < lastScrollY) {
        // scroll haut -> marquee à gauche
        targetVelocity = boostSpeed;
      }
      lastScrollY = currentScrollY;

      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        // retour fluide à la vitesse de base, en gardant la dernière direction
        targetVelocity = Math.sign(targetVelocity) * baseSpeed;
      }, 200);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      cancelAnimationFrame(rafId);
      clearTimeout(scrollTimeout);
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <div className="marquee-wrapper">
      <div ref={trackRef} className="marquee-track">
        <span className="marquee-item">
        Performance • Sur-mesure • SEO • Animations fluides • Responsive • Core Web Vitals • Accessible • Propulsé par Next.js •&nbsp;
        </span>
        <span className="marquee-item">
        Performance • Sur-mesure • SEO • Animations fluides • Responsive • Core Web Vitals • Accessible • Propulsé par Next.js •&nbsp;
        </span>
   
      </div>
    </div>
  );
}