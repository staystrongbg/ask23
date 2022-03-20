import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { Search } from './Search';
import Image from 'next/image';

const Topbar = ({ height }) => {
  const ICON_STYLE = 'bg-gray-700 text-slate-50  rounded-full p-2';

  return (
    <div
      id='top'
      className='w-full py-0.5 px-2 bg-gradient-to-r from-[#93291e] to-[#ed213a] text-slate-50 flex  xl:items-center xl:justify-center xl:gap-16 gap-4 xs:text-sm fixed top-0 z-50  '
    >
      <div className={`sm:flex gap-2 items-center justify-center hidden`}>
        <span className={ICON_STYLE}>
          <FaMapMarkerAlt />
        </span>
        Др. Драге Љочић 3, Београд
      </div>
      <div className={`sm:flex gap-2 items-center justify-center hidden`}>
        <span className={ICON_STYLE}>
          <FaPhone />
        </span>
        069 288 71 94
      </div>
      <div className={`sm:flex hidden gap-2 items-center justify-center`}>
        <span className={ICON_STYLE}>
          <FaEnvelope />
        </span>
        ack23@gmail.com
      </div>
      <Search />

      <div className='xl:hidden flex w-full items-center justify-center -ml-10 '>
        <Image src='/logo_only.svg' width='120px' height='30px' />
      </div>
    </div>
  );
};

export default Topbar;
