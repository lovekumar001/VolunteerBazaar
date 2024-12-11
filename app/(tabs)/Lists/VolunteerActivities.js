import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  ActivityIndicator,
  TouchableOpacity,
  Alert,
} from "react-native";
import axios from "axios";

const VolunteerActivities = ({ navigation }) => {
  const [activities, setActivities] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    navigation.setOptions({
      title: "Volunteer Activities",
      headerStyle: { backgroundColor: "#1E90FF" },
      headerTintColor: "#fff",
      headerTitleStyle: { fontWeight: "bold", fontSize: 20 },
    });
  }, [navigation]);

  useEffect(() => {
    const fetchActivities = async () => {
      try {
        const response = await axios.get("http://192.168.1.109:3000/activities"); // Replace with your backend URL
        setActivities(response.data);
      } catch (error) {
        console.error("Error fetching activities:", error.message);
        setError("Failed to fetch activities. Please try again later.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchActivities();
  }, []);

  const handleRetry = () => {
    setIsLoading(true);
    setError(null);
    fetchActivities();
  };

  const renderActivity = ({ item }) => (
    <View style={styles.card}>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.details}>
        <Text style={styles.label}>Event Type:</Text> {item.event_type || "N/A"}
      </Text>
      <Text style={styles.details}>
        <Text style={styles.label}>Date:</Text> {item.date || "N/A"}
      </Text>
      <Text style={styles.details}>
        <Text style={styles.label}>Time:</Text> {item.time || "N/A"}
      </Text>
      <Text style={styles.details}>
        <Text style={styles.label}>City:</Text> {item.city || "N/A"}
      </Text>
      <Text style={styles.details}>
        <Text style={styles.label}>Organization:</Text> {item.organization || "N/A"}
      </Text>
      <Text style={styles.details}>
        <Text style={styles.label}>Volunteers Engaged:</Text> {item.volunteers_engaged || "0"}
      </Text>
      <Text style={styles.details}>
        <Text style={styles.label}>Rating:</Text> {item.rating || "Not Rated"}
      </Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("ActivityDetails", { id: item.id })}
      >
        <Text style={styles.buttonText}>View Details</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
          <View style={styles.buttonsContainer}>
            <TouchableOpacity
              style={styles.mainButton}
              onPress={() => navigation.navigate("RegisterActivity")}
            >
              <Text style={styles.mainButtonText}>Register for Activity</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.mainButton}
              onPress={() => navigation.navigate("PostActivity")}
            >
              <Text style={styles.mainButtonText}>Post an Activity</Text>
            </TouchableOpacity>
          </View>
    </View>
  );
};

export default VolunteerActivities;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f9f9f9",
    padding: 20,
  },
  listContent: {
    paddingBottom: 20,
  },
  card: {
    backgroundColor: "#ffffff",
    padding: 15,
    marginBottom: 15,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 10,
  },
  details: {
    fontSize: 14,
    color: "#666",
    marginBottom: 5,
  },
  label: {
    fontWeight: "bold",
    color: "#333",
  },
  button: {
    marginTop: 10,
    backgroundColor: "#1E90FF",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "bold",
  },
  errorContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  errorText: {
    fontSize: 16,
    color: "red",
    marginBottom: 10,
  },
  retryButton: {
    backgroundColor: "#1E90FF",
    padding: 10,
    borderRadius: 5,
  },
  retryButtonText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "bold",
  },
  emptyText: {
    textAlign: "center",
    fontSize: 16,
    color: "#888",
  },
  buttonsContainer: {
    marginTop: 20,
    alignItems: "center",
  },
  mainButton: {
    backgroundColor: "#1E90FF",
    padding: 15,
    borderRadius: 5,
    width: "80%",
    marginVertical: 10,
    alignItems: "center",
  },
  mainButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
