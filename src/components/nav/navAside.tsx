import { Logo } from "../logo/logo";
import { NavMenu } from "./navMenu";
import { ButtonClose } from "./buttonClose";

type Props = {
    closeMenu: () => void;
}
export const NavAside = ({closeMenu}: Props) => {

    return (
        <aside className="fixed inset-0 bg-red-500">
            <div className="flex justify-between pt-3 py-3">
                <Logo />
                <ButtonClose closeMenu={closeMenu}/>
            </div>
            <div className="w-full h-full flex justify-center">
                <NavMenu />
            </div>
        </aside>
    )
}