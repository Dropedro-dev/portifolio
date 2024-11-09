import { NavItem } from "./navItem"

export const NavMenu = () => {
    return (
        <nav className="">
            <ul className="flex flex-col lg:flex-row gap-y-3">
                <NavItem href="#home" content="home" />
                <NavItem href="#about" content="about" />
                <NavItem href="#home" content="projects" />
                <NavItem href="#home" content="Contact" />
            </ul>
        </nav>
    )
}