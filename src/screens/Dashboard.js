import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Home Screen
const Home = () => {
  return (
    <ScrollView style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <Text style={styles.appTitle}>Nellie</Text>
        <TouchableOpacity>
          <Icon name="person-circle" size={35} color="#102A43" />
        </TouchableOpacity>
      </View>

      {/* Balance Section */}
      <View style={styles.balanceCard}>
        <View style={styles.balanceHeader}>
          <Icon name="wallet-outline" size={24} color="#FFFFFF" />
          <Text style={styles.balanceLabel}>Your Balance</Text>
        </View>
        <Text style={styles.balanceAmount}>$12,345.67</Text>
      </View>

      {/* Quick Actions Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Quick Actions</Text>

        <View style={styles.actionsGrid}>
          {/* Action Buttons */}
          {['QR Pay', 'Pay Bills', 'Send Money', 'Receive Money', 'Mobile Prepaid'].map((action, index) => (
            <View key={index} style={styles.actionBox}>
              <TouchableOpacity style={styles.actionButton}>
                <Icon name="cash-outline" size={24} color="#FFFFFF" />
                <Text style={styles.actionButtonText}>{action}</Text>
              </TouchableOpacity>
            </View>
          ))}
        </View>
      </View>

      {/* Financial Tools Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Financial Tools</Text>
        <View style={styles.actionRow}>
          <TouchableOpacity style={styles.actionButton}>
            <Icon name="calculator-outline" size={18} color="#FFFFFF" />
            <Text style={styles.actionButtonText}>Budget Planner</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionButton}>
            <Icon name="bar-chart-outline" size={18} color="#FFFFFF" />
            <Text style={styles.actionButtonText}>Analytics</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

// Transactions Screen
const Transactions = () => (
  <View style={styles.container}>
    <Text style={styles.pageTitle}>Transactions</Text>
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>Recent Transactions</Text>
      <View style={styles.transactionItem}>
        <Text style={styles.transactionTitle}>Groceries</Text>
        <Text style={styles.transactionAmount}>-$50.00</Text>
      </View>
      <View style={styles.transactionItem}>
        <Text style={styles.transactionTitle}>Salary</Text>
        <Text style={styles.transactionAmount}>+$5,000.00</Text>
      </View>
      <View style={styles.transactionItem}>
        <Text style={styles.transactionTitle}>Electricity Bill</Text>
        <Text style={styles.transactionAmount}>-$120.00</Text>
      </View>
      <TouchableOpacity style={styles.seeAllButton}>
        <Text style={styles.seeAllText}>See All Transactions</Text>
      </TouchableOpacity>
    </View>
  </View>
);

// Send/Request Screen (SR)
const SR = () => (
  <View style={styles.container}>
    <Text style={styles.pageTitle}>Send/Request</Text>
    <Text style={styles.pageContent}>Send or request money here.</Text>
    <View style={styles.actionRow}>
      <TouchableOpacity style={styles.actionButton}>
        <Icon name="add-outline" size={18} color="#FFFFFF" />
        <Text style={styles.actionButtonText}>Add Funds</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.actionButton}>
        <Icon name="send-outline" size={18} color="#FFFFFF" />
        <Text style={styles.actionButtonText}>Send Money</Text>
      </TouchableOpacity>
    </View>
  </View>
);

// Investments Screen
const Investments = () => (
  <View style={styles.container}>
    <Text style={styles.pageTitle}>Investments</Text>
    <Text style={styles.pageContent}>Track your investments here.</Text>
  </View>
);

// Cards Screen
const Cards = () => (
  <View style={styles.container}>
    <Text style={styles.pageTitle}>Cards</Text>
    <Text style={styles.pageContent}>Track your cards here.</Text>
  </View>
);

// Tab Navigator
const Tab = createBottomTabNavigator();

const Dashboard = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route, focused }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;
          let iconSize = 24; // Default size for other tabs
          
          if (route.name === 'SR') {
            iconName = 'send-outline'; // Icon for SR
            iconSize = focused ? 24 : 32; // Bigger icon when not focused
          } else if (route.name === 'Home') {
            iconName = 'home-outline';
          } else if (route.name === 'Transactions') {
            iconName = 'receipt-outline';
          } else if (route.name === 'Investments') {
            iconName = 'trending-up-outline';
          } else if (route.name === 'Cards') {
            iconName = 'card-outline'; // Icon for Cards
          }

          return <Icon name={iconName} size={iconSize} color={color} />;
        },
        tabBarActiveTintColor: '#102A43',
        tabBarInactiveTintColor: '#999',
        tabBarLabel: route.name === 'SR' ? () => null : undefined, // Remove label for SR tab
        headerShown: false, // Hides headers for all screens
      })}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Transactions" component={Transactions} />
      <Tab.Screen name="SR" component={SR} />
      <Tab.Screen name="Investments" component={Investments} />
      <Tab.Screen name="Cards" component={Cards} />
    </Tab.Navigator>
  );
};

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9FAFB', // Lighter background for a clean, airy feel
    paddingHorizontal: 20,
  },
  header: {
    marginTop: 50,
    marginBottom: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  appTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#102A43',
  },
  balanceCard: {
    backgroundColor: '#102A43',
    borderRadius: 20,
    paddingVertical: 30,
    paddingHorizontal: 25,
    alignItems: 'center',
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.15,
    shadowRadius: 12,
    elevation: 8, // Increased elevation for floating effect
  },
  balanceHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  balanceLabel: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '500',
    marginLeft: 10,
  },
  balanceAmount: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  section: {
    marginBottom: 30,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#102A43',
    marginBottom: 15,
  },
  actionsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  actionBox: {
    width: '45%',
    marginBottom: 15,
  },
  actionButton: {
    backgroundColor: '#102A43',
    paddingVertical: 20,
    alignItems: 'center',
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5, // For Android shadow
  },
  actionButtonText: {
    color: '#FFFFFF',
    marginTop: 10,
    fontWeight: '600',
  },
  pageTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#102A43',
    marginTop: 50,
    marginBottom: 20,
  },
  pageContent: {
    fontSize: 18,
    color: '#555',
  },
  transactionItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#EEE',
  },
  transactionTitle: {
    fontSize: 18,
    fontWeight: '500',
    color: '#102A43',
  },
  transactionAmount: {
    fontSize: 18,
    fontWeight: '500',
    color: '#FF6347', // Red for negative amounts
  },
  seeAllButton: {
    backgroundColor: '#102A43',
    paddingVertical: 15,
    alignItems: 'center',
    borderRadius: 12,
    marginTop: 20,
  },
  seeAllText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default Dashboard;
