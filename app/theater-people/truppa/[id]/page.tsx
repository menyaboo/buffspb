import {TheHeader} from "@/app/_components/TheNavbar/TheHeader";
import {TheFooter} from "@/app/_components/TheFooter";
import {OnePeople} from "@/app/_components/TheaterPeople/[id]/OnePeople";
import {TheaterPeople} from "@/app/_types/theaterPeople";
import {getOneTheaterPeople} from "@/app/_services/getTheaterPeople";

interface Params {
  params: {
    id: string
  }
}

export default async function DynamicPageTruppa({params: {id}}: Params):Promise<JSX.Element> {
  const people: TheaterPeople = await getOneTheaterPeople(+id)

  return (
    <main>
      <TheHeader/>
      <OnePeople people={people}/>
      <TheFooter/>
    </main>
  )
}