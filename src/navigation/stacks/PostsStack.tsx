import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Screens } from "../NavigationPages";
import { Home } from "../../screens/Home";
import { CreatePost } from "../../screens/CreatePost";


const PostsStack = createNativeStackNavigator();

export const PostsStackComponent = () => {
  return (
    <PostsStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName={Screens.home}
    >
      <PostsStack.Screen name={Screens.home} component={Home} />
      <PostsStack.Screen name={Screens.createPost} component={CreatePost} />
    </PostsStack.Navigator>
  );
};
