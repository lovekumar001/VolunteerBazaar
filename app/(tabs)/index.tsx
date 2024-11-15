import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { MaterialIcons } from '@expo/vector-icons';
import Home from './Home/homescreen';  // Ensure this file does NOT have its own NavigationContainer
import Profile from './Profile/profile';   // Ensure this file does NOT have its own NavigationContainer
import homescreen from './Home/homescreen';
import Stack_Navigation from './Main/stack_navigation'

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();


// Main App component
export default function App() {
  return (
      <Stack_Navigation/>
  );
}
