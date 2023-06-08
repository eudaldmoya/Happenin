import Constants from "expo-constants";
import React, { useEffect, useState } from "react";
import {
  Animated,
  ScrollView,
  StyleSheet,
  Text,
  View
} from "react-native";
import { catgoriesEvents, suggestEvent } from "../api";
import EventsSquare from "../components/EventsSquare";
import HeaderSearch from "../components/HeaderSearch";
import SearchResults from "../components/SearchResults";
import Tags from "../components/Tags";

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

  const [animatedOpacity] = useState(new Animated.Value(0.5));

  const StartOpacityAnimation = () => {
    Animated.timing(animatedOpacity, {
      toValue: 1,
      duration: 750,
      useNativeDriver: true,
    }).start(() => {
      Animated.timing(animatedOpacity, {
        toValue: 0.125,
        duration: 750,
        useNativeDriver: true,
      }).start(() => {
        StartOpacityAnimation();
      });
    });
  };

  useEffect(() => {
    StartOpacityAnimation();
  }, []);

  if (eventSug === null || categEvent === null || !eventSug || !categEvent) {
    return (
      <ScrollView>
        <Animated.View
          style={[styles.searchLoading, { opacity: animatedOpacity }]}
        >
          <View style={styles.searchBoxLoading}></View>
        </Animated.View>
        <View style={styles.containerPlaceholder}>
          <View style={styles.suggestedContainer}>
            <Animated.View
              style={[styles.textLoading, { opacity: animatedOpacity }]}
            ></Animated.View>
            <View style={styles.boxLoadingParent}>
              <Animated.View
                style={[styles.boxLoading, { opacity: animatedOpacity }]}
              ></Animated.View>
              <Animated.View
                style={[styles.boxLoading, { opacity: animatedOpacity }]}
              ></Animated.View>
              <Animated.View
                style={[styles.boxLoading, { opacity: animatedOpacity }]}
              ></Animated.View>
            </View>
          </View>
          <View style={styles.suggestedContainer}>
            <Animated.View
              style={[styles.textLoading, { opacity: animatedOpacity }]}
            ></Animated.View>
            <View style={styles.tagLoadingParent}>
              <Animated.View
                style={[styles.tagLoading, { opacity: animatedOpacity }]}
              ></Animated.View>
              <Animated.View
                style={[styles.tagLoading, { opacity: animatedOpacity }]}
              ></Animated.View>
              <Animated.View
                style={[styles.tagLoading, { opacity: animatedOpacity }]}
              ></Animated.View>
              <Animated.View
                style={[styles.tagLoading, { opacity: animatedOpacity }]}
              ></Animated.View>
              <Animated.View
                style={[styles.tagLoading, { opacity: animatedOpacity }]}
              ></Animated.View>
            </View>
            <View style={styles.boxLoadingParent}>
              <Animated.View
                style={[styles.boxLoading, { opacity: animatedOpacity }]}
              ></Animated.View>
              <Animated.View
                style={[styles.boxLoading, { opacity: animatedOpacity }]}
              ></Animated.View>
              <Animated.View
                style={[styles.boxLoading, { opacity: animatedOpacity }]}
              ></Animated.View>
            </View>
          </View>
        </View>
      </ScrollView>
    );
  } else if (eventSug.length === 0 || categEvent.length === 0) {
    return (
      <ScrollView>
        <Animated.View
          style={[styles.searchLoading, { opacity: animatedOpacity }]}
        >
          <View style={styles.searchBoxLoading}></View>
        </Animated.View>
        <View style={styles.containerPlaceholder}>
          <View style={styles.suggestedContainer}>
            <Animated.View
              style={[styles.textLoading, { opacity: animatedOpacity }]}
            ></Animated.View>
            <View style={styles.boxLoadingParent}>
              <Animated.View
                style={[styles.boxLoading, { opacity: animatedOpacity }]}
              ></Animated.View>
              <Animated.View
                style={[styles.boxLoading, { opacity: animatedOpacity }]}
              ></Animated.View>
              <Animated.View
                style={[styles.boxLoading, { opacity: animatedOpacity }]}
              ></Animated.View>
            </View>
          </View>
          <View style={styles.suggestedContainer}>
            <Animated.View
              style={[styles.textLoading, { opacity: animatedOpacity }]}
            ></Animated.View>
            <View style={styles.tagLoadingParent}>
              <Animated.View
                style={[styles.tagLoading, { opacity: animatedOpacity }]}
              ></Animated.View>
              <Animated.View
                style={[styles.tagLoading, { opacity: animatedOpacity }]}
              ></Animated.View>
              <Animated.View
                style={[styles.tagLoading, { opacity: animatedOpacity }]}
              ></Animated.View>
              <Animated.View
                style={[styles.tagLoading, { opacity: animatedOpacity }]}
              ></Animated.View>
              <Animated.View
                style={[styles.tagLoading, { opacity: animatedOpacity }]}
              ></Animated.View>
            </View>
            <View style={styles.boxLoadingParent}>
              <Animated.View
                style={[styles.boxLoading, { opacity: animatedOpacity }]}
              ></Animated.View>
              <Animated.View
                style={[styles.boxLoading, { opacity: animatedOpacity }]}
              ></Animated.View>
              <Animated.View
                style={[styles.boxLoading, { opacity: animatedOpacity }]}
              ></Animated.View>
            </View>
          </View>
        </View>
      </ScrollView>
    );
  } else {
    let eventSquares = [];
    let eventSquare2 = [];
    for (let i = 0; i < eventSug.length; i++) {
      if (i == eventSug.length - 1) {
        console.log(`${eventSug[i].name}`);
        eventSquares.push(
          <View key={i} style={{ marginRight: 20, paddingRight: 20 }}>
            {console.log("FACEBOOK: " + eventSug[i]._embedded.attractions[0].externalLinks.facebook[0].url)}
            <EventsSquare
              eventId={eventSug[i].id}
              name={eventSug[i].name}
              image={eventSug[i].images[0].url}
              location={
                !eventSug[i]._embedded.venues[0].name
                  ? ""
                  : eventSug[i]._embedded.venues[0].name
              }
              city={
                !eventSug[i]._embedded.venues[0].city.name
                  ? ""
                  : eventSug[i]._embedded.venues[0].city.name
              }
              date={eventSug[i].dates.start.localDate}
              description={eventSug[i].info}
              url={eventSug[i].url}
              attraction={eventSug[i]._embedded.attractions[0].name}
              // instagram={!eventSug[i]._embedded.attractions[0].externalLinks.instagram[0].url ? "" : eventSug[i]._embedded.attractions[0].externalLinks.instagram[0].url}
              // facebook={!eventSug[i]._embedded.attractions[0].externalLinks.facebook[0].url ? "" : eventSug[i]._embedded.attractions[0].externalLinks.facebook[0].url}
              // twitter={!eventSug[i]._embedded.attractions[0].externalLinks.twitter[0].url ? "" : eventSug[i]._embedded.attractions[0].externalLinks.twitter[0].url}
            />
          </View>
        );
      } else {
        eventSquares.push(
          <View key={i} style={{ marginRight: 20 }}>
            <EventsSquare
              eventId={eventSug[i].id}
              name={eventSug[i].name}
              image={eventSug[i].images[0].url}
              location={
                !eventSug[i]._embedded.venues[0].name
                  ? ""
                  : eventSug[i]._embedded.venues[0].name
              }
              city={
                !eventSug[i]._embedded.venues[0].city.name
                  ? ""
                  : eventSug[i]._embedded.venues[0].city.name
              }
              date={eventSug[i].dates.start.localDate}
              description={eventSug[i].info}
              url={eventSug[i].url}
              attraction={eventSug[i]._embedded.attractions[0].name}
              // instagram={!eventSug[i]._embedded.attractions[0].externalLinks.instagram[0].url ? "" : eventSug[i]._embedded.attractions[0].externalLinks.instagram[0].url}
              // facebook={!eventSug[i]._embedded.attractions[0].externalLinks.facebook[0].url ? "" : eventSug[i]._embedded.attractions[0].externalLinks.facebook[0].url}
              // twitter={!eventSug[i]._embedded.attractions[0].externalLinks.twitter[0].url ? "" : eventSug[i]._embedded.attractions[0].externalLinks.twitter[0].url}
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
              location={
                !categEvent[i]._embedded.venues[0].name
                  ? ""
                  : categEvent[i]._embedded.venues[0].name
              }
              city={
                !categEvent[i]._embedded.venues[0].city.name
                  ? ""
                  : categEvent[i]._embedded.venues[0].city.name
              }
              date={categEvent[i].dates.start.localDate}
              description={categEvent[i].info}
              url={categEvent[i].url}
              attraction={categEvent[i]._embedded.attractions[0].name}
              // instagram={!categEvent[i]._embedded.attractions[0].externalLinks.instagram[0].url ? "" : categEvent[i]._embedded.attractions[0].externalLinks.instagram[0].url}
              // facebook={!categEvent[i]._embedded.attractions[0].externalLinks.facebook[0].url ? "" : categEvent[i]._embedded.attractions[0].externalLinks.facebook[0].url}
              // twitter={!categEvent[i]._embedded.attractions[0].externalLinks.twitter[0].url ? "" : categEvent[i]._embedded.attractions[0].externalLinks.twitter[0].url}
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
              location={
                !categEvent[i]._embedded.venues[0].name
                  ? ""
                  : categEvent[i]._embedded.venues[0].name
              }
              city={
                !categEvent[i]._embedded.venues[0].city.name
                  ? ""
                  : categEvent[i]._embedded.venues[0].city.name
              }
              date={categEvent[i].dates.start.localDate}
              description={categEvent[i].info}
              url={categEvent[i].url}
              attraction={categEvent[i]._embedded.attractions[0].name}
              // instagram={!categEvent[i]._embedded.attractions[0].externalLinks.instagram[0].url ? "" : categEvent[i]._embedded.attractions[0].externalLinks.instagram[0].url}
              // facebook={!categEvent[i]._embedded.attractions[0].externalLinks.facebook[0].url ? "" : categEvent[i]._embedded.attractions[0].externalLinks.facebook[0].url}
              // twitter={!categEvent[i]._embedded.attractions[0].externalLinks.twitter[0].url ? "" : categEvent[i]._embedded.attractions[0].externalLinks.twitter[0].url}
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
  searchLoading: {
    backgroundColor: "#dedede",
    padding: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    paddingTop: Constants.statusBarHeight + 20,
  },
  searchBoxLoading: {
    flexDirection: "row",
    borderRadius: 10,
    padding: 10,
    gap: 10,
    height: 40,
    paddingLeft: 30,
  },
  indicatorParent: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  resultsParent: {
    overflow: "hidden",
    backgroundColor: "transparent",
    pointerEvents: "box-none",
  },
  textLoading: {
    width: "50%",
    height: 30,
    backgroundColor: "#dedede",
    borderRadius: 7.5,
  },
  boxLoadingParent: {
    display: "flex",
    flexDirection: "row",
    gap: 20,
  },
  boxLoading: {
    width: 150,
    height: 150,
    backgroundColor: "#dedede",
    borderRadius: 7.5,
  },
  tagLoadingParent: {
    display: "flex",
    flexDirection: "row",
    gap: 20,
  },
  tagLoading: {
    width: 75,
    height: 25,
    backgroundColor: "#dedede",
    borderRadius: 7.5,
  },
  containerPlaceholder: {
    gap: 20,
    paddingLeft: 20,
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
  },
});
