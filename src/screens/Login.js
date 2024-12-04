// src/screens/Login.js
import React, { useState, useRef } from 'react';
import { View, Text, StyleSheet, Animated, ActivityIndicator, KeyboardAvoidingView, ScrollView, TouchableOpacity, Platform } from 'react-native';
import Input from '../components/Input'; // Assuming you have a custom Input component
import Icon from 'react-native-vector-icons/FontAwesome'; // Importing FontAwesome for the eye icon

const Login = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const logoScale = useRef(new Animated.Value(1)).current;
  const buttonScale = useRef(new Animated.Value(1)).current; // Animation for button scale

  const handleLogin = () => {
    setLoading(true);

    // Scale down the button
    Animated.spring(buttonScale, {
      toValue: 0.95, // Scale down
      friction: 3,
      useNativeDriver: true,
    }).start(() => {
      // Dummy authentication check
      if (email === 'user@example.com' && password === 'password123') {
        // Navigate to the Dashboard screen if authentication is successful
        navigation.navigate('Dashboard'); // Change here to navigate to Dashboard
      } else {
        alert('Invalid email or password');
      }

      // Reset button scale back to normal
      Animated.spring(buttonScale, {
        toValue: 1, // Scale back to original
        friction: 3,
        useNativeDriver: true,
      }).start();
      
      setLoading(false); // Set loading to false after the authentication check
    });
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={100}
    >
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Animated.View style={[styles.logoContainer, { transform: [{ scale: logoScale }] }]}>
          <Text style={styles.appName}>PayStub</Text>
        </Animated.View>

        <View style={styles.formContainer}>
          <Text style={styles.title}>Welcome Back</Text>
          <Text style={styles.subtitle}>Sign in to continue</Text>

          <Input
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />

          <View style={styles.passwordContainer}>
            <Input
              placeholder="Password"
              value={password}
              onChangeText={setPassword}
              secureTextEntry={!showPassword}
            />
            <TouchableOpacity onPress={() => setShowPassword(!showPassword)} style={styles.eyeIcon}>
              <Icon name={showPassword ? 'eye' : 'eye-slash'} size={20} color="#888" />
            </TouchableOpacity>
          </View>

          <TouchableOpacity onPress={handleLogin} disabled={loading}>
            <Animated.View style={[styles.buttonContainer, { transform: [{ scale: buttonScale }] }]}>
              {loading ? <ActivityIndicator size="small" color="#fff" /> : <Text style={styles.buttonText}>Login</Text>}
            </Animated.View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate('Register')}>
            <Text style={styles.registerText}>Don’t have an account? Register</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f6f9fc', // Light background color
  },
  scrollContainer: {
    flexGrow: 1,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 30,
  },
  appName: {
    fontSize: 32,
    fontWeight: '700',
    color: '#2f3640',
    textShadowColor: 'rgba(0, 0, 0, 0.2)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 10,
  },
  formContainer: {
    width: '100%',
    padding: 30,
    borderRadius: 15,
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.15,
    shadowRadius: 10,
    elevation: 7,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#636e72',
    marginBottom: 25,
    textAlign: 'center',
  },
  passwordContainer: {
    position: 'relative',
  },
  eyeIcon: {
    position: 'absolute',
    right: 10,
    top: 15,
    zIndex: 1,
  },
  buttonContainer: {
    backgroundColor: '#0984e3',
    borderRadius: 10,
    paddingVertical: 15,
    alignItems: 'center',
    marginTop: 20,
    elevation: 5,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
  },
  registerText: {
    fontSize: 14,
    color: '#636e72',
    marginTop: 20,
    textAlign: 'center',
  },
});

export default Login;
