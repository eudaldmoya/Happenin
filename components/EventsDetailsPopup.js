import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function EventsDetailsPopup({description}) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Details</Text>
      <Text style={styles.text}>{description}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
  },
  title: {
    fontWeight: 'bold',
    fontSize: 24,
  },
  text: {
    fontWeight: 400,
    fontSize: 16,
  }
})