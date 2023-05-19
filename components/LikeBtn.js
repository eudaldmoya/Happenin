import { AntDesign } from "@expo/vector-icons";
import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { Pressable, Text } from "react-native";
import { getAuth } from "firebase/auth";
import { collection, doc, query, setDoc } from "firebase/firestore";
import { db } from "../firebaseConfig";

const LikeBtn = ({ eventId }) => {
  const [isLiked, setIsLiked] = useState(false);

  

 
  const toggleSwitch = () => {
    const user = getAuth().currentUser.uid;
    setIsLiked((previousState) => !previousState);
    console.log(user);
    console.log(eventId);
    const eventsRef = collection(db, "Events");
    const eventExists = query(eventsRef, `${eventId}`);
    console.log(`${eventExists} heeey`); 
   
  };

  return (
    <Pressable onPress={toggleSwitch}>
      <AntDesign
        name={isLiked ? "heart" : "hearto"}
        size={24}
        color="#67E5BF"
        style={styles.likeButton}
      />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  likeButton: {
    padding: 12,
  },
});

export default LikeBtn;
