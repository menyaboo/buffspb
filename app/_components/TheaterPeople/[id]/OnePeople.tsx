import {TheaterPeople} from "@/app/_types/theaterPeople";
import Link from "next/link";
import {prefix} from "@/app/global";

type Props = {
  people: TheaterPeople
}

export const OnePeople = ({people}: Props):JSX.Element => {
  return (
    <div className={'people container mx-auto'}>
      <h1 className={'title'}>{people.name}</h1>
      <div className={'people-info'}>
        <div key={people.id} style={{backgroundImage: `url(${prefix}/img/theater-people/${people.photo})`}} className={`people-photo`}></div>
        <p className={'people-description foreground-second'}>
          {people.description}
        </p>
      </div>
    </div>
  )
}