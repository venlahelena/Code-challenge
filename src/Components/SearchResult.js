import React, { useContext } from 'react';
import { SearchContext } from '../ContextAPI/SearchContext';
import { Table } from 'semantic-ui-react';

const SearchResult = () => {
  const { loading, results } = useContext(SearchContext);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (results.length === 0) {
    return null;
  }

  const sortedResults = [...results].sort((a, b) => {
    const nameA = a.name.toUpperCase();
    const nameB = b.name.toUpperCase();
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
    return 0;
  });

  return (
    <Table celled>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Name</Table.HeaderCell>
          <Table.HeaderCell>Age</Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {sortedResults.map((result) => (
          <Table.Row key={result.name}>
            <Table.Cell>{result.name}</Table.Cell>
            <Table.Cell>{result.age}</Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  );
};

export default SearchResult;