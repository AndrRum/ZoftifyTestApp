import React from "react";
import { TouchableOpacity, View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Screens } from "../navigation/NavigationPages";

export const Home = () => {
  const navigation = useNavigation()
  const onPressButtonHandler = () => {
    navigation.navigate(Screens.createPost as never)
  }
  return (
    <View>
      <TouchableOpacity onPress={onPressButtonHandler}>
        <Text>Create new post</Text>
      </TouchableOpacity>
    </View>
  )
}
