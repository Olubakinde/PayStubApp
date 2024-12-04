import React, { useState, useRef } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Animated, ActivityIndicator, KeyboardAvoidingView, Platform, ScrollView, Easing } from 'react-native';
import Input from '../components/Input';

const Register = ({ navigation }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const buttonAnim = useRef(new Animated.Value(1)).current;

  // Fade-in animation for the logo
  React.useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim]);

  const handleRegister = () => {
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      shakeInput(); // Shake animation on error
      return;
    }
    if (password.length < 8) {
      setError('Password must be at least 8 characters');
      shakeInput(); // Shake animation on error
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

  const shakeInput = () => {
    // Animate input fields
    const shakeAnimation = Animated.sequence([
      Animated.timing(fadeAnim, { toValue: 1, duration: 100, useNativeDriver: true }),
      Animated.timing(fadeAnim, { toValue: -1, duration: 100, useNativeDriver: true }),
      Animated.timing(fadeAnim, { toValue: 1, duration: 100, useNativeDriver: true }),
      Animated.timing(fadeAnim, { toValue: -1, duration: 100, useNativeDriver: true }),
      Animated.timing(fadeAnim, { toValue: 0, duration: 100, useNativeDriver: true }),
      Animated.timing(fadeAnim, { toValue: 1, duration: 100, useNativeDriver: true }),
    ]);
    
    shakeAnimation.start();
  };

  const handleInputFocus = () => {
    Animated.spring(fadeAnim, {
      toValue: 1.1, // Scale up slightly
      friction: 3,
      useNativeDriver: true,
    }).start();
  };

  const handleInputBlur = () => {
    Animated.spring(fadeAnim, {
      toValue: 1, // Scale back to original
      friction: 3,
      useNativeDriver: true,
    }).start();
  };

  const handleButtonPress = () => {
    Animated.sequence([
      Animated.timing(buttonAnim, {
        toValue: 0.95,
        duration: 100,
        useNativeDriver: true,
      }),
      Animated.timing(buttonAnim, {
        toValue: 1,
        duration: 100,
        useNativeDriver: true,
      }),
    ]).start();
    handleRegister();
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <Animated.View style={[styles.headerContainer, { opacity: fadeAnim }]}>
        <Text style={styles.appName}>Nellie</Text>
      </Animated.View>

      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.formContainer}>
          <Text style={styles.title}>Create Account</Text>
          <Text style={styles.subtitle}>Join us today!</Text>

          <Animated.View style={{ opacity: fadeAnim }}>
            <Input 
              placeholder="First Name" 
              value={firstName} 
              onChangeText={setFirstName}
              onFocus={handleInputFocus}
              onBlur={handleInputBlur}
            />
            <Input 
              placeholder="Last Name" 
              value={lastName} 
              onChangeText={setLastName}
              onFocus={handleInputFocus}
              onBlur={handleInputBlur}
            />
            <Input 
              placeholder="Email" 
              value={email} 
              onChangeText={setEmail} 
              keyboardType="email-address" 
              autoCapitalize="none"
              onFocus={handleInputFocus}
              onBlur={handleInputBlur}
            />

            <Input
              placeholder="Password"
              value={password}
              onChangeText={setPassword}
              secureTextEntry
              onFocus={handleInputFocus}
              onBlur={handleInputBlur}
            />

            <Input
              placeholder="Confirm Password"
              value={confirmPassword}
              onChangeText={setConfirmPassword}
              secureTextEntry
              onFocus={handleInputFocus}
              onBlur={handleInputBlur}
            />
          </Animated.View>

          {error ? <Text style={styles.errorText}>{error}</Text> : null}

          <TouchableOpacity onPress={handleButtonPress} disabled={loading}>
            <Animated.View style={[styles.buttonContainer, { transform: [{ scale: buttonAnim }] }]}>
              {loading ? <ActivityIndicator size="small" color="#fff" /> : <Text style={styles.buttonText}>Register</Text>}
            </Animated.View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate('Login')} style={styles.registerButton}>
            <Text style={styles.registerText}>Log In</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f6f9fc',
  },
  headerContainer: {
    height: '30%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#6A1B9A',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  appName: {
    fontSize: 28,
    fontWeight: '700',
    color: '#ffffff',
  },
  scrollContainer: {
    flexGrow: 1,
  },
  formContainer: {
    flex: 1,
    padding: 20,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    elevation: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -4 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#4C2889',
    textAlign: 'center',
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 14,
    color: '#636e72',
    textAlign: 'center',
    marginBottom: 20,
  },
  errorText: {
    color: 'red',
    fontSize: 14,
    textAlign: 'center',
    marginTop: 10,
  },
  buttonContainer: {
    backgroundColor: '#6A1B9A',
    borderRadius: 10,
    paddingVertical: 15,
    alignItems: 'center',
    marginTop: 20,
    shadowColor: '#4C2889',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 5,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
  },
  registerButton: {
    marginTop: 20,
    alignItems: 'center',
  },
  registerText: {
    color: '#5C4B8A',
    fontSize: 16,
    fontWeight: '500',
  },
});

export default Register;
