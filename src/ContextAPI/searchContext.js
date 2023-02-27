import React, { createContext, useState } from 'react';

export const SearchContext = createContext();

export function SearchProvider({ children }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const search = async (query) => {
    setSearchQuery(query);

    if (query.length > 2) {
      setIsLoading(true);

      try {
        const response = await fetch(`https://agify.io/?name=${query}&country_id=EU`, {
          mode: 'cors'
        });
        const data = await response.json();
        console.log(response);
        console.log(data);

        setSearchResults([{ name: query, age: data.age }]);
      } catch (error) {
        console.error(error);
      }

      setIsLoading(false);
    } else {
      setSearchResults([]);
    }
  };

  const contextValues = {
    searchQuery,
    setSearchQuery,
    searchResults,
    setSearchResults,
    isLoading,
    search,
  };

  return (
    <SearchContext.Provider value={contextValues}>
      {children}
    </SearchContext.Provider>
  );
}
