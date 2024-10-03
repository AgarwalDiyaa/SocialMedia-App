import { StyleSheet, Text, Alert} from 'react-native'
import React from 'react'
import { View, Button } from 'react-native';
import analytics from '@react-native-firebase/analytics';
import firebase from '@react-native-firebase/app';




export default function Stories() {
  return (
    <View style = {styles.storyContainer}>
      <Text>Stories</Text>
      <View>
      <Button
        title="Firebase Button"
        onPress={async () => {
          await analytics().logEvent('event', {
            id: 3745092,
            item: 'new event log',
          });
          Alert.alert('Event logged');
        }}
      />
    </View>
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