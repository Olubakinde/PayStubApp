// src/screens/CashOutScreen.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const CashOutScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cash Out</Text>
      {/* Add your form or other components to cash out here */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f7f7f7',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
});

export default CashOutScreen;
