import Layout from '../components/Layout';
import Meta from '../components/Meta';
import Placeholder from '../components/Placeholder';
import { H1, P } from '../components/utils';
import Image from 'next/image';

const About = () => {
  return (
    <Layout>
      <Meta title='О нама' />

      <div className={`wrapper w-full  `}>
        <div className='flex flex-col  xl:w-5/6 w-full m-auto mb-12'>
          <H1 className='my-8 text-center   '>Ко је АСК23?</H1>
          <div className='flex justify-between items-start gap-8 rounded-full  '>
            <Image
              src='/radnja-spolja.jpg'
              width='500px'
              height='500px'
              className='rounded-full'
            />

            <P width='2/3' style='text-left'>
              Из велике љубави према животињама родила се жеља да се отвори
              продавница за куће љубимце која ће у понуди имати све што наше
              љубимце чини ситим и срећним.
            </P>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
