"use client"
import Image from "next/image";
import Logo from "@/public/img/buff-logo.png";
import Link from "next/link";
import {useState} from "react";
import {NavLink} from "@/app/_types/navLink";
import {MdOutlineKeyboardArrowDown} from "react-icons/md";
import {News} from "@/app/_types/news";
import {MegaMenu} from "@/app/_components/TheNavbar/MegaMenu";
import {Role} from "@/app/_types/role";
import {TheaterPeople} from "@/app/_types/theaterPeople";
import {Poster} from "@/app/_types/poster";

type Props = {
  navLinks: Array<NavLink>
  news: Array<News>
  posters: Array<Poster>
  role: Array<Role>
  people: Array<TheaterPeople>
}

export const Navbar = ({navLinks, news, posters, role, people}: Props): JSX.Element => {
  const [isHover, setIsHover] = useState(false)
  const [infoMegaMenu, setInfoMegaMenu] = useState<Array<News> | Array<Poster> | Array<TheaterPeople>>(news)
  const [href, setHref] = useState('')
  const mouseEnter = (link: NavLink) => {
    if (!link.menu)
      return mouseLeave()

    switch(link.menu) {
      case 'news':
        setInfoMegaMenu(news)
        setHref('news')
        break
      case 'posters':
        setInfoMegaMenu(posters)
        setHref('afisha')
        break
      case 'theater-people':
        setInfoMegaMenu(people)
        setHref('theater-people')
        break
      default:
        mouseLeave()
        break
    }

    setIsHover(true)
  }
  const mouseLeave = () => setIsHover(false)

  return (
    <header className={'header'} onMouseLeave={mouseLeave}>
      <div className={'container mx-auto header-body'}>
        <div className={'logo'}>
          <Link href={'/'}><Image alt={"logo"} src={Logo}/></Link>
        </div>
        <nav className={'navbar links'}>
          {navLinks?.map((link: NavLink) => (
            <Link
              className={'flex items-center'}
              key={link.id}
              onMouseEnter={() => mouseEnter(link)}
              href={link.href}>
              {link.name}
              {link.menu ? <MdOutlineKeyboardArrowDown className={'ml-2'}/> : null}
            </Link>
          ))}
        </nav>
        <div className={'header-search'}>
        </div>
      </div>
      <div hidden={!isHover}>
        <MegaMenu role={role} href={href} info={infoMegaMenu}/>
      </div>
    </header>
  )
}