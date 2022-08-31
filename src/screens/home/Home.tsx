import React, { useCallback } from "react";
import { FlatList, ListRenderItemInfo, SafeAreaView, StyleSheet, View, ViewStyle, Text, TextStyle } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Screens } from "../../navigation/NavigationPages";
import { CustomButton } from "../../components/CustomButton";
import { HeaderComponent } from "../../components/HeaderComponent";
import { isIos } from "../../globalTheme/constants";
import { rootStyles } from "../../globalTheme/styles";
import { useSelector } from "react-redux";
import { IPostsState } from "../../redux/posts/postsState";
import { IPostsModel } from "../../models/postsModel";
import { PostItemComponent } from "./components/PostItemComponent";
import { localization } from "../../localization/rootLocalization";
import { FONTS } from "../../globalTheme/fonts";
import { COLORS } from "../../globalTheme/colors";

export const Home = () => {
  const navigation = useNavigation();
  // @ts-ignore
  const posts = useSelector((state: IPostsState) => state.posts.posts);

  const onPressButtonHandler = useCallback(() => {
    navigation.navigate(Screens.createPost as never);
  }, [navigation]);

  const renderItem = ({ item }: ListRenderItemInfo<IPostsModel>): React.ReactElement => {
    return (
      <View style={styles.contentContainerStyle}>
        <PostItemComponent
          title={item.title}
          createAt={item.createAt}
          description={item.description}
          image={item.image}
          status={item.status}
        />
      </View>
    );
  };

  return (
    <SafeAreaView style={{ ...rootStyles.flex1 }}>
      <View style={styles.container}>
        <HeaderComponent isLogoHeader={true} />
        {!posts.length ?
          <View style={styles.emptyHomeContainer}>
            <Text style={styles.emptyHomeLabel}>{localization.common.emptyHome}</Text>
          </View> : null}
        <FlatList
          data={posts}
          renderItem={renderItem}
          showsVerticalScrollIndicator={false}
          keyExtractor={item => item.title + item.createAt}
          contentContainerStyle={styles.contentContainerStyle}
        />
        <View style={styles.buttonContainer}>
          <CustomButton title={localization.common.newPost} onPress={onPressButtonHandler} />
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
      paddingBottom: isIos ? 80 : 40,
    } as ViewStyle,
    contentContainerStyle: {
      paddingVertical: 6,
    } as ViewStyle,
    emptyHomeContainer: {
      ...rootStyles.flexCenter,
      paddingHorizontal: 32
    } as ViewStyle,
    emptyHomeLabel: {
      fontSize: 18,
      fontFamily: FONTS.bold,
      color: COLORS.gray,
      textAlign: "center",
    } as TextStyle,
  },
);
