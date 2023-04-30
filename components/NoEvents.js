import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function NoEvents() {
  return (
    <Text style={styles.text}>
      You don’t have any liked events yet. Start looking around to discover
      events you might like.
    </Text>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 14,
    fontWeight: "300",
    color: "#126964",
  },
});
