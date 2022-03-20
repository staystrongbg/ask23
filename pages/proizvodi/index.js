import { useEffect, useState } from 'react';
import Kategorije from '../../components/Kategorije';
import Layout from '../../components/Layout';
import Proizvod from '../../components/Proizvod';
import { useGlobalContext } from '../../context';
const SviProizvodi = () => {
  const { height, products, categoryData } = useGlobalContext();
  const [items, setItems] = useState(products);
  const [titles, setTitles] = useState([
    ...new Set(products.map((v) => v.title)),
  ]);
  //update items on each change

  return (
    <Layout>
      <div className={`wrapper w-full  bg-gray-200`}>
        <section className='px-5 py-10 bg-gray-200'>
          <div className='flex flex-col  w-5/6 m-auto mt-12 mb-12'>
            <h1 className='text-3xl text-center uppercase'>сви производи</h1>
            <p className='w-3/4 text-center m-auto text-base border-b py-10 border-dashed border-gray-500 mb-20'>
              Свака животиња има своје потребе, навике али и карактер на основу
              чега пажљиво правимо понуду производа за наше купце. Све што је
              потребно Вашим кућним љубимцима можете пронаћи у нашем пет схоп-у.
              Приуштите им омиљену храну, опрему или играчке по најповољнијим
              акцијским ценама.
            </p>

            <div className='flex gap-40'>
              <div className='grow-1 '>
                <ul className='font-bold uppercase tracking-widest'>
                  Категорије
                  <div className='border-b mb-8 border-gray-300 py-2 '></div>
                  {titles.map((title, idx) => (
                    <li
                      onClick={(e) =>
                        setItems(
                          products.filter(
                            (k) => k.title === e.target.textContent
                          )
                        )
                      }
                      key={idx}
                      className='list-none font-bold cursor-pointer text-blue-500 text-sm mb-3 tracking-wide whitespace-nowrap capitalize'
                    >
                      {title}
                    </li>
                  ))}
                </ul>
              </div>
              <div className='flex flex-wrap grow-3  gap-5 py-10  '>
                {items.map((p, idx) => (
                  <Proizvod key={idx} {...p} />
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
    //MA SSVAKOJ STRANI POSTAVITI MT-40
    //kartice sa svim kategorijama
  );
};

export default SviProizvodi;
