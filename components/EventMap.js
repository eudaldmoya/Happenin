import { StyleSheet, Text, View } from "react-native";
import React from "react";
// import MapView from 'expo';
import MapView, { Marker } from 'react-native-maps';


export default function EventMap({latitudePoint, longitudePoint, name}) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>How to get there</Text>
      <MapView
        style={{ flex: 1 }}
        initialRegion={{
          latitude: {latitudePoint},
          longitude: {longitudePoint},
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        {/* <Marker
          coordinate={{
            latitude: {latitudePoint},
            longitude: {longitudePoint},
          }}
          title={name}
        /> */}
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
  },
});
