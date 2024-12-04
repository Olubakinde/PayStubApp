// src/screens/Transactions.js
import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const Transactions = () => {
  // Sample transactions data
  const transactions = [
    { id: '1', amount: '$20.00', date: '2024-10-01', description: 'Purchase at Store A' },
    { id: '2', amount: '$15.00', date: '2024-10-05', description: 'Purchase at Store B' },
    { id: '3', amount: '$50.00', date: '2024-10-10', description: 'Purchase at Store C' },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Transactions</Text>
      <FlatList
        data={transactions}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.transactionItem}>
            <View style={styles.transactionHeader}>
              <Text style={styles.transactionDate}>{item.date}</Text>
              <Text style={styles.transactionAmount}>{item.amount}</Text>
            </View>
            <Text style={styles.transactionDescription}>{item.description}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f6f9fc',
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    marginBottom: 20,
    color: '#333333',
  },
  transactionItem: {
    padding: 15,
    backgroundColor: '#ffffff',
    borderRadius: 10,
    marginBottom: 10,
    elevation: 3,
    shadowColor: '#000', // For Android shadow
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
  },
  transactionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  transactionDate: {
    fontSize: 14,
    color: '#777777',
  },
  transactionDescription: {
    fontSize: 16,
    fontWeight: '500',
    color: '#333333',
    marginTop: 5,
  },
  transactionAmount: {
    fontSize: 16,
    fontWeight: '600',
    color: '#4CAF50',
  },
});

export default Transactions;
