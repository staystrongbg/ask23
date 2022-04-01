import Navlinks from '../components/Navlinks';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useGlobalContext } from '../context';
import Sidebar from './sidebar';
import { FaBars } from 'react-icons/fa';
import Topbar from './Topbar';
import Link from 'next/link';
const Topnav = () => {
  const { height, links, scroll, cart, isSearching } = useGlobalContext();

  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <nav
      className={`flex flex-col items-center w-full justify-center bg-transparent text-gray-900  text-xl
       `}
    >
      <Topbar height={height} />
      {!scroll && (
        <div className=' z-20 flex items-start justify-start w-fit p-2 xl:mt-16 mt-20 bg-transparent  '>
          <Link href='/'>
            <a>
              <Image src='/asklogo.svg' alt='kuce' width={340} height={140} />
            </a>
          </Link>
        </div>
      )}
      {!scroll ? (
        <Navlinks />
      ) : (
        <FaBars
          onClick={() => setShowSidebar(!showSidebar)}
          className={`fixed top-3  z-40 right-3 text-gray-50 font-bold text-2xl cursor-pointer ${
            cart || isSearching ? 'hidden' : ''
          } `}
        />
      )}
      {showSidebar && <Sidebar links={links} setShowSidebar={setShowSidebar} />}
    </nav>
  );
};

export default Topnav;
