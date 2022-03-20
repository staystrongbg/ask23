import { useState, useEffect } from 'react';

const useOnScroll = () => {
  const [height, setHeight] = useState(false); // onScroll
  const handleScroll = () => {
    setHeight(window.pageYOffset > 100 ? true : false);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return { height, setHeight, handleScroll };
};

export default useOnScroll;
