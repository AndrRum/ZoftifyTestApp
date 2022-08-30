import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Root } from "./NavigationPages";
import { PostsStackComponent } from "./stacks/PostsStack";

const Stack = createNativeStackNavigator();

export const RootNavigationContainer = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerShown: false,
      }}>
        <Stack.Screen name={Root.posts} component={PostsStackComponent} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
