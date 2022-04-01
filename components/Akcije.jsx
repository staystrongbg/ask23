import Link from 'next/link';
import Button from './Button';
import MultipleSwipers from './MultipleSwipers';
import { useGlobalContext } from '../context';
import { H1, P } from './utils';
const Akcije = () => {
  const { products } = useGlobalContext();
  return (
    <section className='  px-5 py-10 bg-gray-200'>
      <div className='flex flex-col items-center justify-center xl:w-5/6 w-full m-auto mt-12 mb-12'>
        <H1> производи на акцији</H1>
        <P>
          Свака животиња има своје потребе, навике али и карактер на основу чега
          пажљиво правимо понуду производа за наше купце. Све што је потребно
          Вашим кућним љубимцима можете пронаћи у нашем пет схоп-у. Приуштите им
          омиљену храну, опрему или играчке по најповољнијим акцијским ценама.
        </P>
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
// podesiti da default render budu sve kategorije
//podeseiti i u svim prozvoidima isto to i uopste svuda gde se renderuju proizvodi
