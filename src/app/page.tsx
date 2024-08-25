'use client'

import HeaderSection from "@/components/headerSection";
import Intro from "@/components/intro";
import AboutMe from "@/components/aboutMe";
import Projects from "@/components/projects";
import FooterSection from "@/components/footerSection";
import { useState } from "react";

const Page =()=> {
  const [openerMenu, setOpenerMenu] = useState<boolean>(false);
  const handleMenu = () => {
    setOpenerMenu(!openerMenu);
    console.log('fundionou')
  };
  return (
    <>
      <HeaderSection 
        handleMenu = {handleMenu}
        openerMenu = {openerMenu}/>
      <main>
        <Intro />
        <AboutMe />
        <Projects />
      </main>
      <FooterSection />
    </>
  )
}

export default Page;