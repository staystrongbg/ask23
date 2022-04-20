import { FaShoppingCart } from 'react-icons/fa';
import Link from 'next/link';

const ProizvodTemplate = () => {
  return (
    <>
      <div className='w-full lg:h-1/2 h-1/3'>
        <Link href={`proizvodi/${p._id.$oid.toString()}`}>
          <a>
            {/* u nexy config... */}
            <img
              className='product-image  rounded-t-md object-cover h-full w-full cursor-pointer'
              src={p.image}
              alt=''
            />
          </a>
        </Link>
      </div>
      <div className='p-2 flex flex-col items-center justify-around lg:h-1/2 h-2/3 '>
        <h3 className='title xl:text-base text-sm text-blue-700 '>{p.name}</h3>
        <div className='proizvod-cena py-2 px-8 bg-red-600 '>
          <h2 className='price font-bold inline text-gray-100   lg:text-2xl text-xl '>
            {p.price}
          </h2>
        </div>
        <p className='details text-xs text-gray-400'>
          *приказане цене су у РСД
        </p>
        <div
          className='uppercase gap-2  korpa-ikonica  p-2 flex w-full cursor-pointer items-center justify-center'
          onClick={() => dodajProizvodUKorpu(p)}
        >
          <p className='lg:text-sm text-xs text-gray-600'>додај у корпу</p>
          <span className=' xl:text-3xl text-xl text-yellow-500  '>
            <FaShoppingCart />
          </span>
        </div>
      </div>
    </>
  );
};

export default ProizvodTemplate;
