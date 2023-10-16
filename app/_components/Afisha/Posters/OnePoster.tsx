import Link from "next/link";
import {Poster} from "@/app/_types/poster";
import {Scene} from "@/app/_types/scene";
import Image from "next/image";
import pushkinCard from '@/public/img/Пушкинская-карта.png'
import {prefix} from "@/app/global";

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
    <div className={'poster'}>
      <div className={'poster-date'}>
        <span className={'date'}>{getDate(poster.date)}</span>
        <span className={'time'}>{getTime(poster.date, scenes[--poster.sceneId].name)}</span>
      </div>
      <div className={'poster-info'}>
        <Link href={`/afisha/${poster.id}`} style={{backgroundImage: `url(${prefix}/img/posters/${poster.photo})`}} className={'poster-img'}></Link>
        <div className={'info'}>
          <div className={'info-description'}>
            <Link href={`/afisha/${poster.id}`}><h1 className={'title-second'}>{poster.title}</h1></Link>
            <p className={'foreground-second'}>{poster.author}</p>
          </div>
          <div className={'poster-buttons'}>
            <Link className={'btn-accent'} href={`/afisha/${poster.id}`}>Купить билет</Link>
            <Link className={'btn-accent'} href={`/afisha/${poster.id}`}>Подробнее</Link>
          </div>
          {
            poster.isPushkinCard ?
              <div className={'pushkin-card'}>
                <Image width={180} height={150} src={pushkinCard} alt={'pushkin-card'}/>
              </div> : null
          }
        </div>
      </div>
    </div>
  )
}