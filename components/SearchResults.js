import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { searchEvents } from "../api";
import LongCard from "./LongCard";

const SearchResults = ({ searchText }) => {
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    if (searchText) {
      searchEvents(searchText).then((events) => setSearchResults(events));
    }
  }, [searchText]);

  const getDayNumber = (dateString) => {
    const date = new Date(dateString);
    return date.getDate();
  };

  const getMonthName = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleString("default", { month: "short" }).toUpperCase();
  };

  if (!searchResults || searchResults === null || searchResults === undefined) {
    return(
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
        <View style={styles.resultsText}>
          <Text>Showing results for </Text>
          <Text style={styles.resultsBold}>"{searchText}"</Text>
        </View>
        <FlatList
          data={searchResults}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <LongCard
            image={item.images[0].url}
            name={item.name}
            location={
              item._embedded.venues[0].name +
              ", " +
              item._embedded.venues[0].city.name
            }
            day={getDayNumber(item.dates.start.localDate)}
            month={getMonthName(item.dates.start.localDate)}
            />
            )}
            ItemSeparatorComponent={() => <View style={{padding: 10}} />}
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
    display: 'flex',
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
  resultsList:{
    
  }
});

export default SearchResults;
