import React from 'react';
import { Container } from 'semantic-ui-react';
import Search from './Components/Search';
import SearchResult from './Components/SearchResult';
import { SearchProvider } from './Context/SearchContext';

function App() {
  return (
    <Container>
      <h1 class="ui header">Age Search: Predict the Age of a Name</h1>
      <SearchProvider>
        <Search />
        <SearchResult />
      </SearchProvider>
    </Container>
  );
}

export default App;