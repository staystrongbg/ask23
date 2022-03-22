import Link from 'next/link';
import { useGlobalContext } from '../context';
const NonSwiperProizvod = ({ ...p }) => {
  const { setSearchTerm } = useGlobalContext();
  return (
    <>
      {p && (
        <Link href={`proizvodi/${p.id.toString()}`}>
          <a>
            <div
              className={`w-40 h-80 lg:w-72 lg:h-96 lg:text-base text-xs bg-gray-100 hover:shadow-xl rounded-md cursor-pointer transition-all   border-2 `}
              onClick={() => setSearchTerm('')}
            >
              <div className='w-full sm:h-1/2 h-1/3'>
                <img
                  className='product-image  rounded-t-md object-cover h-full w-full'
                  src={p.image}
                  alt=''
                />
              </div>
              <div className='px-4 flex flex-col  items-start gap-2 h-1/2'>
                <p className='text-gray-500'>Цена: </p>
                <h2 className='price font-bold inline text-gray-700   text-xl'>
                  {p.price * (p.id + 10)},00 дин
                </h2>
                <h3 className='title text-xl text-gray-700 '>{p.name}</h3>
                <p className='details text-sm text-gray-600'>{p.detail}</p>
              </div>
            </div>
          </a>
        </Link>
      )}
    </>
  );
};

export default NonSwiperProizvod;
