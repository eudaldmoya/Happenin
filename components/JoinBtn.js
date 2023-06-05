import React, { useEffect, useState } from "react";
import { Pressable, StyleSheet, Text } from "react-native";
import { db } from "../firebaseConfig";
import { addDoc, collection, deleteDoc, doc, getDoc, getDocs, onSnapshot, query, setDoc, where } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const JoinBtn = ({ eventId }) => {
  const [isJoined, setIsJoined] = useState(null);
  //const [isJoin, setIsJoin] = useState("noJoin");
  const user = getAuth().currentUser.uid;

  useEffect(() => {
    const q = query(
      collection(db, "Joined"),
      where("userId", "==", user),
      where("eventId", "==", eventId)
    );
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      setIsJoined(!querySnapshot.empty);
    });
    // Cleanup function to unsubscribe from the snapshot listener
    return () => {
      unsubscribe();
    };
  }, [eventId]);

  const toggleSwitch = async () => {
    setIsJoined((previousState) => !previousState);
    //setIsJoin(isJoined ? "noJoin" : "join");

    //If user joins an event, a doc is added in joined list with userid and eventid
    if (!isJoined) {
      await addDoc(collection(db, "Joined"), {
        eventId: eventId,
        userId: user,
      });
      console.log("green");
    } else {
      //If it is disjoined, docs with that eventId and userId are deleted
      const collectionRef = collection(db, "Joined");
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

  console.log(isJoined);

  return (
    <Pressable
      style={[styles.joinButton, isJoined && styles.joinButtonActive]}
      onPress={toggleSwitch}
    >
      <Text style={[styles.joinText, isJoined && styles.joinTextActive]}>
        {isJoined ? "JOINED" : "JOIN"}
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  joinButton: {
    borderColor: "#67E5BF",
    borderWidth: 1,
    paddingTop: 2.5,
    paddingBottom: 2.5,
    paddingLeft: 40,
    paddingRight: 40,
    borderRadius: 40,
    marginTop: 5,
    marginBottom: 5,
    marginRight: 5,
    marginLeft: 10,
  },
  joinButtonActive: {
    backgroundColor: "#67E5BF",
    paddingLeft: 32,
    paddingRight: 32,
  },
  joinText: {
    color: "#67E5BF",
    // ios: { fontFamily: "Arial" },
    // android: { fontFamily: "Roboto" },
    fontWeight: "regular",
    textAlign: "center",
    fontSize: 16,
  },
  joinTextActive: {
    color: "#FFFFFF",
  },
});

export default JoinBtn;
