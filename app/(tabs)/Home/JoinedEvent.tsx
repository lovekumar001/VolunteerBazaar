import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const JoinedEventsScreen = ({ navigation }) => {
  // Dummy data for joined events
  const events = [
    { id: '1', name: 'Charity Run', date: '2024-11-20', location: 'Central Park' },
    { id: '2', name: 'Blood Donation Drive', date: '2024-12-01', location: 'Community Center' },
    { id: '3', name: 'Tree Plantation', date: '2024-12-05', location: 'Green Park' },
    { id: '4', name: 'Volunteering at Shelter', date: '2024-12-10', location: 'City Shelter' },
  ];

  // Render each event item
  const renderEventItem = ({ item }) => (
    <View style={styles.eventItem}>
      <Text style={styles.eventName}>{item.name}</Text>
      <Text style={styles.eventDetails}>Date: {item.date}</Text>
      <Text style={styles.eventDetails}>Location: {item.location}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Joined Events</Text>
      <FlatList
        data={events}
        renderItem={renderEventItem}
        keyExtractor={(item) => item.id}
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
  eventItem: {
    backgroundColor: '#E8E8E8',
    padding: 15,
    marginVertical: 10,
    borderRadius: 10,
    elevation: 3, // For shadow on Android
    shadowColor: '#000', // For shadow on iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  eventName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  eventDetails: {
    fontSize: 14,
    color: '#666',
  },
});

export default JoinedEventsScreen;
