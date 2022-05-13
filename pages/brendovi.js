import Layout from '../components/Layout';
import { H1, P, createArr, brands } from '../components/utils';

import Placeholder from '../components/Placeholder';
import Meta from '../components/Meta';
import Image from 'next/image';
const Brendovi = () => {
  console.log(brands);
  return (
    <Layout>
      <Meta title='Сви произвођачи' />
      <div className={`wrapper w-full   `}>
        <div className='flex flex-col  xl:w-5/6 w-full m-auto mb-12'>
          <H1 className='my-8 text-center'>Брендови</H1>

          <P className='m-auto text-center'>
            Ово је списак свих брендова чији смо дистрибутер
          </P>

          <section className=' m-auto flex flex-wrap items-center justify-center  gap-8'>
            {brands.map((brand) => (
              <Image
                src={brand}
                width='300px'
                objectFit='contain'
                height='100px'
              />
            ))}
          </section>
        </div>
      </div>
    </Layout>
  );
};

export default Brendovi;
