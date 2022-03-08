export const detailsContainer = (margin, textAlign) => {
  return `${margin} ${textAlign}  absolute flex flex-col gap-2  `;
};

export const iconStyle = (bg, pawPos) => {
  return `${bg} w-[200px] h-[200px] items-center relative justify-between flex flex-col overflow-hidden shadow-custom hover:scale-110 transition-all  bg-[url('/animals/paw.svg')] bg-no-repeat ${pawPos}`;
};

export const imgStyle = (margin) => {
  return ` object-cover w-full h-full absolute ${margin}`;
};

export const imgWidth = (width) => {
  return `${width}`;
};
//   iconStyle, detailsContainer,imgStyle;

export const categotyData = [
  {
    id: 0,
    image: '/animals/kucov.png',
    name: 'kuce',
    link: '/psi',
    text: 'lorem ipsun dolor...',
    detailsContainer: detailsContainer('left-2 top-6', 'text-left'),
    background: iconStyle('bg-red-400', 'bg-left-bottom'),
    imageStyle: imgStyle('-right-16'),
    imgWidth: 'w-full',
  },
  {
    id: 1,
    image: '/animals/macka.png',
    name: 'mace',
    link: '/mace',
    text: 'lorem ipsun dolor sit emmet...',
    detailsContainer: detailsContainer('right-2 top-10', 'text-right'),
    background: iconStyle('bg-yellow-400'),
    imageStyle: imgStyle('-left-16'),
    imgWidth: 'w-full',
  },
  {
    id: 2,
    image: '/animals/pticica.png',
    name: 'ptice',
    link: '/ptice',
    text: 'lorem ipsun dolor...',
    detailsContainer: detailsContainer('right-2 top-2', 'text-right'),
    background: iconStyle('bg-blue-400', 'bg-right-bottom'),
    imageStyle: imgStyle('-left-20'),
    imgWidth: 'w-full',
  },
  {
    id: 3,
    image: '/animals/ribica.png',
    name: 'ribice',
    link: '/ribice',
    text: 'lorem ipsun dolor...',
    detailsContainer: detailsContainer('left-2 top-3'),
    background: iconStyle('bg-blue-400', 'bg-left-bottom'),
    imageStyle: imgStyle('-right-20'),
    imgWidth: 'w-full',
  },
  {
    id: 4,
    image: '/animals/zec.png',
    name: 'glodari',
    link: '/glodari',
    text: 'lorem ipsun dolor...',
    detailsContainer: detailsContainer('right-2 top-2', 'text-right'),
    background: iconStyle('bg-green-400', 'bg-right-bottom'),
    imageStyle: imgStyle('-left-5'),
    imgWidth: 'w-1/2',
  },
];
