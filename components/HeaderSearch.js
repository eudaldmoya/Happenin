import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Constants from "expo-constants";
import { TextInput } from "react-native";
import { EvilIcons } from "@expo/vector-icons";

export default function HeaderSearch() {
  return (
    <View style={styles.container}>
      <TextInput placeholder="Search" style={styles.searchBox} />
      <EvilIcons name="search" style={styles.searchIcon} size={24} />
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
  },
  searchBox: {
    backgroundColor: "white",
    flexDirection: "row",
    borderRadius: 10,
    padding: 10,
    gap: 10,
    height: 40,
    paddingLeft: 30,
    shadowColor: "#171717",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 3,
    fontFamily: "Roboto",
    fontSize: 16,
    color: "#D6D6D6",
  },
  searchIcon: {
    position: "absolute",
    top: Constants.statusBarHeight + 28,
    left: Constants.statusBarHeight - 15,
    color: "#67E5BF",
  },
});
