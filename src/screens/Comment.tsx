import { StyleSheet, Text, View, TextInput, Dimensions } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Feather'

const ScreenWidth = Dimensions.get('window').width;

export default function Comment({navigation}: any) {
    
  return (
    <View style = {styles.container}>
        {/* <Text style = {styles.CommentText}>Comment Page</Text> */}
        <View style={styles.CommentContainer}>
        <TextInput
          style={styles.InputText}
          editable
          placeholder='Type your comment here'
        />
        <Icon
          name='arrow-up-circle'
          size={40}
          style={styles.sendButton}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end', 
  },
  CommentContainer: {
    backgroundColor: 'black',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    width: ScreenWidth,
  },
  InputText: {
    color: '#000000',
    backgroundColor: '#ffffff',
    flex: 1, 
    marginRight: 10,
    padding: 10,
    borderRadius: 5,
  },
  sendButton: {
    color: '#ffffff',
  },
});