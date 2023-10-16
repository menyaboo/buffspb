import {News} from "@/app/_types/news";
import Link from "next/link";
import {prefix} from "@/app/global";

function getDate(date: Date):any {
  const data = new Date(date)
  return `${data.getFullYear()}.${data.getMonth()}.${data.getDate()}`
}

type Props = {
  news: News
}

export const OneNews = ({news}: Props):JSX.Element => {


  return (
    <div className={'card'}>
      <div className={'card-body'}>
        <Link href={'/news/' + news.id.toString()} style={{backgroundImage: `url('${prefix}/img/posters/${news.photo}')`}} className={'news-img'}/>
        <div className={'card-info'}>
          <Link href={'/news/' + news.id.toString()} className={'title-second'}>
            {news.name}
          </Link>
          <div className={'foreground-second'}>
            {news.description}
          </div>
          <div className={'card-time'}>
            <p className={'foreground-second'}>{getDate(news.date)}</p>
          </div>
        </div>
      </div>
    </div>
  )
}