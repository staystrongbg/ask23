import { useEffect, useState } from 'react';
import { FaArrowRight, FaChevronRight } from 'react-icons/fa';
import Kategorije from '../../components/Kategorije';
import Layout from '../../components/Layout';
import Proizvod from '../../components/Proizvod';
import { useGlobalContext } from '../../context';
const SviProizvodi = () => {
  const { height, products, categoryData, scroll } = useGlobalContext();
  const [items, setItems] = useState(products);
  const [showTitles, setShowTitles] = useState(false);
  const [titles, setTitles] = useState([
    ...new Set(products.map((v) => v.title)),
  ]);
  //update items on each change
  // if (scroll) showTitles(true);
  return (
    <Layout>
      <div className={`wrapper w-full  bg-gray-200`}>
        <section className='px-5 py-10 bg-gray-200'>
          <div className='flex flex-col  xl:w-5/6 w-full m-auto mt-12 mb-12'>
            <h1 className='text-3xl text-center uppercase'>сви производи</h1>
            <p className='xl:w-3/4 w-full text-center m-auto text-base border-b py-10 border-dashed border-gray-500 mb-20'>
              Свака животиња има своје потребе, навике али и карактер на основу
              чега пажљиво правимо понуду производа за наше купце. Све што је
              потребно Вашим кућним љубимцима можете пронаћи у нашем пет схоп-у.
              Приуштите им омиљену храну, опрему или играчке по најповољнијим
              акцијским ценама.
            </p>

            <div className='flex md:flex-row flex-col gap-40'>
              <div className='xl:grow-1'>
                <ul className='font-bold uppercase tracking-widest flex-col flex'>
                  <span
                    className='flex items-center justify-start w-full mb-2 cursor-pointer  '
                    onClick={() => setShowTitles(!showTitles)}
                  >
                    Категорије
                    <FaChevronRight
                      className={` ${showTitles && 'rotate-90'}`}
                    />
                  </span>
                  {showTitles &&
                    titles.map((title, idx) => (
                      <li
                        onClick={(e) =>
                          setItems(
                            products.filter(
                              (k) => k.title === e.target.textContent
                            )
                          )
                        }
                        tabIndex='0'
                        key={idx}
                        className='list-none font-bold cursor-pointer text-blue-500 text-sm mb-3 tracking-wide whitespace-nowrap capitalize '
                      >
                        {title}
                      </li>
                    ))}
                  <div className='border-b mb-8 border-gray-300 py-2  '></div>
                </ul>
              </div>
              {/* iskljuciti wrap i aktivirati flex-col */}
              <div className='flex flex-wrap grow-3 jusitfy-center gap-5 py-10  '>
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
