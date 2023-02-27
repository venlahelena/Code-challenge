import React from "react";
import { Container } from "semantic-ui-react";
import Search from "./Components/Search";
import SearchResult from "./Components/SearchResult";
import { SearchProvider } from "./Context/SearchContext";

function App() {
  return (
    <Container>
      <h1 className="ui huge header">
        Age Search: Predict the Age of a Name
        <div className="sub header">
          To find out the average age of a person with the name you entered, you
          need to separate the names with a comma.
        </div>
      </h1>
      <SearchProvider>
        <Search />
        <SearchResult />
      </SearchProvider>
    </Container>
  );
}

export default App;
