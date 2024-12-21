import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Image,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons"; // For profile icon
import SearchBoxWithAutoComplete from "../service/SearchBoxWithAutoComplete"; // Import the new search bar component

const HomePage = ({ navigation }) => {
  return (
    <ScrollView style={styles.container}>
      {/* Header with Profile Icon */}
      <View style={styles.header}>
        <Text style={styles.title}>Quick Bites</Text>
        <TouchableOpacity>
          <FontAwesome name="user-circle" size={30} color="#000" />
        </TouchableOpacity>
      </View>

      {/* Location Dropdown */}
      <View style={styles.location}>
        <Text>Deliver to</Text>
        <TouchableOpacity>
          <Text style={styles.locationText}>Vile Parle West ▼</Text>
        </TouchableOpacity>
      </View>

      {/* Enhanced Search Bar */}
      <SearchBoxWithAutoComplete navigation={navigation} />

      {/* Categories */}
      <View style={styles.categories}>
        <Text style={styles.categoryTitle}>Categories</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <TouchableOpacity style={styles.category}>
            <Text>🍕 Pizza</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.category}>
            <Text>🍔 Burgers</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.category}>
            <Text>🍣 Sushi</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.category}>
            <Text>🍟 Fries</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.category}>
            <Text>🍜 Noodles</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.category}>
            <Text>🍩 Desserts</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>

      {/* Nearby Restaurants */}
      <View style={styles.nearbyRestaurants}>
        <Text style={styles.nearbyTitle}>Nearby Restaurants</Text>
        <View style={styles.restaurantCard}>
          <Image
            style={styles.restaurantImage}
            source={{
              uri: "https://media.istockphoto.com/id/1829241109/photo/enjoying-a-brunch-together.jpg?s=1024x1024&w=is&k=20&c=QPHFTWoscwMSXOEGKoAKOjlCnMGszppFBrqQHdy4EGc=",
            }}
          />
          <View style={styles.restaurantDetails}>
            <Text>The Food Hub</Text>
            <Text>⭐ 4.5 30 mins | ₹200</Text>
          </View>
        </View>
        <View style={styles.restaurantCard}>
          <Image
            style={styles.restaurantImage}
            source={{
              uri: "https://media.istockphoto.com/id/1205353592/photo/enjoying-lunch-with-friends.jpg?s=1024x1024&w=is&k=20&c=DpLNwZNR_YYMUb7_szd5YtyqXMoo4YuxbQ-nUbY_bt0=",
            }}
          />
          <View style={styles.restaurantDetails}>
            <Text>Taste of India</Text>
            <Text>⭐ 4.2 25 mins | ₹150</Text>
          </View>
        </View>
        {/* Add more restaurants here */}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  location: {
    marginTop: 10,
  },
  locationText: {
    color: "blue",
  },
  categories: {
    marginTop: 20,
  },
  categoryTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  category: {
    marginRight: 20,
  },
  nearbyRestaurants: {
    marginTop: 20,
  },
  nearbyTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  restaurantCard: {
    flexDirection: "row",
    marginTop: 10,
    borderBottomWidth: 1,
    paddingBottom: 10,
  },
  restaurantImage: {
    width: 80,
    height: 80,
    borderRadius: 5,
  },
  restaurantDetails: {
    marginLeft: 10,
  },
  bottomNav: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10,
    borderTopWidth: 1,
  },
});

export default HomePage;
