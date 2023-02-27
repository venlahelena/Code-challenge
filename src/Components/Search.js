import React, { useContext } from 'react';
import { SearchContext } from '../ContextAPI/searchContext';

function Search() {
  const { searchQuery, setSearchQuery, search, isLoading } = useContext(SearchContext);

  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearch = () => {
    search(searchQuery);
  };

  return (
    <div>
      <input type="text" placeholder="Search..." value={searchQuery} onChange={handleInputChange} />
      <button onClick={handleSearch}>Search</button>
      {isLoading ? <p>Loading...</p> : null}
    </div>
  );
}

export default Search;