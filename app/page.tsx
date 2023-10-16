import {TheHeader} from "@/app/_components/TheNavbar/TheHeader";
import {HomeSlider} from "@/app/_components/Home/Slider/HomeSlider";
import {HomePoster} from "@/app/_components/Home/Posters/HomePoster";
import {HomeNews} from "@/app/_components/Home/News/HomeNews";
import {TheFooter} from "@/app/_components/TheFooter";
import {TheInfo} from "@/app/_components/TheInfo";

export default function Home(): JSX.Element {
  return (
    <main>
      <TheHeader/>
      <HomeSlider/>
      <HomePoster/>
      <HomeNews/>
      <TheFooter/>
    </main>
  )
}
