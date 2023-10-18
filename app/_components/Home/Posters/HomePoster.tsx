import Link from "next/link";
import {OnePoster} from "@/app/_components/Home/Posters/OnePoster";
import {Poster} from "@/app/_types/poster";
import {getAllPosters} from "@/app/_services/getPosters";
import {Scene} from "@/app/_types/scene";
import {getAllScenes} from "@/app/_services/getScenes";
import { BsArrowRight} from "react-icons/bs";

export const revalidate: number = 10;

export const HomePoster = async ():Promise<JSX.Element> => {
  const posters: Array<Poster> = await getAllPosters();
  const scenes: Array<Scene> = await getAllScenes();

  return (
    <div className={'home-posters container'}>
      <div className={'name-section'}>
        <h1 className={'title'}>Афиша</h1>
        <div className={'links'}>
          <Link style={{fontStyle: "italic"}} className={'flex link-arrow'} href={"/"}>
            ПОСМОТРЕТЬ ВСЕ <BsArrowRight className={'arrow-right anim-ml'}/>
          </Link>
        </div>
      </div>
      <div className={'posters'}>
        {posters?.map((poster: Poster) => (<OnePoster key={poster.id} poster={poster} scenes={scenes}/>))}
      </div>
    </div>
  )
}