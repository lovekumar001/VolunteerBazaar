import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, ActivityIndicator } from "react-native";
import axios from "axios";

const ActivityDetails = ({ route }) => {
  const { id } = route.params;
  const [activity, setActivity] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchActivity = async () => {
      try {
        const response = await axios.get(`http://192.168.1.109:3000/activities/${id}`); // Replace with your backend URL
        setActivity(response.data);
      } catch (error) {
        console.error("Error fetching activity details:", error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchActivity();
  }, [id]);

  if (isLoading) {
    return <ActivityIndicator size="large" color="#1E90FF" />;
  }

  if (!activity) {
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>Activity not found!</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{activity.title}</Text>
      <Text style={styles.details}>Event Type: {activity.event_type || "N/A"}</Text>
      <Text style={styles.details}>Date: {activity.date || "N/A"}</Text>
      <Text style={styles.details}>Time: {activity.time || "N/A"}</Text>
      <Text style={styles.details}>City: {activity.city || "N/A"}</Text>
      <Text style={styles.details}>Organization: {activity.organization || "N/A"}</Text>
      <Text style={styles.details}>Volunteers Engaged: {activity.volunteers_engaged || "0"}</Text>
      <Text style={styles.details}>Rating: {activity.rating || "Not Rated"}</Text>
      <Text style={styles.details}>
        Duration: {activity.duration_string || `${activity.min_duration}-${activity.max_duration} hours`}
      </Text>
    </View>
  );
};

export default ActivityDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f9f9f9",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  details: {
    fontSize: 16,
    marginBottom: 8,
    color: "#333",
  },
  errorText: {
    fontSize: 18,
    color: "red",
    textAlign: "center",
  },
});
