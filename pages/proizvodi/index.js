import { useState } from 'react';
import { FaChevronRight } from 'react-icons/fa';
import Layout from '../../components/Layout';
import NonSwiperProizvod from '../../components/NonSwiperProizvod';
import { useGlobalContext } from '../../context';
import SwiperComponent from '../../components/SwiperComponent';
import FilterKategorije from '../../components/FilterKategorije';
const SviProizvodi = () => {
  const { products, showTitles, setShowTitles, titles, items, setItems } =
    useGlobalContext();

  // filtrirano

  //update items on each change
  // if (scroll) showTitles(true);
  return (
    <Layout>
      <div className='py-5'>
        <SwiperComponent photos={products.map((img) => img.image)} />
      </div>
      <div className={`wrapper w-full py-5 bg-gray-200`}>
        <section className='sm:px-5  py-10 bg-gray-200'>
          <div className='flex flex-col  xl:w-5/6 w-full m-auto mt-12 mb-12'>
            <h1 className='text-3xl text-center uppercase'>сви производи</h1>
            <p className='xl:w-3/4 w-full text-center m-auto text-base border-b py-10 border-dashed border-gray-500 mb-20'>
              Свака животиња има своје потребе, навике али и карактер на основу
              чега пажљиво правимо понуду производа за наше купце. Све што је
              потребно Вашим кућним љубимцима можете пронаћи у нашем пет схоп-у.
              Приуштите им омиљену храну, опрему или играчке по најповољнијим
              акцијским ценама.
            </p>

            <div className='flex md:flex-row flex-col xl:gap-40'>
              <FilterKategorije setItems={setItems} />

              {/* iskljuciti wrap i aktivirati flex-col */}
              <div className='flex flex-wrap grow-3 jusitfy-center xl:gap-5 gap-2 py-10  '>
                {items
                  // .sort((a, b) => b.price - a.price)
                  .map((p, idx) => (
                    <NonSwiperProizvod key={idx} {...p} />
                  ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
    //MA SSVAKOJ STRANI POSTAVITI MT-40
    //kartice sa svim kategorijama
  );
};

export default SviProizvodi;
