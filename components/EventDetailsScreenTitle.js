import { View, Text } from "react-native";
import React from "react";
import { StyleSheet } from "react-native";
import EventInfo from "./EventInfo";

const EventDetailsScreenTitle = () => {
  return (
    <View style={styles.container}>
      <EventInfo title={'Primavera Sound'} location={'Parc Del Fòrum, Barcelona'} date={'29 May - 04 Jun'} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    ios: { fontFamily: "Arial" },
    android: { fontFamily: "Roboto" },
  },
});

export default EventDetailsScreenTitle;
