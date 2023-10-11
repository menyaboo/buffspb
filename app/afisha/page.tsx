import {TheHeader} from "@/app/_components/TheNavbar/TheHeader";
import {TheFooter} from "@/app/_components/TheFooter";
import {TheInfo} from "@/app/_components/TheInfo";
import {Calendar} from "@/app/_components/Afisha/Сalendar";
import {Afisha} from "@/app/_components/Afisha/Poster/Afisha";
import {Filter} from "@/app/_components/Afisha/Filter";

export default function Performance(): JSX.Element {
  return (
    <main>
      <TheHeader/>
      <Calendar/>
      <Afisha/>
      <TheFooter/>
      <TheInfo/>
    </main>
  )
}
