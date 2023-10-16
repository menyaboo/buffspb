'use client'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

export const Calendar = (): JSX.Element => {
  const days:Array<string> =["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"];
  const months:Array<Object> =[
    { month: "январь", amount: 31},
    { month: "февраль", amount: 28},
    { month: "март", amount: 31},
    { month: "апрель", amount: 30},
    { month: "май", amount: 31},
    { month: "июнь", amount: 30},
    { month: "июль", amount: 31},
    { month: "август", amount: 30},
    { month: "сентябрь", amount: 31},
    { month: "октябрь", amount: 30},
    { month: "ноябрь", amount: 31},
    { month: "декабрь", amount: 30},
  ];
  let date = new Date()
  let day = date.getDate()
  let dayIndex = date.getDay() - 1

  return (
    <div className={'container mx-auto'}>
      <Swiper
        slidesPerView={16}
        slidesPerGroup={8}
        navigation={true}
        modules={[Navigation]}
        className="calendar-slider">
        <div className={'name-month'}>Октябрь</div>
        {[...Array(30)].map((el, index: number) =>
          <SwiperSlide key={index}>
            <div className={'day-block'}>
              <div className={'info'}>
                <p className={'font-bold'}>{day++}</p>
                {days[dayIndex >= 6 ? dayIndex = 0 : ++dayIndex] == "Сб" || days[dayIndex] == "Вс"
                  ? <p style={{color: "#ef4444"}}>{days[dayIndex]}</p>
                  : <p>{days[dayIndex]}</p>
                }
              </div>
            </div>
          </SwiperSlide>
        )}
      </Swiper>
    </div>
  )
}