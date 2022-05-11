import {
  FilterKategorije,
  FilterSort,
  FilterTip,
} from '../components/FilterKategorije';
import Layout from '../components/Layout';
import Meta from '../components/Meta';
import NonSwiperProizvod from '../components/NonSwiperProizvod';

import SwiperComponent from '../components/SwiperComponent';
import { useGlobalContext } from '../context';
import { GridContainer, H1, H2, P } from '../components/utils';
import Button2 from '../components/Buttone2';
const Akcije = () => {
  const { products, items, pagination, setPagination, vrstaZivotinje } =
    useGlobalContext();
  return (
    <Layout>
      <Meta title='Акције' />

      <div className={`wrapper w-full  `}>
        {/* //top slider */}
        <div className='py-5'>
          <SwiperComponent photos={products.map((img) => img.image)} />
        </div>

        <section className='sm:px-5 px-1'>
          <div className='flex flex-col w-full m-auto mb-12'>
            <H1 className='text-center'>сви производи тренутно на акцији</H1>
            <P className='text-center m-auto'>
              Свака животиња има своје потребе, навике али и карактер на основу
              чега пажљиво правимо понуду производа за наше купце. Све што је
              потребно Вашим кућним љубимцима можете пронаћи у нашем пет схоп-у.
              Приуштите им омиљену храну, опрему или играчке по најповољнијим
              акцијским ценама.
            </P>

            <div className='flex md:flex-row flex-col xl:gap-40 mb-20'>
              <div className='w-1/8 px-2'>
                <FilterKategorije
                  numberOfProductsByType={products.filter((p) => p.akcija)}
                />
                <FilterTip
                  numberOfProductsByType={items.filter((p) => p.akcija)}
                />

                <FilterSort />
              </div>
              <GridContainer>
                {items &&
                  items
                    .filter((f) => f.akcija)
                    .slice(0, pagination.page * pagination.perPage)
                    .map((p, idx) => <NonSwiperProizvod key={idx} {...p} />)}
                {
                  (items.filter((item) => item.akcija).length = 0 && (
                    <H2>Тренутно нема производа на акцији</H2>
                  ))
                }
              </GridContainer>
            </div>
            {items.filter((f) => f.akcija).length >
              pagination.perPage * pagination.page && (
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
  );
};

export default Akcije;
