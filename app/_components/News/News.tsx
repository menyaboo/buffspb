import {getAllNews} from "@/app/_services/getNews";
import {OneNews} from "@/app/_components/News/OneNews";
// @ts-ignore
import {News} from "@/app/_types/news";

export const revalidate = 10

// @ts-ignore
export const News = async ():Promise<JSX.Element> => {
  const news:Array<News> = await getAllNews()

  return (
    <div className={'news container mx-auto'}>
      <div className={'mb-[25px]'}>
        <h1 className={'title'}>Новости</h1>
      </div>
      <div className={'news-cards'}>
        {news.map((el) => (
          <OneNews key={el.id} news={el}/>
        ))}
      </div>
    </div>
  )
}