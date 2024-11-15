import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { TouchableOpacity, Text, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import Profile from '../Profile/profile';
import tab_navigation from './tab_navigation';
import editprofile from '../Profile/editprofile';
import JoinedEvents from '../Home/JoinedEvent';
import BloodDonors from '../Home/BloodDonor';
import Social from '../Home/Social';
import Financial from '../Home/Financial';
import Professional from '../Home/Professional';

const Stack = createStackNavigator();

export default function App() {
  return (
      <Stack.Navigator>
        {/* Home screen (tab_navigation) */}
        <Stack.Screen
          name="Volunteer Bazzar"
          component={tab_navigation}
          options={({ navigation }) => ({
            headerTitle: false,
            headerLeft: () => (
              <View style={{ marginLeft: 10 }}>
                <Text style={{ fontSize: 24, fontWeight: 'bold', color: 'black' }}>
                  Volunteer Bazzar
                </Text>
              </View>
            ),
            headerRight: () => (
              <View style={{ flexDirection: 'row', marginRight: 10 }}>
                <TouchableOpacity
                  onPress={() => console.log('Login pressed')}
                  style={{
                    backgroundColor: 'blue',
                    paddingVertical: 8,
                    paddingHorizontal: 15,
                    borderRadius: 5,
                    marginRight: 10,
                  }}
                >
                  <Text style={{ color: 'white' }}>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => console.log('Signup pressed')}
                  style={{
                    backgroundColor: 'red',
                    paddingVertical: 8,
                    paddingHorizontal: 15,
                    borderRadius: 5,
                  }}
                >
                  <Text style={{ color: 'white' }}>Signup</Text>
                </TouchableOpacity>
              </View>
            ),
            headerShown: true,
          })}
        />

        {/* Other screens with back navigation */}
        {[
          { name: 'editprofile', component: editprofile, title: 'Edit Profile' },
          { name: 'JoinedEvents', component: JoinedEvents, title: 'Joined Events' },
          { name: 'BloodDonors', component: BloodDonors, title: 'Blood Donors' },
          { name: 'Social', component: Social, title: 'Social Events' },
          { name: 'Financial', component: Financial, title: 'Financial Assistance' },
          { name: 'Professional', component: Professional, title: 'Professional Opportunities' },
        ].map((screen, index) => (
          <Stack.Screen
            key={index}
            name={screen.name}
            component={screen.component}
            options={({ navigation }) => ({
              headerTitle: false,
              headerLeft: () => (
                <TouchableOpacity
                  onPress={() => navigation.goBack()} // Correctly using navigation here
                  style={{ marginLeft: 10 }}
                >
                  <MaterialIcons name="arrow-back" size={24} color="black" />
                </TouchableOpacity>
              ),
              headerShown: true,
            })}
          />
        ))}
      </Stack.Navigator>
  );
}
