// screens/SignUpScreen.tsx
import React from 'react';
import { View, Text, Button, StyleSheet, TextInput, Alert } from 'react-native';


const SignUpScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign Up</Text>
      <TextInput placeholder="Name" style={styles.input} />
      <TextInput placeholder="Email" style={styles.input} />
      <TextInput placeholder="Password" style={styles.input} secureTextEntry />
      <Button title="Sign Up" onPress={() => Alert.alert('Sign Up functionality coming soon')} color="#32CD32" />
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
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  input: {
    width: '80%',
    padding: 10,
    marginVertical: 8,
    backgroundColor: '#ffffff',
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 5,
  },
});
