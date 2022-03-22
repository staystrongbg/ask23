// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import styles from '../styles/swiper.module.scss';

// import required modules
import { Navigation, Autoplay } from 'swiper';

const SwiperComponent = ({ photos }) => {
  return (
    <Swiper
      grabCursor={true}
      loop
      navigation
      autoplay={{
        delay: 4500,
        disableOnInteraction: false,
      }}
      modules={[Navigation, Autoplay]}
      className={styles.swiper}
    >
      {photos.map((photo, idx) => (
        <SwiperSlide className={styles['swiper-slide']} key={idx}>
          <img src={photo} alt='' />
          <h3 className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-6xl font-bold'>
            {photo?.title}
          </h3>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SwiperComponent;
