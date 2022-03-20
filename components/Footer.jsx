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
  const { height } = useGlobalContext();
  const location = {
    address: 'Dr. Drage Ljočić 3, Beograd',
    lat: 44.80241,
    lng: 20.5242,
  };
  const ICON_STYLE = 'bg-gray-700 text-slate-50  rounded-full p-2';
  return (
    <footer className='bg-blue-900/80 w-full items-start justify-between flex text-red-50 px-10 py-5'>
      <div className='ml-8 flex flex-col items-start w-2/3'>
        <div className='address flex flex-wrap gap-40 border-b border-gray-500 pb-4'>
          <div className='flex flex-col items-center justify-center'>
            <span className={ICON_STYLE}>
              <FaMapMarkerAlt />
            </span>
            <b>Адреса</b>
            <p> Др. Драге Љочић 3, Београд</p>
          </div>
          <div className='flex flex-col items-center justify-center'>
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
        <div className='flex gap-40 py-4 items-start'>
          <div className='flex flex-col items-start gap-8'>
            <Image src='/asklogo.svg' width={200} height={80} alt='logo' />
            <p className='moto text-sm'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus,
              consectetur cumque natus eius quos itaque provident ullam?
              Deleniti consequatur eum modi, maiores non dolor doloremque porro,
              dignissimos nulla provident repellat?{' '}
            </p>
            <div className='social flex-col text-xl flex  gap-4'>
              <p>Пратите нас ана друштвеним мрежама</p>
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
          <div className='flex flex-col whitespace-nowrap '>
            <b>Мапа сајта</b>
            <Links text_color='text-gray-50' />
          </div>
          <div className='whitespace-nowrap text-sm '>
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

      {height && (
        <Link href='#top'>
          <a>
            <div className=' z-49 fixed bottom-5 p-2 animate-bounce right-2 rounded-full bg-purple-900 text-gray-50 text-3xl'>
              <FaArrowUp />
            </div>
          </a>
        </Link>
      )}
      {/* <Map location={location} zoomLevel={17} /> */}
    </footer>
  );
};

export default Footer;

// AIzaSyBvCnmNbXmNc42-kRm-nU6ZEy_AiQUh16U
