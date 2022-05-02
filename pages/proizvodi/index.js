import Layout from '../../components/Layout';
import NonSwiperProizvod from '../../components/NonSwiperProizvod';
import { useGlobalContext } from '../../context';
import SwiperComponent from '../../components/SwiperComponent';
import Grid from '@mui/material/Grid';
import {
  FilterKategorije,
  FilterSort,
  FilterTip,
} from '../../components/FilterKategorije';
import Meta from '../../components/Meta';
import { GridContainer, H1, P } from '../../components/utils';
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
          <div className='flex flex-col w-full m-auto  mb-12'>
            <H1 className='text-center'>сви производи</H1>
            <P className='m-auto text-center '>
              Свака животиња има своје потребе, навике али и карактер на основу
              чега пажљиво правимо понуду производа за наше купце. Све што је
              потребно Вашим кућним љубимцима можете пронаћи у нашем пет схоп-у.
              Приуштите им омиљену храну, опрему или играчке по најповољнијим
              акцијским ценама.
            </P>

            <div className='flex md:flex-row flex-col xl:gap-40 mb-20'>
              <div className='w-1/8   px-2'>
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
              <GridContainer>
                {items &&
                  items
                    .slice(0, pagination.page * pagination.perPage)
                    .map((p, idx) => <NonSwiperProizvod key={idx} {...p} />)}
              </GridContainer>
            </div>
            {items.length > pagination.perPage * pagination.page && (
              <Button2
                className='w-72 m-auto'
                title='учитај још'
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
