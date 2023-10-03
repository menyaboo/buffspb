"use client"
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/scrollbar';
import {Scrollbar, Autoplay} from 'swiper/modules';
import {Posters} from "@/app/_types/posters";
import Link from "next/link";

type Props = {
  posters: Array<Posters>
}

export const Slider =  ({posters}: Props):JSX.Element => {

  return (
    <Swiper
      scrollbar={{
        hide: true,
      }}
      modules={[Scrollbar, Autoplay]}
      className="home-slider"
      loop={true}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false
      }}
      speed={800}
    >
      {posters.map((poster: Posters) => (
        <SwiperSlide className={'swiper-slide'} key={poster.id}>
          <div className={'slide'}
               style={{background: `url(/img/posters/${poster.photo}) top no-repeat`, backgroundSize: "cover"}}>
            <div className={'slide-wrapper'}>
              <div className={'container mx-auto slide-body'}>
                <div className={'info'}>
                  <h1 className={'title'}>{poster.title}</h1>
                  <p>{poster.author}</p>
                </div>
                <Link href={'#'} className={'btn-accent'}>Купить билет</Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
