'use client'
import {SlArrowDown} from "react-icons/sl";
import {useState} from "react";

export const WorkCard = ():JSX.Element => {
  const[isShow, setIsShow] = useState(true)
  const handleClick = () => setIsShow(!isShow)

  type People = { prof: string, people: string }
  const peoples:Array<People> = [
    { prof: "Автор сценической версии и режиссёр-постановщик", people: "Ника Козоровицкая", },
    { prof: "Композитор", people: "Максим Дунаевский", },
    { prof: "Тексты песен", people: "Николай Денисов", },
    { prof: "Художник-постановщик", people: "Яна Штокбант", },
    { prof: "Художник по свету", people: "Ксения Нужина", },
    { prof: "Балетмейстер", people: "Эдвальд Смирнов", },
    { prof: "Постановщик сценических боёв", people: "Светлана Ваганова", },
    { prof: "Музыкальный руководитель", people: "Александр Лихачёв", },
    { prof: "Музыкальное оформление", people: "Екатерина Соснило", },
    { prof: "Звукорежиссёр", people: "Евгений Матулла", },
    { prof: "Ассистент режиссёра", people: "Екатерина Луценко", },
    { prof: "Ассистент режиссёра", people: "Виктория Михайлова", },
  ]

  return  (
    <div className={'description_card'}>
      <div onClick={handleClick} className={'flex items-center cursor-pointer'}>
        <h1 className={'title-second'}>Над спектаклем работали</h1>
        <SlArrowDown className={'ml-4 mt-1'}/>
      </div>
      <div hidden={isShow} className={'mt-3 foreground-second'}>
        {peoples.map((people, index:number) => (
          <div key={index} className={'flex justify-between'}>
            <p>{people.prof}</p>
            <p>{people.people}</p>
          </div>
        ))}
      </div>
    </div>
  )
}