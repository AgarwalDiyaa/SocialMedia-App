import React, { useState, useEffect } from 'react';
import { View, Image, ScrollView, ActivityIndicator, StyleSheet } from 'react-native';
import storage from '@react-native-firebase/storage';

const FirebaseImageList = () => {
  const [imageUrls, setImageUrls] = useState<any>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const listImages = async () => {
      try {
        // Reference to the folder (or root) in your Firebase Storage
        const storageRef = storage().ref("/test_images/");

        // List all items (files) and folders
        const result = await storageRef.listAll();

        // Fetch download URLs for all files in the folder
        const urls = await Promise.all(
          result.items.map(async (itemRef) => {
            // Get download URL for each file
            const url = await itemRef.getDownloadURL();
            return url;
          })
        );

        setImageUrls(urls);
        setLoading(false);
      } catch (error) {
        console.error('Error listing images:', error);
        setLoading(false);
      }
    };

    listImages();
  }, []);

  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {imageUrls.map((url:any, index:number) => (
        <Image key={index} source={{ uri: url }} style={styles.image} />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 300,
    height: 300,
    marginBottom: 20,
  },
});

export default FirebaseImageList;
