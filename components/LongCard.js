import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  View,
  Pressable,
  ActivityIndicator,
} from "react-native";
import { db } from "../firebaseConfig";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";

const Body = ({ image, location, city, name, date }) => {


    const day = date.split("-")[2];
    const monthNumber = date.split("-")[1];
    const dateObj = new Date();
    dateObj.setMonth(monthNumber - 1);
    const month = dateObj.toLocaleString("en-US", { month: "short" });
  
  
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
          <Text style={styles.date2}>{month}</Text>
        </View>
      </View>
    </View>
  );
};

export default function LongCard({
  eventId,
  image,
  name,
  location,
  city,
  description,
  date,
  url,
  attraction,
  instagram,
  facebook,
  twitter
}) {
  
  const navigation = useNavigation();
  const navigateToDetailScreen = () => {
    navigation.navigate("Details", {
      eventId: eventId,
      name: name,
      image: image,
      location: location,
      city: city,
      description: description,
      date: date,
      url: url,
      attraction: attraction,
      instagram: instagram,
      facebook: facebook,
      twitter: twitter,
    });
  };

  const storeEvent = async () => {
    const docRef = doc(db, "Events", `${eventId}`);
    const docSnap = await getDoc(docRef);
    if (!docSnap.exists()) {
      await setDoc(doc(db, "Events", eventId), {
        name: name,
        location: location,
        city: city,
        description: !description ? "" : description,
        date: date,
        image: image,
        url: !url ? "" : url,
        attraction: !attraction ? "" : attraction,
        instagram: !instagram ? "" : instagram,
        facebook: !facebook ? "" : facebook,
        twitter: !twitter ? "" : twitter,
      });
    } else {
      console.log("Event already saved!");
    }
  };

  if (name.length >= 36) {
    var str = name;
    var res = str.substring(0, 36);

    nameCut = res + "...";
  } else if (name.length < 36) {
    nameCut = name;
  }

  if (image) {
    return (  
      <Pressable
        onPress={() => {
          storeEvent(), navigateToDetailScreen();
        }}
      >
        {console.log(image)}
        <ImageBackground
          style={styles.backImg}
          imageStyle={{ borderRadius: 20 }}
          src={image}
        >
          <View style={styles.filter}></View>
          <Body
            image={image}
            location={location}
            city={city}
            name={nameCut}
            date={date}
          />
        </ImageBackground>
      </Pressable>
    );
  } else {
    return (
      <Pressable
        onPress={() => {
          storeEvent(), navigateToDetailScreen();
        }}
      >
        <ImageBackground
          style={styles.backImg}
          imageStyle={{ borderRadius: 20 }}
          source={require("../assets/placeholder.png")}
        >
          <View style={styles.filter}></View>
          <Body
            image={image}
            location={location}
            city={city}
            name={nameCut}
            date={date}
          />
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
