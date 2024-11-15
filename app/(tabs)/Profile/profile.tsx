import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const Profile = ({navigation}) => {
  // Sample user data (you can fetch this data from your Firebase database)
  const user = {
    name: 'Love Kumar Virjiani',
    email: 'love.virjiani@example.com',
    bio: 'Passionate volunteer and tutor, committed to helping others learn and grow.',
    skills: ['Mathematics', 'Physics', 'Web Development'],
    profilePicture: 'https://via.placeholder.com/150', // Replace with actual image URL from your database
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Profile Picture */}
      <View style={styles.profilePictureContainer}>
        <Image source={{ uri: user.profilePicture }} style={styles.profilePicture} />
      </View>

      {/* User Info */}
      <Text style={styles.name}>{user.name}</Text>
      <Text style={styles.email}>{user.email}</Text>

      {/* Bio Section */}
      <Text style={styles.sectionTitle}>About Me</Text>
      <Text style={styles.bio}>{user.bio}</Text>

      {/* Skills Section */}
      <Text style={styles.sectionTitle}>Skills</Text>
      <View style={styles.skillsContainer}>
        {user.skills.map((skill, index) => (
          <View key={index} style={styles.skillBadge}>
            <Text style={styles.skillText}>{skill}</Text>
          </View>
        ))}
      </View>

      {/* Buttons */}
      <TouchableOpacity style={styles.editButton} >
        <MaterialIcons name="edit" size={20} color="#fff" />
        <Text style={styles.buttonText}>Edit Profile</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.logoutButton}>
        <MaterialIcons name="logout" size={20} color="#fff" />
        <Text style={styles.buttonText}>Log Out</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  profilePictureContainer: {
    marginBottom: 20,
  },
  profilePicture: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 2,
    borderColor: '#4caf50',
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 10,
    color: '#333',
  },
  email: {
    fontSize: 16,
    color: '#777',
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
    alignSelf: 'flex-start',
    color: '#4caf50',
  },
  bio: {
    fontSize: 16,
    color: '#555',
    marginBottom: 20,
  },
  skillsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginBottom: 30,
  },
  skillBadge: {
    backgroundColor: '#4caf50',
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderRadius: 15,
    margin: 5,
  },
  skillText: {
    color: '#fff',
    fontSize: 14,
  },
  editButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#4caf50',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginBottom: 20,
  },
  logoutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f44336',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    marginLeft: 10,
  },
});
