import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const EditProfile = ({ navigation, route }) => {
  // Sample initial user data (you can pass actual data via route.params)
  const initialUserData = route.params?.user ?? {
    name: 'Love Kumar Virjiani',
    email: 'love.virjiani@example.com',
    bio: 'Passionate volunteer and tutor.',
    skills: 'Mathematics, Web Development',
  };

  const [name, setName] = useState(initialUserData.name);
  const [email, setEmail] = useState(initialUserData.email);
  const [bio, setBio] = useState(initialUserData.bio);
  const [skills, setSkills] = useState(initialUserData.skills);

  // Handle Save button click
  const handleSave = () => {
    // Here, you'd update the user data in your Firebase database
    console.log('Profile updated:', { name, email, bio, skills });

    // Navigate back to Profile screen with updated data
    navigation.navigate('Profile', {
      updatedUser: { name, email, bio, skills },
    });
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Edit Profile</Text>

      {/* Name Input */}
      <TextInput
        style={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={setName}
      />

      {/* Email Input */}
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />

      {/* Bio Input */}
      <TextInput
        style={[styles.input, styles.textArea]}
        placeholder="Bio"
        value={bio}
        onChangeText={setBio}
        multiline
        numberOfLines={4}
      />

      {/* Skills Input */}
      <TextInput
        style={styles.input}
        placeholder="Skills (comma-separated)"
        value={skills}
        onChangeText={setSkills}
      />

      {/* Save Button */}
      <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
        <MaterialIcons name="save" size={24} color="#fff" />
        <Text style={styles.buttonText}>Save Changes</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default EditProfile;

const styles = StyleSheet.create({
  container: { flexGrow: 1, padding: 20, alignItems: 'center', backgroundColor: '#f5f5f5' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  input: {
    width: '100%',
    padding: 10,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    backgroundColor: '#fff',
  },
  textArea: { height: 100, textAlignVertical: 'top' },
  saveButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#4caf50',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 20,
  },
  buttonText: { color: '#fff', fontWeight: 'bold', marginLeft: 10 },
});
