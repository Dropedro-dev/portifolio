import Link from "next/link";

type Props = {
    href: string;
    content: string;
}

export const NavItem = ({href, content}: Props) => {

    return (
        <li className="flex-1">
            <Link 
                href={href}
                className="lg:px-5"
            >{content}</Link>
        </li>
    )
}