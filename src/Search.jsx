import React, { useEffect, useRef } from 'react';

function Search({ query, setQuery }) {
  const inputElement = useRef(null);

  useEffect(() => {
    function callback(e) {
      if (document.activeElement === inputElement.current) return;

      if (e.code === 'Enter') {
        inputElement.current.focus();
        setQuery('');
      }
    }

    document.addEventListener('keydown', callback);

    if (inputElement.current) {
      inputElement.current.focus();
    }

    return () => {
      document.removeEventListener('keydown', callback);
    };
  }, [setQuery]);

  return (
    <input
      ref={inputElement}
      className='search'
      type='text'
      placeholder='Search movies...'
      value={query}
      onChange={(e) => setQuery(e.target.value)}
    />
  );
}

export default Search;
