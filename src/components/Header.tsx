import { StyleSheet, Text, View, SafeAreaView, Image } from 'react-native'
import React from 'react'
import Icons from 'react-native-vector-icons/FontAwesome5'
import Icons2 from 'react-native-vector-icons/Fontisto'

// Navigation
import {NativeStackScreenProps} from '@react-navigation/native-stack'
import Notifications from '../screens/Notifications'
import Chat from '../screens/Chat'




export default function Header({navigation}: any) {
  return (
 <SafeAreaView style={styles.Header}>
    <View style={styles.rowIcons}>
        {/* Instagram - Logo at left */}
        <View>
            <Image 
                style = {styles.InstaLeft}
                source = {require('../assets/InstagramWhite.png')}
            />
        </View>

        {/* Notifications (like) and Messenger icon at right */}
        <View style={styles.rightIcons}>
            <Icons name='heart' color='#ffffff' size={35} style ={styles.notifRight} 
            onPress={() => navigation.navigate('Notifications')}
            />
         
            <Icons2 name='messenger' color='#ffffff' size={35} style={styles.messageRight} 
            onPress={() => navigation.navigate('Chat')}
            />
        </View>
    </View>
 </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    Header: {
        height: 80,
        backgroundColor : '#000000',
        
    },
    rowIcons: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        
    },
    InstaLeft: {
        height: 50,
        width: 180,
        marginTop: 10,
        marginLeft: 10,
    },
    rightIcons: {
        flexDirection: 'row',
    },
    notifRight: {
    
        marginRight: 20,
    },
    messageRight: {
       
        marginRight: 20,
    }
})