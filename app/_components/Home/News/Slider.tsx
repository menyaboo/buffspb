"use client"
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/scrollbar';
import {Autoplay, FreeMode} from 'swiper/modules';
import {News} from "@/app/_types/news";

type Props = {
  news: Array<News>
}

function getDate(date: Date):any {
  const data = new Date(date)
  return `${data.getFullYear()}.${data.getMonth()}.${data.getDate()}`
}

export const Slider =  ({news}: Props):JSX.Element => {

  return (
    <Swiper
      slidesPerView={3}
      spaceBetween={30}
      freeMode={true}
      modules={[FreeMode, Autoplay]}
      autoplay={{
        delay: 3500,
        disableOnInteraction: false
      }}
      speed={1000}
      className="slider"
    >
      {news.map((news) =>
        <SwiperSlide style={{cursor: "pointer"}} key={news.id}>
          <div className={'slider-item'}>
            <div className={'item-img'} style={{background: `url(/img/posters/${news.photo}) center center no-repeat`}}></div>
            <p className={'date'}>{getDate(news.date)}</p>
            <h1 className={'name'}>{news.name}</h1>
            <p className={'description'}>{news.description}</p>
          </div>
        </SwiperSlide>
      )}
    </Swiper>
  );
}
