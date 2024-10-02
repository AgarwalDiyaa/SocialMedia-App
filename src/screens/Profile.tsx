import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import auth from '@react-native-firebase/auth';
import { styles } from '../styles';
import React from 'react'

const Profile = ({setUser}: any) => {
  return (
    <View>
      <Text>Profile</Text>
      {/* Logout button */}
      <TouchableOpacity
        onPress={() => {
          // Logout
          auth()
            .signOut()
            .then(() => {
              setUser(null);
              console.log('User signed out!')});
        }}
        style={styles.loginButton}
      >
        <Text style={styles.loginText}>Logout</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Profile
