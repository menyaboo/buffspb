"use client"
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/navigation';
import {Scrollbar, Autoplay, Navigation} from 'swiper/modules';
import {prefix} from "@/app/global";

export const Slider =  ():JSX.Element => {
  const images:Array<string> = [
    'h7w2LkSf1Og.jpg',
    'U2skRr1GPpg.jpg',
    'UgB4l8nr7jc.jpg',
    'unyYdgqu6lE.jpg',
    'wLs2kLjyg_c.jpg',
    'x06lbrEN3i8.jpg',
    'x9zH4L2gOD8.jpg',
  ]

  return (
    <Swiper
      scrollbar={{
        hide: true,
      }}
      modules={[Scrollbar, Autoplay, Navigation]}
      className="afisha-poster-picture_slider"
      navigation={true}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false
      }}
      speed={800}
    >
      {images?.map((image:string, index:number) => (
        <SwiperSlide key={index} className={'slide'}>
          <div className={'picture'} style={{backgroundImage: `url(${prefix}/img/posters/${image})`}}></div>
        </SwiperSlide>
      ))}

    </Swiper>
  );
}
