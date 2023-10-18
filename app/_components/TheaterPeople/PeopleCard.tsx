import {TheaterPeople} from "@/app/_types/theaterPeople";
import {getTheaterPeopleByGrope} from "@/app/_services/getTheaterPeople";
import {prefix} from "@/app/global";
import Link from "next/link";

export const revalidate = 10

export const PeopleCard = async ():Promise<JSX.Element> => {
  const peoples:Array<TheaterPeople> = await getTheaterPeopleByGrope("truppa")

  return (
    <div className={'peoples container mx-auto'}>
      <div className={'mb-[25px]'}>
        <h1 className={'title'}>Труппа</h1>
      </div>
      <div className={'peoples-cards'}>
        {peoples.map(people => (
          <Link key={people.id} style={{backgroundImage: `url(${prefix}/img/theater-people/${people.photo})`}} className={`people-card`} href={`truppa/${people.id}`}>
            <span className={'people-name'}>
              {people.name}
            </span>
          </Link>
        ))}
      </div>
    </div>
  )
}