import React, { useState } from 'react';
import { SearchContext } from './searchContext';

function SearchProvider(props) {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  return (
    <SearchContext.Provider value={{ searchQuery, setSearchQuery, searchResults, setSearchResults }}>
      {props.children}
    </SearchContext.Provider>
  );
}

export default SearchProvider;