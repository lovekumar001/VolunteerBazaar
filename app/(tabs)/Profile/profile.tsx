import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { MaterialIcons } from '@expo/vector-icons';

const Profile = ({ navigation }) => {
  // User data (static for one person)
  const [user, setUser] = useState({
    name: 'Love Kumar Virjiani',
    email: 'love.virjiani@example.com',
    bio: 'Passionate volunteer and tutor, committed to helping others learn and grow.',
    skills: ['Mathematics', 'Physics', 'Web Development'],
    profilePicture: 'https://via.placeholder.com/150', // Default profile picture
  });

  // Handle image selection from the camera
  const pickImage = async () => {
    const permissionResult = await ImagePicker.requestCameraPermissionsAsync();
    if (!permissionResult.granted) {
      alert('Camera permission is required!');
      return;
    }

    const result = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.canceled) {
      setUser({ ...user, profilePicture: result.assets[0].uri });
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Profile Picture */}
      <TouchableOpacity onPress={pickImage} style={styles.profilePictureContainer}>
        <Image source={{ uri: user.profilePicture }} style={styles.profilePicture} />
        <MaterialIcons
          name="photo-camera"
          size={24}
          color="#fff"
          style={styles.cameraIcon}
        />
      </TouchableOpacity>

      {/* User Info in Form Layout */}
      <View style={styles.formContainer}>
        <Text style={styles.sectionTitle}>User Details</Text>

        <Text style={styles.label}>Name:</Text>
        <TextInput style={styles.input} value={user.name} editable={false} />

        <Text style={styles.label}>Email:</Text>
        <TextInput style={styles.input} value={user.email} editable={false} />

        <Text style={styles.label}>Bio:</Text>
        <TextInput
          style={[styles.input, { height: 60 }]}
          value={user.bio}
          editable={false}
          multiline
        />

        <Text style={styles.sectionTitle}>Skills</Text>
        <View style={styles.skillsContainer}>
          {user.skills.map((skill, index) => (
            <View key={index} style={styles.skillBadge}>
              <Text style={styles.skillText}>{skill}</Text>
            </View>
          ))}
        </View>
      </View>

      {/* Buttons */}
      <TouchableOpacity style={styles.editButton}>
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
    position: 'relative',
    marginBottom: 20,
  },
  profilePicture: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 2,
    borderColor: '#4caf50',
  },
  cameraIcon: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    backgroundColor: '#4caf50',
    borderRadius: 12,
    padding: 4,
  },
  formContainer: {
    width: '100%',
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#4caf50',
  },
  label: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#555',
    marginTop: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    backgroundColor: '#fff',
    marginTop: 5,
  },
  skillsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 10,
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
    marginBottom: 10,
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
