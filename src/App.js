import React from 'react';
import Search from './Components/Search';
import SearchResults from './Components/SearchResult';
import SearchProvider from './Components/SearchProvider';

function App() {
  return (
      <div className="App">
        <SearchProvider>
          <Search />
          <SearchResults />
      </SearchProvider>
      </div>
  );
}

export default App;
