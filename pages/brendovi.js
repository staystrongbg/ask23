import Layout from '../components/Layout';
import { H1, P, createArr } from '../components/utils';

import Placeholder from '../components/Placeholder';
const Brendovi = () => {
  return (
    <Layout>
      <div className={`wrapper w-full   `}>
        <div className='flex flex-col  xl:w-5/6 w-full m-auto mb-12'>
          <H1 className='my-8 text-center'>Брендови</H1>

          <P className='m-auto text-center'>
            Ово је списак свих брендова чији смо дистрибутер
          </P>

          <section className=' m-auto flex flex-wrap gap-4'>
            {createArr(18).map((item) => (
              <Placeholder key={item} item={item} width='w-[240px]' />
            ))}
          </section>
        </div>
      </div>
    </Layout>
  );
};

export default Brendovi;
