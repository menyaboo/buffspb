import vk from '@/public/img/icon/vk.svg'
import telegram from '@/public/img/icon/telegram.svg'
import twitter from '@/public/img/icon/twitter.svg'
import {FaArrowRightLong} from "react-icons/fa6";
import Image from "next/image";

export const TheFooter = () => {
  return (
    <footer>
      <div className={'container footer-wrapper'}>
        <div className={'location'}>
          <iframe className={'map'}
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1999.0592141094123!2d30.416421086761744!3d59.93115960027282!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x469631e5d357591d%3A0x31bac73eacca7159!2z0JHQo9Ck0KQ!5e0!3m2!1sru!2sru!4v1691256925302!5m2!1sru!2sru"
                  referrerPolicy="no-referrer-when-downgrade">
          </iframe>
        </div>
        <div className={'footer-info'}>
          <div className={'footer-link'}>
            <div className={'contact'}>
              <h1>Контакты</h1>
              <div className={'foreground-second'}>
                <p>8 (812) 573-95-95</p>
                <p>8 (921) 597-58-99</p>
              </div>
            </div>
            <div className={'social'}>
              <h1>Социальные сети</h1>
              <div className={'icon'}>
                <a href={'/'}><Image width={50} height={50} alt={'vk'} src={vk.src}/></a>
                <a href={'/'}><Image width={50} height={50} alt={'telegram'} src={telegram.src}/></a>
                <a href={'/'}><Image width={50} height={50} alt={'twitter'} src={twitter.src}/></a>
              </div>
            </div>
          </div>
          <div className={'mailing'}>
            <h1>Подпишитесь на наши новости</h1>
            <form>
              <div className={'flex items-center'}>
                <input type={'text'} placeholder={'name@gmail.com'} className={'text-input'}/>
                <div className={'form-submit_arrow mt-2'}><FaArrowRightLong /></div>
              </div>
            </form>
          </div>
          <div>
            <p>Санкт-Петербургский Государственный Музыкально-Драматический Театр «БУФФ»</p>
          </div>
        </div>
      </div>
    </footer>
  )
}