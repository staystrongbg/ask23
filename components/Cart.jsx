import { AiOutlineShoppingCart } from 'react-icons/ai';
import { useGlobalContext } from '../context';
import { FaTimes } from 'react-icons/fa';
import Button2 from './Buttone2';
import Divider from './Divider';
import Image from 'next/image';
const Cart = () => {
  const { proizvodiKorpa, setCart, removeItemFromCart, setProductIndex } =
    useGlobalContext();

  return (
    <div className='flex flex-col'>
      <span
        onClick={(prev) => setCart(!prev)}
        className='text-gray-50  bg-indigo-700   items-center px-4 py-2 text-xl cursor-pointer flex justify-between w-full'
      >
        Ваша корпа
        <FaTimes />
      </span>
      {proizvodiKorpa &&
        proizvodiKorpa.map((item, idx) => {
          setProductIndex(idx);
          return (
            <div key={item.id}>
              <div className='flex px-2 py-1 items-center '>
                <span className='border flex items-center justify-center border-gray-300 p-1'>
                  <Image
                    objectFit='cover'
                    width={80}
                    height={80}
                    placeholder='blur'
                    blurDataURL={item.image}
                    src={item.image}
                    alt={item.name}
                  />
                </span>
                <div className=' text-base m-4 w-full'>
                  <p className='text-gray-900 flex justify-between w-full'>
                    <span>{item.name}</span>
                    <span>{item.price} дин</span>
                  </p>
                  <div className='text-gray-400 flex justify-between mt-2'>
                    <span>Kол. {item.kolicina}</span>
                    <span
                      className='text-red-900 cursor-pointer tracking-wider uppercase'
                      onClick={() => removeItemFromCart(item.id)}
                    >
                      обриши
                    </span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      {!proizvodiKorpa.length && (
        <div className='flex flex-col items-center justify-center'>
          <h2 className='text-gray-600 text-2xl  my-10'>Корпа је празна</h2>
          <span className='text-gray-800 text-5xl text-center'>
            <AiOutlineShoppingCart />
          </span>
        </div>
      )}
      {proizvodiKorpa.length > 0 && (
        <>
          <Divider />
          <h2 className='text-gray-800 text-2xl my-4 text-right font-bold'>
            <span className='mr-2'> Укупно:</span>
            {proizvodiKorpa.reduce((total, item) => {
              total = total + +item.price * item.kolicina;
              return total;
            }, null)}{' '}
            <span className='ml-1'>дин</span>
          </h2>
          <Button2 title='заврши куповину' />
          <p className='text-sm text-gray-500 cursor-pointer text-center my-2'>
            <span onClick={(prev) => setCart(!prev)}>
              или наставите куповину →
            </span>
          </p>
        </>
      )}
    </div>
  );
};

export default Cart;
