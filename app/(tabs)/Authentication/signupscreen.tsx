import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Alert,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import axios from "axios";

const SignUpScreen: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userType, setUserType] = useState<"Volunteer" | "Organization" | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSignUp = async () => {
    // Basic validation
    if (!name.trim() || !email.trim() || !password.trim() || !userType) {
      Alert.alert("Validation Error", "Please fill in all required fields.");
      return;
    }

    setIsLoading(true); // Show loader
    try {
      const response = await axios.post("http://192.168.1.109:3000/auth/signup", {
        name,
        email,
        password,
        userType,
      });

      Alert.alert("Success", response.data.message || "Sign-up successful.");
      // Reset state
      setName("");
      setEmail("");
      setPassword("");
      setUserType(null);
    } catch (error: any) {
      Alert.alert(
        "Error",
        error.response?.data?.message || "Something went wrong. Please try again."
      );
    } finally {
      setIsLoading(false); // Hide loader
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign Up</Text>

      {/* User type selection */}
      {!userType && (
        <View style={styles.selectionContainer}>
          <TouchableOpacity
            style={[styles.optionButton, { backgroundColor: "#1E90FF" }]}
            onPress={() => setUserType("Volunteer")}
          >
            <Text style={styles.optionText}>Sign up as Volunteer</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.optionButton, { backgroundColor: "#FF6347" }]}
            onPress={() => setUserType("Organization")}
          >
            <Text style={styles.optionText}>Sign up as Organization</Text>
          </TouchableOpacity>
        </View>
      )}

      {/* Sign-Up Form */}
      {userType && (
        <>
          <Text style={styles.subTitle}>Sign up as {userType}</Text>
          <TextInput
            placeholder="Name"
            style={styles.input}
            value={name}
            onChangeText={setName}
            placeholderTextColor="#888"
          />
          <TextInput
            placeholder="Email"
            style={styles.input}
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
            placeholderTextColor="#888"
          />
          <TextInput
            placeholder="Password"
            style={styles.input}
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            placeholderTextColor="#888"
          />

          {isLoading ? (
            <ActivityIndicator size="large" color="#32CD32" />
          ) : (
            <TouchableOpacity style={styles.signUpButton} onPress={handleSignUp}>
              <Text style={styles.signUpButtonText}>Sign Up</Text>
            </TouchableOpacity>
          )}

          {/* Back to user type selection */}
          <TouchableOpacity onPress={() => setUserType(null)} style={styles.backButton}>
            <Text style={styles.backText}>Back to selection</Text>
          </TouchableOpacity>
        </>
      )}
    </View>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f8f9fa",
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#333",
  },
  subTitle: {
    fontSize: 20,
    marginBottom: 10,
    color: "#666",
  },
  input: {
    width: "80%",
    padding: 12,
    marginVertical: 8,
    backgroundColor: "#ffffff",
    borderColor: "#ddd",
    borderWidth: 1,
    borderRadius: 5,
    fontSize: 16,
    color: "#333",
  },
  selectionContainer: {
    marginVertical: 20,
    alignItems: "center",
  },
  optionButton: {
    width: "80%",
    padding: 15,
    marginVertical: 10,
    borderRadius: 5,
    alignItems: "center",
  },
  optionText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  signUpButton: {
    marginTop: 20,
    width: "80%",
    backgroundColor: "#32CD32",
    padding: 15,
    borderRadius: 5,
    alignItems: "center",
  },
  signUpButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  backButton: {
    marginTop: 20,
  },
  backText: {
    color: "#007bff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
