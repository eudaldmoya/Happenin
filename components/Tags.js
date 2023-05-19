import React from "react";
import { Pressable, StyleSheet, Text } from "react-native";

const Tags = ({id, tagName, isActivated, setIsActivated}) => {

  const toggleSwitch = () => {
    setIsActivated(id);
  };

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
    paddingTop: 2.5,
    paddingBottom: 2.5,
    paddingLeft: 12.5,
    paddingRight: 12.5,
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
