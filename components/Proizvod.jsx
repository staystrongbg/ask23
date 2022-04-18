import Link from 'next/link';
import { useState } from 'react';
import { useGlobalContext } from '../context';

const Proizvod = ({ ...p }) => {
  const { setSearchTerm, setIsSearching } = useGlobalContext();

  const closeOverlays = () => {
    setSearchTerm('');
    setIsSearching(false);
  };

  const [topModal, setTopModal] = useState(false);
  return (
    <Link href={`/proizvodi/${p._id.$oid.toString()}`}>
      <a>
        <div
          className={`w-72 h-96 lg:text-base text-xs bg-gray-100 hover:shadow-xl rounded-md cursor-pointer transition-all   border-2 `}
          onClick={closeOverlays}
        >
          <div className='w-full h-1/2 relative '>
            {topModal && (
              <div className='bg-gray-50/90 absolute top-0 right-0 left-0 h-1/2 z-50 '></div>
            )}
            <img
              className={`product-image  rounded-t-md object-cover h-full w-full`}
              src={p.image}
              alt=''
            />
          </div>
          <div className='px-4 py-6 flex flex-col justify-center items-start gap-1 h-1/2'>
            <p className='text-gray-500'>Цена: </p>
            <h2 className='price font-bold inline text-gray-700   text-xl'>
              {p.price} дин
            </h2>
            <h3 className='title text-xl text-gray-700 '>{p.name}</h3>
            <p className='details text-sm text-gray-600'>{p.detail}</p>
          </div>
        </div>
      </a>
    </Link>
  );
};

export default Proizvod;
