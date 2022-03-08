import Navlinks from '../components/Navlinks';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useGlobalContext } from '../context';
import Sidebar from './sidebar';
import { FaBars } from 'react-icons/fa';
const Topnav = () => {
  const { height, links, scroll } = useGlobalContext();

  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <nav className='flex flex-col items-center justify-center bg-transparent text-gray-900 uppercase tracking-wide  text-xl'>
      {!height && (
        <div className=' z-50 flex items-start justify-start rounded-lg w-fit p-2 mt-4 bg-transparent    '>
          <Image src='/kuce.svg' alt='kuce' width={140} height={140} />
        </div>
      )}
      {!scroll ? (
        <Navlinks height={height} />
      ) : (
        <FaBars
          onClick={() => setShowSidebar(!showSidebar)}
          className='absolute top-28 right-4 cursor-pointer'
        />
      )}
      {showSidebar && <Sidebar links={links} setShowSidebar={setShowSidebar} />}
    </nav>
  );
};

export default Topnav;
