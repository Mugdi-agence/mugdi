gsap.registerPlugin(ScrollTrigger);

gsap.to(".s2Title", {
  scrollTrigger: {
    trigger: ".s2Title",
    start: "top 20%",
    endTrigger: "#s3",
    end: "-50% top",
    scrub: true,
    pin: true,
  },
  x: 0,
  y: 0
});

gsap.from('.cta h1', {
  filter: "blur(15px)",
  opacity:0,
  y: -50,
  duration: 1.2,
  ease: 'power2.out',
});

gsap.to('.cta h1', {
  y: 5,
  duration: 5,
  ease: 'power2.inOut',
  delay: 0.2,
  repeat: -1,
  yoyo: true
})

gsap.from('.cta p', {
  filter: 'blur(15px)',
  opacity: 0,
  y: -50,
  duration: 1.2,
  ease: 'power2.out',
  delay: 0.5
});

gsap.from('.navbar', {
  filter: 'blur(15px)',
  opacity: 0,
  y: -50,
  duration: 1.2,
  ease: 'power2.out',
  delay: 1.5
})

gsap.from('.blob', {
  opacity: 0,
  duration: 1.2,
  ease: 'power2.out',
  delay: 1.5
})
