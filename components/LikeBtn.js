import { AntDesign } from "@expo/vector-icons";
import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { Pressable, Text } from "react-native";

const LikeBtn = () => {
  const [isLiked, setIsLiked] = useState(false);
  // const [isJoin, setIsJoin] = useState("noLike");

  const toggleSwitch = () => {
    setIsLiked((previousState) => !previousState);
    // setIsJoin(isLiked ? "noLike" : "like");
  };

  // console.log(isJoin);

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
