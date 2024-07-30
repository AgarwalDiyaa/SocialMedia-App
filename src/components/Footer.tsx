import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Footer() {
  return (
    <View>
    <View style={styles.footer} >
      <Text style={styles.footerText}>
        Footer
      </Text>
    </View>
    </View>
  )
}

const styles = StyleSheet.create({
  footer: {
    flex:1,
    height: 60,
    backgroundColor: '#000000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  footerText: {
    color: '#ffffff',
    fontSize: 20,
    fontWeight: '900',
  }
})