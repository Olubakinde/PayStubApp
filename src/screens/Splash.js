// src/screens/Splash.js
import React, { useEffect } from 'react';
import { View, StyleSheet, Image } from 'react-native';

const Splash = ({ navigation }) => {
  useEffect(() => {
    // Navigate to the Login page after the timeout
    const timeout = setTimeout(() => {
      navigation.replace('Login');
    }, 4000);

    return () => clearTimeout(timeout); // Cleanup on unmount
  }, [navigation]);

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          source={require('../../assets/Nellie.png')}
          style={styles.logoImage}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#102A43', // Prussian Blue for a unique and professional base
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoImage: {
    width: 150, // Adjust size to match your logo
    height: 150,
    resizeMode: 'contain',
  },
});

export default Splash;
