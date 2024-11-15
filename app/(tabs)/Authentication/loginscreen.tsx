// screens/LoginScreen.tsx
import React from 'react';
import { View, Text, Button, StyleSheet, TextInput } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../App';


type LoginScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Login'>;

type Props = {
  navigation: LoginScreenNavigationProp;
};

const LoginScreen: React.FC<Props> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput placeholder="Email" style={styles.input} />
      <TextInput placeholder="Password" style={styles.input} secureTextEntry />
      <Button title="Log In" onPress={() => navigation.navigate('Home')} color="#1E90FF" />
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
