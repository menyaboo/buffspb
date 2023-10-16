import {OnePoster} from "@/app/_components/Afisha/Posters/OnePoster";
import {Poster} from "@/app/_types/poster";
import {getAllPosters} from "@/app/_services/getPosters";
import {Scene} from "@/app/_types/scene";
import {getAllScenes} from "@/app/_services/getScenes";

export const revalidate: number = 10;

export const Posters = async ():Promise<JSX.Element> => {
  const posters: Array<Poster> = await getAllPosters();
  const scenes: Array<Scene> = await getAllScenes();

  return (
    <div className={'afisha-posters container mx-auto'}>
      <div className={'name-section'}>
        <h1 className={'title'}>Афиша</h1>
      </div>
      <div className={'posters'}>
        {posters.map((poster: Poster) => (<OnePoster key={poster.id} poster={poster} scenes={scenes}/>))}
      </div>
    </div>
  )
}