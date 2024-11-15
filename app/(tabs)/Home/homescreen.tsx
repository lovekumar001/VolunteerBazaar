import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'; // Import Ionicons from react-native-vector-icons

const HomeScreen = ({navigation}) => {
  // Define the grid data with icon names
  const gridData = [
    { id: '1', title: 'Joined Events', icon: 'calendar-outline', screen: 'JoinedEvents' },
    { id: '2', title: 'Blood Donors', icon: 'water-outline', screen: 'BloodDonors' },
    { id: '3', title: 'Social', icon: 'chatbubble-outline', screen: 'Social' },
    { id: '4', title: 'Financial', icon: 'cash-outline', screen: 'Financial' },
    { id: '5', title: 'Professional', icon: 'briefcase-outline', screen: 'Professional' },
  ];

  // Render each grid item
  const renderGridItem = ({ item }) => (
    <TouchableOpacity
      style={styles.gridItem}
      onPress={() => navigation.navigate(item.screen)} // Navigate to respective screen
    >
      <Icon name={item.icon} size={40} color="#333" />
      <Text style={styles.itemText}>{item.title}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={gridData}
        renderItem={renderGridItem}
        keyExtractor={(item) => item.id}
        numColumns={2}
        contentContainerStyle={styles.grid}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9F9F9',
    paddingTop: 20,
    paddingHorizontal: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    alignSelf: 'center',
  },
  grid: {
    justifyContent: 'space-between',
  },
  gridItem: {
    flex: 1,
    margin: 10,
    height: 120,
    backgroundColor: '#E8E8E8',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 3, // For shadow on Android
    shadowColor: '#000', // For shadow on iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  itemText: {
    marginTop: 10,
    fontSize: 16,
    color: '#333',
  },
});

export default HomeScreen;
