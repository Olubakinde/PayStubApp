// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './src/screens/Login';
import Register from './src/screens/Register'; // Ensure this is the correct path
import Dashboard from './src/screens/Dashboard';
import AddCashScreen from './src/screens/AddCashScreen';
import CashOutScreen from './src/screens/CashOutScreen';
import Transactions from './src/screens/Transactions';
import Splash from './src/screens/Splash';


const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Dashboard" component={Dashboard} />
        <Stack.Screen name="AddCash" component={AddCashScreen} />
        <Stack.Screen name="CashOut" component={CashOutScreen} />
        <Stack.Screen name="Transactions" component={Transactions} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
