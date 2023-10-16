import {News} from "@/app/_types/news";
import {getOneNews} from "@/app/_services/getNews";
import {TheHeader} from "@/app/_components/TheNavbar/TheHeader";
import {TheFooter} from "@/app/_components/TheFooter";


interface Params {
  params: {
    id: string
  }
}

export default async function Page({params: {id}}: Params):Promise<JSX.Element> {
  const news: News = await getOneNews(+id)

  return (
    <main>
      <TheHeader/>
      <div className={'news-page container mx-auto'}>
        <h1 className={'title mb-[25px]'}>{news.name}</h1>
        <div className={'news-body'}>
          <div style={{backgroundImage: `url('${process.env.HOST_NAME}/img/posters/${news.photo}')`}} className={'news-img'}></div>
          <div className={'news-info foreground-second'}>
            {news.description}
          </div>
        </div>
      </div>
      <TheFooter/>
    </main>
  )
}