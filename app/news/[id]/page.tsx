import {News} from "@/app/_types/news";
import {getOneNews} from "@/app/_services/getNews";
import {TheHeader} from "@/app/_components/TheNavbar/TheHeader";
import {TheFooter} from "@/app/_components/TheFooter";
import {OneNews} from "@/app/_components/News/[id]/OneNews";
import {Poster} from "@/app/_types/poster";
import {getAllPosters} from "@/app/_services/getPosters";

interface Params {
  params: {
    id: string
  }
}

export async function getStaticPaths() {
  const news: Array<News> = await getAllPosters()

  return news.map((_news) => ({
    slug: _news.id.toString(),
  }))
}

export default async function PageNews({params: {id}}: Params):Promise<JSX.Element> {
  const news: News = await getOneNews(+id)

  return (
    <main>
      <TheHeader/>
      <OneNews news={news}/>
      <TheFooter/>
    </main>
  )
}