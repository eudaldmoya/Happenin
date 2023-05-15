import React, { useEffect, useState } from "react";
import { ScrollView } from "react-native";
import HeaderSearch from "../components/HeaderSearch";
import EventsSquare from "../components/EventsSquare";
import { suggestEvent } from "../api";
import { StyleSheet, View, Text } from "react-native";
import Tags from "../components/Tags";

export default function SearchScreen() {
  const [event, setEvent] = useState([]);

  useEffect(() => {
    suggestEvent().then(setEvent);
  }, []);

  if (event === null) {
    return <ActivityIndicator size="large" color={"blue"} />;
  } else {
    let eventSquares = [];
    for (let i = 0; i < event.length; i++) {
      if (i == event.length - 1) {
        eventSquares.push(
          <View key={i} style={{ marginRight: 20, paddingRight: 20 }}>
            <EventsSquare name={event[i].name} image={event[i].images[0].url} />
          </View>
        );
      } else {
        eventSquares.push(
          <View key={i} style={{ marginRight: 20 }}>
            <EventsSquare name={event[i].name} image={event[i].images[0].url} />
          </View>
        );
      }
    }

    return (
      <ScrollView>
        <HeaderSearch />
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
              style={{ marginRight: 20, paddingRight: 20 }}
            >
              <View style={styles.tags}>
              <Tags tagName={"Music"} />
              <Tags tagName={"Sports"} />
              <Tags tagName={"Music"} />
              <Tags tagName={"Music"} />
              <Tags tagName={"Music"} />
              <Tags tagName={"Music"} />
            </View>
            </ScrollView>
            
            <ScrollView
              style={styles.events}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            >
              {eventSquares}
            </ScrollView>
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    gap: 20,
  },
  suggestedContainer: {
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
    paddingLeft: 20,
    display: "flex",
    flexDirection: "row",
  },
});
