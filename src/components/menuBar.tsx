type Props = {
    handleMenu: () => void;
}
const MenuBar = ({ handleMenu}: Props) => {
    return (
        <aside 
            className="h-screen fixed overflow-hidden z-30 bg-black/90"
            onClick={handleMenu}
        >
            <nav 
                className="w-screen flex justify-center bg-red-500"
                onClick={(e) => e.stopPropagation()}>
                <ul className="text-center">
                    <li>Home</li>
                    <li>About</li>
                    <li>Skills</li>
                    <li>Projects</li>
                </ul>
            </nav>
        </aside>
        
    )
}
export default MenuBar;