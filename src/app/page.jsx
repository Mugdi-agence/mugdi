import { cookies } from "next/headers";
import "./page.scss"

import Hero from "./_components/_hero/hero";
import Approach from "./_components/_approach/approach";
import Navbar from "./_components/_nav/nav";
import Project from "./_components/_projects/project";
import Features from "./_components/_features/features";
import Process from "./_components/_process/process";
import CTA from "./_components/_cta/cta";
import Footer from "./_components/_footer/footer";
import Cursor from "./_cursor/cursor";

export default async function Home() {
  const cookieStore = await cookies();
  const lang = cookieStore.get("lang")?.value ?? "en";

  return (
    <>
      <Cursor/>
      <Navbar lang={lang}/>
      <Hero lang={lang}/>
      <Approach lang={lang}/>
      <Project lang={lang}/>
      <Features lang={lang}/>
      <Process lang={lang}/>
      <CTA lang={lang}/>
      <Footer lang={lang}/>
    </>
  );
}