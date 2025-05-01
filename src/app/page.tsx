import { HeaderMenu } from "@/components/header/headerMenu";
import { HeroSection } from "@/components/heroSection/heroSection";
import { AboutSection } from "@/components/aboutSection/aboutSection";
import { SkillSection } from "@/components/skillsSection/SkillSection";
const Page = () => {
  return (
    <main className='w-screen'>
      <HeaderMenu />
      <HeroSection />
      <AboutSection />
      <SkillSection />
    </main>
  )
}

export default Page;