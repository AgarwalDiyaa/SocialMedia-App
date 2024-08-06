import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Chat({navigation}: any) {
  return (
    <View style={styles.chatContainer}>
     <Text style={styles.chatText}>Chat Page</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  chatContainer: {
    backgroundColor: 'black',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  chatText: {
    color: '#ffffff',
    fontSize: 30,
  }
})