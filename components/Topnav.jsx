import Navlinks from '../components/Navlinks';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useGlobalContext } from '../context';
import Sidebar from './sidebar';
import { FaBars } from 'react-icons/fa';
import Topbar from './Topbar';
const Topnav = () => {
  const { height, links, scroll } = useGlobalContext();

  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <nav className='flex flex-col items-center w-full justify-center bg-transparent text-gray-900  text-xl'>
      <Topbar height={height} />
      {!height && (
        <div className=' z-20 flex items-start justify-start w-fit p-2 xl:mt-16 mt-20 bg-transparent  '>
          <Image src='/asklogo.svg' alt='kuce' width={340} height={140} />
        </div>
      )}
      {!scroll ? (
        <Navlinks />
      ) : (
        <FaBars
          onClick={() => setShowSidebar(!showSidebar)}
          className='absolute sm:top-20 top-14 right-4 cursor-pointer'
        />
      )}
      {showSidebar && <Sidebar links={links} setShowSidebar={setShowSidebar} />}
    </nav>
  );
};

export default Topnav;
