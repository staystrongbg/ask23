import { useState, useEffect } from 'react';
const useSearchOnSubmit = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    setSearchTerm(e.target[0].value);
    e.target[0].value = '';
  };

  const kbEvents = () => {
    window.addEventListener('keydown', (e) => {
      e.key === 'Escape' && setSearchTerm('');
    });
  };
  useEffect(() => {
    kbEvents();

    return () => window.removeEventListener('keydown', kbEvents);
  }, []);

  return { searchTerm, setSearchTerm, handleSearch, kbEvents };
};

export default useSearchOnSubmit;
