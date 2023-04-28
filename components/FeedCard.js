import React from "react";
import { StyleSheet, View } from "react-native";
import FeedCardPerson from "./FeedCardPerson";
import JoinBtn from "./JoinBtn";
import LikeBtn from "./LikeBtn";
import LongCard from "./LongCard";
import ShareBtn from "./ShareBtn";

export default function FeedCard() {

  return (
    <View style={styles.container}>
      <FeedCardPerson name={'Marc López'} image={require('../assets/person4.jpg')} />
      <View>
        <LongCard
         image={require('../assets/vidarecords.jpg')}
          name="Vida Records Festival"
          location="Parc Del Fòrum, Barcelona"
          day="29"
          month="MAR"
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
   display: 'flex',
   flexDirection: 'row',
   alignItems: 'center',
   justifyContent: 'space-between',
   paddingLeft: 20,
   paddingRight: 20,
  }
});
