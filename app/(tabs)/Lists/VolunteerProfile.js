import React from "react";
import { View, Text, StyleSheet, ScrollView, Image } from "react-native";

const VolunteerProfile = ({ route }) => {
  const { volunteer } = route.params;

  return (
    <ScrollView style={styles.container}>
      <Image
        source={{
          uri: "https://via.placeholder.com/150",
        }}
        style={styles.avatar}
      />
      <Text style={styles.name}>{volunteer.name}</Text>
      <Text style={styles.subtext}>
        {volunteer.city}, {volunteer.province}
      </Text>

      <View style={styles.detailSection}>
        <Text style={styles.sectionHeader}>Personal Details</Text>
        <Text style={styles.detail}>Gender: {volunteer.gender}</Text>
        <Text style={styles.detail}>Age: {volunteer.age}</Text>
        <Text style={styles.detail}>Bio: {volunteer.bio || "N/A"}</Text>
      </View>

      <View style={styles.detailSection}>
        <Text style={styles.sectionHeader}>Education & Work</Text>
        <Text style={styles.detail}>Degree: {volunteer.degree}</Text>
        <Text style={styles.detail}>Field: {volunteer.field}</Text>
        <Text style={styles.detail}>Employment Status: {volunteer.employment_status}</Text>
      </View>

      <View style={styles.detailSection}>
        <Text style={styles.sectionHeader}>Volunteer Stats</Text>
        <Text style={styles.detail}>Hours Completed: {volunteer.hours_completed}</Text>
        <Text style={styles.detail}>Activities Volunteered: {volunteer.activities_volunteered}</Text>
        <Text style={styles.detail}>Reviews Received: {volunteer.reviews_received}</Text>
        <Text style={styles.detail}>Referral Count: {volunteer.referral_count}</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f3f4f6",
    padding: 20,
  },
  avatar: {
    width: 150,
    height: 150,
    borderRadius: 75,
    alignSelf: "center",
    marginBottom: 15,
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    color: "#1e293b",
    marginBottom: 5,
  },
  subtext: {
    fontSize: 16,
    textAlign: "center",
    color: "#64748b",
    marginBottom: 20,
  },
  detailSection: {
    marginBottom: 20,
    backgroundColor: "#ffffff",
    padding: 15,
    borderRadius: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  sectionHeader: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#1e3a8a",
    marginBottom: 10,
  },
  detail: {
    fontSize: 14,
    color: "#475569",
    marginBottom: 5,
  },
});

export default VolunteerProfile;
