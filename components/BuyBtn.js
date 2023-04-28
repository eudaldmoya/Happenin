import React, { useState } from "react";
import { Linking } from "react-native";
import { Pressable, StyleSheet, Text } from "react-native";

const BuyBtn = ({buyLink}) => {

  const buyBtn = () => {
    Linking.openURL(buyLink);
  };

  return (
    <Pressable style={styles.joinButton} onPress={buyBtn}>
      <Text style={styles.joinText}>BUY HERE</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  joinButton: {
    borderColor: "#67E5BF",
    borderWidth: 1,
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 20,
    paddingRight: 20,
    borderRadius: 20,
    marginTop: 5,
    marginBottom: 5,
    marginRight: 10,
    marginLeft: 10,
    width: 150,
  },
  joinText: {
    color: "#67E5BF",
    // ios: { fontFamily: "Arial" },
    // android: { fontFamily: "Roboto" },
    fontWeight: "regular",
    textAlign: "center",
  },
});

export default BuyBtn;
