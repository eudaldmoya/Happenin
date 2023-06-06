import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  Pressable,
  Linking,
} from "react-native";
import React from "react";
import JoinBtn from "../components/JoinBtn";
import { Entypo } from "@expo/vector-icons";

export default function EventDetailScreen({ route }) {
  console.log(route.params);
  const {
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
  } = route.params;

  const day = date.split("-")[2];
  const monthNumber = date.split("-")[1];
  const dateObj = new Date();
  dateObj.setMonth(monthNumber - 1);
  const monthName = dateObj.toLocaleString("en-US", { month: "short" });
  const year = date.split("-")[0];

  const currentDate = new Date();
  const specificDateStr = date;
  const [yearCompare, monthCompare, dayCompare] = specificDateStr.split("-");
  const specificDate = new Date(yearCompare, monthCompare - 1, dayCompare);

  const hasHappened = specificDate < currentDate;

  console.log("URL: " + url);

  const buyTickets = () => {
    const link = url;
    Linking.openURL(link);
  };

  const openInstagram = () => {
    const link = instagram;
    Linking.openURL(link);
  };

  const openFacebook = () => {
    const link = facebook;
    Linking.openURL(link);
  };

  const openTwitter = () => {
    const link = twitter;
    Linking.openURL(link);
  };

  return (
    <View style={styles.container}>
      {/* <JoinBtn eventId={eventId}></JoinBtn> */}
      <View style={styles.imageParent}>
        <Image style={styles.image} src={image} />
      </View>
      <ScrollView>
        <View style={styles.content}>
          <View style={styles.container}>
            <View style={styles.peopleGoing}>
              <Text style={styles.goingText}>Going</Text>
            </View>
            <JoinBtn eventId={eventId}></JoinBtn>
          </View>
          <View style={styles.eventDetail}>
            <Text style={styles.name}>{name}</Text>
            <Text style={styles.detail}>
              {location}, {city}
            </Text>
            <Text style={styles.detail}>
              {day} {monthName}, {year}
            </Text>
          </View>
          <View>
            {!hasHappened ? (
              <View style={styles.ticketsContainer}>
                <View style={styles.ticketsText}>
                  <Text style={styles.ticketsTitle}>Tickets</Text>
                  <Text style={styles.ticketsTextSmall}>On sale!</Text>
                </View>
                <Pressable onPress={buyTickets} style={styles.ticketsButton}>
                  <Text style={styles.ticketsButtonText}>BUY HERE</Text>
                </Pressable>
              </View>
            ) : (
              <View style={styles.ticketsContainer}>
                <View style={styles.ticketsText}>
                  <Text style={styles.ticketsTitle}>Tickets</Text>
                  <Text style={styles.ticketsTextSmall}>Not available</Text>
                </View>
              </View>
            )}
          </View>
          {description === "" || !description ? (
            console.log("no description")
          ) : (
            <View style={styles.eventDetail}>
              <Text style={styles.name}>Description</Text>
              <Text style={styles.detail}>{description}</Text>
            </View>
          )}

          <View>
            <View style={styles.ticketsContainer}>
              <View style={styles.ticketsText}>
                <Text style={styles.ticketsTitle}>{attraction}</Text>
                <Text style={styles.ticketsTextSmall}>
                  Follow the official accounts
                </Text>
              </View>
              <Pressable onPress={openInstagram}>
                <Entypo name="instagram" size={24} color="#67E5BF" />
              </Pressable>
              <Pressable onPress={openFacebook}>
                <Entypo name="facebook" size={24} color="#67E5BF" />
              </Pressable>
              <Pressable onPress={openTwitter}>
                <Entypo name="twitter" size={24} color="#67E5BF" />
              </Pressable>
            </View>
          </View>
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
    position: "absolute",
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
    marginTop: "60%",
    borderRadius: 20,
    backgroundColor: "white",
    padding: 40,
    width: "100%",
    gap: 20,
  },
  name: {
    fontWeight: "bold",
    fontSize: 20,
  },
  detail: {
    fontSize: 14,
  },
  ticketsContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "space-between",
  },
  ticketsText: {},
  ticketsTitle: {
    fontWeight: "bold",
    fontSize: 20,
  },
  ticketsTextSmall: {
    fontSize: 14,
  },
  ticketsButton: {
    borderRadius: 20,
    borderColor: "#67E5BF",
    borderWidth: 1.5,
    padding: 2,
    paddingHorizontal: 16,
  },
  ticketsButtonText: {
    color: "#67E5BF",
    fontSize: 14,
    fontWeight: 500,
  },
});
