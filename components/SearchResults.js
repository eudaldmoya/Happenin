import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { searchEvents } from "../api";
import LongCard from "./LongCard";

const SearchResults = ({ searchText }) => {
  const [searchResults, setSearchResults] = useState(null);

  useEffect(() => {
    if (searchText) {
      searchEvents(searchText).then((events) => setSearchResults(events));
    }
  }, [searchText]);

  let emptyVenue = "";
 

  if (!searchResults || searchResults === null || searchResults === undefined || searchResults === 0) {
    return (
      <View style={styles.results}>
        <View style={styles.resultsText}>
          <Text>There are no results for </Text>
          <Text style={styles.resultsBold}>"{searchText}"</Text>
        </View>
        <Text>Go explore again!</Text>
      </View>
    );
  } else {
    return (
      <View style={styles.results}>
        {console.log(searchResults[0]._embedded.attractions[0].name)}
        <View style={styles.resultsText}>
          <Text>Showing results for </Text>
          <Text style={styles.resultsBold}>"{searchText}"</Text>
        </View>
        <FlatList
          data={searchResults}
          showsVerticalScrollIndicator={false} 
          renderItem={({ item }) => 
            (      
            <LongCard
              eventId={item.id}
              image={item.images[0].url}
              name={item.name}
              location={
                item._embedded.venues[0].name
                  ? item._embedded.venues[0].name : ''
              }
              city={item._embedded.venues[0].city.name? item._embedded.venues[0].city.name : ''}
              date={item.dates.start.localDate}
            description={item.info ? item.info : ''}
            url={item.url}
            attraction={item._embedded.attractions[0].name}
            instagram={item._embedded.attractions[0].externalLinks.instagram[0].url}
            facebook={item._embedded.attractions[0].externalLinks.facebook[0].url}
            twitter={item._embedded.attractions[0].externalLinks.twitter[0].url}
            />
          )}
          ItemSeparatorComponent={() => <View style={{ padding: 10 }} />}
          keyExtractor={(item) => item.id}
          style={styles.resultsList}
        />
      </View>
    );
  }
};

const styles = StyleSheet.create({
  centered: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  results: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  resultsText: {
    paddingBottom: 20,
    paddingTop: 20,
    display: "flex",
    flexDirection: "row",
  },
  resultsBold: {
    fontWeight: "bold",
  },
  resultsList: {
  },
});

export default SearchResults;
