import {Navbar} from "@/app/_components/TheNavbar/Navbar";
import {getNavLinks} from "@/app/_services/getNavLinks";
import {NavLink} from "@/app/_types/navLink";
import {News} from "@/app/_types/news";
import {getAllNews} from "@/app/_services/getNews";
import {getAllPosters} from "@/app/_services/getPosters";

export const revalidate: number = 10;

export const TheHeader = async (): Promise<JSX.Element> => {
  const navLinks: Array<NavLink> = await getNavLinks()
  const news: Array<News> = await getAllNews()
  const poster: Array<News> = await getAllPosters()

  return (
    <section id={'header-wrapper'}>
      <Navbar posters={poster} news={news} navLinks={navLinks}/>
      <div className={'header-margin-top'}></div>
    </section>
  )
}