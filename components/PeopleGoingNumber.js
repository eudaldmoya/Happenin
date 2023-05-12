import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Avatar from './Avatar'

export default function PeopleGoingNumber() {
  return (
    <View style={styles.container}>
      <Avatar image={require('../assets/person1.png')}/>
      <Avatar />
      <Avatar image={require('../assets/person2.jpg')}/>
      <Avatar number={31} />
    </View>
  )
}

const styles = StyleSheet.create({
   container: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      paddingLeft: 10,
      gap: -10,
   }
})