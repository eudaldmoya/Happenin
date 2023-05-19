import { AntDesign } from "@expo/vector-icons";
import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { Pressable, Text } from "react-native";

const LikeBtn = ({setLike}) => {
  const [isLiked, setIsLiked] = useState(false);

  const toggleSwitch = () => {
    setIsLiked((previousState) => !previousState);
  };

  return (
    <Pressable onPress={toggleSwitch}>
      <AntDesign
        name={isLiked ? "heart" : "hearto"}
        size={24}
        color="#67E5BF"
        style={styles.likeButton}
      />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  likeButton: {
    padding: 12,
  },
});

export default LikeBtn;
