import Layout from '../../components/Layout';
import products from '../../products.json';
import Button2 from '../../components/Buttone2';
import { useGlobalContext } from '../../context';
import { useRef, useState } from 'react';
import Image from 'next/image';
const ProizvodPojedinacno = ({ product }) => {
  const { proizvodiKorpa, setProizvodiKorpa, shakeThatCart } =
    useGlobalContext();

  const dodajProizvodUKorpu = () => {
    const tempProduct = { ...product, kolicina: kolicinaRef.current.value };
    add(proizvodiKorpa, tempProduct);
    kolicinaRef.current.value = '1';
    shakeThatCart();
    // localStorage.setItem('korpa', JSON.stringify(tempProduct));
    //mora da bude push u arr ovako ako samo setujes on gazi prethodni unos i cuva samo posslednji
    // setProizvodiKorpa(proizvodiKorpa.map((p) => p));
  };

  const kolicinaRef = useRef(null);

  // useEffect(() => {
  //   setProizvodiKorpa([JSON.parse(localStorage.getItem('korpa'))]);
  // }, []);

  // useEffect(() => {
  //   console.log(proizvodiKorpa);
  // }, [proizvodiKorpa]);

  function add(arr, tempP) {
    // const indexFound = arr.some((el) => el.id === tempP.id);

    // function (return index if match / -1 if no match
    let indexFound = arr.findIndex(
      (element) => element._id.$oid === tempP._id.$oid
    );
    console.log(tempP);
    if (indexFound < 0) setProizvodiKorpa([...arr, tempP]);
    if (indexFound >= 0) {
      proizvodiKorpa[indexFound].kolicina =
        +proizvodiKorpa[indexFound].kolicina + +kolicinaRef.current.value;
    }

    return arr;
  }

  return (
    <Layout>
      <div className={`wrapper w-full  bg-gray-200 `}>
        <article className='flex flex-col lg:w-4/5 w-full m-auto p-4 bg-transparent'>
          <h1 className='text-3xl mb-5 text-orange-900 '>{product.name}</h1>
          <div className='flex md:flex-row flex-col gap-4'>
            <div className='flex justify-center xl:max-w-[600px] '>
              <Image
                objectFit='cover'
                width='600px'
                height='600px'
                placeholder='blur'
                blurDataURL={product.image}
                src={product.image}
                alt={product.name}
              />
            </div>
            <div className='sm:text-base text-sm mt-2 flex flex-col gap-6'>
              <div className=''>
                <p className='font-bold mb-2 text-gray-600'>
                  Детаљи о производу
                </p>
                <p className='text-gray-800'>{product.detail}</p>
              </div>
              <div>
                <div className=' flex items-center gap-10'>
                  <div className='cena flex flex-col'>
                    <span>цена</span>
                    <span className='sm:text-2xl text-xl font-bold text-gray-50 bg-orange-600 px-1 rounded-sm'>
                      {product.price}
                    </span>
                  </div>
                  <div className='cena flex flex-col'>
                    <span>количина</span>
                    <input
                      ref={kolicinaRef}
                      className='w-10 p-1 font-bold text-center text-gray-600'
                      defaultValue={1}
                      min={1}
                      type='number'
                    />
                  </div>
                  <Button2
                    title='додај у корпу'
                    onClick={dodajProizvodUKorpu}
                  />
                </div>
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
      product: products.find(
        (p) => p._id.$oid.toString() === context.params.id
      ),
    },
  };
};

export const getStaticPaths = async () => {
  return {
    paths: products.map((l) => {
      return {
        params: { id: l._id.$oid.toString() },
      };
    }),
    fallback: false,
  };
};
export default ProizvodPojedinacno;
