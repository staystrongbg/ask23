// import {
//   cardStyle,
//   imgStyle,
//   detailsContainer,
//   imgWidth,
//   headingStyle,
//   textStyle,
// } from './components/utils';

// export const cardStyle = (bg, pawPos) =>
//   `${bg} w-[160px] h-[160px] xl:w-[200px] xl:h-[200px] rounded-sm items-center relative justify-between flex flex-col overflow-hidden shadow-custom hover:scale-110 transition-all bg-blend-multiply  bg-[url('/animals/paw.svg')] bg-no-repeat ${pawPos}`;

// export const imgStyle = (margin) =>
//   ` object-cover w-full h-full absolute ${margin}`;

// export const detailsContainer = (margin, textAlign) =>
//   `${margin} ${textAlign}  absolute flex flex-col gap-2  `;

// export const imgWidth = (width) => `${width} h-2/3  absolute left-0 bottom-0`;

// export const headingStyle = (color) =>
//   ` xl:text-2xl text-xl tracking-normal  uppercase head ${color}`;

// export const textStyle = (color) => `text-sm ${color} z-10 par`;

export const categoryData = [
  {
    id: 0,
    image: '/animals/kucov.png',
    title: 'пси',
    link: '/psi',
    text: 'lorem ipsun dolor...',
    textStyle: 'text-red-900',
    detailsContainer: ['left-2 top-6', 'text-left'],
    background: ['bg-red-400', 'bg-left-bottom'],
    imageStyle: '-right-16',
    imgWidth: 'w-full',
  },
  {
    id: 1,
    image: '/animals/macka.png',
    title: 'мачке',
    link: '/mace',
    text: 'lorem ipsun dolor sit emmet...',
    textStyle: 'text-yellow-900',
    detailsContainer: ['right-2 top-4', 'text-right'],
    background: ['bg-yellow-400'],
    imageStyle: '-left-16',
    imgWidth: 'w-full',
  },
  {
    id: 2,
    image: '/animals/pticica.png',
    title: 'птице',
    link: '/ptice',
    text: 'lorem ipsun dolor...',
    textStyle: 'text-blue-800',
    detailsContainer: ['right-2 top-2', 'text-right'],
    background: ['bg-blue-400', 'bg-right-bottom'],
    imageStyle: '-left-20',
    imgWidth: 'w-full',
  },
  {
    id: 3,
    image: '/animals/ribica.png',
    title: 'акваристика',
    link: '/ribice',
    text: 'lorem ipsun dolor...',
    textStyle: 'text-blue-900',
    detailsContainer: ['left-2 top-3'],
    background: ['bg-blue-400', 'bg-left-bottom'],
    imageStyle: '-right-20',
    imgWidth: 'w-full',
  },
  {
    id: 4,
    image: '/animals/zec.png',
    title: 'мале животиње',
    link: '/glodari',
    text: 'lorem ipsun dolor...',
    textStyle: 'text-green-900',
    detailsContainer: ['right-2 top-2', 'text-right'],
    background: ['bg-green-400', 'bg-right-bottom'],
    imageStyle: '-left-5',
    imgWidth: 'w-1/2',
  },
];
