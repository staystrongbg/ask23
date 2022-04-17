import { useEffect } from 'react';
import { useState } from 'react';
import { FaChevronRight } from 'react-icons/fa';
import { useGlobalContext } from '../context';
import Divider from './Divider';
import { LIST_NAME_STYLE, FILTERI_STYLE } from './utils';

export const FilterKategorije = () => {
  const {
    products,
    showTitles,
    setShowTitles,
    setItems,
    titles,
    vrstaZivotinje,
    setVrstaZivotinje,
    showTip,
    setShowTip,
    tip,
    setTip,
  } = useGlobalContext();

  return (
    <ul className={LIST_NAME_STYLE}>
      <span
        className='flex items-center justify-start w-full mb-2 cursor-pointer  '
        onClick={() => setShowTitles(!showTitles)}
      >
        животиња
        <FaChevronRight className={` ${showTitles && 'rotate-90'}`} />
      </span>
      {showTitles &&
        titles.map((title, idx) => (
          <li
            onClick={(e) => {
              setShowTitles(false);
              setShowTip(true);
              setVrstaZivotinje(
                products.filter((k) => k.title === e.target.textContent)
              );
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

export const FilterTip = () => {
  const {
    setItems,
    items,
    showTip,
    setShowTip,
    vrstaZivotinje,
    vrsteProizvoda,
    setVrsteProizvoda,
  } = useGlobalContext();

  useEffect(() => {
    setVrsteProizvoda([...new Set(vrstaZivotinje.map((v) => v.tip)), 'све']);
  }, [vrstaZivotinje]);

  return (
    <ul className={`${LIST_NAME_STYLE}  `}>
      <span
        className='flex items-center justify-start w-full mb-2 cursor-pointer  '
        onClick={() => setShowTip(!showTip)}
      >
        тип производа
        <FaChevronRight className={` ${showTip && 'rotate-90'}`} />
      </span>
      {showTip &&
        vrsteProizvoda.map((vrsta, idx) => (
          <li
            onClick={(e) => {
              setItems(
                e.target.textContent === 'све'
                  ? vrstaZivotinje
                  : vrstaZivotinje.filter((z) => z.tip === e.target.textContent)
              );
            }}
            tabIndex='0'
            key={idx}
            className={`list-none font-bold cursor-pointer text-blue-500 text-sm mb-3 tracking-wide whitespace-nowrap capitalize ml-4`}
          >
            {vrsta}
          </li>
        ))}
      {showTip && !vrsteProizvoda.length && (
        <p className='text-base font-normal lowercase'>изабери животињу</p>
      )}
      <Divider />
    </ul>
  );
};

export const FilterSort = () => {
  const { setItems, items, showfilters, setShowFilters } = useGlobalContext();
  // console.log(items);
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
