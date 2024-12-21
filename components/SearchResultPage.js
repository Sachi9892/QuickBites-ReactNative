import React from "react";
import { View, Text, FlatList, Image, StyleSheet } from "react-native";

const SearchResultPage = ({ route }) => {
  const { query } = route.params;
  const [dishes, setDishes] = useState([]);

  useEffect(() => {
    const fetchDishes = async () => {
      try {
        const response = await axios.get(
          `http://192.168.1.105:3240/user/search?query=${query}`
        );
        setDishes(response.data);
      } catch (error) {
        console.error("Error fetching dishes:", error);
      }
    };

    fetchDishes();
  }, [query]);

  const renderFoodCard = ({ item }) => (
    <View style={styles.card}>
      <Image source={{ uri: item.dishPic }} style={styles.image} />
      <View style={styles.detailsContainer}>
        <Text style={styles.dishName}>{item.dishName}</Text>
        <Text style={styles.restaurantName}>{item.restName}</Text>
        <Text style={styles.category}>{item.category}</Text>
        <Text style={styles.price}>₹{item.price}</Text>
        <Text style={styles.rating}>
          ⭐ {item.avgReview} ({item.totalReviews} reviews)
        </Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Search Results</Text>
      {dishes.length > 0 ? (
        <FlatList
          data={dishes}
          renderItem={renderFoodCard}
          keyExtractor={(item) => item.dishId.toString()}
        />
      ) : (
        <Text style={styles.noResults}>No results found</Text>
      )}
    </View>
  );
};

export default SearchResultPage;