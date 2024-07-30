import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Stories from '../components/Stories'
import Feed from '../components/Feed'

export default function MyFeed() {
  return (
    <ScrollView>
    <View>
      
      <Header />
      <Stories />
      <Feed />
      <Footer />

    </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({})