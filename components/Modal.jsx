import { FaTimes } from 'react-icons/fa';
import { useGlobalContext } from '../context';
const Modal = () => {
  const { produkti, setSearchTerm } = useGlobalContext();
  return (
    <div className='fixed  top-4 left-4 right-4 bottom-4 bg-gray-50/90 z-50 flex items-center justify-center flex-wrap overflow-auto p-4 gap-8 shadow-lg rounded-md'>
      <span
        className='absolute top-4 right-4 cursor-pointer'
        onClick={() => setSearchTerm('')}
      >
        <FaTimes className='w-[24px] h-[24px] text-gray-800' />
      </span>
      {produkti &&
        produkti.map((p, idx) => (
          <div
            key={idx}
            className='w-[300px] h-[400px] bg-gray-100 shadow-md hover:shadow-xl rounded-md cursor-pointer transition-all   border-2 '
            onClick={() => console.log(idx)}
          >
            <div className='w-full h-1/2'>
              <img
                className='product-image  rounded-t-md object-cover h-full w-full'
                src={p.image}
                alt=''
              />
            </div>
            <div className='px-4 flex flex-col justify-center items-start gap-2 h-1/2'>
              <p className='text-gray-500'>Цена: </p>
              <h2 className='price font-bold inline text-gray-700   text-xl'>
                {p.price * (idx + 10)},00 дин
              </h2>
              <h3 className='title text-xl text-gray-700 '>{p.name}</h3>
              <p className='details text-sm text-gray-600'>{p.detail}</p>
              {/* <Button title='više' /> */}
            </div>
          </div>
        ))}
    </div>
  );
};

export default Modal;
