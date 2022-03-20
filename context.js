import { useContext, createContext, useState, useEffect } from 'react';
import products from './products.json';
import { categoryData } from './kategorijeData';
import useOnScroll from './useOnScroll';
import useSearchOnSubmit from './useSearchOnSubmit';
const AppContext = createContext();

const AppProvider = ({ children }) => {
  const links = [
    { href: '/', name: 'почетна' },
    { href: '/brendovi', name: 'брендови' },
    { href: '/o-nama', name: 'о нама' },
    { href: '/kontakt', name: 'контакт' },
  ];

  //
  //EMAIL PASSWORD OW2GoJ?u;(Xi

  // custom hooks
  const { height, setHeight, handleScroll } = useOnScroll();
  const { searchTerm, setSearchTerm, handleSearch, kbEvents } =
    useSearchOnSubmit();

  const [isActive, setIsActive] = useState(0);

  const [produkti, setProdukti] = useState(
    products.filter((p) => p.novo === true)
  );

  const [searchProducts, setSearchProducts] = useState([]); // state for searchInput only

  useEffect(() => {
    setSearchProducts(
      products.filter((o) =>
        o.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  }, [searchTerm]);

  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    if (window.innerWidth < 1130) {
      setScroll(true);
    }
  }, []);

  return (
    <AppContext.Provider
      value={{
        searchTerm,
        setSearchTerm,
        setProdukti,
        produkti,
        products,
        height,
        setHeight,
        handleScroll,
        isActive,
        setIsActive,
        handleSearch,
        links,
        scroll,
        searchProducts,
        kbEvents,
        categoryData,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
