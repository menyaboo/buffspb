import Link from "next/link";
import {Poster} from "@/app/_types/poster";
import {Scene} from "@/app/_types/scene";

function getDate(date: Date): string | undefined {
  const data = new Date(date)
  const days:Array<string> =["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"];
  const months:Array<string> =["января", "февраля", "марта", "апреля",
    "мая", "июня", "июля", "августа", "сентября", "октября", "ноября", "декабря"];
  return `${data.getDate()} ${months[data.getMonth()]}, ${days[data.getDay()]}`
}

function getTime(date: Date, scene: string): string | undefined {
  const data = new Date(date)
  const hour: string = data.getHours() < 10 ? '0' + data.getHours().toString() : data.getHours().toString()
  const minute: string = data.getMinutes() < 10 ? '0' + data.getMinutes().toString() : data.getMinutes().toString()
  return `${hour}:${minute} | ${scene}`
}

type Props = {
  poster: Poster
  scenes: Array<Scene>
}

export const OnePoster = ({poster, scenes}: Props):JSX.Element => {
  return (
    <div  className={`poster-card xl`}>
      <div className={'poster-card_wrapper'}>
        <div className={'poster-img'}
             style={{background: `url(/img/posters/${poster.photo}) center center no-repeat`}}>
        </div>
        <div className={'poster-info'}>
          <div className={'poster-info_date'}>
            <span className={'date'}>{getDate(poster.date)}</span>
            <span className={'time'}>{getTime(poster.date, scenes[--poster.sceneId].name)}</span>
          </div>
          <div className={'poster-info_name'}>
            <h1 className={'name'}>{poster.title}</h1>
            <p className={'author'}>{poster.author}</p>
          </div>
          <Link href={'/'} className={'btn-accent'}>
            Посмотреть
          </Link>
        </div>
      </div>
    </div>
  )
}