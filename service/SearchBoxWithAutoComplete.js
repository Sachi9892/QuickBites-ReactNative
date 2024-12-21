import React, { useState } from "react";
import {
  View,
  TextInput,
  FlatList,
  Text,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
  Platform
} from "react-native";
import { Ionicons } from "@expo/vector-icons"; // For the search icon

import {
  fetchSuggestions,
  handleSearch,
  handleSelectSuggestion,
} from "./SearchService";

const SearchBoxWithAutoComplete = ({ navigation }) => {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const handleInputChange = (text) => {
    setQuery(text);
    if (text.length > 0) {
      fetchSuggestions(text, setSuggestions);
    } else {
      setSuggestions([]);
    }
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <View style={styles.container}>
        <View style={styles.searchBox}>
          <TextInput
            style={styles.input}
            placeholder="Search for dishes..."
            value={query}
            onChangeText={handleInputChange}
          />
          <TouchableOpacity onPress={() => handleSearch(query, navigation)}>
            <Ionicons name="search" size={24} color="black" />
          </TouchableOpacity>
        </View>

        {suggestions.length > 0 && (
          <FlatList
            data={suggestions}
            keyExtractor={(item) => item.dishId.toString()}
            renderItem={({ item }) => (
              <TouchableOpacity
                onPress={() => handleSelectSuggestion(item, navigation)}
              >
                <Text style={styles.suggestion}>{item.dishName}</Text>
              </TouchableOpacity>
            )}
          />
        )}
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
  searchBox: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginBottom: 5,
  },
  input: {
    flex: 1,
  },
  suggestion: {
    padding: 10,
    borderBottomWidth: 1,
    borderColor: "#ccc",
  },
});

export default SearchBoxWithAutoComplete;
