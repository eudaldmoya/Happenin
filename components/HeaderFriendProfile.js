import Constants from "expo-constants";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import AvatarProfile from "./AvatarProfile";
import AddFriendBtn from "./AddFriendBtn";

export default function HeaderFriendProfile({ image, name, age, country }) {
  return (
    <View style={styles.parent}>
      <View style={styles.container}>
        <AvatarProfile image={image} />
        <View style={styles.texts}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.info}>
            {age}, {country}
          </Text>
        </View>
      </View>
      <AddFriendBtn />
    </View>
  );
}

const styles = StyleSheet.create({
  parent: {
    backgroundColor: "#67E5BF",
    padding: 30,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    paddingBottom: 10,
    marginBottom: 30,
    paddingTop: Constants.statusBarHeight + 30,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  texts: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
    paddingStart: 20,
  },
  name: {
    fontWeight: "bold",
    fontSize: 24,
    color: "white",
  },
  info: {
    fontSize: 16,
    color: "white",
    fontWeight: 500,
  },
});
