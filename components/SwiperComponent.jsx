// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Navigation, Pagination, Autoplay, EffectCreative } from 'swiper';

const SwiperComponent = ({ photos }) => {
  return (
    <Swiper
      grabCursor={true}
      effect={'creative'}
      creativeEffect={{
        prev: {
          shadow: true,
          translate: [0, 0, -400],
        },
        next: {
          translate: ['100%', 0, 0],
        },
      }}
      pagination={{ clickable: true }}
      loop
      navigation
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      modules={[Pagination, Navigation, Autoplay, EffectCreative]}
      className='mySwiper'
    >
      {photos.map((photo) => (
        <SwiperSlide key={photo.id} className='h-[600px] w-full'>
          <img
            src={photo.imgSrc}
            alt=''
            className='w-full h-[600px] object-cover object-top'
          />
          <h3 className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-6xl font-bold'>
            {photo?.title}
          </h3>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SwiperComponent;
