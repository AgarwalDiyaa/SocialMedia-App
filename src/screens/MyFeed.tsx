import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Stories from '../components/Stories'
import Feed from '../components/Feed'



export default function MyFeed({navigation}: any) {
  return (
    <View>
     
        <ScrollView>
        <View>
        <Header navigation={navigation}/>
          <Stories />
          <Feed />
        </View>
        </ScrollView>
      {/* <Footer /> */}
    </View>
  )
}

const styles = StyleSheet.create({})