import React from 'react';
import { SearchProvider } from './ContextAPI/searchContext';
import Search from './Components/Search';
import SearchResult from './Components/SearchResult';

function App() {
  return (
    <SearchProvider>
      <Search />
      <SearchResult />
    </SearchProvider>
  );
}

export default App;