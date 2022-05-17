import MultipleSwipers from '../components/MultipleSwipers';
import { useState } from 'react';
import { useGlobalContext } from '../context';
import { H2, P } from './utils';
import Akcije from './Akcije';

const Noviteti = () => {
  //lokani stejtovi i funkcije
  const [novo, setNovo] = useState(false);
  const [filtrirano, setFiltrirano] = useState(['ново', 'акција']);

  const {
    produkti,
    setProdukti,
    products,
    isActive,
    setIsActive,
    trenutnaAkcija,
  } = useGlobalContext();

  const handleCategory = (e, idx) => {
    setIsActive(idx);
    setProdukti(
      e === 'ново'
        ? products.filter((p) => p.novo === true)
        : e === 'акција'
        ? products.filter((p) => p.akcija === true)
        : products
    );
  };

  return (
    <section className='  px-5 py-10 '>
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
        <P className='text-center'>
          {produkti.length
            ? trenutnaAkcija.tekst
            : `АСК23 - СВЕ ЗА КУЋНЕ ЉУБИМЦЕ се труди да своје верне потрошаче
          обавештава о најновијим производима и акцијама.`}
        </P>

        <div className='flex flex-wrap w-full gap-1 py-10 justify-center '>
          {!produkti.length && (
            <h2 className='text-center text-3xl text-gray-400 w-full'>
              Тренутно нема производа...
            </h2>
          )}
          <MultipleSwipers products={produkti} />
        </div>
      </div>
    </section>
  );
};

export default Noviteti;
