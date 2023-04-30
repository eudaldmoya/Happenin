import { useState } from "react";
import { Image, Pressable, StyleSheet } from "react-native";

export default function AvatarBig({ image }) {
   const [isActive, setIsActive] = useState(false);
  const [isActivated, setIsActivated] = useState("");

  const toggleSwitch = () => {
   setIsActivated((previousState) => !previousState);
  };

  if (image) {
    return (
      <Pressable style={[styles.avatarContainer, isActivated && styles.avatarContainerClicked]}
      onPress={toggleSwitch}>
        <Image style={styles.circular} source={image} />
      </Pressable>
    );
  } else {
    return (
      <Pressable style={[styles.avatarContainer, isActivated && styles.avatarContainerClicked]}
      onPress={toggleSwitch}>
        <Image
          style={styles.circular}
          source={require("../assets/profile-placeholder.png")}
        />
      </Pressable>
    );
  }
}

const size = 50;
const styles = StyleSheet.create({
  avatarContainer: {
    marginLeft: -10,
  },
  avatarContainerClicked:{
   opacity: 0.5,
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
  }
});
