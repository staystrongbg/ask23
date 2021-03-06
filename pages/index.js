import Meta from '../components/Meta';
import Layout from '../components/Layout';
import Kategorije from '../components/Kategorije';
import Noviteti from '../components/Noviteti';
import Brendovi from '../components/Brendovi';

export default function Home() {
  return (
    <>
      <Layout>
        <Meta title='ДОБРОДОШЛИ! - Почетна страна' />

        <div
          className={`wrapper w-full h-[600px] naslovna-bg flex items-center justify-center relative `}
        >
          {/* <div className='absolute lg:top-0 top-1/2 right-0 left-0 bottom-0 bg-gradient-to-b  from-gray-50/5 to-gray-50 '></div> */}

          <main
            className={` flex xl:w-5/6 flex-col items-center justify-between m-auto py-20  `}
          >
            <Kategorije />
          </main>
        </div>

        {/* novo u ponudi */}
        <Noviteti />
        <Brendovi />
      </Layout>
    </>
  );
}
