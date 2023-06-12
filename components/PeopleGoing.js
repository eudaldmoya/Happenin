import { StyleSheet, Text, View } from "react-native";
import React from "react";
import JoinBtn from "./JoinBtn";
import PeopleGoingNumber from "./PeopleGoingNumber";

export default function PeopleGoingEvent() {
  return (
    <View style={styles.container}>
      <View style={styles.peopleGoing}>
        <PeopleGoingNumber />
        <Text style={styles.goingText}>Going</Text>
      </View>
      <JoinBtn />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 5,
    paddingBottom: 5,
    borderRadius: 50,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  peopleGoing: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  goingText: {
    paddingLeft: 5,
    paddingRight: 25,
    fontWeight: "500",
    color: "#67E5BF",
  },
});
