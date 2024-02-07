import React from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

const ProfileScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backButton}
        >
          <Image
            source={require("../assets/icons/back.png")}
            style={styles.backIcon}
          />
        </TouchableOpacity>
        <Text style={styles.headerText}>Profile Screen</Text>
      </View>
      <View style={styles.profileContent}>
        <Image
          source={require("../assets/icons/user.png")}
          style={styles.profileImage}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  backButton: {
    marginRight: 10,
  },
  backIcon: {
    height: 25,
    width: 25,
  },
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  profileContent: {
    alignItems: "center",
  },
  profileImage: {
    height: 100,
    width: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  profileText: {
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default ProfileScreen;
