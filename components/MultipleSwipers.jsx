// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
import { Navigation, Autoplay } from 'swiper';
import Button from './Button';
const MultipleSwipers = ({ products }) => {
  return (
    <Swiper
      navigation
       autoplay={{
         delay: 3000,
         disableOnInteraction: false,
       }}
      slidesPerView={3}
      breakpoints={{
        // when window width is >= 1536px
        1536: {
          width: 1536,
          slidesPerView: 5,
          spaceBetween: 30,
        },
        // when window width is >= 768px
        768: {
          width: 768,
          slidesPerView: 2,
          spaceBetween: 1,
        },
        // when window width is >= 768px
        400: {
          // width: 400,
          slidesPerView: 1,
          spaceBetween: 1,
        },
      }}
      modules={[Navigation, Autoplay]}
      className='mySwiper '
    >
      {products.map((p, idx) => (
        <SwiperSlide key={idx} className=' w-0 select-none pb-12 '>
          <div
            className='w-[300px] h-[400px] bg-gray-100 shadow-md hover:shadow-xl rounded-md cursor-pointer transition-all border-2 m-auto'
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
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default MultipleSwipers;
