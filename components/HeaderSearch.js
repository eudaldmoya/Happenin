import { EvilIcons } from "@expo/vector-icons";
import Constants from "expo-constants";
import React, { useState } from "react";
import { StyleSheet, TextInput, View } from "react-native";

export default function HeaderSearch({ onSearch }) {
  const [text, setText] = useState("");

  const handleSearch = () => {
    onSearch(text);
  };

  const handleKeyPress = ({ nativeEvent }) => {
    if (nativeEvent.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchBox}
        value={text}
        onChangeText={setText}
        onSubmitEditing={handleSearch}
        placeholder="Search..."
        returnKeyType="search"
        onKeyPress={handleKeyPress}
      />
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
    color: "black",
  },
  searchIcon: {
    position: "absolute",
    top: Constants.statusBarHeight + 28,
    left: Constants.statusBarHeight - 15,
    color: "#67E5BF",
  },
});
