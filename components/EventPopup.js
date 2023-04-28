import React from 'react'
import { StyleSheet, View } from 'react-native'
import EventSocialMedia from './EventSocialMedia'
import EventTickets from './EventTickets'
import EventsDetailsPopup from './EventsDetailsPopup'

export default function EventPopup() {
  return (
    <View style= {styles.container}>
      <EventTickets saleState={"On sale!"} />
      <EventsDetailsPopup description={'The Primavera Sound festival arrives every year like a hurricane of music to Barcelona and always counting on the most notorious names on the entire music scene.'}/>
      <EventSocialMedia name={'Primavera Sound'} instagram={'https://www.instagram.com/primavera_sound/'} facebook={'https://www.facebook.com/primaverasoundfestivals'} twitter={'https://twitter.com/Primavera_Sound'}/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'stretch',
    justifyContent: 'center',
    margin: 20,
    padding: 20,
    borderRadius: 20,
    backgroundColor: 'white',
    gap: 15,
  }
})