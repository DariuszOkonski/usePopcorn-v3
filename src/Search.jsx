import React, { useRef } from 'react';
import { useKey } from './useKey';

function Search({ query, setQuery }) {
  const inputEl = useRef(null);

  useKey('Enter', () => {
    if(document.activeElement === inputEl.current)
      return;
    inputEl.current.focus();
    setQuery('')
  })

  return (
    <input
      ref={inputEl}
      className='search'
      type='text'
      placeholder='Search movies...'
      value={query}
      onChange={(e) => setQuery(e.target.value)}
    />
  );
}

export default Search;
