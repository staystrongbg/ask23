import { useContext, createContext, useState, useEffect } from 'react';
import products from './products.json';
const AppContext = createContext();

const AppProvider = ({ children }) => {
  const links = [
    { href: '/', name: 'почетна' },
    { href: '/brendovi', name: 'брендови' },
    { href: '/o_nama', name: 'о нама' },
    { href: '/kontakt', name: 'контакт' },
  ];

  const [isActive, setIsActive] = useState(0);

  const [produkti, setProdukti] = useState(
    products.filter((p) => p.novo === true)
  );

  const [searchTerm, setSearchTerm] = useState('');

  const [height, setHeight] = useState(false);

  const handleScroll = () => {
    setHeight(window.pageYOffset > 0 ? true : false);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setProdukti(
      products.filter((o) =>
        o.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  }, [searchTerm]);

  const handleSearch = (e) => {
    e.preventDefault();
    setSearchTerm(e.target[0].value);
    e.target[0].value = '';
  };

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
