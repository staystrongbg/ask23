// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

import styles from '../styles/swiper.module.scss';

// import required modules
const photos = [
  {
    title: 'test naslov 1',
    bg: '/animals/alexandru-rotariu-o_QTeyGVWjQ-unsplash.jpg',
  },
  {
    title: 'test naslov 2',
    bg: '/animals/marko-blazevic-zBvVuRJ71vU-unsplash.jpg',
  },
  {
    title: 'test naslov 3',
    bg: '/animals/ricky-kharawala-adK3Vu70DEQ-unsplash.jpg',
  },
];

const SwiperComponent = () => {
  return (
    <Swiper grabCursor={true} loop className={styles.swiper}>
      {photos.map((photo, idx) => (
        <SwiperSlide className={styles['swiper-slide']} key={photo.title}>
          <div className={`h-full w-full `}>
            <img src={photo.bg} alt='' />
            <h3 className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-6xl font-bold'>
              {photo?.title}
            </h3>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SwiperComponent;
