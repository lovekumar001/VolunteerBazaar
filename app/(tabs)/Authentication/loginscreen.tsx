// screens/LoginScreen.tsx
import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Alert,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../App';

type LoginScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Login'>;

type Props = {
  navigation: LoginScreenNavigationProp;
};

const LoginScreen: React.FC<Props> = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // Handle login logic
  const handleLogin = async () => {
    if (!email.trim() || !password.trim()) {
      Alert.alert('Validation Error', 'Please enter both email and password.');
      return;
    }

    setIsLoading(true); // Show loader
    try {
      const response = await axios.post('http://192.168.3.103:3000/auth/login', {
        email,
        password,
      });

      // Save token to AsyncStorage
      await AsyncStorage.setItem('token', response.data.token);

      // Navigate to the Home screen
      Alert.alert('Success', 'Login successful!');
      navigation.replace('VolunteerBazaar'); // Replace the stack to prevent going back to login
    } catch (error: any) {
      Alert.alert(
        'Login Failed',
        error.response?.data?.message || 'Something went wrong. Please try again.'
      );
    } finally {
      setIsLoading(false); // Hide loader
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome Back!</Text>
      <Text style={styles.subtitle}>Login to your account</Text>

      {/* Email Input */}
      <TextInput
        placeholder="Email"
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
        placeholderTextColor="#888"
      />

      {/* Password Input */}
      <TextInput
        placeholder="Password"
        style={styles.input}
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        placeholderTextColor="#888"
      />

      {/* Loader or Login Button */}
      {isLoading ? (
        <ActivityIndicator size="large" color="#1E90FF" />
      ) : (
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Log In</Text>
        </TouchableOpacity>
      )}

      {/* Signup Link */}
      <TouchableOpacity
        onPress={() => navigation.navigate('Signup')}
        style={styles.signupLink}
      >
        <Text style={styles.signupText}>Don't have an account? Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8f9fa',
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#333',
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 20,
    color: '#666',
  },
  input: {
    width: '90%',
    padding: 12,
    marginVertical: 10,
    backgroundColor: '#fff',
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 8,
    fontSize: 16,
    color: '#333',
  },
  button: {
    marginTop: 20,
    width: '90%',
    backgroundColor: '#1E90FF',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  signupLink: {
    marginTop: 15,
  },
  signupText: {
    color: '#1E90FF',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
