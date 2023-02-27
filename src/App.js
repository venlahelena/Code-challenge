import React from 'react';
import { Container } from 'semantic-ui-react';
import Search from './Components/Search';
import SearchResult from './Components/SearchResult';
import { SearchProvider } from './ContextAPI/SearchContext';

function App() {
  return (
    <Container>
      <h1>Age Search</h1>
      <SearchProvider>
        <Search />
        <SearchResult />
      </SearchProvider>
    </Container>
  );
}

export default App;