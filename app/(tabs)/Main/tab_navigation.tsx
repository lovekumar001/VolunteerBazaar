import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons } from '@expo/vector-icons';
import Profile from '../Profile/profile';
import Homescreen from '../Home/homescreen';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          // Assign icons based on the screen name
          let iconName = route.name === 'Home' ? 'home' : 'person';

          return <MaterialIcons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
        headerShown: false,  // Remove header for all screens
      })}
    >
      <Tab.Screen 
        name="Home" 
        component={Homescreen} 
      />
      <Tab.Screen 
        name="Profile" 
        component={Profile} 
      />
    </Tab.Navigator>
  );
}
