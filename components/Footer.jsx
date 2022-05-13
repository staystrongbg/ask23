import GoogleMapReact from 'google-map-react';
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebook,
  FaInstagram,
  FaArrowUp,
  FaTimes,
  FaChevronUp,
} from 'react-icons/fa';
import Links from './Links';
import Image from 'next/image';
import { useState } from 'react';
import Map from './Map';
import Link from 'next/link';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import { useGlobalContext } from '../context';
import { H2, ICON_STYLE_FOOTER, P } from './utils';
const Footer = () => {
  const { offset, scrollToTop } = useGlobalContext();
  const location = {
    address: 'Др Драге Љочић, Београд',
    lat: 44.80241,
    lng: 20.5242,
  };

  const [korisnickiServis, setKorisnickiServis] = useState({
    servis: '',
    propratni: '',
  });

  return (
    <footer className='bg-blue-900/80 w-full items-start justify-betwee flex  lg:flex-row flex-col  sm:text-sm md:text-base lg:text-lg overflow-hidden text-red-50 md:px-10 px-2 py-5'>
      {korisnickiServis.servis && (
        <ClickAwayListener
          onClickAway={() => setKorisnickiServis({ servis: '', propratni: '' })}
        >
          <div
            className='fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gray-100 rounded-md border-2 shadow-lg text-gray-700 py-8 px-4 w-[300px] z-50 '
            style={{ animation: 'fadeIn 0.3s ease' }}
          >
            <span
              className='absolute top-2 text-gray-400 right-2 text-xl'
              onClick={() => setKorisnickiServis({ servis: '', propratni: '' })}
            >
              <FaTimes />
            </span>
            <H2 className='text-center mb-8'>{korisnickiServis.servis}</H2>
            <p className='text-center'>{korisnickiServis.propratni}</p>
          </div>
        </ClickAwayListener>
      )}

      <div className='md:ml-8 flex flex-col items-start  justify-between md:w-2/3 w-full'>
        <div className='address flex md:justify-start justify-center   md:gap-40 gap-5  items-start  md:items-start border-b border-gray-500 pb-4  '>
          <div className='flex flex-col items-center justify-center text-center'>
            <span className={ICON_STYLE_FOOTER}>
              <FaMapMarkerAlt />
            </span>
            <b>Адреса</b>
            <p> {location.address}</p>
          </div>
          <div className='flex flex-col items-center whitespace-nowrap justify-center'>
            <span className={ICON_STYLE_FOOTER}>
              <FaPhone />
            </span>
            <b>Телефон</b>
            <p>069 288 72 94</p>
          </div>
          <div className='flex flex-col items-center justify-center'>
            <span className={ICON_STYLE_FOOTER}>
              <FaEnvelope />
            </span>
            <b>email</b>
            <p>beograd.l@yandex.com</p>
          </div>
        </div>
        <div className='flex md:flex-row flex-col md:gap-40 gap-10   py-4 items-start'>
          <div className='flex flex-col items-start gap-8 w-[300px]'>
            <Image src='/asklogo.svg' width={200} height={80} alt='logo' />
            <p className='moto'>
              Продавница за куће љубимце која у понуди има све што наше љубимце
              чини ситим и срећним.
            </p>
            <div className='social flex-col flex  gap-4'>
              <p>Пратите нас на друштвеним мрежама</p>
              <div className='flex gap-4'>
                <span className={ICON_STYLE_FOOTER}>
                  <FaFacebook />
                </span>
                <span className={ICON_STYLE_FOOTER}>
                  <FaInstagram />
                </span>
              </div>
            </div>
          </div>
          <div className='flex gap-10 sm:text-sm md:text-base lg:text-lg'>
            <div className='flex flex-col whitespace-nowrap '>
              <b>Мапа сајта</b>
              <Links text_color='text-gray-50' />
            </div>

            <div className='whitespace-nowrap   '>
              <b>Кориснички сервиси</b>
              <ul className='flex flex-col sm:text-sm md:text-base lg:text-lg gap-2 mt-1 cursor-pointer'>
                <li
                  onClick={(e) =>
                    setKorisnickiServis({
                      servis: e.target.textContent,
                      propratni: 'Испорука робу вршимо курирском службом Бех',
                    })
                  }
                >
                  Испорука робе
                </li>
                <li
                  onClick={(e) =>
                    setKorisnickiServis({
                      servis: e.target.textContent,
                      propratni:
                        'Плаћање се врши по пријему поузећем или уплатом на рачун',
                    })
                  }
                >
                  Начини плаћања
                </li>
                <li
                  onClick={(e) =>
                    setKorisnickiServis({
                      servis: e.target.textContent,
                      propratni:
                        'Враћање робе у року од три дана од дана куповине',
                    })
                  }
                >
                  Враћање робе
                </li>
                <li
                  onClick={(e) =>
                    setKorisnickiServis({
                      servis: e.target.textContent,
                      propratni:
                        'Проверите робу и кусур на лицу места. Додатне рекламације на уважамо. Продавац је дужан да вам изда фисклани рачун',
                    })
                  }
                >
                  Рекламације
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {offset && (
        <div
          className={` z-50 fixed bottom-5 p-2 animate-bounce right-2 rounded-full bg-purple-900 text-gray-50 text-3xl cursor-pointer lg:block hidden opacity-50 hover:opacity-100 transition-all`}
          title='назад на врх стране'
          onClick={scrollToTop}
        >
          <FaChevronUp />
        </div>
      )}
      <Map location={location} zoomLevel={17} />
    </footer>
  );
};

export default Footer;

// AIzaSyBvCnmNbXmNc42-kRm-nU6ZEy_AiQUh16U
