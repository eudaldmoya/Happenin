import { AntDesign } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import HomeScreen from "./screens/HomeScreen";
import LikesScreen from "./screens/LikesScreen";
import LoginScreen from "./screens/LoginScreen";
import ProfileScreen from "./screens/ProfileScreen";
import SearchScreen from "./screens/SearchScreen";

const BottomTabs = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function BottomTabNavigator() {
  return (
    <BottomTabs.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === "Home") {
            iconName = focused ? "home" : "home";
          } else if (route.name === "Search") {
            iconName = focused ? "search1" : "search1";
          } else if (route.name === "Likes") {
            iconName = focused ? "hearto" : "hearto";
          } else if (route.name === "Profile") {
            iconName = focused ? "user" : "user";
          }

          return <AntDesign name={iconName} size={size} color={color} />;
        },
        tabBarStyle: {
          backgroundColor: "#67E5BF",
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          height: 60,
        },
        tabBarActiveTintColor: "white",
        tabBarInactiveTintColor: "black",
      })}
    >
      <BottomTabs.Screen component={HomeScreen} name="Home" />
      <BottomTabs.Screen component={SearchScreen} name="Search" />
      <BottomTabs.Screen component={LikesScreen} name="Likes" />
      <BottomTabs.Screen component={ProfileScreen} name="Profile" />
    </BottomTabs.Navigator>
  );
}


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="Bottom Nav" component={BottomTabNavigator} options={{ headerShown: false }}/>
      </Stack.Navigator>
    </NavigationContainer>
    // <NavigationContainer>
    //   <BottomTabNavigator />
    // </NavigationContainer>
  );
}
