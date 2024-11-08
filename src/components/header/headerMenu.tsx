'use client'
import { useState } from "react"
import { Logo } from "../logo/logo"
import { ButtonMenu } from "../nav/buttonMenu"
import { NavMenu } from "../nav/navMenu"
import { NavAside } from "../nav/navAside"

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
            {!showMenu &&
              <div className="hidden lg:flex">
                <NavMenu />
              </div>
            }
            {showMenu &&
              <NavAside closeMenu={closeMenu}/>
            }
                          
      </header>
    )
}