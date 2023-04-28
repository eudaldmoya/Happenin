import React, { useState } from "react";
import { Pressable, StyleSheet, Text } from "react-native";

const Tags = ({tagName}) => {
  const [isActive, setIsActive] = useState(false);
  const [isActivated, setIsActivated] = useState("");

  const toggleSwitch = () => {
   setIsActivated((previousState) => !previousState);
  };

  console.log(isActive);

  return (
    <Pressable
      style={[styles.doButton, isActivated && styles.isButtonActive]}
      onPress={toggleSwitch}
    >
      <Text style={[styles.doText, isActivated && styles.isTextActive]}>
        {tagName}
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  doButton: {
    borderColor: "#67E5BF",
    borderWidth: 1,
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 20,
    paddingRight: 20,
    borderRadius: 40,
    marginTop: 5,
    marginBottom: 5,
    marginRight: 5,
    marginLeft: 10,
  },
  isButtonActive: {
    backgroundColor: "#67E5BF",
  },
  doText: {
    color: "#67E5BF",
    // ios: { fontFamily: "Arial" },
    // android: { fontFamily: "Roboto" },
    fontWeight: "regular",
    textAlign: "center",
    fontSize: 16,
  },
  isTextActive: {
    color: "#FFFFFF",
  },
});

export default Tags;
