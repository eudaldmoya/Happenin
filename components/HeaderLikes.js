import React from "react";
import Constants from "expo-constants";
import { StyleSheet, Text, View } from "react-native";

export default function HeaderLikes() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Your likes</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#67E5BF",
    padding: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    marginBottom: 20,
    paddingTop: Constants.statusBarHeight + 20,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  text: {
    color: "white",
    fontWeight: "bold",
    fontSize: 26,
  },
});
