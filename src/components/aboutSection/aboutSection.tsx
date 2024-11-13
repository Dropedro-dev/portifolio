import { ButtonNavigation } from "../buttonNavigation/buttonNavigation"
export const AboutSection = () => {
    return (
        <section 
            id="about"
            className="max-w-4xl mx-auto flex flex-col"
        >
            <h1 className="w-full text-center text-2xl font-bold py-10">ABOUT</h1>
            <div className="flex-1 flex flex-col items-center justify-center lg:flex-row gap-y-3 lg:gap-y-0 lg:gap-x-8">
                
                <div className="flex-1 flex flex-col justify-center items-center text-justify mx-4 lg:text-end">                   
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla pellentesque, leo sed euismod facilisis, eros massa sagittis quam, ac imperdiet odio nulla vitae diam. Fusce sit amet luctus odio. Aliquam vestibulum eros quis felis eleifend, quis vehicula lorem rutrum. Sed et justo vitae justo mattis porttitor accumsan consectetur mauris. Nunc consequat magna ut nulla luctus, a iaculis mi efficitur. In condimentum vitae risus vel dictum. Integer vestibulum dolor id nibh ultricies ultricies. Interdum et malesuada fames ac ante ipsum primis in faucibus.</p>
                </div>
                <div className="flex-1 flex justify-center lg:justify-start items-center py-10">
                    <div className="relative h-64 w-48 rounded-sm border-8 border-solid border-[#4A708B]">
                        <div className="absolute h-64 w-48 rounded-sm bg-black -left-5 lg:left-1 -top-5"></div>
                    </div>
                </div>            
            </div>
            <div className="flex gap-3 w-full justify-center items-center pt-5 pb-10">
                <ButtonNavigation content="Habilidades" href="#skills"/>
                <ButtonNavigation content="Curriculum" href="#skills" hasBg />
            </div>
        </section>
    )
}