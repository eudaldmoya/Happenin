import { Image, StyleSheet } from "react-native";

export default function AvatarProfile({ username }) {

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
  } else {
    return (
      <Image
        style={styles.circular}
        source={require("../assets/profile-placeholder.png")}
      />
    );
  }
}

const size = 90;
const styles = StyleSheet.create({
  avatarContainer: {
    marginLeft: -10,
  },
  circular: {
    width: size,
    height: size,
    borderRadius: size / 2,
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
});
