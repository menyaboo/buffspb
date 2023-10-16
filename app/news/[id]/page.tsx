import {News} from "@/app/_types/news";
import {getOneNews} from "@/app/_services/getNews";
import {TheHeader} from "@/app/_components/TheNavbar/TheHeader";
import {TheFooter} from "@/app/_components/TheFooter";
import {OneNews} from "@/app/_components/News/[id]/OneNews";


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
      <OneNews news={news}/>
      <TheFooter/>
    </main>
  )
}