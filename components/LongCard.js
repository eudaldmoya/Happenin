import { Image, ImageBackground, StyleSheet, Text, View, Pressable } from "react-native";
import { db } from "../firebaseConfig";
import { doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";

const Body = ({ image, location, city, name, date }) => {
 

  if (name.length >= 30) {
    var str = name;
    var res = str.substring(0, 30);

    name = res + "...";
  } else {
    name = name;
  }
  const day = date.split("-")[2];
  const monthNumber = date.split("-")[1];
  const dateObj = new Date();
  dateObj.setMonth(monthNumber - 1);
  const monthName = dateObj.toLocaleString("en-US", { month: "short" });
  return (
   
      <View style={styles.innerContainer}>
        {image ? (
          <Image style={styles.innerImg} src={image} />
        ) : (
          <Image
            style={styles.innerImg}
            source={require("../assets/placeholder.png")}
          />
        )}
        <View style={styles.textWrapper}>
          <View style={styles.textInfo}>
            <Text style={styles.name}>{name}</Text>
            <Text style={styles.location}>{`${location}, ${city}`}</Text>
          </View>
          <View style={styles.dateContainer}>
            <Text style={styles.date1}>{day}</Text>
            <Text style={styles.date2}>{monthName}</Text>
          </View>
        </View>
      </View>
  );
};

export default function LongCard(props) {

  const navigation = useNavigation();
  const navigateToDetailScreen = () => {
    navigation.navigate("Details", {
      eventId: props.eventId,
      name: props.name,
      image: props.image,
      location: props.location,
      city: props.city,
      description: props.description,
      date: props.date,
    });
  };

  if (props.image) {
    return (
      <Pressable
      onPress={() => {
        navigateToDetailScreen();
      }}
    >
      <ImageBackground
        style={styles.backImg}
        imageStyle={{ borderRadius: 20 }}
        src={props.image}
      >
        <View style={styles.filter}></View>
        <Body {...props} />
      </ImageBackground>
      </Pressable>
    );
  } else {
    return (
      <Pressable
      onPress={() => {
        navigateToDetailScreen();
      }}
    >
      <ImageBackground
        style={styles.backImg}
        imageStyle={{ borderRadius: 20 }}
        source={require("../assets/placeholder.png")}
      >
        <View style={styles.filter}></View>
        <Body {...props} />
      </ImageBackground>
      </Pressable>
    );
  }
}

const styles = StyleSheet.create({
  innerImg: {
    height: 120,
    width: 120,
    borderRadius: 20,
    overflow: "hidden",
  },
  backImg: {
    height: 120,
    width: 340,
    tintColor: "gray",
    borderRadius: 20,
  },
  name: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
  location: {
    color: "white",
    fontSize: 12,
    fontWeight: 300,
    flexShrink: 1,
  },
  date1: {
    color: "white",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    fontSize: 28,
    fontWeight: "bold",
  },
  date2: {
    color: "white",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    fontSize: 18,
    fontWeight: "bold",
  },
  innerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  filter: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "black",
    opacity: 0.8,
    borderRadius: 20,
  },
  textWrapper: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
  },
  textInfo: {
    maxWidth: 140,
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    paddingLeft: 10,
  },
  dateContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: 120,
    paddingRight: 20,
    maxWidth: 80,
  },
});
