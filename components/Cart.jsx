import { AiOutlineShoppingCart } from 'react-icons/ai';
import { useGlobalContext } from '../context';
import { FaTimes } from 'react-icons/fa';
import Button2 from './Buttone2';
import Divider from './Divider';
import Image from 'next/image';
import { useEffect } from 'react';
const Cart = () => {
  const { proizvodiKorpa, setCart, removeItemFromCart } = useGlobalContext();
  //ovde se izgleda ne izvrsava ovaj map jer komponenta nije renderovana u trenutku kada iz [id] kliknemo addProduct
  //trebalo bi znaci ili pre njenog rendera da se mapira nekako? ili da se nekako invokuje render a da se to ne vidi

  return (
    <div className='flex flex-col'>
      <span
        onClick={() => setCart(false)}
        className='text-gray-50  bg-indigo-700   items-center px-4 py-2 text-xl cursor-pointer flex justify-between w-full'
      >
        Ваша корпа
        <FaTimes />
      </span>
      {proizvodiKorpa &&
        proizvodiKorpa.map((item) => {
          return (
            <div key={item._id.$oid}>
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
                    <span className='font-semibold text-gray-600 '>
                      {item.name}
                    </span>
                    <span className='text-red-600 font-semibold'>
                      {item.price} дин
                    </span>
                  </p>
                  <div className='text-gray-500 flex justify-between mt-2'>
                    <span>Kол. {item.kolicina}</span>
                    <span
                      className='text-red-900 cursor-pointer tracking-wider uppercase'
                      onClick={() => removeItemFromCart(item._id.$oid)}
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
          <h2 className='text-red-600 text-2xl my-4 text-right font-bold'>
            <span className='mr-2'> Укупно:</span>
            {proizvodiKorpa.reduce((total, item) => {
              total = total + +item.price * item.kolicina;
              return Math.round((total + Number.EPSILON) * 100) / 100;
            }, 0)}
            <span className='ml-1'>дин</span>
          </h2>
          <Button2 title='заврши куповину' />
          <p className='text-sm text-gray-500 cursor-pointer text-center my-2'>
            <span onClick={() => setCart(false)}>или наставите куповину →</span>
          </p>
        </>
      )}
    </div>
  );
};

export default Cart;
