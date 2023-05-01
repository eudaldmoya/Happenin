import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function EventInfo({title, location, date}) {
  return (
    <View>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.info}>{location}</Text>
      <Text style={styles.info}>{date}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
   title: {
     fontWeight: "bold",
   //   fontFamily: "roboto",
     fontSize: 28,
   },
   info: {
    fontWeight: '300',
    fontSize: 14,
   },
 });