import Image from 'next/image';
import BottomLine from './BottomLine';
import Placeholder from './Placeholder';
import { createArr, H1 } from './utils';

function importAll(r) {
  return r.keys().map(r);
}

const getBrand = () => {
  const f = importAll(
    require.context('/public/brendovi', false, /\.(png|jpe?g|JPG|webp|svg)$/)
  );

  return f.map((img) => img.default).map((image) => image.src);
};

const brands = getBrand();
// console.log(brands);

const Brendovi = () => {
  return (
    <section className='brands relative mx-auto mb-40 w-full flex flex-col items-center justify-center h-screen '>
      <div className='absolute top-0 right-0 left-0 bottom-0 bg-gray-700/60'></div>
      <H1 className='text-gray-50 drop-shadow-lg '>
        код нас можете наћи производе реномираних произвођача
      </H1>
      <BottomLine />
      <div className=' flex flex-wrap items-center justify-center w-4/5 gap-10 '>
        {brands.map((logo, idx) => (
          <img
            key={idx}
            src={logo}
            width='250px'
            height='100%'
            alt=''
            className='z-10'
          />
        ))}
      </div>
    </section>
  );
};

export default Brendovi;
