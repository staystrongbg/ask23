import Meta from '../components/Meta';
import Layout from '../components/Layout';
import Kategorije from '../components/Kategorije';
import Modal from '../components/Modal';
import Akcije from '../components/Akcije';
import Noviteti from '../components/Noviteti';
import Hero from '../components/Hero';
import Brendovi from '../components/Brendovi';

export default function Home() {
  return (
    <>
      <Layout>
        <Meta title='Почетна' />

        <div className={`wrapper w-full h-full }`}>
          <main
            className={` flex xl:w-5/6 flex-col items-center justify-between m-auto py-20  `}
          >
            <Kategorije />
          </main>
        </div>
        {/* akccija sekcija */}
        {/* <Akcije /> */}
        {/* novo u ponudi */}
        <Noviteti />
        <Hero />
        <Brendovi />
      </Layout>
    </>
  );
}
