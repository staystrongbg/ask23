import Layout from '../../components/Layout';
import products from '../../products.json';
import Button from '../../components/Button';
import Button2 from '../../components/Buttone2';
import { useGlobalContext } from '../../context';
import { useEffect, useState } from 'react';
import { useRef } from 'react';
const ProizvodPojedinacno = ({ product }) => {
  const { proizvodiKorpa, setProizvodiKorpa, setCart } = useGlobalContext();

  const dodajProizvodUKorpu = (id) => {
    const tempProduct = { ...product, kolicina: kolicinaRef.current.value };
    setProizvodiKorpa([...proizvodiKorpa, tempProduct]);
    kolicinaRef.current.value = '1';
    setCart(true);
    setTimeout(() => setCart(false), 3000);

    // localStorage.setItem('korpa', JSON.stringify(tempProduct));
    //mora da bude push u arr ovako ako samo setujes on gazi prethodni unos i cuva samo posslednji
  };

  const kolicinaRef = useRef(null);

  // useEffect(() => {
  //   setProizvodiKorpa([JSON.parse(localStorage.getItem('korpa'))]);
  // }, []);

  useEffect(() => {
    console.log(proizvodiKorpa);
  }, [proizvodiKorpa]);

  return (
    <Layout>
      <div className={`wrapper w-full  bg-gray-200 py-20`}>
        <article className='flex xl:flex-row flex-col lg:w-4/5 w-full m-auto p-4 bg-transparent'>
          <div className='flex  items-center justify-center xl:w-[800px] xl:h-[800px] w-full h-full object-cover xl:p-4'>
            <img
              className='w-full h-full object-cover'
              src={product.image}
              alt={product.name}
            />
          </div>
          <div className='mt-2 flex flex-col gap-6'>
            <h1 className='text-3xl'>{product.name}</h1>
            <div className='text-base'>
              <p className='font-bold mb-2'>Детаљи о производу</p>
              <p>{product.detail}</p>
            </div>
            <div>
              <ul className='flex gap-16 '>
                <li>цена</li>
                <li>количина</li>
              </ul>
              <div className=' flex justify-start gap-10 items-center'>
                <span className='text-2xl font-bold text-gray-50 bg-red-600 p-2 rounded-sm'>
                  {product.price},00
                </span>
                <input
                  ref={kolicinaRef}
                  className='w-12'
                  defaultValue={1}
                  min={1}
                  type='number'
                />
                <Button2
                  title='додај у корпу'
                  onClick={() => dodajProizvodUKorpu(product.id)}
                />
              </div>
            </div>
          </div>
        </article>
      </div>
    </Layout>
  );
};

//ubaciti kategorije psi, macke, ptice...
//strana kategorije izlistava sve proixvvode te kategorije
//sort opcija cena

export const getStaticProps = async (context) => {
  return {
    props: {
      product: products.find((p) => p.id.toString() === context.params.id),
    },
  };
};

export const getStaticPaths = async () => {
  return {
    paths: products.map((l) => {
      return {
        params: { id: l.id.toString() },
      };
    }),
    fallback: false,
  };
};
export default ProizvodPojedinacno;
