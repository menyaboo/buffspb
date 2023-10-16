import Link from "next/link";
import {Poster} from "@/app/_types/poster";
import {Scene} from "@/app/_types/scene";
import {Slider} from "@/app/_components/Afisha/OnePoster/Slider";
import {DescriptionCard} from "@/app/_components/Afisha/OnePoster/DescriptionCard";
import {WorkCard} from "@/app/_components/Afisha/OnePoster/WorkCard";
import {ArtistCard} from "@/app/_components/Afisha/OnePoster/ArtistCard";

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
    <div className={'afisha-poster'}>
      <div className={'poster-title container mx-auto'}>
        <h1 className={'title'}>{poster.title}</h1>
        <h1 className={'foreground-second'}>{'Мюзикл М. Дунаевского по пьесе Г. Горина "Чума на оба ваши дома!"'}</h1>
      </div>
      <Slider />
      <div className={'poster-info container'}>
        <div className={'info-first'}>
          <div className={'flex'}>
            <div className={'info-first_card'}>
              <span className={'foreground-second'}>Продолжительность</span>
              <p>3 часа 45 минут</p>
            </div>
            <div className={'info-first_card'}>
              <span className={'foreground-second'}>Сцена</span>
              <p>{scenes[0].name}</p>
            </div>
            <div className={'info-first_card'}>
              <span className={'foreground-second'}>Категория</span>
              <p>18+</p>
            </div>
          </div>
          <Link href={'/'} className={'btn-accent'}>Купить билет</Link>
        </div>

        <div className={'cards'}>
          <DescriptionCard/>
          <WorkCard/>
          <ArtistCard/>
        </div>
      </div>
    </div>
  )
}