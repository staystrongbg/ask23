import Link from 'next/link';
import Meta from '../components/Meta';
import Layout from '../components/Layout';
import Kategorije from '../components/Kategorije';
import Modal from '../components/Modal';
import Akcije from '../components/Akcije';
import Noviteti from '../components/Noviteti';
import Hero from '../components/Hero';

import { useGlobalContext } from '../context';

export default function Home() {
  const { searchTerm, height } = useGlobalContext();

  return (
    <>
      <Layout>
        <Meta title='Početna' />
        <div className={`wrapper w-full }`}>
          <main
            className={` flex xl:flex-row xl:w-5/6 flex-col items-center justify-between m-auto xl:h-screen h-full xl:py-0 py-20  `}
          >
            {/* hero content */}
            <Hero />
            {/* hero content */}
            <Kategorije />
          </main>
        </div>
        {/* akccija sekcija */}
        <Akcije />
        {/* novo u ponudi */}
        <Noviteti />
      </Layout>
    </>
  );
}
