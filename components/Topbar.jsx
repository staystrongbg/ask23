import { FaPhone, FaEnvelope } from 'react-icons/fa';

const Topbar = () => {
  return (
    <div className='w-full py-1 px-2 bg-gray-200 text-slate-700 flex items-cente r justify-center gap-16'>
      <div className='flex gap-2 items-center justify-center'>
        <span className='bg-white rounded-full p-2'>
          <FaPhone />
        </span>
        Dr. Drage Ljočić 3, Beograd | 069 288 71 94
      </div>
      <div className='flex gap-2 items-center justify-center'>
        <span className='bg-white rounded-full p-2'>
          <FaEnvelope />
        </span>
        ack23@gmail.com
      </div>
    </div>
  );
};

export default Topbar;
