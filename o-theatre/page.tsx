import {TheHeader} from "@/app/_components/TheNavbar/TheHeader";
import {TheFooter} from "@/app/_components/TheFooter";

export default function Page():JSX.Element {

  return (
    <main>
      <TheHeader/>
      <div className={'container mx-auto'}>
        <h1 className={'title'}>О театре</h1>
        <p className={'foreground-second'}>
          Основатель современного театра «Буфф» – народный артист Российской Федерации, профессор Санкт-Петербургской государственной академии театрального искусства, лауреат премии Правительства Санкт-Петербурга за выдающийся вклад в развитие петербургской культуры Исаак Романович Штокбант.

          «В 1983 году я выпустил в Ленинградском государственном институте театра, музыки и кинематографии курс артистов эстрады, – рассказывал Исаак Штокбант. – Это были талантливые ребята. Получив «корочки», они не разбежались, а организовали свой театр. В соответствии с жанром, мы хотели назвать его просто театр-кабаре. Начальство посмотрело на меня, как на ненормального: какое еще кабаре в Советском государстве?! И тогда я вспомнил о «Буффе». На «Буфф» согласились. В этом слове было что-то от Маяковского, от его «Мистерии-буфф». Но теперь-то я рад, что тогда нам не разрешили назвать себя театром-кабаре. То, что мы делаем теперь, никак не вписывается в узкие рамки кабаретного искусства».

          Сейчас труппу театра составляют выпускники Театральной Академии разных лет, среди них: заслуженные артисты РФ Евгений Александров, Мурад Султаниязов, Михаил Трясоруков, Андрей Соловьев, Наталья Бобровничая, Сергей Магиленич, Елена Зубович, Владимир Смилянец, Ника Козоровицкая, Ольга Пикало; лауреаты российских конкурсов артистов эстрады Светлана Вильгельм-Плащевская, Владимир Сута, Анастасия Кулаева, Михаил Бондарук и другие. Многие артисты, прошедшие школу «Буффа», успешно работают сегодня на большой эстраде: Геннадий Ветров, Юрий Гальцев, Елена Воробей, Елена Спиридонова, известные радиоведущие Вадим Карев, Виктор Янишевский. Заслуженный артист РФ Михаил Смирнов, выпускник мастерской Исаака Штокбанта, в 2019 году занял пост художественного руководителя театра.

          «Буфф» по своей сути театр уникальный. Где еще в нашей стране вы найдете театр, в котором в один вечер играют классику на основной сцене, развлекают зрителя музыкальными программами в «Кабаре-буфф», а по утрам в «Буффиках» дают оперы и сказочные представления для самых маленьких?
        </p>
      </div>
      <TheFooter/>
    </main>
  )
}