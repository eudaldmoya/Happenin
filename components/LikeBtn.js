import { AntDesign } from "@expo/vector-icons";
import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { Pressable, Text } from "react-native";
import { getAuth } from "firebase/auth";
import { collection, doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "../firebaseConfig";

const LikeBtn = ({ eventId, name, location, city, description, date }) => {
  const [isLiked, setIsLiked] = useState(false);

  const toggleSwitch = async () => {
    const user = getAuth().currentUser.uid;
    setIsLiked((previousState) => !previousState);
    console.log(user);
    console.log(eventId);
    
    const docRef = doc(db, "Events", `${eventId}`);
    const docSnap = await getDoc(docRef);
    if (!docSnap.exists()) {
      // await setDoc(doc(db, "Events", `${eventId}`), {
      //   name: {name},
      //   location: {location},
      //   city: {city},
      //   description: {description},
      //   date: {date},
      //   image: {image}
      // });
    } else {
      // docSnap.data() will be undefined in this case
      console.log("Already there!");
    }

    if(isLiked){

    }
    // const docRef = db.collection("Events").doc(`G5viZ9EL-apGx`);
    // docRef.get().then((doc) => {
    //   if (doc.exists) {
    //     console.log("Document data:", doc.data());
    // } else {
    //     // doc.data() will be undefined in this case
    //     console.log("No such document!");
    // }
    // }).catch((error) => {console.log(error)});


    //const eventExists = query(eventsRef);
    //console.log(`${eventExists} heeey`); 
   
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
