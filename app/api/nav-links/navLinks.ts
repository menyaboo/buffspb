import {NavLink} from "@/app/_types/navLink";

export const navLinks: Array<NavLink> = [
  {
    id: 1,
    name: "Афиша",
    href: "/afisha",
    canActiveMenu: false,
  },
  {
    id: 2,
    name: "Новости",
    href: "/",
    canActiveMenu: true,
  },
  {
    id: 3,
    name: "Билеты",
    href: "/",
    canActiveMenu: true,
  },
  {
    id: 4,
    name: "О театре",
    href: "/",
    canActiveMenu: false,
  },
]