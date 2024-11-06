import Image from 'next/image'
import LogoImage from '../../assets/Logo.png'

export const Logo = () => {

    return (
        <Image 
            src={LogoImage} 
            alt="Pedro Cunha"
            className='w-10 h-auto'
        />
    )
} 