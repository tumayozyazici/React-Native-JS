import { StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';
import ResultsList from '../components/ResultsList';

export default function SearchScreen() {
  const [searchApi, results, errorMessage] = useResults();
  const [term, setTerm] = useState('');

  const filterResultsByPrice = (price) => {

    return results.filter((result) => {
      return result.price === price
    })
  }

  return (
    <View>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => searchApi(term)}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      {results.length===0 ?( <></> ): (<>
      <ResultsList title='Cheap Restourants' results={filterResultsByPrice('₺')} />
      <ResultsList title='Average Restourants' results={filterResultsByPrice('₺₺')} />
      <ResultsList title='Expensive Restourants' results={filterResultsByPrice('₺₺₺')} /></>)}
    </View>
  );
}

const styles = StyleSheet.create({});
