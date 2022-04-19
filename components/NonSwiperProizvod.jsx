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
          className={` w-40 h-72 lg:w-72 lg:h-96 lg:text-base text-xs bg-gray-100 hover:shadow-xl rounded-md cursor-pointer transition-all   border-2  flex flex-col  justify-start relative`}
          style={{ animation: 'fadeIn 0.3s ease-out' }}
          onClick={() => setSearchTerm('')}
        >
          <Link href={`proizvodi/${p._id.$oid.toString()}`}>
            <a>
              <div className='w-full lg:h-1/2 h-1/3'>
                {/* u nexy config... */}
                <img
                  className='product-image  rounded-t-md object-cover h-full w-full'
                  src={p.image}
                  alt=''
                />
              </div>
              <div className='p-2 flex flex-col items-start justify-start gap-1 lg:h-1/2 h-2/3 '>
                <p className='text-gray-500 text-sm'>Цена: </p>
                <h2 className='price font-bold inline text-gray-700   text-xl'>
                  {p.price} дин
                </h2>
                <h3 className='title xl:text-base text-sm text-gray-700 '>
                  {p.name}
                </h3>
                <p className='details text-sm text-gray-600'>{p.detail}</p>
              </div>
            </a>
          </Link>
          <div
            className='uppercase gap-2  absolute text-gray-600 bottom-0 right-2  p-2 flex   w-full items-center justify-end'
            onClick={() => dodajProizvodUKorpu(p)}
          >
            <p className='lg:text-sm text-xs'>додај у корпу</p>
            <span className=' xl:text-3xl text-xl '>
              <FaShoppingCart />
            </span>
          </div>
        </div>
      )}
    </>
  );
};

export default NonSwiperProizvod;
