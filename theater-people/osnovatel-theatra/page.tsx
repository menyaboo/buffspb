import {TheFooter} from "@/app/_components/TheFooter";
import {TheHeader} from "@/app/_components/TheNavbar/TheHeader";
import {OnePeople} from "@/app/_components/TheaterPeople/[id]/OnePeople";
import {getOneTheaterPeople} from "@/app/_services/getTheaterPeople";

export const revalidate = 10;

export default async function Page():Promise<JSX.Element> {
  const people = await getOneTheaterPeople(1);

   return (
     <main>
       <TheHeader/>
       <OnePeople people={people}/>
       <TheFooter/>
     </main>
   )
}