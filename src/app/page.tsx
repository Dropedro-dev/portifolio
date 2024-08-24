import HeaderSection from "@/components/headerSection";
import Intro from "@/components/intro";
import AboutMe from "@/components/aboutMe";
import Projects from "@/components/projects";
const Page =()=> {
  return (
    <main>
      <HeaderSection />
      <Intro />
      <AboutMe />
      <Projects />
    </main>
  )
}

export default Page;