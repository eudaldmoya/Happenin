import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import Avatar from "./Avatar";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebaseConfig";
import { ActivityIndicator } from "react-native";

export default function FeedCardPerson({ userId }) {
  const [userData, setUserData] = useState(null);
  useEffect(() => {
    const buildUserData = async () => {
      const docRef = doc(db, "User", `${userId}`);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        console.log("Document data:", docSnap.data());
        setUserData({
          name: docSnap.data().username,
          image: docSnap.data().image,
        });
      } else {
        // docSnap.data() will be undefined in this case
        console.log("No such document!");
      }
    };
    buildUserData();
  }, [userId]);

  if (!userData || userData === null || !userData.name) {
    <ActivityIndicator size="large" color={"blue"} />
  } else {
  return (
    <View style={styles.avatarParent}>
      <Avatar username={userData.name}/>
      <View style={styles.avatarName}>
        <Text style={styles.name}>{userData.name}</Text>
        <Text style={styles.text}>is going to this concert</Text>
      </View>
    </View>
  );
  }
}

const styles = StyleSheet.create({
  avatarParent: {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    paddingLeft: 10,
    gap: 10,
  },
  avatarName: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  name: {
    fontWeight: "bold",
    fontSize: 18,
  },
  text: {
    fontWeight: 300,
    fontSize: 12,
  },
});
