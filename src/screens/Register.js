// src/screens/Register.js
import React, { useState, useRef } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Animated, ActivityIndicator } from 'react-native';
import Input from '../components/Input';
import Button from '../components/Button';

const Register = ({ navigation }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [passwordStrength, setPasswordStrength] = useState(0); // Range 0 (Weak) to 100 (Strong)
  const [error, setError] = useState('');
  const logoScale = useRef(new Animated.Value(1)).current;

  const handleRegister = () => {
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    if (passwordStrength < 75) { // Assuming 75 is a strong enough threshold
      setError('Password is not strong enough');
      return;
    }
    setLoading(true);
    setError('');
    // Simulate registration process
    setTimeout(() => {
      setLoading(false);
      console.log('Registered');
    }, 2000);
  };

  const scaleLogo = () => {
    Animated.sequence([
      Animated.timing(logoScale, { toValue: 1.2, duration: 200, useNativeDriver: true }),
      Animated.timing(logoScale, { toValue: 1, duration: 200, useNativeDriver: true })
    ]).start();
  };

  const checkPasswordStrength = (password) => {
    setPassword(password);
    let strength = 0;
    if (password.length >= 8) strength += 20;
    if (/[A-Z]/.test(password)) strength += 20;
    if (/[a-z]/.test(password)) strength += 20;
    if (/[0-9]/.test(password)) strength += 20;
    if (/[^A-Za-z0-9]/.test(password)) strength += 20;
    setPasswordStrength(strength);
  };

  const getProgressBarColor = () => {
    if (passwordStrength < 40) return '#ff4d4d'; // Red for weak
    if (passwordStrength < 75) return '#ffcc00'; // Yellow for medium
    return '#00cc66'; // Green for strong
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Animated.View style={[styles.logoContainer, { transform: [{ scale: logoScale }] }]}>
        <Text style={styles.appName}>PayStub</Text>
      </Animated.View>

      <View style={styles.formContainer}>
        <Text style={styles.title}>Create Account</Text>
        <Text style={styles.subtitle}>Join us today!</Text>

        <Input placeholder="First Name" value={firstName} onChangeText={setFirstName} />
        <Input placeholder="Last Name" value={lastName} onChangeText={setLastName} />
        <Input placeholder="Email" value={email} onChangeText={setEmail} keyboardType="email-address" autoCapitalize="none" />
        
        <Input 
          placeholder="Password" 
          value={password} 
          onChangeText={(value) => checkPasswordStrength(value)} 
          secureTextEntry 
        />
        
        {/* Password Strength Indicator */}
        <View style={styles.passwordStrengthContainer}>
          <View style={[styles.progressBar, { width: `${passwordStrength}%`, backgroundColor: getProgressBarColor() }]} />
        </View>
        <Text style={styles.strengthText}>{passwordStrength < 40 ? 'Weak' : passwordStrength < 75 ? 'Medium' : 'Strong'}</Text>
        
        <Input
          placeholder="Confirm Password"
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          secureTextEntry
        />

        {error ? <Text style={styles.errorText}>{error}</Text> : null}

        <TouchableOpacity onPress={handleRegister} disabled={loading}>
          <View style={styles.buttonContainer}>
            {loading ? <ActivityIndicator size="small" color="#fff" /> : <Text style={styles.buttonText}>Register</Text>}
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={styles.loginText}>Already have an account? Log In</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'linear-gradient(135deg, #acb6e5 10%, #74ebd5 100%)',
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  appName: {
    fontSize: 28,
    fontWeight: '700',
    color: '#2f3640',
  },
  formContainer: {
    width: '100%',
    padding: 25,
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
    marginBottom: 20,
    textAlign: 'center',
  },
  passwordStrengthContainer: {
    height: 8,
    width: '100%',
    backgroundColor: '#e0e0e0',
    borderRadius: 5,
    marginTop: 8,
  },
  progressBar: {
    height: '100%',
    borderRadius: 5,
  },
  strengthText: {
    marginTop: 4,
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#636e72',
  },
  errorText: {
    color: 'red',
    fontSize: 14,
    textAlign: 'center',
    marginTop: 10,
  },
  buttonContainer: {
    backgroundColor: '#0984e3',
    borderRadius: 10,
    paddingVertical: 15,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
  },
  loginText: {
    fontSize: 14,
    color: '#636e72',
    marginTop: 20,
    textAlign: 'center',
  },
});

export default Register;
