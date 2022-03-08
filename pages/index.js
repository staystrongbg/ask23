import Link from 'next/link';
import Meta from '../components/Meta';
// import SwiperComponent from '../components/SwiperComponent';
import MultipleSwipers from '../components/MultipleSwipers';
import Layout from '../components/Layout';
import Button from '../components/Button';
//needed for category section
import Kategorije from '../components/Kategorije';
import { useState } from 'react';
import { useGlobalContext } from '../context';
import { FaTimes } from 'react-icons/fa';
export default function Home() {
  const {
    produkti,
    setProdukti,
    products,
    isActive,
    setIsActive,
    searchTerm,
    setSearchTerm,
  } = useGlobalContext();

  //lokani stejtovi i funkcije
  const [novo, setNovo] = useState(false);
  const [preporuka, setPreporuka] = useState(false);
  const [filtrirano, setFiltrirano] = useState(['ново', 'препорука']);

  const handleCategory = (e, idx) => {
    setIsActive(idx);
    setProdukti(
      e === 'ново'
        ? products.filter((p) => p.novo === true)
        : e === 'препорука'
        ? products.filter((p) => p.preporuka === true)
        : products
    );
  };

  return (
    <>
      <Layout>
        <Meta title='Početna' />
        <div className=' m-auto w-full  min-h-screen  '>
          <div className={`wrapper w-full`}>
            <main className='flex w-5/6 items-center justify-between m-auto h-screen  '>
              {/* hero content */}
              <div className='w-1/2 p-8 flex flex-col items-start gap-8'>
                <h1 className='text-6xl font-bold uppercase'>аск23</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Inventore autem dolor numquam aliquam eum ratione vero.
                </p>
                <Button title='више' />
              </div>
              {/* hero content */}
              <Kategorije />
            </main>
          </div>
          {/* akccija sekcija */}
          <section className='  px-5 py-10 bg-gray-100'>
            <div className='flex flex-col items-center justify-center w-5/6 m-auto mt-12 mb-12'>
              <h2 className='text-3xl uppercase'>производи на акцији</h2>

              <p className='w-3/4 text-center text-base border-b py-10 border-dashed border-gray-500'>
                Свака животиња има своје потребе, навике али и карактер на
                основу чега пажљиво правимо понуду производа за наше купце. Све
                што је потребно Вашим кућним љубимцима можете пронаћи у нашем
                пет схоп-у. Приуштите им омиљену храну, опрему или играчке по
                најповољнијим акцијским ценама.
              </p>
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
          {/* akccija sekcija */}
          {/* novo u ponudi */}
          <section className='  px-5 py-10 bg-gray-100'>
            <div className='flex flex-col items-center justify-center w-5/6 m-auto mt-12 mb-12'>
              <div className='flex gap-10'>
                {filtrirano.map((i, idx) => (
                  <h2
                    key={idx}
                    className={` ${
                      isActive === idx && 'border-b-4 border-red-400'
                    } text-3xl cursor-pointer uppercase select-none `}
                    onClick={(e) => handleCategory(e.target.textContent, idx)}
                  >
                    {i}
                  </h2>
                ))}
              </div>

              <p className='w-3/4 text-center text-base border-b py-10 border-dashed border-gray-500'>
                Пет Шоп АСК23 се труди да своје верне потрошаче обавештава о
                најновијин производима
              </p>
              <div className='flex flex-wrap w-full gap-5 py-10 justify-center '>
                <MultipleSwipers products={produkti} />
              </div>
            </div>
          </section>
        </div>
        {searchTerm && (
          <div className='fixed  top-4 left-4 right-4 bottom-4 bg-gray-50/90 z-50 flex items-center justify-center flex-wrap overflow-auto p-4 gap-8 shadow-lg rounded-md'>
            <span
              className='absolute top-4 right-4 cursor-pointer'
              onClick={() => setSearchTerm('')}
            >
              <FaTimes className='w-[24px] h-[24px] text-gray-800' />
            </span>
            {produkti &&
              produkti.map((p, idx) => (
                <div
                  key={idx}
                  className='w-[300px] h-[400px] bg-gray-100 shadow-md hover:shadow-xl rounded-md cursor-pointer transition-all   border-2 '
                  onClick={() => console.log(idx)}
                >
                  <div className='w-full h-1/2'>
                    <img
                      className='product-image  rounded-t-md object-cover h-full w-full'
                      src={p.image}
                      alt=''
                    />
                  </div>
                  <div className='px-4 flex flex-col justify-center items-start gap-2 h-1/2'>
                    <p className='text-gray-500'>Цена: </p>
                    <h2 className='price font-bold inline text-gray-700   text-xl'>
                      {p.price * (idx + 10)},00 дин
                    </h2>
                    <h3 className='title text-xl text-gray-700 '>{p.name}</h3>
                    <p className='details text-sm text-gray-600'>{p.detail}</p>
                    {/* <Button title='više' /> */}
                  </div>
                </div>
              ))}
          </div>
        )}
      </Layout>
    </>
  );
}
