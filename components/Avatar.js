import { Image, StyleSheet, Text, View } from "react-native";
export default function Avatar({ username, number }) {
  console.log(username);

  //Això ho he fet així perque el 'require()' no accepta variables dinàmiques, només estàtiques
  if (username && username == 'eudaldmoya') {
    return (
        <Image style={styles.circular} source={require('../assets/eudaldmoya.jpg')} />
    );
  } else if (username && username == 'marclopez') {
    return (
        <Image style={styles.circular} source={require('../assets/marclopez.jpg')} />
    );
  } else if (username && username == 'isaacmorano') {
    return (
        <Image style={styles.circular} source={require('../assets/isaacmorano.jpg')} />
    );
  } else if (username && username == 'alejandronaharro') {
    return (
        <Image style={styles.circular} source={require('../assets/alejandronaharro.jpg')} />
    );
  } else if (username && username == 'victorgranado') {
    return (
        <Image style={styles.circular} source={require('../assets/victorgranado.jpg')} />
    );
  } else if (number) {
    return (
      <View style={styles.numberPeople}>
        <Image style={styles.numberImage} />
        <Text style={styles.number}>+{number}</Text> 
      </View>
    );
  } else {
    return (
      <View style={styles.avatarContainer}>
        <Image
          style={styles.circular}
          source={require("../assets/profile-placeholder.png")}
        />
      </View>
    );
  }

}

const size = 40;
const styles = StyleSheet.create({
  circular: {
    width: size,
    height: size,
    borderRadius: size / 2,
    borderWidth: 2,
    borderColor: "white",
  },
  numberPeople: {
    width: size,
    height: size,
    borderRadius: size / 2,
    borderWidth: 2,
    borderColor: "white",
    backgroundColor: "#67E5BF",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  numberImage: {
    position: "absolute",
  },
  number: {
    color: "white",
    fontWeight: "500",
  },
});
