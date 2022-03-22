import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { Search } from './Search';
import Image from 'next/image';
import Link from 'next/link';

const Topbar = ({ height }) => {
  const ICON_STYLE = 'bg-gray-700 text-slate-50  rounded-full p-2';

  return (
    <div
      id='top'
      className='w-full py-0.5 px-2 bg-gradient-to-r from-[#93291e] to-[#ed213a] text-slate-50 flex  xl:items-center xl:justify-center xl:gap-16 gap-4  fixed top-0 z-50  '
    >
      <Search />
      <div className='sm:flex w-full lg:text-base text-xs justify-center gap-10 hidden'>
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
