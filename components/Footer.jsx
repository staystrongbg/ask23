import GoogleMapReact from 'google-map-react';
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebook,
  FaInstagram,
  FaArrowUp,
} from 'react-icons/fa';
import Links from './Links';
import Image from 'next/image';
import Map from './Map';
import Link from 'next/link';
import { useGlobalContext } from '../context';
const Footer = () => {
  const { height, scrollToTop } = useGlobalContext();
  const location = {
    address: 'Dr. Drage Ljočić 3, Beograd',
    lat: 44.80241,
    lng: 20.5242,
  };
  const ICON_STYLE = 'bg-gray-700 text-slate-50  rounded-full p-2';
  return (
    <footer className='bg-blue-900/80 w-full items-start justify-betwee flex  lg:flex-row flex-col xs:text-sm overflow-hidden text-red-50 md:px-10 px-2 py-5'>
      <div className='md:ml-8 flex flex-col items-start  justify-between md:w-2/3 w-full'>
        <div className='address flex md:justify-start justify-center   md:gap-40 gap-5 md:text-base text-xs items-center  md:items-start border-b border-gray-500 pb-4  '>
          <div className='flex flex-col items-center justify-center text-center'>
            <span className={ICON_STYLE}>
              <FaMapMarkerAlt />
            </span>
            <b>Адреса</b>
            <p> Др Драге Љочић 3, Београд</p>
          </div>
          <div className='flex flex-col items-center whitespace-nowrap justify-center'>
            <span className={ICON_STYLE}>
              <FaPhone />
            </span>
            <b>Телефон</b>
            <p>069 288 71 94</p>
          </div>
          <div className='flex flex-col items-center justify-center'>
            <span className={ICON_STYLE}>
              <FaEnvelope />
            </span>
            <b>Имејл</b>
            <p>beograd.l@yandex.com</p>
          </div>
        </div>
        <div className='flex md:flex-row flex-col md:gap-40 gap-10   py-4 items-start'>
          <div className='flex flex-col items-start gap-8'>
            <Image src='/asklogo.svg' width={200} height={80} alt='logo' />
            <p className='moto text-sm'>
              Из огромне љубави према животињама родила се жеља да се отвори
              продавница за куће љубимце која ће у понуди имати све што наше
              љубимце чини ситим и срећним.
            </p>
            <div className='social flex-col text-xl flex  gap-4'>
              <p>Пратите нас на друштвеним мрежама</p>
              <div className='flex gap-4'>
                <span className={ICON_STYLE}>
                  <FaFacebook />
                </span>
                <span className={ICON_STYLE}>
                  <FaInstagram />
                </span>
              </div>
            </div>
          </div>
          <div className='flex gap-10'>
            <div className='flex flex-col whitespace-nowrap '>
              <b>Мапа сајта</b>
              <Links text_color='text-gray-50' />
            </div>

            <div className='whitespace-nowrap   '>
              <b>Кориснички сервиси</b>
              <ul className='flex flex-col gap-2 mt-1'>
                <li>Испорука робе</li>
                <li>Начини плаћања</li>
                <li>Враћање робе</li>
                <li>Рекламације</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {height && (
        <div
          className=' z-50 fixed bottom-5 p-2 animate-bounce right-2 rounded-full bg-purple-900 text-gray-50 text-3xl cursor-pointer sm:block hidden '
          title='назад на врх стране'
          onClick={scrollToTop}
        >
          <FaArrowUp />
        </div>
      )}
      <Map location={location} zoomLevel={17} />
    </footer>
  );
};

export default Footer;

// AIzaSyBvCnmNbXmNc42-kRm-nU6ZEy_AiQUh16U
