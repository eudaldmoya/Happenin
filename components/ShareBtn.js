import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { Pressable, StyleSheet } from 'react-native';

export default function ShareBtn() {
  return (
    <Pressable>
      <Ionicons name="ios-share-social" size={24} color="#67E5BF" />
    </Pressable>
  )
}

const styles = StyleSheet.create({})