import { HeaderMenu } from "@/components/header/headerMenu";
import { HeroSection } from "@/components/heroSection/heroSection";
import { AboutSection } from "@/components/aboutSection/aboutSection";
const Page = () => {
  return (
    <main className='w-screen'>
      <HeaderMenu />
      <HeroSection />
      <AboutSection />
    </main>
  )
}

export default Page;