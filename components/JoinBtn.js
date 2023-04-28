import React, { useState } from "react";
import { Pressable, StyleSheet, Text } from "react-native";

const JoinBtn = () => {
  const [isJoined, setIsJoined] = useState(false);
  const [isJoin, setIsJoin] = useState("noJoin");

  const toggleSwitch = () => {
    setIsJoined((previousState) => !previousState);
    setIsJoin(isJoined ? "noJoin" : "join");
  };

  console.log(isJoin);

  return (
    <Pressable
      style={[styles.joinButton, isJoined && styles.joinButtonActive]}
      onPress={toggleSwitch}
    >
      <Text style={[styles.joinText, isJoined && styles.joinTextActive]}>
        {isJoined ? "JOINED" : "JOIN"}
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  joinButton: {
    borderColor: "#67E5BF",
    borderWidth: 1,
    paddingTop: 2.5,
    paddingBottom: 2.5,
    paddingLeft: 40,
    paddingRight: 40,
    borderRadius: 40,
    marginTop: 5,
    marginBottom: 5,
    marginRight: 5,
    marginLeft: 10,
  },
  joinButtonActive: {
    backgroundColor: "#67E5BF",
    paddingLeft: 32,
    paddingRight: 32,
  },
  joinText: {
    color: "#67E5BF",
    // ios: { fontFamily: "Arial" },
    // android: { fontFamily: "Roboto" },
    fontWeight: "regular",
    textAlign: "center",
    fontSize: 16,
  },
  joinTextActive: {
    color: "#FFFFFF",
  },
});

export default JoinBtn;
