import { useContext, createContext, useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import products from './products.json';
import { categoryData } from './kategorijeData';
import useOnScroll from './useOnScroll';
import useSearchOnSubmit from './useSearchOnSubmit';
const AppContext = createContext();

const AppProvider = ({ children }) => {
  const router = useRouter();
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
  const [isSearching, setIsSearching] = useState(false);

  useEffect(() => {
    setSearchProducts(
      products.filter((o) =>
        o.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  }, [searchTerm]);

  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    if (window.innerWidth < 1024) {
      setScroll(true);
    }
  }, []);

  const [showTitles, setShowTitles] = useState(false);
  const [showfilters, setShowFilters] = useState(false);

  const [titles] = useState([...new Set(products.map((v) => v.title)), 'све']);

  const [items, setItems] = useState(products);
  const [proizvodiKorpa, setProizvodiKorpa] = useState([]);
  const [cart, setCart] = useState(false);

  //reset
  useEffect(() => {
    setItems(products);
    setShowFilters(false);
    setShowTitles(false);
  }, [router.pathname]);

  // const showCart = () => {
  //   setCart(true);
  // };
  useEffect(() => {
    console.log(proizvodiKorpa);
  }, [proizvodiKorpa]);

  const removeItemFromCart = (id) => {
    setProizvodiKorpa(proizvodiKorpa.filter((item) => item.id !== id));
    // localStorage.removeItem('korpa');
  };

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
        showTitles,
        setShowTitles,
        titles,
        setShowFilters,
        showfilters,
        items,
        setItems,
        proizvodiKorpa,
        setProizvodiKorpa,
        cart,
        setCart,
        removeItemFromCart,
        isSearching,
        setIsSearching,
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
