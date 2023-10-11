import {getAllPosters} from "@/app/_services/getPosters";
import {Poster} from "@/app/_types/poster";
import {Slider} from "./Slider"

export const revalidate: number = 10;

export const HomeSlider = async ():Promise<JSX.Element> => {
  const posters: Array<Poster> = await getAllPosters();

  return (
    <Slider posters={posters} />
  );
}
