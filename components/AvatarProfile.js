import { Image, StyleSheet } from "react-native";

export default function AvatarProfile({ image }) {
  if (image) {
    return <Image style={styles.circular} source={image} />;
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
