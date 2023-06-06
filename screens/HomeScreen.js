import * as React from "react";
import { Image, StyleSheet, View, Text } from "react-native";

import { collection, onSnapshot, query, where } from "firebase/firestore";
import { useEffect, useState } from "react";
import { ScrollView } from "react-native";
import FeedCard from "../components/FeedCard";
import HeaderHome from "../components/HeaderHome";
import { db } from "../firebaseConfig";
import { getAuth } from "firebase/auth";

export default function HomeScreen() {
  const [joinedArray, setJoinedArray] = useState(null);
  const user = getAuth().currentUser.uid;

  useEffect(() => {
    const q = query(collection(db, "Joined"), where("userId", "!=", user),);
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const updatedJoined = [];
      querySnapshot.forEach((doc) => {
        updatedJoined.push(doc.data());
      });
      setJoinedArray(updatedJoined);
    });
    // Cleanup function to unsubscribe from the snapshot listener
    return () => {
      unsubscribe();
    };
  }, []);

  // if (event === null || bcnEv ===null || !bcnEv) {
  //   return <ActivityIndicator size="large" color={"blue"} />;
  // } else {
  //   // let date = event.dates.start.localDate;
  //   // let dayNumber = new Date(date).getDate();
  //   // let month = new Date(date);
  //   // let monthName = month
  //   //   .toLocaleString("default", { month: "short" })
  //   //   .toUpperCase();
  if (joinedArray === null || !joinedArray || joinedArray.length === 0) {
    return (
      <View>
        <HeaderHome />
        <View style={styles.resultsText}>
          <Image
            source={require("../assets/NOJOINFRIENDS.png")}
            style={styles.likesImg}
          />
          <Text style={styles.textBold}>Friends haven't joined events yet</Text>
        </View>
      </View>
    );
  } else {
    return (
      <ScrollView>
        <HeaderHome />
        <View style={styles.container}>
          {console.log('This is the array: ' + joinedArray[0].eventId)}
          {joinedArray.map((event, index) => (
            <View style={styles.card} key={index}>
              <FeedCard
                eventId={event.eventId}
                userId={event.userId}
              />
            </View>
          ))}
        </View>
      </ScrollView>
    );
  }
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
  resultsText: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "auto",
    padding: 30,
  },
  textBold: {
    fontSize: 18,
    fontWeight: "600",
    color: "black",
    textAlign: "center",
    paddingTop: 10,
  },
  textNormal: {
    fontSize: 14,
    fontWeight: "400",
    color: "#8a8a8a",
    textAlign: "center",
    paddingTop: 5,
  },
  likesImg: {
    aspectRatio: 751 / 659,
    height: "55%",
  },
});
