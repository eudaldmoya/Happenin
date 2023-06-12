import React, { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import FeedCardPerson from "./FeedCardPerson";
import JoinBtn from "./JoinBtn";
import LikeBtn from "./LikeBtn";
import LongCard from "./LongCard";
import ShareBtn from "./ShareBtn";
import { getRandomEvent } from "../api";
import { ActivityIndicator } from "react-native";
import LongCardQueryWrapper from "./LongCardQueryWrapper";

export default function FeedCard({
  eventId,
  userId
}) {
  if(!eventId || !userId){
    <ActivityIndicator size="large" color={"blue"} />
  }
  return (
    <View style={styles.container}>
      <FeedCardPerson userId={userId}/>
      <View>
        {console.log('feed card id console' + eventId)}
        <LongCardQueryWrapper
        eventId={eventId}
        />
      </View>
      <View style={styles.buttons}>
        <LikeBtn eventId={eventId} size={24}/>
        <JoinBtn eventId={eventId}/>
      </View>
    </View>
  );
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
