import Navlinks from '../components/Navlinks';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useGlobalContext } from '../context';

const Topnav = () => {
  const { handleScroll, setHeight, height } = useGlobalContext();

  return (
    <nav className='flex flex-col items-center justify-center bg-transparent text-gray-900 uppercase tracking-wide  text-xl'>
      {!height && (
        <div className=' z-50 flex items-start justify-start rounded-lg w-fit p-2 mt-4 bg-transparent    '>
          <Image src='/kuce.svg' alt='kuce' width={140} height={140} />
        </div>
      )}

      <Navlinks height={height} />
    </nav>
  );
};

export default Topnav;
