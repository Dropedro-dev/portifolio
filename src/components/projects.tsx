import ItemProject from "@/subComponents/itemProject";
const Projects = () => {
    return(
        <section className="container flex flex-col items-center">
            <h1 className="text-2xl font-bold">Meus Projetos</h1>
            <div className="max-w-2xl px-4 ">
                <ItemProject />
            </div>
        </section>
    )
}

export default Projects;