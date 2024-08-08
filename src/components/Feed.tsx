import { StyleSheet, Text, View, Image, Dimensions, FlatList, useWindowDimensions } from 'react-native'
import React from 'react'
import ImageReactNative from '../assets/reactNative.png'
import ImageUserName from '../assets/black.png'


export default function Feed() {
  const ScreenWidth = Dimensions.get('window').width;
  // const { width: ScreenWidth } = useWindowDimensions();
  const list = [
    require('../assets/Exercise.png'),
    require('../assets/Goals.png'),
    require('../assets/PositiveSelfTalk.png'),
    require('../assets/Read.png'),
    require('../assets/eatMindfully.png'),
  ]
 
  return (
    <View>
      <View style = {styles.User}>
        <Image 
        source = {ImageUserName}
        style = {styles.UserImage}
          />
        <Text style = {styles.UserName}>Evolve</Text>
      </View>
      
<View style={{ flexGrow: 1 }}>

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
      

      </View>
   
  )
}

const styles = StyleSheet.create({
  feedImage:{
    width: '100%',
    height: 420
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
    flexDirection: 'row'
  }
})