import { useEffect } from 'react';
import { useState } from 'react';
import { FaChevronRight } from 'react-icons/fa';
import { useGlobalContext } from '../context';
import Divider from './Divider';
import { LIST_NAME_STYLE, FILTERI_STYLE } from './utils';

export const FilterKategorije = ({ numberOfProductsByType }) => {
  const {
    products,
    showTitles,
    setShowTitles,
    setItems,
    items,
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
              // setShowTitles(false);
              setShowTip(true);
              setVrstaZivotinje(
                products.filter((k) => e.target.textContent.includes(k.title))
              );
              setItems(
                e.target.textContent.includes('све')
                  ? products
                  : products.filter((k) =>
                      e.target.textContent.includes(k.title)
                    )
              );
            }}
            tabIndex='0'
            key={idx}
            className='list-none font-bold cursor-pointer text-blue-500 text-sm mb-3 tracking-wide whitespace-nowrap capitalize ml-4 flex justify-between '
          >
            <span>{title}</span>
            <span>
              ({' '}
              {title === 'све'
                ? numberOfProductsByType.length
                : numberOfProductsByType.filter((u) => u.title === title)
                    .length}
              )
            </span>
          </li>
        ))}
      <Divider />
    </ul>
  );
};

export const FilterTip = ({ numberOfProductsByType }) => {
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
    setVrsteProizvoda(
      vrstaZivotinje.length
        ? [...new Set(vrstaZivotinje.map((v) => v.tip)), 'све']
        : []
    );
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
      {/* za proizvodi ne bi isla vrsta zivotinja i tip vec treba da se gadjaju products i title */}
      {showTip &&
        vrsteProizvoda.map((tip, idx) => (
          <li
            onClick={(e) => {
              setItems(
                e.target.textContent.includes('све')
                  ? vrstaZivotinje
                  : vrstaZivotinje.filter((z) =>
                      e.target.textContent.includes(z.tip)
                    )
              );
            }}
            tabIndex='0'
            key={idx}
            className={`list-none font-bold cursor-pointer text-blue-500 text-sm mb-3 tracking-wide whitespace-nowrap capitalize ml-4 flex justify-between`}
          >
            <span>{tip}</span>
            <span>
              (
              {tip === 'све'
                ? numberOfProductsByType.length
                : numberOfProductsByType.filter((u) => tip.includes(u.tip))
                    .length}
              )
            </span>
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
