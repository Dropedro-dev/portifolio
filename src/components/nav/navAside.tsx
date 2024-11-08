import { Logo } from "../logo/logo";
import { NavMenu } from "./navMenu";
import { GrAdd } from "react-icons/gr";

type Props = {
    closeMenu: () => void;
}
export const NavAside = ({closeMenu}: Props) => {

    return (
        <aside className="fixed inset-0 bg-[#162934]">
            <div className="flex justify-between pt-3 py-3">
            <div className="ml-3">
              <Logo  />
            </div> 
                <div 
                    className="rotate-45 text-4xl bg-transparent"
                    onClick={closeMenu}
                >
                    <GrAdd />
                </div>
            </div>
            <div className="w-full h-full flex justify-center text-2xl">
                <NavMenu />
            </div>
        </aside>
    )
}