import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const FinancialScreen = () => {
  // Dummy data for financial assistance programs
  const financialPrograms = [
    { id: '1', name: 'Emergency Fund', date: '2024-11-20', eligibility: 'Low-income families' },
    { id: '2', name: 'Student Scholarships', date: '2024-12-01', eligibility: 'High school graduates' },
    { id: '3', name: 'Healthcare Support', date: '2024-12-05', eligibility: 'Uninsured individuals' },
    { id: '4', name: 'Microfinance Loans', date: '2024-12-15', eligibility: 'Small business owners' },
  ];

  // Render each financial program item
  const renderFinancialProgram = ({ item }) => (
    <View style={styles.programItem}>
      <Text style={styles.programName}>{item.name}</Text>
      <Text style={styles.programDetails}>Date: {item.date}</Text>
      <Text style={styles.programDetails}>Eligibility: {item.eligibility}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Financial Assistance Programs</Text>
      <FlatList
        data={financialPrograms}
        renderItem={renderFinancialProgram}
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
  programItem: {
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
  programName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  programDetails: {
    fontSize: 14,
    color: '#666',
  },
});

export default FinancialScreen;
