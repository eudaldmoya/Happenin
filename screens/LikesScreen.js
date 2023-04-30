import React from "react";
import { ScrollView, StyleSheet } from "react-native";
import { Text, View } from "react-native";
import HeaderLikes from "../components/HeaderLikes";
import NoEvents from "../components/NoEvents";

export default function LikesScreen() {
  return (
    <ScrollView>
      <HeaderLikes />
      <View style={styles.container}>
        <NoEvents />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 30,
  }
});