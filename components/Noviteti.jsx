import MultipleSwipers from '../components/MultipleSwipers';
import { useState } from 'react';
import { useGlobalContext } from '../context';

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
    <section className='  px-5 py-10 bg-gray-100'>
      <div className='flex flex-col items-center justify-center xl:w-5/6 m-auto mt-12 mb-12'>
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

        <p className='par w-3/4 text-center text-base border-b py-10 border-dashed border-gray-500'>
          Пет Шоп АСК23 се труди да своје верне потрошаче обавештава о
          најновијин производима
        </p>
        <div className='flex flex-wrap w-full gap-5 py-10 justify-center '>
          <MultipleSwipers products={produkti} />
        </div>
      </div>
    </section>
  );
};

export default Noviteti;
