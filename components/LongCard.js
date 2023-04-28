import { Text, View, StyleSheet, Image, ImageBackground } from "react-native";

const Body = ({ image, location, name, day, month }) => {
  return (
    <View style={styles.innerContainer}>
      {image ? <Image style={styles.innerImg} source={image} />
      : <Image style={styles.innerImg} source={require("../assets/placeholder.png")} />
      }
      <View style={styles.textWrapper}>
        <View style={styles.textInfo}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.location}>{location}</Text>
        </View>
        <View style={styles.dateContainer}>
          <Text style={styles.date}>{day}</Text>
          <Text style={styles.date}>{month}</Text>
        </View>
      </View>
    </View>
  );
};

export default function LongCard(props) {
  if (props.image) {
    return (
      <ImageBackground
        style={styles.backImg}
        imageStyle={{ borderRadius: 20 }}
        source={props.image}
      >
        <View style={styles.filter}></View>
        <Body {...props} />
      </ImageBackground>
    );
  } else {
    return (
      <ImageBackground
        style={styles.backImg}
        imageStyle={{ borderRadius: 20 }}
        source={require("../assets/placeholder.png")}
      >
        <View style={styles.filter}></View>
        <Body {...props} />
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  innerImg: {
    height: 120,
    width: 120,
    borderRadius: 20,
  },
  backImg: {
    height: 120,
    tintColor: "gray",
    borderRadius: 20,
  },
  name: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
  location: {
    color: "white",
    ellipsizeMode: "middle",
    fontSize: 14,
    flexShrink: 1,
  },
  date: {
    color: "white",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    fontSize: 22,
    fontWeight: "bold",
  },
  innerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  filter: {
    flex: 1,
    width: 340,
    height: 120,
    position: "absolute",
    backgroundColor: "black",
    opacity: 0.6,
    borderRadius: 20,
  },
  textWrapper: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
  },
  textInfo: {
    maxWidth: 140,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    paddingLeft: 10,
  },
  dateContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: 120,
    paddingRight: 20,
    maxWidth: 80,
  },
});
