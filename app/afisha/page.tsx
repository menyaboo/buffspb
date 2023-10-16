import {TheHeader} from "@/app/_components/TheNavbar/TheHeader";
import {TheFooter} from "@/app/_components/TheFooter";
import {TheInfo} from "@/app/_components/TheInfo";
import {Calendar} from "@/app/_components/Afisha/Сalendar";
import {Posters} from "@/app/_components/Afisha/Posters/Posters";
import {Filter} from "@/app/_components/Afisha/Filter";

export default function Page(): JSX.Element {
  return (
    <main>
      <TheHeader/>
      <Calendar/>
      <Filter/>
      <Posters/>
      <TheFooter/>
    </main>
  )
}
