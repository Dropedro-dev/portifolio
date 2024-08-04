import { FaGithubSquare, FaLinkedin} from "react-icons/fa";

const Intro =()=> {
    return (
        <section className="container">
            <div className={`flex flex-1 flex-col items-center justify-center mx-auto max-w-2xl h-screen bg-['assets\image\bgimg.jpeg']`}>
                <span>PORTIFÒLIO</span>
                <h1 className="flex flex-col items-center text-4xl my-3 font-bold">Pedro Cunha!</h1>
                <h2 className="font-bold my-4">Programador front-end iniciante</h2>
                <ul className="flex gap-2 text-3xl mt-1">
                    <li><FaGithubSquare /></li>
                    <li><FaLinkedin /></li>
                </ul>
            </div>
        </section>
    )
}

export default Intro;