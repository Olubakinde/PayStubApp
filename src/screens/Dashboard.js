// src/screens/Dashboard.js
import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const Dashboard = () => {
  const handleSendMoney = () => {
    // Implement send money functionality
    console.log('Send Money pressed');
  };

  const handleReceiveMoney = () => {
    // Implement receive money functionality
    console.log('Receive Money pressed');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Dashboard</Text>
      <Button title="Send Money" onPress={handleSendMoney} />
      <Button title="Receive Money" onPress={handleReceiveMoney} />
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

export default Dashboard;
