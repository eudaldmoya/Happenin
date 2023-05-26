import { Entypo } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";
import { getAuth, signOut } from "firebase/auth";
import React from "react";
import { ScrollView, StyleSheet, TouchableOpacity } from "react-native";
import HeaderProfile from "../components/HeaderProfile";
import { app } from "../firebaseConfig";
import Constants from "expo-constants";

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

  return (
    <ScrollView>
      <HeaderProfile image={require('../assets/profile.jpg')} name={'Eudald Moya'} age={23} country={'Spain'}/>
      <TouchableOpacity style={styles.signOutButton} onPress={handleSignOut}>
        <Entypo name="log-out" size={24} color="white" />
      </TouchableOpacity>
    </ScrollView>
  );
}


const styles = StyleSheet.create({
  signOutButton:{
    position: 'absolute',
    top: 0,
    paddingTop: Constants.statusBarHeight + 50,
    right: 0,
    paddingRight: 40,
  },
});