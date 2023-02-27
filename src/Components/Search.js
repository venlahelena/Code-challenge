import React, { useContext, useState } from "react";
import { SearchContext } from "../Context/SearchContext";
import { Input, Button, Form } from "semantic-ui-react";

const Search = () => {
  const [names, setNames] = useState("");
  const { setLoading, setResults } = useContext(SearchContext);

  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    const namesArr = names.split(",").map((name) => name.trim());
    const results = await Promise.all(
      namesArr.map(async (name) => {
        const response = await fetch(`https://api.agify.io?name=${name}`);
        const data = await response.json();
        return { name, age: data.age };
      })
    );
    setResults(results);
    setLoading(false);
  };

  return (
    <Form onSubmit={handleSearch}>
      <Form.Field>
        <Input
          placeholder="Enter names separated by commas"
          value={names}
          onChange={(e) => setNames(e.target.value)}
        />
      </Form.Field>
      <button className="fluid ui secondary button">Search</button>
    </Form>
  );
};

export default Search;
