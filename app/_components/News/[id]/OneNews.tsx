import {prefix} from "@/app/global";
import {News} from "@/app/_types/news";

type Props = {
  news: News
}

export const OneNews = ({news}: Props) => {
  return (
    <div className={'news-page container mx-auto'}>
      <h1 className={'title mb-[25px]'}>{news.name}</h1>
      <div className={'news-body'}>
        <div style={{backgroundImage: `url('${prefix}/img/posters/${news.photo}')`}} className={'news-img'}></div>
        <div className={'news-info foreground-second'}>
          {news.description}
        </div>
      </div>
    </div>
  )
}