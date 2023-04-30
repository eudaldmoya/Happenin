import React from "react";
import { ScrollView } from "react-native";
import HeaderProfile from "../components/HeaderProfile";

export default function ProfileScreen() {
  return (
    <ScrollView>
      <HeaderProfile image={require('../assets/profile.jpg')} name={'Eudald Moya'} age={23} country={'Spain'}/>
    </ScrollView>
  );
}
