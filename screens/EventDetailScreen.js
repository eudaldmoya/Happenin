import { View, Text } from 'react-native'
import React from 'react'
import JoinBtn from '../components/JoinBtn';

export default function EventDetailScreen({route}) {
    //A route.params tens tota la info necesaria pels details.
    const {eventId} = route.params;
  return (
    <View>
      <Text>{eventId}</Text>
      <JoinBtn eventId={eventId}></JoinBtn>
    </View>
  )
}