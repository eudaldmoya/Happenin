import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import React from "react";
import JoinBtn from "../components/JoinBtn";

export default function EventDetailScreen({ route }) {
  console.log(route.params);
  const { eventId, image, name, location, city, description, date } =
    route.params;
  return (
    <View style={styles.container}>
      {/* <JoinBtn eventId={eventId}></JoinBtn> */}
      <View style={styles.imageParent}>
        <Image style={styles.image} src={image} />
      </View>
      <ScrollView style={styles.scrollView}>
        <View style={styles.content}>
          <Text>{name}</Text>
          <Text>{name}</Text>
          <Text>{name}</Text>
          <Text>{name}</Text>
          <Text>{name}</Text>
          <Text>{name}</Text>
          <Text>{name}</Text>
          <Text>{name}</Text>
          <Text>{name}</Text>
          <Text>{name}</Text>
          <Text>{name}</Text>
          <Text>{name}</Text>
          <Text>{name}</Text>
          <Text>{name}</Text>
          <Text>{name}</Text>
          <Text>{name}</Text>
          <Text>{name}</Text>
          <Text>{name}</Text>
          <Text>{name}</Text>
          <Text>{name}</Text>
          <Text>{name}</Text>
          <Text>{name}</Text>
          <Text>{name}</Text>
          <Text>{name}</Text>
          <Text>{name}</Text>
          <Text>{name}</Text>
          <Text>{name}</Text>
          <Text>{name}</Text>
          <Text>{name}</Text>
          <Text>{name}</Text>
          <Text>{name}</Text>
          <Text>{name}</Text>
          <Text>{name}</Text>
          <Text>{name}</Text>
          <Text>{name}</Text>
          <Text>{name}</Text>
          <Text>{name}</Text>
          <Text>{name}</Text>
          <Text>{name}</Text>
          <Text>{name}</Text>
          <Text>{name}</Text>
          <Text>{name}</Text>
          <Text>{name}</Text>
          <Text>{name}</Text>
          <Text>{name}</Text>
          <Text>{name}</Text>
          <Text>{name}</Text>
          <Text>{name}</Text>
        </View>
      </ScrollView>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    zIndex: 1,
  },
  imageParent: {
    zIndex: -1,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    aspectRatio: 1024 / 576,
    resizeMode: "contain",
    width: "125%",
    
  },
  content: {
    marginTop: '60%',
    borderRadius: 20,
    backgroundColor: "white",
    padding: 20,
    width: "100%",
  },
});
