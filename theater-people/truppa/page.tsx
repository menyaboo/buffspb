import {TheHeader} from "@/app/_components/TheNavbar/TheHeader";
import {TheFooter} from "@/app/_components/TheFooter";
import {PeopleCard} from "@/app/_components/TheaterPeople/PeopleCard";

export default function PageTruppa():JSX.Element {

  return (
    <main>
      <TheHeader/>
      <PeopleCard/>
      <TheFooter/>
    </main>
  )
}