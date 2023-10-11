import {Navbar} from "@/app/_components/TheNavbar/Navbar";
import {getNavLinks} from "@/app/_services/getNavLinks";
import {NavLink} from "@/app/_types/navLink";

export const revalidate: number = 10;


export const TheHeader = async (): Promise<JSX.Element> => {
  const navLinks: Array<NavLink> = await getNavLinks()

  return (
    <section id={'header-wrapper'}>
      <Navbar navLinks={navLinks}/>
      <div className={'header-margin-top'}></div>
    </section>
  )
}