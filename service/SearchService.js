// services/SearchService.js
import axios from "axios";

export const fetchSuggestions = async (text, setSuggestions) => {
  try {
    const response = await axios.get(
      `http://192.168.1.105:3240/user/search?query=${text}`
    );
    setSuggestions(response.data.slice(0, 8)); // Update suggestions
  } catch (error) {
    console.error("Error fetching suggestions:", error);
  }
};

export const handleSearch = (query, navigation) => {
  if (query.trim().length > 0) {
    console.log("Search Result page unreachable");
    navigation.navigate("SearchResultPage", { query });
  }
};

export const handleSelectSuggestion = (selectedDish, navigation) => {
  console.log("Error occured");
  navigation.navigate("SearchResultPage", { query: selectedDish.dishName });
};
