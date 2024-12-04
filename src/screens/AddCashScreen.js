// src/screens/AddCashScreen.js
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Modal } from 'react-native';
import { MaterialIcons, FontAwesome5 } from '@expo/vector-icons';
import { ScrollView } from 'react-native-gesture-handler';

const AddCashScreen = () => {
  const [isModalVisible, setModalVisible] = useState(false);

  const handleAddCash = () => {
    setModalVisible(true); // Open confirmation modal
  };

  const closeModal = () => {
    setModalVisible(false); // Close confirmation modal
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.header}>
          <Text style={styles.title}>My Cash</Text>
          <MaterialIcons name="account-circle" size={24} color="#4CAF50" />
        </View>

        <Text style={styles.balance}>$1.00</Text>
        <Text style={styles.availableText}>Available</Text>

        <View style={styles.buttonsContainer}>
          <TouchableOpacity style={styles.actionButton} onPress={handleAddCash}>
            <Text style={styles.actionText}>Add Cash</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionButton}>
            <Text style={styles.actionText}>Cash Out</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.paymentOptions}>
          <TouchableOpacity style={styles.paymentOption} onPress={handleAddCash}>
            <MaterialIcons name="attach-money" size={24} color="#4CAF50" />
            <Text style={styles.paymentText}>Cash</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.paymentOption} onPress={handleAddCash}>
            <FontAwesome5 name="bitcoin" size={24} color="#F39C12" />
            <Text style={styles.paymentText}>Bitcoin</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.paymentOption} onPress={handleAddCash}>
            <MaterialIcons name="trending-up" size={24} color="#3498DB" />
            <Text style={styles.paymentText}>Stocks</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.paymentOption} onPress={handleAddCash}>
            <MaterialIcons name="savings" size={24} color="#F39C12" />
            <Text style={styles.paymentText}>Savings</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      <Modal visible={isModalVisible} transparent={true} animationType="slide">
        <View style={styles.modalContainer}>
          <Text style={styles.modalText}>How would you like to deposit?</Text>
          <TouchableOpacity style={styles.modalButton} onPress={closeModal}>
            <Text style={styles.modalButtonText}>Standard (Free)</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.modalButton} onPress={closeModal}>
            <Text style={styles.modalButtonText}>Instant ($0.25 Fee)</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={closeModal}>
            <Text style={styles.cancelText}>Cancel</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f7f7',
    paddingHorizontal: 20,
    paddingTop: 65,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 30,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  balance: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#4CAF50',
    textAlign: 'center',
  },
  availableText: {
    fontSize: 16,
    color: '#777',
    textAlign: 'center',
    marginBottom: 30,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  actionButton: {
    backgroundColor: '#4CAF50',
    borderRadius: 20,
    paddingVertical: 15,
    paddingHorizontal: 30,
    elevation: 5, // Shadow for Android
    shadowColor: '#000', // Shadow for iOS
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
  },
  actionText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
  paymentOptions: {
    marginTop: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    elevation: 3,
  },
  paymentOption: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  paymentText: {
    fontSize: 16,
    color: '#333',
    marginLeft: 10,
  },
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  modalText: {
    fontSize: 18,
    color: '#fff',
    marginBottom: 20,
  },
  modalButton: {
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingVertical: 15,
    paddingHorizontal: 40,
    marginBottom: 10,
    alignItems: 'center',
  },
  modalButtonText: {
    fontSize: 16,
    color: '#4CAF50',
  },
  cancelText: {
    fontSize: 16,
    color: '#fff',
    marginTop: 20,
  },
});

export default AddCashScreen;
