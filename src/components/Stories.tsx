import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Stories() {
  return (
    <View style = {styles.storyContainer}>
      <Text>Stories</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  storyContainer: {
    height: 80,
    color: '000000',
    borderStyle: 'solid',
    borderColor: '#000000',
    borderWidth: 3
  }
})