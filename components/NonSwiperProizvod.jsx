import Link from 'next/link';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { FaShoppingCart } from 'react-icons/fa';
// import { useState } from 'react';
import { useGlobalContext } from '../context';
import Button from './Button';
const NonSwiperProizvod = ({ ...p }) => {
  const { setSearchTerm, dodajProizvodUKorpu } = useGlobalContext();
  return (
    <>
      {p && (
        <div
          className={` min-h-96 xl:h-96   bg-gray-100 hover:shadow-lg rounded-md overflow-hidden transition-all  border-2  flex flex-col  justify-start relative`}
          style={{ animation: 'fadeIn 0.3s ease-out' }}
        >
          <div className='w-full lg:h-1/2 h-1/3'>
            <Link href={`proizvodi/${p._id.$oid.toString()}`}>
              <a>
                {/* u nexy config... */}
                <img
                  onClick={() => setSearchTerm('')}
                  className='product-image  rounded-t-md object-cover h-full w-full cursor-pointer'
                  src={p.image}
                  alt=''
                />
              </a>
            </Link>
          </div>
          <div className='p-2 flex flex-col items-center justify-around lg:h-1/2 h-2/3 '>
            <h3 className='title text-base text-blue-700 whitespace-pre-wrap '>
              {p.name.toUpperCase()}
            </h3>
            <div className='proizvod-cena lg:py-2 py-1 lg:px-8 px-4 bg-red-600 '>
              <h2 className='price font-bold inline text-gray-100   text-2xl   '>
                {p.price}
              </h2>
            </div>
            <p className='details sm:text-sm text-xs text-gray-400'>
              *приказане цене су у РСД
            </p>
            <div
              className='uppercase gap-2  korpa-ikonica  p-2 flex w-full cursor-pointer items-center justify-center'
              onClick={() => dodajProizvodUKorpu(p)}
            >
              <p className='text-base text-gray-600'>додај у корпу</p>
              <span className=' xl:text-3xl text-xl text-yellow-500  '>
                <FaShoppingCart />
              </span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default NonSwiperProizvod;
