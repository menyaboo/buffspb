"use client"
import Image from "next/image";
import Logo from "@/public/img/buff-logo.png";
import Link from "next/link";
import {useState} from "react";
import {NavLinks} from "@/app/_types/navLinks";

type Props = {
  navLinks: Array<NavLinks>
}

export const Navbar = ({navLinks}: Props): JSX.Element => {
  const [isHover, setIsHover] = useState(false);
  const mouseEnter = () => setIsHover(true)
  const mouseLeave = () => setIsHover(false)

  return (
    <header className={'header'} onMouseLeave={mouseLeave}>
      <div className={'container mx-auto header-body'}>
        <div className={'logo'}>
          <Image alt={"logo"} src={Logo}/>
        </div>
        <nav className={'navbar'}>
          {navLinks.map((link: NavLinks) => (
            <Link
              key={link.id}
              onMouseEnter={link.canActiveMenu ? mouseEnter : mouseLeave}
              href={link.href}>{link.name}</Link>
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