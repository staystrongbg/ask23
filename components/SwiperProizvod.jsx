import Link from 'next/link';
import { useState } from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { useGlobalContext } from '../context';

const SwiperProizvod = ({ ...p }) => {
  const { setSearchTerm, setIsSearching, dodajProizvodUKorpu } =
    useGlobalContext();

  const closeOverlays = () => {
    setSearchTerm('');
    setIsSearching(false);
  };

  return (
    <div
      className={`w-72 h-[420px] lg:text-base text-xs bg-gray-100 hover:shadow-lg rounded-md  transition-all relative  border-2 flex flex-col justify-start `}
      onClick={closeOverlays}
    >
      {p.akcija && (
        <div className='bg-red-600 rounded-full rotate-12 h-16 w-16 flex items-center justify- text-gray-50 font-bold z-50 absolute top-0 right-0  p-2'>
          акција
        </div>
      )}
      <div className='w-full h-1/2 relative '>
        <Link href={`/proizvodi/${p._id.$oid.toString()}`}>
          <a>
            <img
              className={`product-image  rounded-t-md object-cover h-full w-full`}
              src={p.image}
              alt=''
            />
          </a>
        </Link>
      </div>
      <div className='p-2 flex flex-col items-center justify-around lg:h-1/2 h-2/3 '>
        <div className='flex gap-4 mt-2 '>
          <span className='rounded-lg bg-gray-200 text-gray-500 py-1 px-2'>
            {p.tip}
          </span>
          <span className='bg-gray-200 rounded-lg text-gray-500 py-1 px-2'>
            {p.title}
          </span>
        </div>
        <h3 className='title xl:text-base text-sm text-blue-700 '>
          {p.name.toUpperCase()}
        </h3>
        <div className='proizvod-cena lg:py-2 py-1 lg:px-8 px-4 bg-red-600 '>
          <h2 className='price font-bold inline text-gray-100   lg:text-2xl text-xl '>
            {p.price}
          </h2>
        </div>
        <p className='details text-xs text-gray-400'>
          *приказане цене су у РСД
        </p>
        <div
          className='uppercase gap-2  korpa-ikonica  p-2 flex w-full cursor-pointer items-center justify-center'
          onClick={() => dodajProizvodUKorpu(p)}
        >
          <p className='lg:text-sm text-xs text-gray-600'>додај у корпу</p>
          <span className=' xl:text-3xl text-xl text-yellow-500  '>
            <FaShoppingCart />
          </span>
        </div>
      </div>
    </div>
  );
};

export default SwiperProizvod;
