import { Text, View, StyleSheet, Image, ImageBackground } from 'react-native';
import LikeBtn from './LikeBtn';

export default function EventsSquare({ image, name }) {  

  if (image) {
    return (
      <ImageBackground style={styles.container} source={image} imageStyle={{borderRadius: 20}}>
        <View style={styles.background}></View>
        <LikeBtn />
        <Text style={styles.title}>{name}</Text>
      </ImageBackground>
      );
  } else {

    return (
        <ImageBackground style={styles.container} source={require('../assets/placeholder.png')} imageStyle={{borderRadius: 20}}>
          <View style={styles.background}></View>
          <LikeBtn />
          <Text style={styles.title}>{name}</Text>
       </ImageBackground>
    );
  }
}

const radius = 20;
const sqSize = 150;

const styles = StyleSheet.create({
  container: {
    alignItems: 'flex-end',
    width: sqSize,
    height: sqSize,
    resizeMode: 'fit',
  },

  background: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: sqSize,
    height: sqSize,
    backgroundColor: 'black',
    opacity: 0.4,
    borderRadius: radius,
  },

  title: {
    position: 'absolute', 
    left: 15,
    right: 10,
    bottom: 15,
    // fontFamily: 'Roboto',
    fontWeight: 700,
    fontSize: sqSize/8,
    color: "#FFFFFF",
  },
});
