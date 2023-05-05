import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Comment from "./Comment";
import CommentBox from "./CommentBox";
import SubComment from "./SubComment";

export default function Comments() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Comments</Text>
      <Comment name={"Jack Sparrow"} comment={"Let's goooo!!!"} />
      <SubComment
        image={require("../assets/person2.jpg")}
        name={"fred32"}
        comment={
          "yes, me!!!"
        }
      />
      <Comment
        image={require("../assets/person1.png")}
        name={"Benny Jackson"}
        comment={"Anyone wanna go with me?"}
      />
      <CommentBox />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    alignItems: "stretch",
    justifyContent: "center",
    backgroundColor: "white",
    padding: 20,
    margin: 40,
    borderRadius: 20,
    shadowColor: "#00000050",
    elevation: 5,
    gap: 15,
    width: '90%',
  },
  text: {
    fontWeight: 300,
    fontSize: 14,
  },
});
