import {
  FaPhone,
  FaEnvelope,
  FaShoppingCart,
  FaMapMarkerAlt,
  FaBars,
} from 'react-icons/fa';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import { useState } from 'react';
import Sidebar from './sidebar';

import { Search } from './Search';
import Image from 'next/image';
import Link from 'next/link';
import { useGlobalContext } from '../context';
import Cart from './Cart';
const Topbar = () => {
  const { cart, setCart, isSearching, links, shake } = useGlobalContext();
  const [showSidebar, setShowSidebar] = useState(false);

  const ICON_STYLE = 'bg-gray-700 text-slate-50  rounded-full p-2';

  return (
    <div className='w-full bg-gradient-to-r from-[#93291e] to-[#ed213a] text-slate-50 flex  xl:items-center xl:justify-center xl:gap-16 py-2  fixed top-0 z-40  '>
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
        style={{ animation: `${shake && 'zoomIn 0.5s ease-out'} ` }}
        className={`cursor-pointer text-2xl absolute lg:right-2 top-4 right-12 z-50    ${
          isSearching && 'hidden'
        } `}
      >
        <FaShoppingCart onClick={() => setCart(true)} />
      </div>
      <FaBars
        onClick={() => setShowSidebar(!showSidebar)}
        className={`fixed top-4  z-40 right-3 text-gray-50 font-bold text-2xl cursor-pointer lg:hidden flex ${
          cart || isSearching ? 'hidden' : ''
        } `}
      />
      {cart && (
        <ClickAwayListener onClickAway={() => setCart(false)}>
          <div className='shopping-cart fixed top-0 right-0 bottom-0 sm:w-96 w-full sm:border-l-4 border-gray-300 bg-gray-200/90 flex justify-between flex-col z-50 '>
            <Cart />
          </div>
        </ClickAwayListener>
      )}
      <div className='sm:hidden flex w-full items-center justify-center -ml-10 '>
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
      {showSidebar && <Sidebar links={links} setShowSidebar={setShowSidebar} />}
    </div>
  );
};

export default Topbar;
