import MultipleSwipers from '../components/MultipleSwipers';
import { useState } from 'react';
import { useGlobalContext } from '../context';
import { H2, P } from './utils';

const Noviteti = () => {
  //lokani stejtovi i funkcije
  const [novo, setNovo] = useState(false);
  const [preporuka, setPreporuka] = useState(false);
  const [filtrirano, setFiltrirano] = useState(['ново', 'препорука']);

  const { produkti, setProdukti, products, isActive, setIsActive } =
    useGlobalContext();

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
    <section className='  px-5 py-10 bg-gray-200'>
      <div className='flex flex-col items-center justify-center xl:w-5/6 m-auto mt-12 mb-12'>
        <div className='flex gap-10'>
          {filtrirano.map((i, idx) => (
            <H2
              key={idx}
              onClick={(e) => handleCategory(e.target.textContent, idx)}
              className={` ${
                isActive === idx && 'border-b-4 border-red-400'
              } sm:text-2xl text-xl cursor-pointer uppercase select-none `}
            >
              {i}
            </H2>
          ))}
        </div>
        <P>
          Пет Шоп АСК23 се труди да своје верне потрошаче обавештава о
          најновијин производима
        </P>
        <div className='flex flex-wrap w-full gap-5 py-10 justify-center '>
          <MultipleSwipers products={produkti} />
        </div>
      </div>
    </section>
  );
};

export default Noviteti;
