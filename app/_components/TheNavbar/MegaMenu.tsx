import {News} from "@/app/_types/news";
import Link from "next/link";
import {Poster} from "@/app/_types/poster";
import {prefix} from "@/app/global";
import {TheaterPeople} from "@/app/_types/theaterPeople";
import {Role} from "@/app/_types/role";

type Props = {
  info: Array<News> | Array<Poster> | Array<TheaterPeople>
  role: Array<Role>
  href: string
}

const image:Array<string> = ['201_Image_1580736384_IRSH.jpg', 'fIkmGKJICX4.jpg']

export const MegaMenu = ({info, href, role}: Props):JSX.Element => {
  if (href === "theater-people") {
    return (
      <div className={'mega-menu'}>
        <div className={'content container mx-auto'}>
          <div className={'menu links'}>
            <p className={'foreground-second'}>Добавим страницы на ссылки при разработке</p>
            {role?.slice(2).map((el) => (
              <Link
                key={el.id}
                href={`/`}>
                {el.grope}
              </Link>
            ))}
          </div>
          <div className={'media-box'}>
            {role?.slice(0, 2).map((el, index) => (
              <div key={el.id} className={'media-box_card'}>
                <Link
                  href={index === 0 ? `/${href}/osnovatel-theatra` : `/${href}/truppa`}
                  style={{
                    backgroundImage: `url('${prefix}/img/theater-people/${image[index]}')`,
                    backgroundPosition: "center"}}
                  className={'media-box_img'}
                />
                <div className={'links'}>
                  <Link href={`/${href}/${el.id}`}>{el.grope}</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  } else {
    return (
      <div className={'mega-menu'}>
        <div className={'content container mx-auto'}>
          <div className={'menu links'}>
            {info?.slice(2, 6).map((el) => (
              <Link
                key={el.id}
                href={`/${href}/${el.id}`}>
                {"title" in el ? el.title : el.name}
              </Link>
            ))}
          </div>
          <div className={'media-box'}>
            {info?.slice(0, 2).map((el) => (
              <div key={el.id} className={'media-box_card'}>
                <Link href={`/${href}/${el.id}`} style={{backgroundImage: `url('${prefix}/img/posters/${el.photo}')`}} className={'media-box_img'}/>
                <div className={'links'}>
                  <Link href={`/${href}/${el.id}`}>{"title" in el ? el.title : el.name}</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }
}