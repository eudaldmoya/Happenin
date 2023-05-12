import React, { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import FeedCardPerson from "./FeedCardPerson";
import JoinBtn from "./JoinBtn";
import LikeBtn from "./LikeBtn";
import LongCard from "./LongCard";
import ShareBtn from "./ShareBtn";
import { getRandomEvent } from "../api";
import { ActivityIndicator } from "react-native";

export default function FeedCard({ image, location, name, day, month, avatarName, imageAvatar}) {
  const [event, setEvent] = useState(null);

  useEffect(() => {
    getRandomEvent().then(setEvent);
  }, []);

  
  if (event === null) {
    return <ActivityIndicator size="large" color={"blue"} />;
  } else {
    let date = event.dates.start.localDate;
    let dayNumber = new Date(date).getDate();
    let month = new Date(date)
    let monthName = month.toLocaleString('default', {month: 'short'}).toUpperCase();

    return (
      <View style={styles.container}>
        <FeedCardPerson
          avatarName={avatarName}
          imageAvatar={imageAvatar}
        />
        <View>
          <LongCard
            image={event.images[0].url}
            name={event.name}
            location={event._embedded.venues[0].name + ', ' + event._embedded.venues[0].city.name}
            day={dayNumber}
            month={monthName}
          />
        </View>
        <View style={styles.buttons}>
          <LikeBtn />
          <JoinBtn />
          <ShareBtn />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 20,
    shadowColor: "#00000050",
    elevation: 5,
    gap: 20,
  },
  buttons: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingLeft: 20,
    paddingRight: 20,
  },
});
