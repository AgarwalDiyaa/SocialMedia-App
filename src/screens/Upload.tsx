import React, { useState } from 'react';
import { View, Button, Image, StyleSheet, Text, Alert, TextInput } from 'react-native';
import { launchImageLibrary } from 'react-native-image-picker';
import storage from '@react-native-firebase/storage';

const Upload = ({user}: any) => {
  const [imageUri, setImageUri] = useState<string | null>(null); 
  const [caption, setCaption] = useState<string>('');


  const pickImage = () => {
    launchImageLibrary({ mediaType: 'photo' }, (response) => {
      console.log('Response:', response);  
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.errorMessage) {
        console.log('ImagePicker Error: ', response.errorMessage);
      } else if (response.assets && response.assets.length > 0) {
        const uri = response.assets[0]?.uri; 
        if (uri) {  
          setImageUri(uri); 
        }
      } else {
        console.log('No image selected');
      }
    });
  };


  const uploadImage = async () => {
    if (!imageUri) {
      Alert.alert('No Image Selected', 'Please select an image first');
      return;
    }

    const fileName = imageUri.substring(imageUri.lastIndexOf('/') + 1);
    const reference = storage().ref(`${user?.user?.uid}/uploads/${fileName}`);

    const task = reference.putFile(imageUri);

    task.on('state_changed', taskSnapshot => {
      console.log(`${taskSnapshot.bytesTransferred} transferred out of ${taskSnapshot.totalBytes}`);
    });

    try {
      await task;
      const url = await reference.getDownloadURL();
      console.log('Image uploaded to Firebase, download URL:', url);
      Alert.alert('Upload Success', 'Image uploaded successfully!');
    } catch (error) {
      console.log('Upload failed:', error);
      Alert.alert('Upload Failed', 'Image upload failed!');
    }
  };

  return (
    <View style={styles.container}>
      {imageUri ? <Image source={{ uri: imageUri }} style={styles.image} /> : <Text>No Image Selected</Text>}
      {/* <View>
        {
          imageUri ? (
            < TextInput
              style={styles.input}
              placeholder="Caption"
              onChangeText={setCaption}
              value={caption}
            />
          ) : (
            null
          )
        }
      </View> */}
      <View>
      {
        imageUri ? (
          <Button title="Clear Image" onPress={() => setImageUri(null)} />
        ) : (
          <Button title="Pick Image" onPress={pickImage} />
        )
      }
      <Button title="Upload Image" onPress={uploadImage} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  image: { width: 200, height: 200, marginBottom: 20 },
  input: { width: 200, height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 20, padding: 10, borderRadius: 5 },
});

export default Upload;