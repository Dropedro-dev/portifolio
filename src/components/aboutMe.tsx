const AboutMe = () => {
    return (
        <section className="container">
            <div className='flex flex-1 flex-col items-center justify-center mx-auto max-w-2xl py-10'>
                <h1 className="text-2xl font-bold">Sobre mim</h1>
                <div className="h-32 w-32 rounded-full bg-red-500 my-5"></div>
                <p className="text-center px-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ut ex erat.
                    Proin aliquet, tellus at consectetur egestas, enim metus hendrerit quam, sed semper
                    libero nisi id nisi. Aliquam lobortis commodo risus, non imperdiet felis hendrerit eu.
                    Integer aliquet, mauris sit amet consequat vestibulum, lacus lectus fringilla diam,
                    quis luctus lectus mi sed diam. Duis vel eleifend turpis, ac varius purus.
                    Etiam id magna vel diam luctus consequat eu id nisi. Phasellus vel consectetur tortor. 
                </p>
            </div>
        </section>
    )
}

export default AboutMe;