import {
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import LikeBtn from "./LikeBtn";
import { useNavigation } from "@react-navigation/native";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "../firebaseConfig";

/*
EventSnapshot - Component que crida useDocument amb l'eventId i utilitza EventsSquare per pintar.
*/

export default function EventsSquare({
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
  twitter,
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
        <ImageBackground
          style={styles.container}
          src={image}
          imageStyle={{ borderRadius: 20 }}
        >
          <View style={styles.background}></View>
          <LikeBtn
            eventId={eventId}
            image={image}
            name={name}
            location={location}
            city={city}
            description={description}
            date={date}
            url={url}
            attraction={attraction}
            instagram={instagram}
            facebook={facebook}
            twitter={twitter}
          />
          <Text style={styles.title}>{nameCut}</Text>
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
          style={styles.container}
          source={require("../assets/placeholder.png")}
          imageStyle={{ borderRadius: 20 }}
        >
          <View style={styles.background}></View>
          <LikeBtn
            eventId={eventId}
            image={image}
            name={name}
            location={location}
            city={city}
            description={description}
            date={date}
            url={url}
            attraction={attraction}
            instagram={instagram}
            facebook={facebook}
            twitter={twitter}
          />
          <Text style={styles.title}>{nameCut}</Text>
        </ImageBackground>
      </Pressable>
    );
  }
}

const radius = 20;
const sqSize = 150;

const styles = StyleSheet.create({
  container: {
    alignItems: "flex-end",
    width: sqSize,
    height: sqSize,
    resizeMode: "fit",
  },

  background: {
    position: "absolute",
    top: 0,
    left: 0,
    width: sqSize,
    height: sqSize,
    backgroundColor: "black",
    opacity: 0.4,
    borderRadius: radius,
  },

  title: {
    position: "absolute",
    left: 15,
    right: 10,
    bottom: 15,
    // fontFamily: 'Roboto',
    fontWeight: 700,
    fontSize: sqSize / 8,
    color: "#FFFFFF",
  },
});
