import {Poster} from "@/app/_types/poster";
import {getAllPosters, getOnePoster} from "@/app/_services/getPosters";
import {TheHeader} from "@/app/_components/TheNavbar/TheHeader";
import {TheFooter} from "@/app/_components/TheFooter";
import {OnePoster} from "@/app/_components/Afisha/[id]/OnePoster";
import {Scene} from "@/app/_types/scene";
import {getAllScenes} from "@/app/_services/getScenes";

interface Params {
  params: {
    id: string
  }
}

export default async function PageAfisha({params: {id}}: Params):Promise<JSX.Element> {
  const poster: Poster = await getOnePoster(+id)
  const scenes: Array<Scene> = await getAllScenes()

  return (
    <main>
      <TheHeader/>
      <OnePoster poster={poster} scenes={scenes}/>
      <TheFooter/>
    </main>
  )
}