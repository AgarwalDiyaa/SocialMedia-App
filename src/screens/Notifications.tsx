import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Notifications({navigation}: any) {
  return (
    <View style = {styles.notificationContainer}>
      <Text style = {styles.notificationText}>Notifications Page</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  notificationContainer: {
    backgroundColor: 'black',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
   
  },
  notificationText: {
    color: '#ffffff',
    fontSize: 30,
  }
})