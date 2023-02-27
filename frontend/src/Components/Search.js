import React, { useContext } from 'react';
import { SearchContext } from '../ContextAPI/searchContext'
import { Input, Dimmer, Loader } from 'semantic-ui-react';

function Search() {
  const { searchQuery, setSearchQuery, search, isLoading } = useContext(SearchContext);

  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
    search(event.target.value);
  };

  return (
    <div>
      <h2>Search</h2>
      <Input type="text" placeholder="Search..." value={searchQuery} onInput={handleInputChange} />
      {isLoading && <Dimmer active>
        <Loader />
      </Dimmer>}
    </div>
  );
}

export default Search;