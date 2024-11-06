'use client';
import { IoMenu } from "react-icons/io5";

export const ButtonMenu = () => {
    const handleAside = () => {
        window.alert('funcionou')
    }
    return (
        <div 
            className="text-4xl"
            onClick={handleAside}
        >
            <IoMenu />
        </div>

    )
}