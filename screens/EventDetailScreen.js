import { Entypo, MaterialIcons } from "@expo/vector-icons";
import Constants from "expo-constants";
import React, { useEffect } from "react";
import {
  Image,
  Linking,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import LikeBtn from "../components/LikeBtn";
import Avatar from "../components/Avatar";
import JoinBtn from "../components/JoinBtn";

export default function EventDetailScreen({ navigation, route }) {
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
      <View style={styles.topBar}>
        <Pressable onPress={() => navigation.goBack()}>
          <MaterialIcons name="keyboard-arrow-left" size={50} color="#67E5BF" />
        </Pressable>
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
          size={30}
        />
      </View>
      <View style={styles.imageParent}>
        <Image style={styles.image} src={image} />
      </View>
      <ScrollView>
        <View style={styles.containerGoingParent}>
          <View style={styles.containerGoing}>
            <JoinBtn eventId={eventId}></JoinBtn>
          </View>
        </View>
        <View style={styles.detailContent}>
          <View style={styles.content}>
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
                  <View style={styles.bottomLine}>
                    <Text style={styles.ticketsTextSmall}>
                      Follow the official accounts
                    </Text>
                    <View style={styles.socials}>
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
              </View>
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
    backgroundColor: 'white',
  },
  topBar: {
    width: "100%",
    position: "absolute",
    paddingTop: Constants.statusBarHeight,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    flexDirection: "row",
    top: 10,
    zIndex: 3,
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
    backgroundColor: "black",
    height: "40%",
    aspectRatio: 1024 / 576,
  },
  image: {
    aspectRatio: 1024 / 576,
    resizeMode: "contain",
    width: "125%",
    opacity: 0.66,
  },
  detailContent: {
    paddingTop: 0,
  },
  content: {
    marginTop: 300,
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
  bottomLine: {
    display: "flex",
    flexDirection: "row",
    alignItems: "baseline",
    justifyContent: "space-between",
    width: "95%",
  },
  socials: {
    display: "flex",
    flexDirection: "row",
    gap: 10,
  },
  containerGoingParent: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    zIndex: 4,
    position: 'absolute',
    top: 300,
  },
  containerGoing: {
    backgroundColor: "white",
    borderRadius: 50,
    display: "flex",
    flexDirection: "row",
    top: -25,
    padding: 5,
  },
  peopleGoing: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  goingText: {
    paddingLeft: 5,
    paddingRight: 25,
    fontWeight: "500",
    color: "#67E5BF",
  },
  containerNumber: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingLeft: 10,
    gap: -10,
  },
});
