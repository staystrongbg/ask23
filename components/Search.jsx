import { useGlobalContext } from '../context';
import { useState } from 'react';

export const Search = () => {
  const { setSearchTerm, handleSearch } = useGlobalContext();
  //local stejt
  const [isSearching, setIsSearching] = useState(false);
  return (
    <div className='flex items-center gap-2 bg-gray-50 rounded-md '>
      <span
        className={`p-2  bg-gray-500 h-15 w-15 cursor-pointer ${
          isSearching ? 'rounded-l-md' : 'rounded-md'
        }`}
        onClick={() => setIsSearching(true)}
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='24'
          height='24'
          viewBox='0 0 24 24'
          className='fill-gray-50'
        >
          <path d='M23.822 20.88l-6.353-6.354c.93-1.465 1.467-3.2 1.467-5.059.001-5.219-4.247-9.467-9.468-9.467s-9.468 4.248-9.468 9.468c0 5.221 4.247 9.469 9.468 9.469 1.768 0 3.421-.487 4.839-1.333l6.396 6.396 3.119-3.12zm-20.294-11.412c0-3.273 2.665-5.938 5.939-5.938 3.275 0 5.94 2.664 5.94 5.938 0 3.275-2.665 5.939-5.94 5.939-3.274 0-5.939-2.664-5.939-5.939z' />
        </svg>
      </span>
      {isSearching && (
        <>
          <div
            className='top-0 left-0 right-0 bottom-0 fixed z-40'
            onClick={() => setIsSearching(false)}
          ></div>
          <form onSubmit={(e) => handleSearch(e)} className='z-50'>
            <input
              type='text'
              placeholder='trazi...'
              className=' p-2 outline-none h-10 w-full rounded-full transition-all '
              // onChange={}
            />
          </form>
        </>
      )}
    </div>
  );
};

export const SelectCategory = ({ handleSelect }) => {
  return (
    <div>
      <select
        className=' p-2 text-gray-500 bg-gray-50 focus:outline-none h-10 rounded-md border-0 transition-all'
        name='izaberi_kategoriju'
        id='izaberi-kategoriju'
        onChange={handleSelect}
      >
        <option value='najstarije'>Oldest</option>
        <option value='najnovije'>Newest</option>
      </select>
    </div>
  );
};