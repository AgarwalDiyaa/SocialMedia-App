import { StyleSheet, Text, View, SafeAreaView, Image } from 'react-native'
import React from 'react'

export default function Header() {
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
        <Image 
                style = {styles.notifRight}
                source = {require('../assets/like.png')}
            />
         <Image 
                style = {styles.messageRight}
                source = {require('../assets/messenger.png')}
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
        height:40,
        width:40,
        marginRight: 20,
    },
    messageRight: {
        height:40,
        width:40,
        marginRight: 20,
    }
})