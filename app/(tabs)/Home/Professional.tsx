import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const ProfessionalScreen = ({ navigation }) => {
  // Dummy data for professional events
  const professionalEvents = [
    { id: '1', name: 'Job Fair', date: '2024-11-25', location: 'Convention Center' },
    { id: '2', name: 'Startup Pitch Event', date: '2024-12-05', location: 'Tech Hub' },
    { id: '3', name: 'Networking Event', date: '2024-12-10', location: 'City Hall' },
  ];

  // Render each professional event item
  const renderProfessionalEvent = ({ item }) => (
    <View style={styles.eventItem}>
      <Text style={styles.eventName}>{item.name}</Text>
      <Text style={styles.eventDetails}>Date: {item.date}</Text>
      <Text style={styles.eventDetails}>Location: {item.location}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Professional Events</Text>
      <FlatList
        data={professionalEvents}
        renderItem={renderProfessionalEvent}
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

export default ProfessionalScreen;
