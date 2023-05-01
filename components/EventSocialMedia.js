import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { Linking } from "react-native";
import { Pressable } from "react-native";

export default function EventSocialMedia({
  name,
  instagram,
  facebook,
  twitter,
}) {
  const instagramPress = () => {
    Linking.openURL(instagram);
  };

  const facebookPress = () => {
    Linking.openURL(facebook);
  };

  const twitterPress = () => {
    Linking.openURL(twitter);
  };

  return (
    <View style={styles.mediaContainer}>
      <View style={styles.nameParent}>
        <Text style={styles.title}>{name}</Text>
        <View style={styles.socialMedia}>
          <Text style={styles.text}>Follow the official accounts</Text>
          <Pressable onPress={instagramPress}>
            <AntDesign name="instagram" size={30} color="#67E5BF" />
          </Pressable>
          <Pressable onPress={facebookPress}>
            <AntDesign name="facebook-square" size={30} color="#67E5BF" />
          </Pressable>
          <Pressable onPress={twitterPress}>
            <AntDesign name="twitter" size={30} color="#67E5BF" />
          </Pressable>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mediaContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 20,
  },
  nameParent: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
    alignSelf: "flex-start",
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
  },
  text: {
    fontWeight: 300,
    fontSize: 16,
  },
  socialMedia: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "flex-end",
    gap: 10,
  },
});
