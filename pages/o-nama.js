import Layout from '../components/Layout';
import { H1, P } from '../components/utils';

const About = () => {
  return (
    <Layout>
      <div className={`wrapper w-full  bg-gray-200 `}>
        <div className='flex flex-col  xl:w-5/6 w-full m-auto mb-12'>
          <H1 className='mt-8'>Ко је АСК23?</H1>
          <P>
            {' '}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
            quidem velit architecto placeat ipsam deserunt sint, ducimus itaque
            deleniti dolore, quae id, reprehenderit at rem repellat asperiores.
            Facilis, dolorem sunt.
          </P>
        </div>
      </div>
    </Layout>
  );
};

export default About;
