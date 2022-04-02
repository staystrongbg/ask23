import { FilterKategorije, FilterSort } from '../components/FilterKategorije';
import Layout from '../components/Layout';
import Meta from '../components/Meta';
import NonSwiperProizvod from '../components/NonSwiperProizvod';

import SwiperComponent from '../components/SwiperComponent';
import { useGlobalContext } from '../context';
import { H1, P } from '../components/utils';
const Akcije = () => {
  const { items } = useGlobalContext();
  return (
    <Layout>
      <Meta title='Акције' />

      <div className={`wrapper w-full  bg-gray-200 `}>
        {/* //top slider */}
        <div className='py-5'>
          <SwiperComponent
            photos={items.filter((p) => p.akcija).map((img) => img.image)}
          />
        </div>

        <section className='sm:px-5 px-1 bg-gray-200'>
          <div className='flex flex-col  xl:w-5/6 w-full m-auto mb-12'>
            <H1>сви производи тренутно на акцији</H1>
            <P>
              Свака животиња има своје потребе, навике али и карактер на основу
              чега пажљиво правимо понуду производа за наше купце. Све што је
              потребно Вашим кућним љубимцима можете пронаћи у нашем пет схоп-у.
              Приуштите им омиљену храну, опрему или играчке по најповољнијим
              акцијским ценама.
            </P>

            <div className='flex md:flex-row flex-col xl:gap-40'>
              <div className='xl:grow-1 px-2'>
                <FilterKategorije />
                <FilterSort />
              </div>
              {/* iskljuciti wrap i aktivirati flex-col */}
              <div className='flex flex-wrap grow-3 jusitfy-center xl:gap-5 gap-2 py-10 '>
                {items &&
                  items
                    .filter((f) => f.akcija)
                    .map((p, idx) => <NonSwiperProizvod key={idx} {...p} />)}
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Akcije;
