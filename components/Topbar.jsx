import {
  FaPhone,
  FaEnvelope,
  FaShoppingCart,
  FaMapMarkerAlt,
  FaTimes,
} from 'react-icons/fa';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { Search } from './Search';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useGlobalContext } from '../context';
import { Divider } from '@mui/material';
import Button2 from './Buttone2';
const Topbar = ({ height }) => {
  const {
    proizvodiKorpa,
    setProizvodiKorpa,
    cart,
    setCart,
    removeItemFromCart,
    isSearching,
  } = useGlobalContext();
  const ICON_STYLE = 'bg-gray-700 text-slate-50  rounded-full p-2';

  return (
    <div
      id='top'
      className='w-full py-0.5 px-2 bg-gradient-to-r from-[#93291e] to-[#ed213a] text-slate-50 flex  xl:items-center xl:justify-center xl:gap-16 gap-4  fixed top-0 z-40  '
    >
      <Search />
      <div className='sm:flex w-full lg:text-sm text-xs justify-center gap-10 hidden'>
        <div
          className={` flex flex-col md:flex-row gap-2 items-center justify-center whitespace-nowrap `}
        >
          <span className={ICON_STYLE}>
            <FaMapMarkerAlt />
          </span>
          Др. Драге Љочић 3, Београд
        </div>
        <div
          className={` flex flex-col md:flex-row gap-2 items-center justify-center whitespace-nowrap`}
        >
          <span className={ICON_STYLE}>
            <FaPhone />
          </span>
          069 288 71 94
        </div>
        <div
          className={` flex flex-col md:flex-row gap-2 items-center justify-center whitespace-nowrap`}
        >
          <span className={ICON_STYLE}>
            <FaEnvelope />
          </span>
          beograd.l@yandex.com
        </div>
      </div>

      <div
        className={`cursor-pointer text-2xl absolute lg:right-2 top-3 right-12 z-50 ${
          isSearching && 'hidden'
        } `}
      >
        <FaShoppingCart onClick={() => setCart(true)} />
      </div>
      {/* <Button2 onClick={() => setCart(false)} title='затвори' /> */}

      {cart && (
        <div className='shopping-cart fixed top-0 right-0 bottom-0 sm:w-96 w-full sm:border-l-4 border-gray-300 bg-gray-200/90 flex justify-between flex-col z-50 '>
          <div className='flex flex-col'>
            <span
              onClick={() => setCart(false)}
              className='text-gray-50  bg-indigo-700   items-center px-4 py-2 text-xl cursor-pointer flex justify-between w-full'
            >
              Ваша корпа
              <FaTimes />
            </span>
            {proizvodiKorpa &&
              proizvodiKorpa.map((item) => (
                <div key={item.id}>
                  <div className='flex items-center'>
                    <img
                      src={item.image}
                      className='w-20 h-20 border border-gray-300 p-1'
                      alt=''
                    />
                    <div className=' text-base m-4 w-full'>
                      <p className='text-gray-900 flex justify-between w-full'>
                        <span>{item.name}</span>
                        <span>{item.price} дин</span>
                      </p>
                      <div className='text-gray-400 flex justify-between mt-2'>
                        <span>Kол. {item.kolicina}</span>
                        <span
                          className='text-red-900 cursor-pointer tracking-wider uppercase'
                          onClick={() => removeItemFromCart(item.id)}
                        >
                          {' '}
                          обриши{' '}
                        </span>
                      </div>
                    </div>
                  </div>
                  <Divider />
                </div>
              ))}
            {!proizvodiKorpa.length && (
              <div className='flex flex-col items-center justify-center'>
                <h2 className='text-gray-600 text-2xl  my-10'>
                  Корпа је празна
                </h2>
                <span className='text-gray-800 text-5xl text-center'>
                  <AiOutlineShoppingCart />
                </span>
              </div>
            )}
            {proizvodiKorpa.length > 0 && (
              <>
                <h2 className='text-gray-800 text-2xl my-4 text-right font-bold'>
                  <span className='mr-2'> Укупно:</span>
                  {proizvodiKorpa.reduce((total, item) => {
                    total = total + +item.price * item.kolicina;
                    return total;
                  }, null)}{' '}
                  <span className='ml-1'>дин</span>
                </h2>
                <Button2 title='заврши куповину' />
                <p className='text-sm text-gray-500 cursor-pointer text-center my-2'>
                  <span onClick={() => setCart(false)}>
                    или наставите куповину →
                  </span>
                </p>
              </>
            )}
          </div>
        </div>
      )}
      <div className='lg:hidden flex w-full items-center justify-center -ml-10 '>
        <Link href='/'>
          <a>
            <Image
              src='/logo_only.svg'
              width='120px'
              height='30px'
              alt='logo'
            />
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Topbar;
