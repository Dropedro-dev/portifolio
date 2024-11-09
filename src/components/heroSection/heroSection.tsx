 import bgHero from '@/assets/bgHeroLG.jpg'
 import { ButtonNavigation } from '../buttonNavigation/buttonNavigation'
 export const HeroSection = () => {

    return (
        <section 
            id="home"
            className="flex h-screen w-screen bg-right lg:bg-center"
            style={{
                backgroundImage: `url(${bgHero.src})`,
                backgroundSize: 'cover' 
            }}
        >
            <div className="flex-1 flex flex-col justify-center items-center bg-gradient-to-l lg:bg-gradient-to-r from-transparent lg:from-[#162934] to-transparent">
                <span className='text-[#F4A261] font-bold'>
                    PROGRAMADOR
                </span>
                <span className='font-bold text-5xl pt-3 pb-4'>FULLSTACK</span>
                iniciante
                <div className="mt-10">
                    <ButtonNavigation href='#about' content='Saiba mais' />
                </div>
            </div>

        </section>
    )
 }