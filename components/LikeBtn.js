import { AntDesign } from "@expo/vector-icons";
import React, { useState, useEffect } from "react";
import { StyleSheet } from "react-native";
import { Pressable, Text } from "react-native";
import { getAuth } from "firebase/auth";
import {
  addDoc,
  doc,
  getDoc,
  setDoc,
  where,
  deleteDoc,
  collection,
  query,
  getDocs,
  onSnapshot,
} from "firebase/firestore";
import { db } from "../firebaseConfig";
import { useDocument } from 'react-firebase-hooks/firestore';

const LikeBtn = ({
  eventId,
  name,
  location,
  city,
  description,
  date,
  image,
}) => {
  const [isLiked, setIsLiked] = useState(null);
  const user = getAuth().currentUser.uid;
  //useEffect checks the correct value for the like button for each event
  //and sets it.
  useEffect(() => {
    const q = query(collection(db, "Likes"), where("userId", "==", user), where("eventId", "==", eventId));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      setIsLiked(!querySnapshot.empty)
    });
    // Cleanup function to unsubscribe from the snapshot listener
    return () => {
      unsubscribe();
    };
  }, [eventId]);

  const toggleSwitch = async () => {
    setIsLiked((previousState) => !previousState);
    console.log(user);
    console.log(eventId);

    //Add Event to database if it doesn't exist 
    const docRef = doc(db, "Events", `${eventId}`);
    const docSnap = await getDoc(docRef);
    if (!docSnap.exists()) {
      await setDoc(doc(db, "Events", eventId), {
        name: name,
        location: location,
        city: city,
        description: !description ? "" : description,
        date: date,
        image: image,
      });
    } else {
      console.log("Event already saved!");
    }

    //If user likes an event, a doc is added in likes list with userid and eventid
    if (!isLiked) {
      await addDoc(collection(db, "Likes"), {
        eventId: eventId,
        userId: user,
      });
      console.log("green");
    } else { //If it is disliked, docs with that eventId and userId are deleted
      const collectionRef = collection(db, "Likes");
      const q = query(
        collectionRef,
        where("userId", "==", user),
        where("eventId", "==", eventId)
      );
      try {
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
          const docRef = doc.ref;
          deleteDoc(docRef)
            .then(() => {
              console.log("Document successfully deleted!");
            })
            .catch((error) => {
              console.error("Error deleting document: ", error);
            });
        });
      } catch (error) {
        console.error("Error getting documents: ", error);
      }

      console.log("nogreen");
    }
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
