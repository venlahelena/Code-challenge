import React, { createContext, useState } from 'react';
import axios from 'axios';

const SearchContext = createContext();

const SearchProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState([]);

  const getNames = async (names) => {
    setLoading(true);
    try {
      const nameArray = names.split(',').map((name) => name.trim());
      const promises = nameArray.map((name) => {
        return axios.get(`https://api.agify.io?name=${name}`);
      });
      const responses = await Promise.all(promises);
      const data = responses.map((response) => {
        const { name, age } = response.data;
        return { name, age };
      });
      setResults(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <SearchContext.Provider value={{ loading, setLoading, results, setResults, getNames }}>
      {children}
    </SearchContext.Provider>
  );
};

export { SearchContext, SearchProvider };