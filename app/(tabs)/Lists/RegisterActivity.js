import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet, Alert, ScrollView, KeyboardAvoidingView, Platform } from "react-native";
import axios from "axios";

const RegisterActivity = ({ navigation }) => {
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
  
  const [submittedData, setSubmittedData] = useState(null);

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
      setSubmittedData(newActivity); // Save submitted data for display
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
        <Text style={styles.header}>Register For Activity</Text>

        <TextInput
          style={styles.input}
          placeholder="Title"
          value={title}
          onChangeText={setTitle}
          placeholderTextColor="#a9a9a9"
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

        {/* Display Submitted Details */}
        {submittedData && (
          <View style={styles.detailsContainer}>
            <Text style={styles.subHeader}>Activity Details</Text>
            <Text style={styles.detailText}>Title: {submittedData.title}</Text>
            <Text style={styles.detailText}>Event Type: {submittedData.event_type}</Text>
            <Text style={styles.detailText}>Date: {submittedData.date}</Text>
            <Text style={styles.detailText}>Time: {submittedData.time}</Text>
            <Text style={styles.detailText}>City: {submittedData.city}</Text>
            <Text style={styles.detailText}>Organization: {submittedData.organization}</Text>
            <Text style={styles.detailText}>Volunteers Engaged: {submittedData.volunteers_engaged}</Text>
            <Text style={styles.detailText}>Rating: {submittedData.rating}</Text>
            <Text style={styles.detailText}>Min Duration: {submittedData.min_duration} hours</Text>
            <Text style={styles.detailText}>Max Duration: {submittedData.max_duration} hours</Text>
          </View>
        )}
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
  detailsContainer: {
    marginTop: 20,
    padding: 15,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    backgroundColor: "#e6f7ff",
  },
  subHeader: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#333",
    textAlign: "center",
  },
  detailText: {
    fontSize: 16,
    marginBottom: 5,
    color: "#333",
  },
});

export default RegisterActivity;
