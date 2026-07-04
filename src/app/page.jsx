"use client"
import "./page.scss"

import gsap from "gsap";
import Hero from "./_components/_hero/hero";
import Approach from "./_components/_approach/approach";
import Navbar from "./_components/_nav/nav";
import Project from "./_components/_projects/project";
import Features from "./_components/_features/features";
import Process from "./_components/_process/process";
import CTA from "./_components/_cta/cta";
import Footer from "./_components/_footer/footer";
import Cursor from "./_cursor/cursor";

export default function Home() {

  return (
    <>
      <Cursor/>
      <Navbar/>
      <Hero/>
      <Approach/>
      <Project/>
      <Features/>
      <Process/>
      <CTA/>
      <Footer/>
    </>
  );
}
