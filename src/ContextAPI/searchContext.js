import React, { useState, createContext, useEffect } from 'react';

export const SearchContext = createContext();

export function SearchProvider(props) {
  const [searchQuery, setSearchQuery] = useState('');
  const [data, setData] = useState([]);

useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://agify.io/?name=${searchQuery}&country_id=EU`, {
          mode: "cors" 
        });
        const data = await response.json();
        console.log(data);
        setData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [searchQuery]);

  return (
    <SearchContext.Provider value={{ searchQuery, setSearchQuery, data }}>
      {props.children}
    </SearchContext.Provider>
  );
}