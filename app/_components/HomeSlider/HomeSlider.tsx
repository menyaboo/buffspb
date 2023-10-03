import {getAllPosters} from "@/app/_services/getPosters";
import {Posters} from "@/app/_types/posters";
import {Slider} from "./Slider"

export const revalidate: number = 10;

export const HomeSlider = async ():Promise<JSX.Element> => {
  const posters: Array<Posters> = await getAllPosters();

  return (
    <Slider posters={posters} />
  );
}
