import * as React from "react";
import { StyleSheet, View } from "react-native";

import { ScrollView } from "react-native";
import { bcnEvents, getRandomEvent } from "../api";
import Comments from "../components/Comments";
import DetailsScreen from "../components/DetailsScreen";
import EventPopup from "../components/EventPopup";
import EventsSquare from "../components/EventsSquare";
import FeedCard from "../components/FeedCard";
import HeaderFriendProfile from "../components/HeaderFriendProfile";
import HeaderHome from "../components/HeaderHome";
import InfoBtn from "../components/InfoBtn";
import JoinBtn from "../components/JoinBtn";
import LikeBtn from "../components/LikeBtn";
import PeopleGoingEvent from "../components/PeopleGoingEvent";
import Tags from "../components/Tags";
import YourFriendsEvents from "../components/YourFriendsEvents";
import { useEffect, useState } from "react";
import LongCard from "../components/LongCard";
import { ActivityIndicator } from "react-native";

export default function HomeScreen() {
  const [event, setEvent] = useState([]);
  const [bcnEv, setBcnEv] = useState(null);

  useEffect(() => {
    getRandomEvent().then(setEvent);
  }, []);
  
  useEffect(() => {
    bcnEvents().then(setBcnEv);
  }, []);

  if (bcnEv === null) {
    return <ActivityIndicator size="large" color={"blue"} />;
  }

  let eventSquares = [];
  for (let i = 0; i < bcnEv.length; i++) {
    eventSquares.push(
      <View key={i}>
        <EventsSquare name={bcnEv[i].name} />
      </View>
    );
  }

  return (
    <ScrollView>
      <HeaderHome />
      <View style={styles.container}>
        <FeedCard avatarName={'Marc López'}/>
        <View style={styles.events}>
          {eventSquares}
        </View>
        <View style={styles.tags}>
          <Tags tagName={"Music"} />
          <Tags tagName={"Festivals"} />
          <Tags tagName={"Family"} />
        </View>
        <LongCard
          name="Vida Records Festival"
          location="Parc Del Fòrum, Barcelona"
          day="29"
          month="MAR"
        />
        <LongCard
          name="Mad Cool"
          location="Caja Mágica, Madrid"
          day="6"
          month="JUL"
        />
        <HeaderFriendProfile
          image={require("../assets/profile.jpg")}
          name={"Eudald Moya"}
          age={23}
          country={"Spain"}
        />
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
