import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet, Alert, ScrollView, KeyboardAvoidingView, Platform } from "react-native";
import axios from "axios";

const PostActivity = ({ navigation }) => {
  const [title, setTitle] = useState("");
  const [eventType, setEventType] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [city, setCity] = useState("");
  const [organization, setOrganization] = useState("");
  const [volunteersEngaged, setVolunteersEngaged] = useState("");
  const [rating, setRating] = useState("");
  const [minDuration, setMinDuration] = useState("");
  const [maxDuration, setMaxDuration] = useState("");

  const handlePostActivity = async () => {
    const newActivity = {
      title,
      event_type: eventType,
      date,
      time,
      city,
      organization,
      volunteers_engaged: volunteersEngaged,
      rating,
      min_duration: minDuration,
      max_duration: maxDuration,
    };

    try {
      await axios.post("http://192.168.1.109:3000/activities", newActivity); // Replace with your backend URL
      Alert.alert("Success", "Activity posted successfully!");
      navigation.goBack();
    } catch (error) {
      Alert.alert("Error", "Failed to post activity.");
    }
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.header}>Post New Activity</Text>

        <TextInput
          style={styles.input}
          placeholder="Title"
          value={title}
          onChangeText={setTitle}
          placeholderTextColor="#a9a9a9" // Set placeholder color
        />
        <TextInput
          style={styles.input}
          placeholder="Event Type"
          value={eventType}
          onChangeText={setEventType}
          placeholderTextColor="#a9a9a9"
        />
        <TextInput
          style={styles.input}
          placeholder="Date (YYYY-MM-DD)"
          value={date}
          onChangeText={setDate}
          placeholderTextColor="#a9a9a9"
        />
        <TextInput
          style={styles.input}
          placeholder="Time (HH:MM)"
          value={time}
          onChangeText={setTime}
          placeholderTextColor="#a9a9a9"
        />
        <TextInput
          style={styles.input}
          placeholder="City"
          value={city}
          onChangeText={setCity}
          placeholderTextColor="#a9a9a9"
        />
        <TextInput
          style={styles.input}
          placeholder="Organization"
          value={organization}
          onChangeText={setOrganization}
          placeholderTextColor="#a9a9a9"
        />
        <TextInput
          style={styles.input}
          placeholder="Volunteers Engaged"
          value={volunteersEngaged}
          keyboardType="numeric"
          onChangeText={setVolunteersEngaged}
          placeholderTextColor="#a9a9a9"
        />
        <TextInput
          style={styles.input}
          placeholder="Rating (1-5)"
          value={rating}
          keyboardType="numeric"
          onChangeText={setRating}
          placeholderTextColor="#a9a9a9"
        />
        <TextInput
          style={styles.input}
          placeholder="Min Duration (hours)"
          value={minDuration}
          keyboardType="numeric"
          onChangeText={setMinDuration}
          placeholderTextColor="#a9a9a9"
        />
        <TextInput
          style={styles.input}
          placeholder="Max Duration (hours)"
          value={maxDuration}
          keyboardType="numeric"
          onChangeText={setMaxDuration}
          placeholderTextColor="#a9a9a9"
        />

        <Button title="Post Activity" onPress={handlePostActivity} />
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: "#f9f9f9",
    justifyContent: "center",
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
    color: "#1E90FF",
  },
  input: {
    height: 50,
    borderColor: "#ccc",
    borderWidth: 1,
    marginBottom: 15,
    paddingLeft: 10,
    fontSize: 16,
    borderRadius: 5,
    backgroundColor: "#fff",
  },
});

export default PostActivity;
