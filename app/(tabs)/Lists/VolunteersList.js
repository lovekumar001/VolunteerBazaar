import React, { useEffect, useState } from "react";
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Image } from "react-native";
import axios from "axios";
import Icon from "react-native-vector-icons/MaterialIcons";

const VolunteersList = ({ navigation }) => {
  const [volunteers, setVolunteers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    navigation.setOptions({
      title: "Volunteers List",
      headerStyle: { backgroundColor: "#007bff" },
      headerTintColor: "#fff",
      headerTitleStyle: { fontWeight: "bold", fontSize: 20 },
    });
  }, [navigation]);

  useEffect(() => {
    const fetchVolunteers = async () => {
      try {
        const url = "http://192.168.146.4:3000/users";
        const response = await axios.get(url);
        setVolunteers(response.data);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching volunteers:", error.message);
        setIsLoading(false);
      }
    };

    fetchVolunteers();
  }, []);

  const renderCard = ({ item }) => (
    <View style={styles.card}>
      <Image
        source={{
          uri: "https://via.placeholder.com/100", // Replace with dynamic image if available
        }}
        style={styles.avatar}
      />
      <View style={styles.detailsContainer}>
        <Text style={styles.name}>{item.name}</Text>
        <View style={styles.infoRow}>
          <Icon name="person" size={16} color="#666" />
          <Text style={styles.infoText}>Gender: {item.gender}</Text>
        </View>
        <View style={styles.infoRow}>
          <Icon name="cake" size={16} color="#666" />
          <Text style={styles.infoText}>Age: {item.age}</Text>
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("VolunteerProfile", { volunteer: item })} // Pass volunteer data
        >
          <Text style={styles.buttonText}>View Profile</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      {isLoading ? (
        <Text style={styles.loadingText}>Loading...</Text>
      ) : (
        <FlatList
          data={volunteers}
          keyExtractor={(item) => item.user_id.toString()}
          renderItem={renderCard}
          contentContainerStyle={styles.listContent}
          showsVerticalScrollIndicator={false}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f0f4f8",
  },
  loadingText: {
    fontSize: 18,
    color: "#888",
    textAlign: "center",
    marginTop: 20,
  },
  listContent: {
    flexGrow: 1,
    paddingBottom: 20,
  },
  card: {
    flexDirection: "row",
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
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 15,
  },
  detailsContainer: {
    flex: 1,
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 5,
  },
  infoRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 5,
  },
  infoText: {
    marginLeft: 5,
    fontSize: 14,
    color: "#666",
  },
  button: {
    marginTop: 10,
    backgroundColor: "#007bff",
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 5,
  },
  buttonText: {
    color: "#fff",
    fontSize: 14,
    textAlign: "center",
  },
});

export default VolunteersList;
