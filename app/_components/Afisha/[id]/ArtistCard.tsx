'use client'
import {SlArrowDown} from "react-icons/sl";
import {useState} from "react";

export const ArtistCard = ():JSX.Element => {
  const[isShow, setIsShow] = useState(true)
  const handleClick = () => setIsShow(!isShow)

  type People = { prof: string, people: string }
  const peoples:Array<People> = [
    { prof: "Бартоломео де Ла Скала, герцог Веронский", people: "Евгений Александров", },
    { prof: "Брат Лоренцо, францисканский монах (он же Пьеро)", people: "Андрей Лёвин", },
    { prof: "Синьор Монтекки", people: "Мурад Султаниязов", },
    { prof: "Синьор Капулетти", people: "Сергей Магиленич", },
    { prof: "Синьора Капулетти", people: "Анастасия Славина", },
    { prof: "Антонио, дальний родственник из Неаполя", people: "Вячеслав Семёнов", },
    { prof: "Розалина, племянница", people: "Сергей Коннов", },
    { prof: "Бенволио, племянник, друг покойного Ромео", people: "Евгений Берёзкин", },
    { prof: "Валентин, брат покойного Тибальда", people: "Никита Крахмалёв", },
  ]

  return  (
    <div className={'description_card'}>
      <div onClick={handleClick} className={'flex items-center cursor-pointer'}>
        <h1 className={'title-second'}>Роли исполняют</h1>
        <SlArrowDown className={'ml-4 mt-1'}/>
      </div>
      <div hidden={isShow} className={'mt-3 foreground-second'}>
        {peoples?.map((people, index: number) => (
          <div key={index} className={'flex justify-between'}>
            <p>{people.prof}</p>
            <p>{people.people}</p>
          </div>
        ))}
      </div>
    </div>
  )
}