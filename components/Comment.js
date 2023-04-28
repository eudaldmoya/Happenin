import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Avatar from "./Avatar";
import SubComment from "./SubComment";

export default function Comment({ image, name, comment }) {
  return (
      <View style={styles.container}>
        <View style={styles.avatarParent}>
          <Avatar image={image} />
        </View>
        <View style={styles.comment}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.commentText}>{comment}</Text>
        </View>
      </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    gap: 15,
  },
  avatarParent: {

  },
  comment: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
  },
  name: {
    fontWeight: "bold",
    fontSize: 14,
  },
  commentText: {
    fontWeight: 400,
    fontSize: 14,
  },
});
