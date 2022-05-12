//kategorija stilovi
export const CategoryCard = ({ children, className }) => {
  return (
    <span
      className={`w-[150px] h-[150px] xl:w-[240px] xl:h-[240px] rounded-lg items-center relative justify-center flex flex-col overflow-hidden shadow-custom hover:scale-110 transition-all  gap-4 bg-blend-multiply border-4 border-gray-800/50 ${className}`}
    >
      {children}
    </span>
  );
};

export const CategoryTitle = ({ className, children }) => {
  return (
    <h3
      className={`${className} xl:text-5xl break-all text-3xl tracking-normal  uppercase head`}
    >
      {children}
    </h3>
  );
};

export const CategoryImgContainer = ({ children, className }) => {
  return <div className={`${className}    `}>{children}</div>;
};

//kategorijastilovi

//dropdown icon stilovi
export const ICON_STYLE =
  'bg-gray-50 rounded-full w-8 h-8 items-center  justify-center flex ';
//footer icon style
export const ICON_STYLE_FOOTER = 'bg-gray-700 text-slate-50  rounded-full p-2';

//filteri
export const UL_LIST_STYLE =
  'flex items-center justify-start w-full mb-4 cursor-pointer sm:text-xl text-base font-bold text-blue-900 whitespace-nowrap';

export const LI_LIST_STYLE =
  'list-none font-bold cursor-pointer text-blue-700 text-base mb-3 tracking-wide whitespace-nowrap  ml-4 flex justify-between ';

//filteri kraj

export const CHEVRON_ROTATING_STYLE = 'rotate-90 transition-all';

//array sa zadatom duzinom
export const createArr = (length) => [...Array(length).keys()];

//custom styled components! TEST TEST TEST :)
export const H1 = ({ children, className = '', onClick = null }) => {
  return (
    <h1
      className={`${className}  xl:text-3xl md:text-2xl sm:text-xl   uppercase`}
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
      className={` ${className} sm:text-2xl text-xl uppercase`}
    >
      {children}
    </h2>
  );
};

//tailwind units
export const P = ({ children, width = '2/3', className = '' }) => {
  return (
    <p
      className={`xl:w-${width}  sm:text-xl text-sm w-full border-b sm:py-10 py-5 border-dashed border-gray-500 mb-20 ${className} `}
    >
      {children}
    </p>
  );
};

//grid product list
export const GridContainer = ({ children, className = '' }) => {
  return (
    <div
      className={`xl:w-4/5 w-full grid ${className} grid-cols-1 sm:grid-cols-2 gap-y-6 xl:gap-y-10 gap-x-2 mt-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-4`}
    >
      {children}
    </div>
  );
};
//brand logos
function importAll(r) {
  return r.keys().map(r);
}

const getBrandLogo = () => {
  const f = importAll(
    require.context('/public/brendovi', false, /\.(png|jpe?g|JPG|webp|svg)$/)
  );

  return f.map((img) => img.default).map((image) => image.src);
};

export const brands = getBrandLogo();
