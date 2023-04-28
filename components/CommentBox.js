import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TextInput } from 'react-native'

export default function CommentBox() {
  return (
    <View>
      <TextInput
        style={styles.input}
      //   onChangeText={onChangeNumber}
      //   value={number}
        placeholder="Write something..."
        keyboardType="default"
      />
    </View>
  )
}

const styles = StyleSheet.create({
   input: {
      height: 40,
      margin: 10,
      borderRadius: 5,
      borderColor: '#D6D6D6',
      borderWidth: 1,
      padding: 10,
      paddingLeft: 20,
    },
})