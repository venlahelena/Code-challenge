import { useContext } from "react";
import { SearchContext } from "../ContextAPI/searchContext";

function SearchResults() {
  const { searchQuery, data } = useContext(SearchContext);

  if (!searchQuery) {
    return <div>Please enter a search query</div>;
  }

  if (!data || !data.length) { // add a check for data existence
    return <div>No search results found</div>;
  }

  // Filter the data based on the search query
  const filteredData = data.filter(item =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <ul>
        {filteredData.map(item => (
          <li key={item.id}><p>{item.name}</p><p>{item.age}</p></li>
        ))}
      </ul>
    </div>
  );
}

export default SearchResults;