import { useEffect, useState } from 'react';

import { FaChevronRight } from 'react-icons/fa';
import { useGlobalContext } from '../context';
import Divider from './Divider';
import { LIST_NAME_STYLE, FILTERI_STYLE } from './utils';

export const FilterKategorije = () => {
  const { products, showTitles, setShowTitles, setItems, titles } =
    useGlobalContext();

  return (
    <ul className={LIST_NAME_STYLE}>
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
      <Divider />
    </ul>
  );
};

export const FilterSort = () => {
  const { setItems, items,showfilters,setShowFilters } = useGlobalContext();


  return (
    <ul className={LIST_NAME_STYLE}>
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
              setItems(items.sort((a, b) => a.price - b.price).map((r) => r))
            }
          >
            цена растуће
          </li>
          <li
            className={FILTERI_STYLE}
            onClick={() =>
              setItems(items.sort((a, b) => b.price - a.price).map((g) => g))
            }
          >
            цена опадајућее
          </li>
        </>
      )}
      <Divider />
    </ul>
  );
};
