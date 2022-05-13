import Layout from '../components/Layout';
import Meta from '../components/Meta';
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
