import { IoMenu } from "react-icons/io5";
import { FaGithubSquare,FaLinkedin } from "react-icons/fa";



const Header =()=> {
    return (
        <header className="container flex">
            <div className="flex flex-1 mx-auto items-center justify-between max-w-2xl py-4">
                <div className="text-2xl cursor-pointer ml-3"><IoMenu /></div>
                <h2 className="text-2xl font-bold">Portifólio</h2>
                <ul className="flex gap-3 text-xl items-center mr-3">
                    <li><a href=""><FaGithubSquare /></a></li>
                    <li><a href=""><FaLinkedin /></a></li>
                </ul>
            </div>
        </header>
    )
}

export default Header;