export const cardStyle = (bg, pawPos) => {
  return `${bg} w-[200px] h-[200px] rounded-sm items-center relative justify-between flex flex-col overflow-hidden shadow-custom hover:scale-110 transition-all bg-blend-multiply  bg-[url('/animals/paw.svg')] bg-no-repeat ${pawPos}`;
};
export const imgStyle = (margin) => {
  return ` object-cover w-full h-full absolute ${margin}`;
};

export const detailsContainer = (margin, textAlign) => {
  return `${margin} ${textAlign}  absolute flex flex-col gap-2  `;
};

export const imgWidth = (width) => {
  return `${width} h-2/3  absolute left-0 bottom-0`;
};

export const headingStyle = (color) => {
  return `text-2xl tracking-normal  uppercase head ${color}`;
};

export const textStyle = (color) => {
  return `text-sm ${color} z-10 par`;
};
