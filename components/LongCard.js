import { Text, View, StyleSheet, Image, ImageBackground } from "react-native";

const Body = ({ image, location, name, day, month }) => {

  return (
    <View style={styles.innerContainer}>
      {image ? (
        <Image style={styles.innerImg}  src={image} />
      ) : (
        <Image
          style={styles.innerImg}
          source={require("../assets/placeholder.png")}
        />
      )}
      <View style={styles.textWrapper}>
        <View style={styles.textInfo}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.location}>{location}</Text>
        </View>
        <View style={styles.dateContainer}>
          <Text style={styles.date1}>{day}</Text>
          <Text style={styles.date2}>{month}</Text>
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
        src={props.image}
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
    width: 340,
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
    fontSize: 12,
    fontWeight: 300,
    flexShrink: 1,
  },
  date1: {
    color: "white",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    fontSize: 28,
    fontWeight: "bold",
  },
  date2: {
    color: "white",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    fontSize: 18,
    fontWeight: "bold",
  },
  innerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  filter: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "black",
    opacity: 0.66,
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
