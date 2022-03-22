import Layout from '../components/Layout';
import products from '../products.json';
import NonSwiperProizvod from '../components/NonSwiperProizvod';
import SwiperComponent from '../components/SwiperComponent';
const Kategorija = ({ page }) => {
  return (
    <Layout>
      <div className={`wrapper w-full  bg-gray-200 py-5`}>
        <div className='h-fit'>
          <SwiperComponent photos={products.map((img) => img.image)} />
        </div>
        {/* <h1 className='text-3xl  text-center'></h1> */}
        <div className='flex flex-col  xl:w-5/6 w-full m-auto mt-12 mb-12'>
          <h1 className='text-3xl text-center uppercase'>{page[0].title}</h1>
          <p className='xl:w-3/4 w-full text-center m-auto text-base border-b py-10 border-dashed border-gray-500 mb-20'>
            Свака животиња има своје потребе, навике али и карактер на основу
            чега пажљиво правимо понуду производа за наше купце. Све што је
            потребно Вашим кућним љубимцима можете пронаћи у нашем пет схоп-у.
            Приуштите им омиљену храну, опрему или играчке по најповољнијим
            акцијским ценама.
          </p>
          <section className='flex xl:gap-5 xl:w-5/6 gap-2 py-10 justify-start w-full flex-wrap'>
            {/* <div className='flex flex-wrap xl:gap-5 gap-2 py-10 justify-center w-full'> */}

            {page.map((p) => (
              <NonSwiperProizvod key={p.id} {...p} />
            ))}
          </section>
        </div>
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
