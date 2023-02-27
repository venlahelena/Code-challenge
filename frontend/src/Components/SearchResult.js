import React, { useContext } from 'react';

import { Input, Dimmer, Loader } from 'semantic-ui-react';
import { SearchContext } from '../ContextAPI/searchContext';

function SearchResult() {
  const { searchResults } = useContext(SearchContext);

  return (
    <div>
      {searchResults.map(result => (
        <div key={result.name}>
          <p>Name: {result.name}</p>
          <p>Age: {result.age}</p>
        </div>
      ))}
    </div>
  );
}

export default SearchResult;