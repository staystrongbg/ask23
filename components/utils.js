export const cardStyle = (bg, pawPos) =>
  `${bg} w-[160px] h-[160px] xl:w-[200px] xl:h-[200px] rounded-sm items-center relative justify-between flex flex-col overflow-hidden shadow-custom hover:scale-110 transition-all bg-blend-multiply  bg-[url('/animals/paw.svg')] bg-no-repeat ${pawPos}`;

export const imgStyle = (margin) =>
  ` object-cover w-full h-full absolute ${margin}`;

export const detailsContainer = (margin, textAlign) =>
  `${margin} ${textAlign}  absolute flex flex-col gap-2  `;

export const imgWidth = (width) => `${width} h-2/3  absolute left-0 bottom-0`;

export const headingStyle = (color) =>
  ` xl:text-2xl text-xl tracking-normal  uppercase head ${color}`;

export const textStyle = (color) => `text-sm ${color} z-10 par`;
