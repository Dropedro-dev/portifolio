import Link from "next/link";

type Props = {
    href: string;
    content: string;
}

export const NavItem = ({ href, content }: Props) => {
  return (
    <li className="flex-1 flex justify-center items-center lg:gap-x-3 font-bold hover:border-[#4A708B] relative group">
      <Link href={href} className="lg:px-5 relative">
        {content}
        <span className="absolute left-0 -bottom-1 w-0 h-[4px] lg:h-[2px] bg-[#4A708B] transition-all duration-300 group-hover:w-full"></span>
      </Link>
    </li>
  );
};