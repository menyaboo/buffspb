import {News} from "@/app/_types/news";
import Link from "next/link";
import {Poster} from "@/app/_types/poster";
import {prefix} from "@/app/global";

type Props = {
  info: Array<News> | Array<Poster>
  href: string
}

export const MegaMenu = ({info, href}: Props):JSX.Element => {

  return (
    <div className={'mega-menu'}>
      <div className={'content container mx-auto'}>
        <div className={'menu links'}>
          {info?.slice(2, 6).map((el) => (
            <Link
              key={el.id}
              href={`/${href}/${el.id}`}>
              {el.name || el.title}
            </Link>
          ))}
        </div>
        <div className={'media-box'}>
          {info?.slice(0, 2).map((el) => (
            <div key={el.id} className={'media-box_card'}>
              <Link href={`/${href}/${el.id}`} style={{backgroundImage: `url('${prefix}/img/posters/${el.photo}')`}} className={'media-box_img'}/>
              <div className={'links'}>
                <Link href={`/${href}/${el.id}`}>{el.name || el.title}</Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}