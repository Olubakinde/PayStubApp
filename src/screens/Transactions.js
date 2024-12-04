// src/screens/Transactions.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Transactions = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Transaction History</Text>
      {/* List transaction details here */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
});

export default Transactions;
