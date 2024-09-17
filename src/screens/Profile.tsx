import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, FlatList } from 'react-native';
import React from 'react';


const posts = [
  { id: '1', image: require('../assets/mindfullness.png') },
  { id: '2', image: require('../assets/mindfullness.png') },
  { id: '3', image: require('../assets/mindfullness.png') },
];

const Profile = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.profileInfo}>
          <Image
            style={styles.profileImage}
            source={require('../assets/EvolveLogo.png')} 
          />
          <View style={styles.stats}>
            <View style={styles.statItem}>
              <Text style={styles.statNumber}>100</Text>
              <Text style={styles.statLabel}>Posts</Text>
            </View>
            <View style={styles.statItem}>
              <Text style={styles.statNumber}>200</Text>
              <Text style={styles.statLabel}>Followers</Text>
            </View>
            <View style={styles.statItem}>
              <Text style={styles.statNumber}>180</Text>
              <Text style={styles.statLabel}>Following</Text>
            </View>
          </View>
        </View>

      
        <View style={styles.bioInfo}>
          <Text style={styles.username}>Evolve</Text>
          <Text style={styles.bio}>Practice Mindfulness</Text>
          <TouchableOpacity style={styles.editProfileButton}>
            <Text style={styles.editProfileButtonText}>Edit Profile</Text>
          </TouchableOpacity>
        </View>
      </View>

      <FlatList
        data={posts}
        numColumns={3}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <Image style={styles.postImage} 
          source={item.image}
          />
        )}
      />
    </ScrollView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    padding: 20,
  },
  profileInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    width: '100%',
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  stats: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '60%',
  },
  statItem: {
    alignItems: 'center',
  },
  statNumber: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  statLabel: {
    fontSize: 12,
    color: 'gray',
  },
  bioInfo: {
    width: '100%',  
    marginTop: 20,
    paddingHorizontal: 30, 
    alignItems: 'flex-start',
  },
  username: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  bio: {
    fontSize: 14,
    color: 'gray',
    marginBottom: 10,
  },
  editProfileButton: {
    backgroundColor: '#ddd',
    paddingVertical: 5,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  editProfileButtonText: {
    fontWeight: 'bold',
    color: '#000',
  },
  postImage: {
    width: '32%',
    height: 120,
    margin: '1%',
  },
});