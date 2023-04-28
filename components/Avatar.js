import { View, Text, Image, StyleSheet } from "react-native";

export default function Avatar({ image, number }) {
  if (image) {
    return (
      <View style={styles.avatarContainer}>
        <Image style={styles.circular} source={image} />
      </View>
    );
  } else if (number) {
    return (
      <View style={styles.avatarContainer}>
      <View style={styles.numberPeople}>
        <Image style={styles.numberImage} />
        <Text style={styles.number}>+{number}</Text>
      </View>
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
   avatarContainer:{
      marginLeft: -10,
   },
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
