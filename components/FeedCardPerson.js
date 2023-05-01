import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Avatar from "./Avatar";

export default function FeedCardPerson({name, image}) {
  return (
    <View style={styles.avatarParent}>
      <Avatar image={image} />
      <View style={styles.avatarName}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.text}>is going to this concert</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
   avatarParent: {
      display: "flex",
      flexDirection: "row",
      alignItems: "flex-start",
      justifyContent: "flex-start",
      paddingLeft: 10,
      gap: 10,
    },
    avatarName: {
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      justifyContent: "flex-start",
    },
    name: {
      fontWeight: 'bold',
      fontSize: 18,
     },
     text: {
      fontWeight: 300,
      fontSize: 12,
     },
});
