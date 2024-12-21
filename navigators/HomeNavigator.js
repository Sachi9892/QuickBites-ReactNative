import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

// Import Pages
import HomePage from "../components/HomePage";
import SearchResultPage from "../components/SearchResultPage";
import SearchBoxWithAutoComplete from "../service/SearchBoxWithAutoComplete";

const Stack = createStackNavigator();

export default function HomeStackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomePage"
        component={HomePage}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SearchResultPage"
        component={SearchResultPage}
        options={{ title: "Search Results" }}
      />
      <Stack.Screen
        name="SearchBoxWithAutoComplete"
        component={SearchBoxWithAutoComplete}
        options={{ title: "Search" }}
      />
    </Stack.Navigator>
  );
}
