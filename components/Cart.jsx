import { AiOutlineShoppingCart } from 'react-icons/ai';
import { useGlobalContext } from '../context';
import { FaTimes, FaTrash } from 'react-icons/fa';
import Button2 from './Buttone2';
import Divider from './Divider';
import Image from 'next/image';
import { useEffect, useState, useRef } from 'react';
const Cart = () => {
  const { proizvodiKorpa, setCart, removeItemFromCart } = useGlobalContext();

  const [zavrsiKupovinu, setZavrsiKupovinu] = useState(false);
  const sendMail = () => {
    console.log(proizvodiKorpa);
  };
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
              <div className='flex px-2 items-center justify-start '>
                <span className='border flex items-center justify-center border-gray-300 p-1 '>
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
                <div className=' text-base m-2 w-full'>
                  <p className='text-gray-900 flex justify-between w-full '>
                    <span className=' text-gray-600 text-sm '>{item.name}</span>
                    <span className='text-red-600 whitespace-nowrap '>
                      {item.price} дин
                    </span>
                  </p>
                  <div className='text-gray-500 flex justify-between mt-2'>
                    <span>Kол. {item.kolicina}</span>
                    <span
                      className='text-gray-500 cursor-pointer tracking-wider uppercase'
                      onClick={() => removeItemFromCart(item._id.$oid)}
                    >
                      <FaTrash />
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
          <Button2
            title='заврши куповину'
            onClick={() => setZavrsiKupovinu(true)}
          />
          <p className='text-sm text-gray-500 cursor-pointer text-center my-2'>
            <span onClick={() => setCart(false)}>или наставите куповину →</span>
          </p>
        </>
      )}
      {zavrsiKupovinu && (
        <div className='fixed top-2 left-2 bottom-2 right-2 rounded-lg bg-gray-50 flex flex-col items-center justify-start gap-10  p-4 overflow-scroll'>
          <h2 className='text-gray-700 text-4xl uppercase  '>
            заврши куповину
          </h2>
          <span
            className='text-gray-800 text-2xl p-2 absolute top-2 right-2 cursor-pointer'
            title='izadji'
            onClick={() => setZavrsiKupovinu(false)}
          >
            <FaTimes />
          </span>
          <table className='text-gray-500 border-collapse border-gray-600'>
            <tr>
              <th>производ</th>
              <th>количина</th>
              <th>цена</th>
            </tr>
            {proizvodiKorpa.map((p) => {
              console.log(p);
              return (
                <>
                  <tr key={p._id.$id}>
                    <td className='border p-4 border-gray-600 '>{p.name}</td>
                    <td className='border p-4 border-gray-600 '>
                      {p.kolicina}
                    </td>
                    <td className='border p-4 border-gray-600 '>{p.price}</td>
                  </tr>
                </>
              );
            })}
            <tr className='text-left'>
              <td>*цене су у динарима</td>
              <td>укупно:</td>
              <td className='font-bold p-2'>
                {proizvodiKorpa.reduce((total, item) => {
                  total = total + +item.price * item.kolicina;
                  return Math.round((total + Number.EPSILON) * 100) / 100;
                }, 0)}
              </td>
            </tr>
          </table>
          <form className='flex flex-col gap-2 border p-4 bg-white text-gray-600 w-96'>
            <input
              placeholder='email'
              className='border-b  p-4'
              type='email'
              name='email'
            />
            <input placeholder='ime' className='border-b  p-4' type='text' />
            <input
              placeholder='prezime'
              className='border-b  p-4'
              type='text'
              name='prezime'
            />
            <input
              placeholder='adresa'
              className='border-b  p-4'
              type='text'
              name='adresa'
            />
            <input
              placeholder='telefon'
              className='border-b  p-4'
              type='text'
              name='telefon'
            />

            <Button2 title='пошаљи' onClick={sendMail} type='button' />
          </form>
        </div>
      )}
    </div>
  );
};

export default Cart;
