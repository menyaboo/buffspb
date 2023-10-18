import {Navbar} from "@/app/_components/TheNavbar/Navbar";
import {getNavLinks} from "@/app/_services/getNavLinks";
import {NavLink} from "@/app/_types/navLink";
import {News} from "@/app/_types/news";
import {getAllNews} from "@/app/_services/getNews";
import {getAllPosters} from "@/app/_services/getPosters";
import {Role} from "@/app/_types/role";
import {getAllRole} from "@/app/_services/getRole";
import {TheaterPeople} from "@/app/_types/theaterPeople";
import {getAllTheaterPeople} from "@/app/_services/getTheaterPeople";
import {Poster} from "@/app/_types/poster";

export const revalidate: number = 10;

export const TheHeader = async (): Promise<JSX.Element> => {
  const navLinks: Array<NavLink> = await getNavLinks()
  const news: Array<News> = await getAllNews()
  const posters: Array<Poster> = await getAllPosters()
  const role: Array<Role> = await getAllRole()
  const people: Array<TheaterPeople> = await getAllTheaterPeople()

  return (
    <section id={'header-wrapper'}>
      <Navbar people={people} role={role} posters={posters} news={news} navLinks={navLinks}/>
      <div className={'header-margin-top'}></div>
    </section>
  )
}