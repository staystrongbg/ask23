import { useRef } from 'react';
import FilterKategorije from '../components/FilterKategorije';
import Layout from '../components/Layout';
import NonSwiperProizvod from '../components/NonSwiperProizvod';

import SwiperComponent from '../components/SwiperComponent';
import { useGlobalContext } from '../context';
const Akcije = () => {
  const { products, setItems, items } = useGlobalContext();
  //ne radi dobro search na /akcije
  //treba filtrirati
  return (
    <Layout>
      <div className={`wrapper w-full  bg-gray-200 py-5`}>
        <div>
          <SwiperComponent photos={products.map((img) => img.image)} />
        </div>
        <section className='sm:px-5 px-1 py-10 bg-gray-200'>
          {/* <div className='flex flex-col items-center justify-center lg:w-5/6 w-full m-auto mt-12 mb-12'> */}
          <div className='flex flex-col  xl:w-5/6 w-full m-auto mb-12'>
            <h1 className='text-3xl uppercase text-center '>
              сви производи тренутно на акцији
            </h1>
            <p className='w-full text-center text-base border-b py-10 mb-20 border-dashed border-gray-500'>
              Свака животиња има своје потребе, навике али и карактер на основу
              чега пажљиво правимо понуду производа за наше купце. Све што је
              потребно Вашим кућним љубимцима можете пронаћи у нашем пет схоп-у.
              Приуштите им омиљену храну, опрему или играчке по најповољнијим
              акцијским ценама.
            </p>
            <div className='flex md:flex-row flex-col xl:gap-40'>
              <FilterKategorije setItems={setItems} items={items} />
              {/* iskljuciti wrap i aktivirati flex-col */}
              <div className='flex flex-wrap grow-3 jusitfy-center xl:gap-5 gap-2 py-10 '>
                {items
                  .filter((f) => f.akcija)
                  .map((p, idx) => (
                    <NonSwiperProizvod key={idx} {...p} />
                  ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Akcije;
