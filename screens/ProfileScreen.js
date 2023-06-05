import { Entypo } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";
import { getAuth, signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { ScrollView, StyleSheet, TouchableOpacity, View, Text, Image } from "react-native";
import HeaderProfile from "../components/HeaderProfile";
import { app, db } from "../firebaseConfig";
import Constants from "expo-constants";
import { collection, onSnapshot, query, where } from 'firebase/firestore';
import LongCardQueryWrapper from '../components/LongCardQueryWrapper';

export default function ProfileScreen() {
  const navigation = useNavigation();
  const auth = getAuth(app);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigation.navigate('Login');
      })
      .catch((error) => {
        console.log(error);
      });
};

const [joinedArray, setJoinedArray] = useState(null);
  user = getAuth().currentUser.uid;

  useEffect(() => {
    const q = query(collection(db, "Joined"), where("userId", "==", user));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const updatedJoins = [];
      querySnapshot.forEach((doc) => {
        updatedJoins.push(doc.data().eventId);
      });
      setJoinedArray(updatedJoins);
    });
    // Cleanup function to unsubscribe from the snapshot listener
    return () => {
      unsubscribe();
    };
  }, []);
  if (joinedArray === null || !joinedArray || joinedArray.length === 0) {
    return (
      <View>
        <HeaderProfile user={user}/>
        <View style={styles.resultsText}>
          <Image
            source={require("../assets/NOLIKES.png")}
            style={styles.likesImg}
          />
          <Text style={styles.textBold}>No joined events</Text>
          <Text style={styles.textNormal}>
            Start looking around to find events you might want to go to.
          </Text>
        </View>
      </View>
    );
    } else {
  return (
    <ScrollView>
      <HeaderProfile user={user}/>
      <TouchableOpacity style={styles.signOutButton} onPress={handleSignOut}>
        <Entypo name="log-out" size={24} color="white" />
      </TouchableOpacity>
      <View style={styles.container}>
      {joinedArray.map((eventId, index) => (
            <View style={styles.card} key={index}>
              <LongCardQueryWrapper
                eventId={eventId}
              />
            </View>
          ))}
      </View>
    </ScrollView>
  );
      }
}


const styles = StyleSheet.create({
  signOutButton:{
    position: 'absolute',
    top: 0,
    paddingTop: Constants.statusBarHeight + 50,
    right: 0,
    paddingRight: 40,
  },
  likesImg: {
    aspectRatio: 751 / 659,
    height: "52.5%",
  },
});