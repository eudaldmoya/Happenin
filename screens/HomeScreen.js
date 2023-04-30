import Constants from "expo-constants";
import * as React from "react";
import { StyleSheet, View } from "react-native";

import { ScrollView } from "react-native";
import AddFriendBtn from "../components/AddFriendBtn";
import Comments from "../components/Comments";
import DetailsScreen from "../components/DetailsScreen";
import EventPopup from "../components/EventPopup";
import EventsSquare from "../components/EventsSquare";
import FeedCard from "../components/FeedCard";
import HeaderHome from "../components/HeaderHome";
import InfoBtn from "../components/InfoBtn";
import JoinBtn from "../components/JoinBtn";
import LikeBtn from "../components/LikeBtn";
import PeopleGoingEvent from "../components/PeopleGoingEvent";
import Tags from "../components/Tags";
import YourFriendsEvents from "../components/YourFriendsEvents";
import HeaderFriendProfile from "../components/HeaderFriendProfile";

export default function HomeScreen() {
  return (
    <ScrollView>
      <HeaderHome />
      <View style={styles.container}>
        <View style={styles.events}>
          <EventsSquare
            image={require("../assets/image.jpeg")}
            name="Primavera Sound"
          />
          <EventsSquare
            image={require("../assets/madcool.jpeg")}
            name="Mad Cool"
          />
          <EventsSquare name="FCB vs Real Madrid" />
        </View>
        <FeedCard />
        <View style={styles.tags}>
          <Tags tagName={"Music"} />
          <Tags tagName={"Festivals"} />
          <Tags tagName={"Family"} />
        </View>
        <HeaderFriendProfile image={require('../assets/profile.jpg')} name={'Eudald Moya'} age={23} country={'Spain'}/>
        <JoinBtn />
        <LikeBtn />
        <YourFriendsEvents />
        <DetailsScreen />
        <PeopleGoingEvent />
        <InfoBtn />
        <EventPopup />
        <Comments />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: 20,
    backgroundColor: "#F0F0F0",
    gap: 20,
  },
  events: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 20,
    flex: 2,
    flexWrap: "wrap",
  },
  tags: {
    display: "flex",
    flexDirection: "row",
  },
});
