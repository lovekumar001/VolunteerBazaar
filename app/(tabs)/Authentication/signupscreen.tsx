import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, TextInput, Alert, TouchableOpacity } from 'react-native';

const SignUpScreen: React.FC = () => {
  const [userType, setUserType] = useState<'Organization' | 'Volunteer' | null>(null);

  const handleSignUp = () => {
    Alert.alert('Sign Up functionality coming soon');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign Up</Text>

      {/* User Type Selection */}
      {!userType && (
        <View style={styles.selectionContainer}>
          <TouchableOpacity
            style={[styles.optionButton, { backgroundColor: '#1E90FF' }]}
            onPress={() => setUserType('Volunteer')}
          >
            <Text style={styles.optionText}>Sign up as Volunteer</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.optionButton, { backgroundColor: '#FF6347' }]}
            onPress={() => setUserType('Organization')}
          >
            <Text style={styles.optionText}>Sign up as Organization</Text>
          </TouchableOpacity>
        </View>
      )}

      {/* Sign-Up Form */}
      {userType && (
        <>
          <Text style={styles.subTitle}>Sign up as {userType}</Text>
          <TextInput placeholder="Name" style={styles.input} />
          <TextInput placeholder="Email" style={styles.input} keyboardType="email-address" />
          <TextInput placeholder="Password" style={styles.input} secureTextEntry />

          {/* Extra fields for Organizations */}
          {userType === 'Organization' && (
            <>
              <TextInput placeholder="Organization Name" style={styles.input} />
              <TextInput placeholder="Contact Number" style={styles.input} keyboardType="phone-pad" />
            </>
          )}

          {/* Sign Up Button */}
          <Button title="Sign Up" onPress={handleSignUp} color="#32CD32" />

          {/* Option to go back */}
          <TouchableOpacity onPress={() => setUserType(null)} style={styles.backButton}>
            <Text style={styles.backText}>Back to selection</Text>
          </TouchableOpacity>
        </>
      )}
    </View>
  );
};

export default SignUpScreen;

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
    marginBottom: 20,
    color: '#333',
  },
  subTitle: {
    fontSize: 20,
    marginBottom: 10,
    color: '#666',
  },
  input: {
    width: '80%',
    padding: 12,
    marginVertical: 8,
    backgroundColor: '#ffffff',
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 5,
  },
  selectionContainer: {
    marginVertical: 20,
  },
  optionButton: {
    width: '80%',
    padding: 15,
    marginVertical: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  optionText: {
    color: '#fff',
    fontSize: 16,
  },
  backButton: {
    marginTop: 20,
  },
  backText: {
    color: '#007bff',
    fontSize: 16,
  },
});
