import Link from 'next/link';
import Button from './Button';
import MultipleSwipers from './MultipleSwipers';
import { useGlobalContext } from '../context';
const Akcije = () => {
  const { products } = useGlobalContext();
  return (
    <section className='  px-5 py-10 bg-gray-100'>
      <div className='flex flex-col items-center justify-center xl:w-5/6 w-full m-auto mt-12 mb-12'>
        <h2 className='text-3xl uppercase'>производи на акцији</h2>

        <p className='par w-3/4 text-center text-base border-b py-10 border-dashed border-gray-500'>
          Свака животиња има своје потребе, навике али и карактер на основу чега
          пажљиво правимо понуду производа за наше купце. Све што је потребно
          Вашим кућним љубимцима можете пронаћи у нашем пет схоп-у. Приуштите им
          омиљену храну, опрему или играчке по најповољнијим акцијским ценама.
        </p>
        <Link href='/akcije'>
          <a>
            <Button title='сви производи на акцији' />
          </a>
        </Link>
        <div className='flex flex-wrap w-full gap-5 py-10 justify-center '>
          <MultipleSwipers products={products.filter((p) => p.akcija)} />
        </div>
      </div>
    </section>
  );
};

export default Akcije;
