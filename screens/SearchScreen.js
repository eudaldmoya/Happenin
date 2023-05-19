import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { catgoriesEvents, suggestEvent } from "../api";
import EventsSquare from "../components/EventsSquare";
import HeaderSearch from "../components/HeaderSearch";
import SearchResults from "../components/SearchResults";
import Tags from "../components/Tags";
import Constants from "expo-constants";

export default function SearchScreen() {
  //SEARCH
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (searchTerm) => {
    setSearchTerm(searchTerm);
  };

  //SUGGESTED EVENTS
  const [eventSug, setEvent] = useState([]);
  useEffect(() => {
    suggestEvent().then(setEvent);
  }, []);

  //EVENTS BY CATEGORY
  const [categEvent, setCategEvent] = useState([]);
  const [tagStates, setTagStates] = useState({
    1: true,
    2: true,
    3: false,
    4: false,
    5: false,
    6: false,
  });
  useEffect(() => {
    catgoriesEvents(tagStates).then(setCategEvent);
  }, [tagStates]);

  const handleTagClick = (tagId) => {
    setTagStates((prevState) => ({
      ...prevState,
      [tagId]: !prevState[tagId],
    }));
  };

  if (eventSug === null || categEvent === null || !eventSug || !categEvent) {
    return (
      <ActivityIndicator style={styles.circle} size="large" color={"blue"} />
    );
  } else if (eventSug.length === 0 || categEvent.length === 0) {
    return (
      <ActivityIndicator style={styles.circle} size="large" color={"blue"} />
    );
  } else {
    let eventSquares = [];
    let eventSquare2 = [];
    for (let i = 0; i < eventSug.length; i++) {
      if (i == eventSug.length - 1) {
        console.log(`${categEvent[i].name}`);
        eventSquares.push(
          <View key={i} style={{ marginRight: 20, paddingRight: 20 }}>
            <EventsSquare
              eventId={categEvent[i].id}
              name={categEvent[i].name}
              image={categEvent[i].images[0].url}
              // location={categEvent[i]._embedded.venues[0].name}
              // city={categEvent[i]._embedded.venues[0].city.name}
              // date={categEvent[i].dates.start.localDate}
              // description={categEvent[i].info}
            />
          </View>
        );
      } else {
        eventSquares.push(
          <View key={i} style={{ marginRight: 20 }}>
            <EventsSquare
              eventId={categEvent[i].id}
              name={categEvent[i].name}
              image={categEvent[i].images[0].url}
              // location={categEvent[i]._embedded.venues[0].name}
              // city={categEvent[i]._embedded.venues[0].city.name}
              // date={categEvent[i].dates.start.localDate}
              // description={categEvent[i].info}
            />
          </View>
        );
      }
    }

    for (let i = 0; i < categEvent.length; i++) {
      if (i == categEvent.length - 1) {
        eventSquare2.push(
          <View key={i} style={{ marginRight: 20, paddingRight: 20 }}>
            <EventsSquare
              eventId={categEvent[i].id}
              name={categEvent[i].name}
              image={categEvent[i].images[0].url}
              // location={categEvent[i]._embedded.venues[0].name}
              // city={categEvent[i]._embedded.venues[0].city.name}
              // date={categEvent[i].dates.start.localDate}
              // description={categEvent[i].info}
            />
          </View>
        );
      } else {
        eventSquare2.push(
          <View key={i} style={{ marginRight: 20 }}>
            <EventsSquare
              eventId={categEvent[i].id}
              name={categEvent[i].name}
              image={categEvent[i].images[0].url}
              // location={categEvent[i]._embedded.venues[0].name}
              // city={categEvent[i]._embedded.venues[0].city.name}
              // date={categEvent[i].dates.start.localDate}
              // description={categEvent[i].info}
            />
          </View>
        );
      }
    }

    if (searchTerm === "" || !searchTerm || searchTerm === null) {
      return (
        <ScrollView>
          <HeaderSearch onSearch={handleSearch} />
          <View style={styles.container}>
            <View style={styles.suggestedContainer}>
              <Text style={styles.title}>Upcoming events</Text>
              <ScrollView
                style={styles.events}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
              >
                {eventSquares}
              </ScrollView>
            </View>
            <View style={styles.categoriesContainer}>
              <Text style={styles.title}>Categories</Text>
              <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                style={{ paddingRight: 20 }}
              >
                <View style={styles.tags}>
                  <Tags
                    id="1"
                    tagName={"Music"}
                    isActivated={tagStates[1]}
                    setIsActivated={handleTagClick}
                  />
                  <Tags
                    id="2"
                    tagName={"Sports"}
                    isActivated={tagStates[2]}
                    setIsActivated={handleTagClick}
                  />
                  <Tags
                    id="3"
                    tagName={"Arts & Theatre"}
                    isActivated={tagStates[3]}
                    setIsActivated={handleTagClick}
                  />
                  <Tags
                    id="4"
                    tagName={"Family"}
                    isActivated={tagStates[4]}
                    setIsActivated={handleTagClick}
                  />
                  <Tags
                    id="5"
                    tagName={"Attractions"}
                    isActivated={tagStates[5]}
                    setIsActivated={handleTagClick}
                  />
                  <Tags
                    id="6"
                    tagName={"Festivals"}
                    isActivated={tagStates[6]}
                    setIsActivated={handleTagClick}
                  />
                </View>
              </ScrollView>

              <ScrollView
                style={styles.events}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
              >
                {eventSquare2}
              </ScrollView>
            </View>
          </View>
        </ScrollView>
      );
    } else {
      return (
        <View style={styles.resultsList}>
          <HeaderSearch onSearch={handleSearch} />
          <SearchResults searchText={searchTerm} />
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  circle: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  resultsParent: {
    overflow: "hidden",
    backgroundColor: "transparent",
    pointerEvents: "box-none",
  },
  container: {
    gap: 20,
  },
  suggestedContainer: {
    paddingTop: 20,
    gap: 20,
  },
  categoriesContainer: {
    gap: 20,
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
    paddingLeft: 20,
  },
  events: {
    paddingLeft: 20,
  },
  tags: {
    paddingLeft: 10,
    paddingRight: 10,
    display: "flex",
    flexDirection: "row",
  },
  resultsList: {
    marginBottom: 240 + Constants.statusBarHeight,
    paddingTop: 20,
    bottom: 20,
    // bottom: 20,
  },
});
