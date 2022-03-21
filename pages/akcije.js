import Layout from '../components/Layout';
import Proizvod from '../components/Proizvod';
import { useGlobalContext } from '../context';
const Akcije = () => {
  const { products, height } = useGlobalContext();
  //ne radi dobro search na /akcije
  //treba filtrirati

  return (
    <Layout>
      <div className={`wrapper w-full  bg-gray-200 py-20`}>
        <section className='px-5 py-10 bg-gray-200'>
          <div className='flex flex-col items-center justify-center w-5/6 m-auto mt-12 mb-12'>
            <h1 className='text-3xl uppercase  '>
              сви производи тренутно на акцији
            </h1>
            <p className='w-3/4 text-center text-base border-b py-10 border-dashed border-gray-500'>
              Свака животиња има своје потребе, навике али и карактер на основу
              чега пажљиво правимо понуду производа за наше купце. Све што је
              потребно Вашим кућним љубимцима можете пронаћи у нашем пет схоп-у.
              Приуштите им омиљену храну, опрему или играчке по најповољнијим
              акцијским ценама.
            </p>
            <div className='flex flex-wrap m-auto gap-5 py-10 justify-center w-5/6'>
              {products
                .filter((f) => f.akcija)
                .map((p, idx) => (
                  <Proizvod key={idx} {...p} />
                ))}
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Akcije;
