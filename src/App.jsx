import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import './App.scss';
import Expertise from './components/expertise/expertise';
import Header from './components/header/header';
import Texted from './texted';
import Process from './components/process/process';
import Project from "./components/project/project";
import Contact from "./components/contact/contact";
import Footer from "./components/footer/footer";
import Navigation from "./components/nav/nav";

function App() {

  useEffect(() => {
    const lenis = new Lenis({
      smooth: true,
      lerp: 0.075,
      wheelMultiplier: 1,
      touchMultiplier: 1.2,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <>
      <Navigation />
      <Header />
      <Texted />
      <Expertise />
      <Process />
      <Project />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
