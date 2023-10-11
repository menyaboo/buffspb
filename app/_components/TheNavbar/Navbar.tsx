"use client"
import Image from "next/image";
import Logo from "@/public/img/buff-logo.png";
import Link from "next/link";
import {useState} from "react";
import {NavLink} from "@/app/_types/navLink";
import {MdOutlineKeyboardArrowDown} from "react-icons/md";

type Props = {
  navLinks: Array<NavLink>
}

export const Navbar = ({navLinks}: Props): JSX.Element => {
  const [isHover, setIsHover] = useState(false);
  const mouseEnter = () => setIsHover(true)
  const mouseLeave = () => setIsHover(false)

  return (
    <header className={'header'} onMouseLeave={mouseLeave}>
      <div className={'container mx-auto header-body'}>
        <div className={'logo'}>
          <Link href={'/'}><Image alt={"logo"} src={Logo}/></Link>
        </div>
        <nav className={'navbar links'}>
          {navLinks.map((link: NavLink) => (
            <Link
              className={'flex items-center'}
              key={link.id}
              onMouseEnter={link.canActiveMenu ? mouseEnter : mouseLeave}
              href={link.href}>
              {link.name}
              {link.canActiveMenu ? <MdOutlineKeyboardArrowDown className={'ml-2'}/> : null}
            </Link>
          ))}
        </nav>
        <div className={'header-search'}>
        </div>
      </div>
      <div hidden={!isHover} className={'mega-menu'}>
        <div className={'content'}>
          <h1 className={'title'}>Менюшка</h1>
        </div>
      </div>
    </header>
  )
}