import React, { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

const AddFriendBtn = () => {
  const [isFriended, setIsFriended] = useState(false);
  const [isFriend, setIsFriend] = useState("noFriend");

  const toggleSwitch = () => {
    setIsFriended((previousState) => !previousState);
    setIsFriend(isFriended ? "noFriends" : "friends");
  };

  console.log(isFriend);

  return (
    <View style={styles.container}>
      <Pressable style={[styles.friendButton, isFriended && styles.friendButtonActive]} onPress={toggleSwitch}>
        <Text style={[styles.friendText, isFriended && styles.friendTextActive]}>
          {isFriended ? "FRIENDS" : "ADD FRIEND"}
        </Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container:{
    backgroundColor: '#67E5BF',
    padding: 20,
  },
  friendButton: {
    borderColor: "#FFFFFF",
    borderWidth: 1,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 30,
    paddingRight: 30,
    borderRadius: 20,
  },
  friendButtonActive: {
    backgroundColor: "#FFFFFF",
    borderWidth: 0,
    paddingLeft: 44,
    paddingRight: 44,
  },
  friendText: {
    color: "#FFFFFF",
    // ios: { fontFamily: "Arial" },
    // android: { fontFamily: "Roboto" },
    fontWeight: "regular",
    textAlign: "center",
  },
  friendTextActive: {
    color: "#67E5BF",
  },
});

export default AddFriendBtn;
