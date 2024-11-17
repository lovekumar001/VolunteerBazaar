import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';

// Define types for the donor item
type Donor = {
  id: string;
  name: string;
  bloodGroup: string;
  contact: string;
};

// Define the props for the screen
type BloodDonorsScreenProps = {
  navigation: StackNavigationProp<any, 'BloodDonors'>;
};

const BloodDonorsScreen: React.FC<BloodDonorsScreenProps> = ({ navigation }) => {
  // Dummy data for blood donors
  const donors: Donor[] = [
    { id: '1', name: 'John Doe', bloodGroup: 'O+', contact: '123-456-7890' },
    { id: '2', name: 'Jane Smith', bloodGroup: 'A-', contact: '987-654-3210' },
    { id: '3', name: 'Emily Johnson', bloodGroup: 'B+', contact: '555-123-4567' },
    { id: '4', name: 'Michael Brown', bloodGroup: 'AB-', contact: '444-567-8901' },
    { id: '5', name: 'Sarah Williams', bloodGroup: 'O-', contact: '333-890-1234' },
  ];

  // Render each donor item
  const renderDonorItem = ({ item }: { item: Donor }) => (
    <View style={styles.donorItem}>
      <Text style={styles.donorName}>{item.name}</Text>
      <Text style={styles.donorDetails}>Blood Group: {item.bloodGroup}</Text>
      <Text style={styles.donorDetails}>Contact: {item.contact}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Blood Donors</Text>
      <FlatList
        data={donors}
        renderItem={renderDonorItem}
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
  donorItem: {
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
  donorName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  donorDetails: {
    fontSize: 14,
    color: '#666',
  },
});

export default BloodDonorsScreen;
