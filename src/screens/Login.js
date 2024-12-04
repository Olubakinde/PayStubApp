// src/screens/Login.js
import React, { useState, useRef, useEffect } from 'react';
import { View, Text, StyleSheet, Image, Animated, ActivityIndicator, TouchableOpacity, KeyboardAvoidingView, Platform } from 'react-native';
import Input from '../components/Input';
import Icon from 'react-native-vector-icons/FontAwesome';

const Login = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const buttonScale = useRef(new Animated.Value(1)).current;
  const logoAnim = useRef(new Animated.Value(0)).current; // For logo animation
  const inputAnim = useRef(new Animated.Value(0)).current; // For input animation
  const formAnim = useRef(new Animated.Value(0)).current; // For form animation

  useEffect(() => {
    // Fade-in animation for header
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();

    // Logo bounce animation
    Animated.spring(logoAnim, {
      toValue: 1,
      friction: 2,
      tension: 40,
      useNativeDriver: true,
    }).start();

    // Input fields slide-in animation
    Animated.timing(inputAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();

    // Form slide-in animation
    Animated.timing(formAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim, logoAnim, inputAnim, formAnim]);

  const handleLogin = () => {
    setLoading(true);
    Animated.spring(buttonScale, {
      toValue: 0.95,
      friction: 4,
      useNativeDriver: true,
    }).start(() => {
      setTimeout(() => {
        setLoading(false);
        email === 'user@example.com' && password === 'password123'
          ? navigation.navigate('Dashboard')
          : alert('Invalid email or password');

        Animated.spring(buttonScale, {
          toValue: 1,
          friction: 4,
          useNativeDriver: true,
        }).start();
      }, 1500);
    });
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <Animated.View style={[styles.headerContainer, { opacity: fadeAnim }]}>
        <Animated.Image
          source={require('../../assets/Nellie.png')}
          style={[
            styles.logoImage,
            {
              transform: [{ scale: logoAnim }],
            },
          ]}
        />
      </Animated.View>

      {/* Slide-in form animation */}
      <Animated.View
        style={[
          styles.formContainer,
          {
            opacity: formAnim,
            transform: [{
              translateY: formAnim.interpolate({
                inputRange: [0, 1],
                outputRange: [50, 0],
              }),
            }],
          },
        ]}
      >
        <Text style={styles.title}>Log In</Text>
        <Text style={styles.subtitle}>Welcome back! Please log in to your account.</Text>

        {/* Slide-in and bounce effect for input fields */}
        <Animated.View style={{ opacity: inputAnim }}>
          <TouchableOpacity activeOpacity={1} style={styles.inputContainer}>
            <Input
              placeholder="Email"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
              style={styles.input}
              onFocus={() => {
                Animated.spring(inputAnim, {
                  toValue: 1.02, // Slightly larger when focused
                  friction: 3,
                  useNativeDriver: true,
                }).start();
              }}
              onBlur={() => {
                Animated.spring(inputAnim, {
                  toValue: 1, // Back to normal size when unfocused
                  friction: 3,
                  useNativeDriver: true,
                }).start();
              }}
            />
          </TouchableOpacity>
          <View style={styles.passwordContainer}>
            <TouchableOpacity activeOpacity={1} style={styles.inputContainer}>
              <Input
                placeholder="Password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry={!showPassword}
                style={styles.input}
                onFocus={() => {
                  Animated.spring(inputAnim, {
                    toValue: 1.02,
                    friction: 3,
                    useNativeDriver: true,
                  }).start();
                }}
                onBlur={() => {
                  Animated.spring(inputAnim, {
                    toValue: 1,
                    friction: 3,
                    useNativeDriver: true,
                  }).start();
                }}
              />
              <TouchableOpacity onPress={() => setShowPassword(!showPassword)} style={styles.eyeIcon}>
                <Icon name={showPassword ? 'eye' : 'eye-slash'} size={20} color="#888" />
              </TouchableOpacity>
            </TouchableOpacity>
          </View>
        </Animated.View>

        <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')} style={styles.forgotPasswordContainer}>
          <Text style={styles.forgotPasswordText}>Reset Password</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={handleLogin} disabled={loading}>
          <Animated.View style={[styles.loginButton, { transform: [{ scale: buttonScale }] }]}>
            {loading ? <ActivityIndicator size="small" color="#fff" /> : <Text style={styles.buttonText}>Login</Text>}
          </Animated.View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Register')} style={styles.registerButton}>
          <Text style={styles.registerText}>Sign Up</Text>
        </TouchableOpacity>
      </Animated.View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E9F4F4', // Lighter color for a soft background
  },
  headerContainer: {
    height: '35%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#102A43', // Use the same color as the dashboard header
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  logoImage: {
    width: 130,
    height: 130,
    resizeMode: 'contain',
  },
  formContainer: {
    flex: 1,
    padding: 25,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    backgroundColor: 'rgba(255, 255, 255, 0.95)', // Keeping it semi-transparent for a clean look
    elevation: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -4 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#264653', 
    textAlign: 'center',
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 14,
    color: '#777', // Use the same color as the dashboard subtitle
    textAlign: 'center',
    marginBottom: 20,
  },
  inputContainer: {
    transform: [{ scale: 1 }], // Default scale for input containers
    marginBottom: 20,
  },
  input: {
    backgroundColor: '#f1f3f6', // Keep it light for better contrast
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 15,
    fontSize: 16,
  },
  passwordContainer: {
    position: 'relative',
  },
  eyeIcon: {
    position: 'absolute',
    right: 15,
    top: 12,
  },
  forgotPasswordContainer: {
    alignSelf: 'flex-start',
    marginBottom: 20,
    paddingHorizontal: 5,
  },
  forgotPasswordText: {
    fontSize: 12,
    color: '#777', // Consistent with other text colors
  },
  loginButton: {
    backgroundColor: '#6A1B9A', // Match the button color to the dashboard
    borderRadius: 10,
    paddingVertical: 15,
    alignItems: 'center',
    marginTop: 10,
    shadowColor: '#264653', // Adjust shadow color for depth
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 5,
  },
  buttonText: {
    color: '#ffffff', // Keep button text white for contrast
    fontSize: 16,
    fontWeight: '600',
  },
  registerButton: {
    marginTop: 20,
    alignItems: 'center',
  },
  registerText: {
    color: '#6A1B9A', // Keep it consistent with other text
    fontSize: 16,
    fontWeight: '500',
  },
});

export default Login;
