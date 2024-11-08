import { NavItem } from "./navItem"

export const NavMenu = () => {
    return (
        <nav className="">
            <ul className="flex flex-col lg:flex-row">
                <NavItem href="#home" content="home" />
                <NavItem href="#home" content="home" />
                <NavItem href="#home" content="home" />
            </ul>
        </nav>
    )
}