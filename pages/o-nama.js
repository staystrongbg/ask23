import Layout from '../components/Layout';
import Meta from '../components/Meta';
import Placeholder from '../components/Placeholder';
import { H1, P } from '../components/utils';
import Image from 'next/image';
import Hero from '../components/Hero';

const About = () => {
  return (
    <Layout>
      <Meta title='О нама' />

      <div className={`wrapper w-full  `}>
        <Hero />
      </div>
    </Layout>
  );
};

export default About;
