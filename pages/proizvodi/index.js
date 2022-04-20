import Layout from '../../components/Layout';
import NonSwiperProizvod from '../../components/NonSwiperProizvod';
import { useGlobalContext } from '../../context';
import SwiperComponent from '../../components/SwiperComponent';
import {
  FilterKategorije,
  FilterSort,
  FilterTip,
} from '../../components/FilterKategorije';
import Meta from '../../components/Meta';
import { H1, P } from '../../components/utils';
import { useState } from 'react';
import { useEffect } from 'react';
import Button2 from '../../components/Buttone2';
const SviProizvodi = () => {
  const {
    products,
    items,
    showTip,
    vrstaZivotinje,
    pagination,
    setPagination,
  } = useGlobalContext();

  return (
    <Layout>
      <Meta title='Производи' />

      <div className={`wrapper w-full  `}>
        {/* //top slider */}
        <div className='py-5'>
          <SwiperComponent photos={products.map((img) => img.image)} />
        </div>

        <section className='sm:px-5 px-1 '>
          <div className='flex flex-col  xl:w-5/6 w-full m-auto  mb-12'>
            <H1 className='text-center'>сви производи</H1>
            <P className='m-auto text-center '>
              Свака животиња има своје потребе, навике али и карактер на основу
              чега пажљиво правимо понуду производа за наше купце. Све што је
              потребно Вашим кућним љубимцима можете пронаћи у нашем пет схоп-у.
              Приуштите им омиљену храну, опрему или играчке по најповољнијим
              акцијским ценама.
            </P>

            <div className='flex md:flex-row flex-col xl:gap-40'>
              <div className='xl:grow-1 px-2'>
                {vrstaZivotinje.length > 0 ? (
                  <>
                    <FilterKategorije numberOfProductsByType={products} />
                    <FilterTip
                      numberOfProductsByType={vrstaZivotinje.filter(
                        (f) => f.title
                      )}
                    />
                  </>
                ) : (
                  <FilterKategorije numberOfProductsByType={products} />
                )}

                <FilterSort />
              </div>
              {/* iskljuciti wrap i aktivirati flex-col */}
              <div className='items-container flex flex-wrap grow-3 jusitfy-center xl:gap-5 gap-2 py-10  '>
                {items &&
                  items
                    .slice(0, pagination.page * pagination.perPage)
                    .map((p, idx) => <NonSwiperProizvod key={idx} {...p} />)}
              </div>
            </div>
            {items.length > pagination.perPage && (
              <Button2
                className='w-72 m-auto'
                title='ucitaj jos'
                onClick={() =>
                  setPagination({ ...pagination, page: pagination.page + 1 })
                }
              />
            )}
          </div>
        </section>
      </div>
    </Layout>

    //id
    //page
    //kontakt
    //o nama
    //brendovi
  );
};

export default SviProizvodi;
