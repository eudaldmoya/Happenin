import React from "react";
import { StyleSheet, Text, View } from "react-native";
import AvatarBig from "./AvatarBig";

export default function YourFriendsEvents() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your friends events</Text>
      <View style={styles.avatars}>
        <AvatarBig image={require("../assets/person1.png")} />
        <AvatarBig image={require("../assets/person3.jpg")} />
        <AvatarBig image={require("../assets/person4.jpg")} />
        <AvatarBig />
        <AvatarBig image={require("../assets/person5.jpg")} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "relative",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
    gap: 10,
  },
  title: {
    left: 0,
    fontWeight: "bold",
    //   fontFamily: "roboto",
    fontSize: 18,
  },
  avatars: {
    left: 10,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 30,
  },
});
