export const cardStyle = (bg, pawPos) =>
  `${bg} w-[150px] h-[150px] xl:w-[240px] xl:h-[240px] rounded-sm items-center relative justify-between flex flex-col overflow-hidden shadow-custom hover:scale-110 transition-all bg-blend-multiply  bg-[url('/animals/paw.svg')] bg-no-repeat ${pawPos}`;

export const imgStyle = (margin) =>
  ` object-cover w-full h-full absolute ${margin}`;

export const detailsContainer = (margin, textAlign) =>
  `${margin} ${textAlign}  absolute flex flex-col gap-2  `;

export const imgWidth = (width) => `${width} h-2/3  absolute left-0 bottom-0`;

export const headingStyle = (color) =>
  ` xl:text-3xl text-xl tracking-normal  uppercase head ${color}`;

export const textStyle = (color) => `sm:text-base text-sm  ${color} z-10 par`;

//a da postavis slajder umesto hero sekcije?
export const ICON_STYLE =
  'bg-gray-50 rounded-full w-8 h-8 items-center  justify-center flex ';

export const LIST_NAME_STYLE =
  'font-bold sm:text-base text-sm uppercase tracking-widest flex-col flex';

export const FILTERI_STYLE =
  'list-none font-bold  cursor-pointer text-blue-500 text-sm  mb-3 tracking-wide whitespace-nowrap capitalize ml-4 ';

//custom styled components! TEST TEST TEST :)
export const H1 = ({ children, className = null, onClick = null }) => {
  return (
    <h1
      className={`${className}  sm:text-3xl text-2xl text-center uppercase`}
      onClick={onClick}
    >
      {children}
    </h1>
  );
};
export const H2 = ({
  children,
  onClick = null,
  className = null,
  tabIndex = '0',
}) => {
  return (
    <h2
      onClick={onClick}
      tabIndex={tabIndex}
      className={` ${className} sm:text-2xl text-xl text-center uppercase`}
    >
      {children}
    </h2>
  );
};

export const P = ({ children }) => {
  return (
    <p className='xl:w-3/4 sm:text-base text-sm w-full text-center m-auto border-b sm:py-10 py-5 border-dashed border-gray-500 mb-20'>
      {children}
    </p>
  );
};

export const getWindowDimensions = () => {
  const {
    innerWidth: wwidth,
    innerHeight: wheight,
    pageYOffset: wyoffset,
  } = window;
  return {
    wwidth,
    wheight,
    wyoffset,
  };
};
