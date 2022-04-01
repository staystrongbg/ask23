import { useEffect } from 'react';
import { FaTimes } from 'react-icons/fa';
import { useGlobalContext } from '../context';
import Proizvod from './Proizvod';
const Modal = ({ isSearching }) => {
  const { setSearchTerm, searchProducts, kbEvents } = useGlobalContext();

  return (
    <div
      className={`fixed  top-4 left-4 right-4 bottom-4 bg-gray-200/90 z-50 flex items-center justify-center flex-wrap overflow-auto p-4 gap-8 shadow-lg rounded-md  `}
    >
      <span
        className='absolute top-4 right-4 cursor-pointer'
        onClick={() => setSearchTerm('')}
      >
        <FaTimes className='w-[24px] h-[24px] text-gray-800' />
      </span>
      {searchProducts &&
        searchProducts.map((p, idx) => <Proizvod key={idx} {...p} />)}
      {!searchProducts.length && (
        <h2 className='price  inline text-gray-700   text-xl'>
          Nema proizvoda koji odgovaraju pretrazi...
        </h2>
      )}
    </div>
  );
};

export default Modal;
