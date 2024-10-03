import {View, Text, StyleSheet, SafeAreaView} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';

// Navigation
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// Screens
import MyFeed from './src/screens/MyFeed.tsx';
import Notifications from './src/screens/Notifications.tsx';
import Chat from './src/screens/Chat.tsx';
import Comment from './src/screens/Comment.tsx';
import Explore from './src/screens/Explore.tsx';
import Profile from './src/screens/Profile.tsx';
import Upload from './src/screens/Upload.tsx';
import Login from "./src/screens/login";
import analytics from '@react-native-firebase/analytics';
import firebase from '@react-native-firebase/app';

import Images from "./src/screens/list images";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const HomeFeed = () => {
  return (
    <Stack.Navigator initialRouteName="MyFeed">
      <Stack.Screen
        name="MyFeed"
        component={MyFeed}
        options={{headerShown: false}}
      />
      <Stack.Screen name="Notifications" component={Images} />
      <Stack.Screen name="Chat" component={Chat} />
      <Stack.Screen name="Comment" component={Comment} />
    </Stack.Navigator>
  );
};

const App = () => {
  const [user, setUser] = React.useState(null);
  if (!user) {
    return (
      <SafeAreaView>
        <View>
          <Login setUser={setUser} />
        </View>
      </SafeAreaView>
    );
  }
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{}}>
        <Tab.Screen
          name="Home"
          component={HomeFeed}
          options={{
            headerShown: false,
            tabBarLabelStyle: {display: 'none'},
            tabBarIcon: ({color, size}) => (
              <Icon name="home" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Explore"
          component={Explore}
          options={{
            tabBarLabelStyle: {display: 'none'},
            tabBarIcon: ({color, size}) => (
              <Icon name="search" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Upload"
          component={Upload}
          options={{
            tabBarLabelStyle: {display: 'none'},
            tabBarIcon: ({color, size}) => (
              <Icon name="plus" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          // component={Profile}
          options={{
            tabBarLabelStyle: {display: 'none'},
            tabBarIcon: ({color, size}) => (
              <Icon name="user" color={color} size={size} />
            ),
          }}
        >
          {() => <Profile setUser={setUser} />}
        </Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({});

export default App;
