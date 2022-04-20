import Link from 'next/link';
import { useState } from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { useGlobalContext } from '../context';

const Proizvod = ({ ...p }) => {
  const { setSearchTerm, setIsSearching, dodajProizvodUKorpu } =
    useGlobalContext();

  const closeOverlays = () => {
    setSearchTerm('');
    setIsSearching(false);
  };

  return (
    <div
      className={`w-72 h-96 lg:text-base text-xs bg-gray-100 hover:shadow-xl rounded-md cursor-pointer transition-all relative  border-2 `}
      onClick={closeOverlays}
    >
      <Link href={`/proizvodi/${p._id.$oid.toString()}`}>
        <a>
          <div className='w-full h-1/2 relative '>
            <img
              className={`product-image  rounded-t-md object-cover h-full w-full`}
              src={p.image}
              alt=''
            />
          </div>
          <div className='p-2 flex flex-col justify-start items-start gap-1 h-1/2'>
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
        className='uppercase gap-2  absolute  bottom-0 right-2  p-2 flex   w-full items-center justify-end'
        onClick={() => dodajProizvodUKorpu(p)}
      >
        <p className='lg:text-sm text-xs text-gray-600'>додај у корпу</p>
        <span className=' xl:text-3xl text-xl text-green-600 '>
          <FaShoppingCart />
        </span>
      </div>
    </div>
  );
};

export default Proizvod;
