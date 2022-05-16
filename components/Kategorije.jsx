import Link from 'next/link';
import { CategoryCard, CategoryTitle, CategoryImgContainer } from './utils';

const Kategorije = () => {
  const categoryData = [
    {
      image: '/vectors/kuce.svg',
      title: 'пси',
      link: 'psi',
      textStyle: 'text-red-900',
      background: 'bg-red-400',
    },
    {
      image: '/vectors/maca.svg',
      title: 'мачке',
      link: 'macke',
      textStyle: 'text-yellow-900',
      background: 'bg-yellow-400',
    },
    {
      image: '/vectors/papagaj2.svg',
      title: 'птице',
      link: 'ptice',
      textStyle: 'text-blue-800',
      background: 'bg-blue-300',
    },
    {
      image: '/vectors/riba.svg',
      title: 'рибице',
      link: 'ribice',
      textStyle: 'text-blue-900',
      background: 'bg-blue-400',
    },
    {
      image: '/vectors/zec.svg',
      title: 'глодари',
      link: 'glodari',
      textStyle: 'text-green-900',
      background: 'bg-green-400',
    },
  ];

  return (
    <div className='xl:w-5/6 m-auto  w-full flex gap-4 flex-wrap justify-center items-center'>
      {categoryData.map((i, idx) => (
        <Link key={idx} href={`/${i.link}`}>
          <a>
            <CategoryCard className={`${i.background}`}>
              <CategoryTitle className={`${i.textStyle}`}>
                {i.title}
              </CategoryTitle>
              <CategoryImgContainer className='w-1/2    '>
                <img src={i.image} className=' w-full' />
              </CategoryImgContainer>
            </CategoryCard>
          </a>
        </Link>
      ))}

      {/* list of categories goes here */}
    </div>
  );
};

export default Kategorije;

// jedan json sa kategorijama i artiklima
