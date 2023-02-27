import React, { useContext, useState } from 'react';
import { SearchContext } from '../ContextAPI/searchContext';

function Search() {
  const { searchQuery, setSearchQuery, searchResults, setSearchResults } = useContext(SearchContext);
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = async (event) => {
    const query = event.target.value;
    setSearchQuery(query);

    if (query.length > 2) {
      setIsLoading(true);

      try {
        const response = await fetch(`https://agify.io/?name=${query}&country_id=EU`, {
          mode: 'no-cors'
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

  return (
    <div>
      <input type="text" placeholder="Search..." value={searchQuery} onChange={handleInputChange} />
      {isLoading ? <p>Loading...</p> : null}
      {searchResults && searchResults.map(result => (
        <div key={result.name}>
          <p>Name: {result.name}</p>
          <p>Age: {result.age}</p>
        </div>
      ))}
    </div>
  );
}

export default Search;