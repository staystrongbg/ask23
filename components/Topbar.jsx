import { FaPhone, FaEnvelope } from 'react-icons/fa';
import { Search } from './Search';

const Topbar = ({ height }) => {
  return (
    <div className='w-full py-1 px-2 bg-[#733e00]/90 text-slate-50 flex sm:flex-row flex-col items-center justify-center xl:gap-16 gap-4 xl:text-base text-sm fixed top-0 z-50'>
      <div className={`sm:flex gap-2 items-center justify-center hidden`}>
        <span className='bg-gray-400 text-[#733e00]  rounded-full p-2'>
          <FaPhone />
        </span>
        Dr. Drage Ljočić 3, Beograd | 069 288 71 94
      </div>
      <div className={`sm:flex hidden gap-2 items-center justify-center`}>
        <span className='bg-gray-400 rounded-full text-[#733e00] p-2'>
          <FaEnvelope />
        </span>
        ack23@gmail.com
      </div>
      <Search />
    </div>
  );
};

export default Topbar;
