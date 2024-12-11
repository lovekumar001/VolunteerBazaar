import React, { useState } from 'react';
import { 
  View, 
  Text, 
  FlatList, 
  TouchableOpacity, 
  StyleSheet, 
  Modal, 
  TextInput, 
  KeyboardAvoidingView, 
  Platform, 
  ScrollView 
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const HomeScreen = ({ navigation }) => {
  const [isChatVisible, setIsChatVisible] = useState(false);
  const [message, setMessage] = useState("");

  const gridData = [
    { id: '1', title: 'Joined Events', icon: 'calendar-outline', screen: 'JoinedEvents' },
    { id: '2', title: 'Blood Donors', icon: 'water-outline', screen: 'BloodDonors' },
    { id: '3', title: 'Social', icon: 'chatbubble-outline', screen: 'Social' },
    { id: '4', title: 'Financial', icon: 'cash-outline', screen: 'Financial' },
    { id: '5', title: 'Professional', icon: 'briefcase-outline', screen: 'Professional' },
    { id: '6', title: 'Volunteers List', icon: 'people-outline', screen: 'VolunteersList' },
    { id: '7', title: 'Volunteers Activities', icon: 'people-outline', screen: 'VolunteerActivities' },
  ];

  const renderGridItem = ({ item }) => (
    <TouchableOpacity
      style={styles.gridItem}
      onPress={() => navigation.navigate(item.screen)}
    >
      <Icon name={item.icon} size={40} color="#333" />
      <Text style={styles.itemText}>{item.title}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={gridData}
        renderItem={renderGridItem}
        keyExtractor={(item) => item.id}
        numColumns={2}
        contentContainerStyle={styles.grid}
      />

      {/* Floating Chatbot Button */}
      <TouchableOpacity
        style={styles.floatingButton}
        onPress={() => setIsChatVisible(true)}
      >
        <Icon name="chatbubbles-outline" size={30} color="#fff" />
      </TouchableOpacity>

      {/* Chatbot Slider Modal */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={isChatVisible}
        onRequestClose={() => setIsChatVisible(false)}
      >
        <View style={styles.modalContainer}>
          <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={styles.keyboardView}
          >
            <View style={styles.chatContainer}>
              {/* Header */}
              <View style={styles.modalHeader}>
                <Text style={styles.headerText}>Chat with Bot</Text>
                <TouchableOpacity onPress={() => setIsChatVisible(false)}>
                  <Icon name="close" size={24} color="#000" />
                </TouchableOpacity>
              </View>

              {/* Chat Messages Placeholder */}
              <ScrollView style={styles.chatArea}>
                <Text style={styles.chatBotText}>Hi there! How can I assist you today?</Text>
              </ScrollView>

              {/* Input Section */}
              <View style={styles.inputContainer}>
                <TextInput
                  style={styles.input}
                  placeholder="Type a message..."
                  value={message}
                  onChangeText={setMessage}
                  returnKeyType="send"
                />
                <TouchableOpacity 
                  style={styles.sendButton} 
                  onPress={() => alert(`Message sent: ${message}`)}
                >
                  <Icon name="send" size={20} color="#fff" />
                </TouchableOpacity>
              </View>
            </View>
          </KeyboardAvoidingView>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F9F9F9",
    paddingTop: 20,
    paddingHorizontal: 20,
  },
  grid: {
    justifyContent: "space-between",
  },
  gridItem: {
    flex: 1,
    margin: 10,
    height: 120,
    backgroundColor: "#E8E8E8",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    elevation: 3,
  },
  itemText: {
    marginTop: 10,
    fontSize: 16,
    color: "#333",
  },
  floatingButton: {
    position: "absolute",
    bottom: 20,
    right: 20,
    backgroundColor: "#1E90FF",
    borderRadius: 50,
    width: 60,
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    elevation: 5,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "flex-end",
    backgroundColor: "rgba(0, 0, 0, 0.4)",
  },
  keyboardView: {
    flex: 1,
    justifyContent: "flex-end",
  },
  chatContainer: {
    height: "50%",
    backgroundColor: "#fff",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 15,
  },
  modalHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
    paddingBottom: 10,
  },
  headerText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  chatArea: {
    flex: 1,
  },
  chatBotText: {
    fontSize: 16,
    color: "#333",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderTopWidth: 1,
    borderTopColor: "#ccc",
    paddingTop: 10,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 25,
    paddingHorizontal: 15,
    height: 40,
    marginRight: 10,
  },
  sendButton: {
    backgroundColor: "#1E90FF",
    borderRadius: 25,
    height: 40,
    width: 40,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default HomeScreen;
