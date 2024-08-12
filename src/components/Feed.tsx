import { StyleSheet, Text, View, Image, Dimensions, FlatList, TouchableOpacity, Share, Alert } from 'react-native'
import React, {useState} from 'react'

import ImageReactNative from '../assets/reactNative.png'
import ImageUserName from '../assets/black.png'
import Icons from 'react-native-vector-icons/FontAwesome5'
import Icons2 from 'react-native-vector-icons/Feather'
import Icons3 from 'react-native-vector-icons/FontAwesome'


export default function Feed({navigation}: any) {
  const ScreenWidth = Dimensions.get('window').width;
  // const { width: ScreenWidth } = useWindowDimensions();
  const list = [
    require('../assets/Exercise.png'),
    require('../assets/Goals.png'),
    require('../assets/PositiveSelfTalk.png'),
    require('../assets/Read.png'),
    require('../assets/eatMindfully.png'),
  ]
  const [liked, setliked] = useState(false);
  const onPressLike = () => {
    setliked(!liked);
  };
  const [saved, setsaved] = useState(false);
  const onPressSave = () => {
    setsaved(!saved);
  };
  const onShare = async () => {
    try {
      const result = await Share.share({
        message:
          'Share this post with your friends and family',
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // Alert.alert('Shared using specific method');
        } else {
          // Alert.alert('Shared using unknown method');
        }
      } else if (result.action === Share.dismissedAction) {
        // Alert.alert('Dismissed - not shared');
      }
    } catch (error: any) {
      Alert.alert(error.message);
    }
  };
 
  return (
    <View>

      {/* Username and user profile picture */}
        <View style = {styles.User}>
          <Image 
            source = {ImageUserName}
            style = {styles.UserImage}
          />
          <Text style = {styles.UserName}>Evolve</Text>
        </View>
      
      {/* Post */}
        <View style={[{ flexGrow: 1 }, styles.flatListContainer]}>
          <FlatList
              data={list}
              keyExtractor={(item, index) => index.toString()}
              horizontal
              pagingEnabled
              showsHorizontalScrollIndicator={true}
              contentContainerStyle={[styles.imageContainer]}
              renderItem={({ item }) => (
                  <View style={[ { width: ScreenWidth }]} >
                      <Image
                          source={item}
                          style={styles.feedImage}
                      />
                  </View>
              )}
          />
        </View>                         
      
      {/* Post Actions */}
          <View style={styles.postActions}>
             <View style={styles.postActionsLeft}>
                  <TouchableOpacity onPress={onPressLike}>
                     <Icons3 
                      name= {liked ? 'heart-o' : 'heart'} 
                      size={31}
                      style={liked ? styles.like : styles.likeClicked}
                      />
                  </TouchableOpacity>
                  <TouchableOpacity 
                      onPress={() => navigation.navigate('Comment')}>
                     <Icons name='comment' size={31}
                      style={styles.comment}
                      />
                  </TouchableOpacity>
                  <TouchableOpacity onPress={onShare}>
                      <Icons2 name='send' size={31}
                      style={styles.share}
                      />
                  </TouchableOpacity>
            </View>
                 <TouchableOpacity onPress={onPressSave}>
                    <Icons3 
                    name= {saved ? 'bookmark-o' : 'bookmark'} 
                    size={31}
                    style={styles.save}
                    />
                </TouchableOpacity>
          </View>  
          

      </View>
   
  )
}

const styles = StyleSheet.create({
  feedImage:{
    width: '100%',
    height: 420,
    borderColor: '#000000',
    borderRadius: 10,
  },
  UserImage:{
    borderRadius: 50,
    height: 50,
    width: 50,
  },
  User:{
    margin: 10,
    flexDirection: 'row'
  },
  UserName:{
    marginTop: 15,
    marginLeft: 5,
    fontWeight: 'bold',
    color: '#000000'
  },
  imageContainer: {
    flexDirection: 'row',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 45,
  },
  flatListContainer: {
    borderColor: '#000000',
    backgroundColor: '#fff',
    borderRadius: 10,
  },
  postActions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 5,
    margin: 2,
  },
  postActionsLeft: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  like:{
    color:'#000000',
  },
  likeClicked: {
    color: 'red',
  
  },
  comment:{
    color:'#000000',
    marginLeft: 10,
  },
  share:{
    color:'#000000',
    marginLeft: 10,
  },
  save:{
    color:'#000000',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
  }
})