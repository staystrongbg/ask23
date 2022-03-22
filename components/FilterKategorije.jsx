import { useEffect, useState } from 'react';

import { FaChevronRight } from 'react-icons/fa';
import { useGlobalContext } from '../context';

const FilterKategorije = ({ setItems }) => {
  const { products, showTitles, setShowTitles, titles, items } =
    useGlobalContext();

  const [showfilters, setShowFilters] = useState(false);

  const FILTERI_STYLE =
    'list-none font-bold cursor-pointer text-blue-500 text-sm mb-3 tracking-wide whitespace-nowrap capitalize ml-4 ';

  return (
    <div className='xl:grow-1 px-2'>
      <ul className=' font-bold uppercase tracking-widest flex-col flex'>
        <span
          className='flex items-center justify-start w-full mb-2 cursor-pointer  '
          onClick={() => setShowTitles(!showTitles)}
        >
          Категорије
          <FaChevronRight className={` ${showTitles && 'rotate-90'}`} />
        </span>
        {showTitles &&
          titles.map((title, idx) => (
            <li
              onClick={(e) => {
                setItems(
                  e.target.textContent === 'све'
                    ? products
                    : products.filter((k) => k.title === e.target.textContent)
                );
              }}
              tabIndex='0'
              key={idx}
              className='list-none font-bold cursor-pointer text-blue-500 text-sm mb-3 tracking-wide whitespace-nowrap capitalize ml-4 '
            >
              {title}
            </li>
          ))}
        <div className='border-b mb-8 border-gray-300 py-2  '></div>
      </ul>
      <ul className=' font-bold uppercase tracking-widest flex-col flex'>
        <span
          className='flex items-center justify-start w-full mb-2 cursor-pointer  '
          onClick={() => setShowFilters(!showfilters)}
        >
          филтери
          <FaChevronRight className={` ${showfilters && 'rotate-90'}`} />
        </span>
        {showfilters && (
          <>
            <li
              className={FILTERI_STYLE}
              onClick={() =>
                setItems(
                  items.sort((a, b) => a.price - b.price).filter((r) => r)
                )
              }
            >
              цена растуће
            </li>
            <li
              className={FILTERI_STYLE}
              onClick={() =>
                setItems(
                  items.sort((a, b) => b.price - a.price).filter((g) => g)
                )
              }
            >
              цена опадајућее
            </li>
          </>
        )}
        <div className='border-b mb-8 border-gray-300 py-2  '></div>
      </ul>
    </div>
  );
};

export default FilterKategorije;
