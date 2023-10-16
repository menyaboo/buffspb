import {Slider} from "./Slider"
import {getAllNews} from "@/app/_services/getNews";
import {News} from "@/app/_types/news";
import Link from "next/link";
import {BsArrowRight} from "react-icons/bs";

export const revalidate: number = 10;

export const HomeNews = async (): Promise<JSX.Element> => {
  const news: Array<News> = await getAllNews();

  return (
    <div className={'home-news container'}>
      <div className={'name-section'}>
        <h1 className={'title'}>Новости</h1>
        <div style={{fontStyle: "italic"}} className={'links'}>
          <Link className={'flex link-arrow'} href={"/news"}>
            ВСЕ НОВОСТИ <BsArrowRight className={'arrow-right anim-ml'}/>
          </Link>
        </div>
      </div>

      <Slider news={news}/>
    </div>
  );
}
