import { View, Text, StyleSheet, SafeAreaView } from 'react-native'
import React from 'react'

// Navigation
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
// Screens
import MyFeed from './src/screens/MyFeed.tsx'
import Notifications from './src/screens/Notifications.tsx';
import Chat from './src/screens/Chat.tsx';
import Comment from './src/screens/Comment.tsx';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>

      <Stack.Navigator initialRouteName='MyFeed'   
      
      >

      <Stack.Screen name="MyFeed" component={MyFeed} options={{ headerShown: false }}/>
      <Stack.Screen name="Notifications" component={Notifications} />
      <Stack.Screen name="Chat" component={Chat} />
      <Stack.Screen name="Comment" component={Comment} />

      </Stack.Navigator>

    </NavigationContainer>
  )
}

const styles = StyleSheet.create({})

export default App