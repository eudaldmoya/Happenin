import React from "react";
import { ScrollView, StyleSheet, Text, TouchableOpacity } from "react-native";
import HeaderProfile from "../components/HeaderProfile";
import { getAuth, signOut } from "firebase/auth";
import { useNavigation } from "@react-navigation/native";
import { app } from "../firebaseConfig";
import { Button } from "react-native";

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
      {/*Falta fer consulta a db i passar dades usuari*/}
      <HeaderProfile image={require('../assets/profile.jpg')} name={'Eudald Moya'} age={23} country={'Spain'}/>
      <TouchableOpacity style={styles.signOutButton} onPress={handleSignOut}>
        <Text style={styles.signOutText}>Logout</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}


const styles = StyleSheet.create({
  signOutButton:{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
    paddingVertical: 20,
    marginHorizontal: 30,
    backgroundColor: '#67E5BF',
    borderRadius: 50,
  },
  signOutText:{
    color: 'white',
    fontSize: 16
  }
});