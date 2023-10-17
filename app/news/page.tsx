import {TheHeader} from "@/app/_components/TheNavbar/TheHeader";
import {TheFooter} from "@/app/_components/TheFooter";
import {PostersNews} from "@/app/_components/News/PostersNews";

export default function Page():JSX.Element {

  return (
    <main>
      <TheHeader/>
      <PostersNews/>
      <TheFooter/>
    </main>
  )
}