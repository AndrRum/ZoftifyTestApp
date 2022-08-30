import React, { useCallback } from "react";
import { ListRenderItemInfo, SafeAreaView, StyleSheet, View, ViewStyle } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Screens } from "../../navigation/NavigationPages";
import { CustomButton } from "../../components/CustomButton";
import { HeaderComponent } from "../../components/HeaderComponent";
import { isIos } from "../../globalTheme/constants";
import { rootStyles } from "../../globalTheme/styles";
import { useSelector } from "react-redux";
import { IPostsState } from "../../redux/posts/postsState";

export const Home = () => {
  const navigation = useNavigation();
  const posts = useSelector((state: IPostsState) => state.posts);
  console.warn(posts)

  const onPressButtonHandler = useCallback(() => {
    navigation.navigate(Screens.createPost as never);
  }, [navigation]);

  return (
    <SafeAreaView style={{...rootStyles.flex1}}>
      <View style={styles.container}>
        <HeaderComponent isLogoHeader={true}/>
        <View style={styles.buttonContainer}>
          <CustomButton title={"New Post"} onPress={onPressButtonHandler} />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "space-between",
    } as ViewStyle,
    buttonContainer: {
      paddingHorizontal: 16,
      paddingBottom: isIos ? 80 : 40
    } as ViewStyle,
  },
);
