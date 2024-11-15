import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const SocialScreen = ({ navigation }) => {
  // Dummy data for social events
  const socialEvents = [
    { id: '1', name: 'Community Cleanup', date: '2024-11-25', location: 'City Park' },
    { id: '2', name: 'Beach Cleanup', date: '2024-12-05', location: 'Sunny Beach' },
    { id: '3', name: 'Food Drive', date: '2024-12-10', location: 'Main Street' },
  ];

  // Render each social event item
  const renderSocialEvent = ({ item }) => (
    <View style={styles.eventItem}>
      <Text style={styles.eventName}>{item.name}</Text>
      <Text style={styles.eventDetails}>Date: {item.date}</Text>
      <Text style={styles.eventDetails}>Location: {item.location}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Social Events</Text>
      <FlatList
        data={socialEvents}
        renderItem={renderSocialEvent}
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
    elevation: 3,
    shadowColor: '#000',
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

export default SocialScreen;
