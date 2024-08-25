import ItemProject from "@/components/itemProject";
const Projects = () => {
    return(
        <section className="container flex flex-col items-center my-4">
            <h1 className="text-2xl font-bold my-4">Meus Projetos</h1>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl px-4 ">
                <li><ItemProject /></li>
                <li><ItemProject /></li> 
                <li><ItemProject /></li>
                <li><ItemProject /></li>  
            </ul>
        </section>
    )
}

export default Projects;