import Image from 'next/image'
import {TheHeader} from "@/app/_components/TheNavbar/TheHeader";
import {HomeSlider} from "@/app/_components/HomeSlider/HomeSlider";

export default function Home() {
  return (
    <main>
      <TheHeader/>
      <HomeSlider/>
    </main>
  )
}
