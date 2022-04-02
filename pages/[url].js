import Layout from '../components/Layout';
import products from '../products.json';
import NonSwiperProizvod from '../components/NonSwiperProizvod';
import SwiperComponent from '../components/SwiperComponent';
import { FilterSort } from '../components/FilterKategorije';
import { useGlobalContext } from '../context';
import { useEffect } from 'react';
import Meta from '../components/Meta';
import { H1, P } from '../components/utils';

const Kategorija = ({ page }) => {
  const { setItems, items } = useGlobalContext();

  useEffect(() => {
    setItems(page);
  }, [items, page]);

  return (
    <Layout>
      <Meta title={page[0].title} />

      <div className={`wrapper w-full  bg-gray-200 `}>
        {/* //top slider */}
        <div className='py-5'>
          <SwiperComponent photos={items.map((img) => img.image)} />
        </div>
        <section className='sm:px-5 px-1  bg-gray-200'>
          <div className='flex flex-col  xl:w-5/6 w-full m-auto mt-12 mb-12'>
            <H1>{page[0].title}</H1>
            <P>
              Свака животиња има своје потребе, навике али и карактер на основу
              чега пажљиво правимо понуду производа за наше купце. Све што је
              потребно Вашим кућним љубимцима можете пронаћи у нашем пет схоп-у.
              Приуштите им омиљену храну, опрему или играчке по најповољнијим
              акцијским ценама.
            </P>

            <div className='flex md:flex-row flex-col xl:gap-40'>
              <div className='xl:grow-1 px-2'>
                <FilterSort />
              </div>
              {/* iskljuciti wrap i aktivirati flex-col */}
              <div className='flex flex-wrap grow-3 jusitfy-center xl:gap-5 gap-2 py-10  '>
                {page &&
                  page.map((p) => <NonSwiperProizvod key={p.id} {...p} />)}
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};
//bolja opcija je da bude jedan zaseban json za proizvode
//a sto je za interfejs da bude odvojeno da se uprosti
export const getStaticProps = async (context) => {
  return {
    props: {
      page: products.filter((p) => p.link === context.params.url),
    },
  };
};

export const getStaticPaths = async () => {
  return {
    paths: products.map((l) => {
      return {
        params: { url: l.link },
      };
    }),
    fallback: false,
  };
};
export default Kategorija;
