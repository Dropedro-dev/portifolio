'use client'

import { GrAdd } from "react-icons/gr";

type Props = {
    closeMenu: () => boolean;
}
export const ButtonClose = ({closeMenu}: Props) => {
    <button 
        className="rotate-45 text-4xl bg-transparent"
        onClick={closeMenu}
    >
        <GrAdd />
    </button>
}