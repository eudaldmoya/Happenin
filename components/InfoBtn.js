import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Feather } from '@expo/vector-icons';

export default function InfoBtn() {
  return (
    <View>
      <Feather name="info" size={30} color="#67E5BF" />
    </View>
  )
}

const styles = StyleSheet.create({})