import Link from "next/link"
type Props = {
    href: string;
    content: string;
    hasBg?: boolean;
}
export const ButtonNavigation = ({content, href, hasBg}: Props) => {
    return (
        <Link
            href={href}
            className={`py-2 px-5 rounded-md cursor-pointer font-bold
            ${hasBg ? 'bg-gradient-to-r from-[#F4A261] to-[#bd5805] text-[#E6E8EA]' : 'border-solid border-2 border-[#F4A261] text-[#F4A261]'} `}
        >
            {content}
        </Link>
    )
}