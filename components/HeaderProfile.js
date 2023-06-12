import Constants from "expo-constants";
import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import AvatarProfile from "./AvatarProfile";
import { db } from "../firebaseConfig";
import { doc, getDoc } from "firebase/firestore";
import { ActivityIndicator } from "react-native";

export default function HeaderProfile({ user }) {

  const [userData, setUserData] = useState(null);
  useEffect(() => {
    const buildUserData = async () => {
      const docRef = doc(db, "User", `${user}`);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        console.log("Document data:", docSnap.data());
        setUserData({
          name: docSnap.data().username,
          image: docSnap.data().image,
          age: docSnap.data().age + ", ",
          location: docSnap.data().location
        });
      } else {
        setUserData({
          name: "",
        });
        // docSnap.data() will be undefined in this case
        console.log("No such document!");
      }
    };
    buildUserData();
  }, [user]);

  if (!userData || userData === null) {
    <ActivityIndicator size="large" color={"blue"} />
  } else {
  return (
    <View style={styles.container}>
      <AvatarProfile username={userData.name ? userData.name : ""} />
      <View style={styles.texts}>
        <Text style={styles.name}>{userData.name}</Text>
        <Text style={styles.info}>
          {userData.age ? userData.age : ""}{userData.location ? userData.location : ""}
        </Text>
      </View>
    </View>
  );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#67E5BF",
    padding: 30,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    marginBottom: 20,
    paddingTop: Constants.statusBarHeight + 30,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  texts: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
    paddingStart: 20,
  },
  name: {
    fontWeight: "bold",
    fontSize: 24,
    color: "white",
  },
  info: {
    fontSize: 16,
    color: "white",
    fontWeight: 500,
  },
});
