'use client'
import { useState } from "react"
import { Logo } from "../logo/logo"
import { ButtonMenu } from "../nav/buttonMenu"

export const HeaderMenu = () => {
    const [showMenu, setShowMenu] = useState<boolean>(false);

    const openMenu = () => setShowMenu(true);
    const closeMenu =() => setShowMenu(false);

    return (
        <header className="max-w-2xl mx-auto flex justify-between items-center bg-transparent">
        <div className="ml-3">
          <Logo  />
        </div> 
        <div 
            className="flex lg:hidden items-center"
            onClick={openMenu}
        >
          <ButtonMenu />

        </div>  
      </header>
    )
}