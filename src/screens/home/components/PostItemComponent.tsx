import React, { memo } from "react";
import { Image, ImageStyle, ImageURISource, StyleSheet, Text, TextStyle, View, ViewStyle } from "react-native";
import { IPostsModel } from "../../../models/postsModel";
import { COLORS } from "../../../globalTheme/colors";
import { FONTS } from "../../../globalTheme/fonts";
import { rootStyles } from "../../../globalTheme/styles";
import { localization } from "../../../localization/rootLocalization";

export const PostItemComponent = memo((props: IPostsModel) => {
  return (
    <View style={styles.container}>
      <View style={styles.rowContainer}>
        <Image
          source={{ uri: props.image } as ImageURISource}
          style={styles.image} />
        <View style={styles.textContainer}>
          <Text style={styles.title} numberOfLines={1}>{props.title}</Text>
          <View style={styles.dateContainer}>
            <Text style={styles.createdAt}>{localization.common.createdAt}</Text>
            <View style={{ ...rootStyles.flex1 }}>
              <Text style={styles.date} numberOfLines={1}>{props.createAt}</Text>
            </View>
          </View>
          {props.status.includes("Draft") ?
            <View style={draftContainer}>
              <Text style={draftLabel}>{props.status}</Text>
            </View> :
            <View style={publishedContainer}>
              <Text style={publishedLabel}>{props.status}</Text>
            </View>
          }
        </View>
      </View>
      <View style={{ ...rootStyles.flex1 }}>
        <Text style={styles.description} numberOfLines={2}>{props.description}</Text>
      </View>
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    paddingHorizontal: 16,
    paddingVertical: 16,
  } as ViewStyle,
  rowContainer: {
    flexDirection: "row",
    paddingBottom: 16,
  } as ViewStyle,
  image: {
    width: 128,
    height: 128,
    borderRadius: 12,
  } as ImageStyle,
  textContainer: {
    flex: 1,
    paddingHorizontal: 16,
    paddingBottom: 16,
    paddingTop: 8,
  } as ViewStyle,
  title: {
    fontSize: 18,
    fontFamily: FONTS.regular,
    fontWeight: "500",
    color: COLORS.black,
    paddingBottom: 12,
  } as TextStyle,
  dateContainer: {
    flexDirection: "row",
  } as ViewStyle,
  createdAt: {
    fontSize: 12, fontFamily: FONTS.regular,
    fontWeight: "400",
    color: COLORS.gray,
  } as TextStyle,
  date: {
    fontSize: 12, fontFamily: FONTS.regular,
    fontWeight: "400",
    color: COLORS.black,
    paddingBottom: 12,
  } as TextStyle,
  statusContainer: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 8,
  } as ViewStyle,
  statusText: {
    fontSize: 14,
    fontWeight: "500",
    fontFamily: FONTS.regular,
  } as TextStyle,
  description: {
    fontFamily: FONTS.regular,
    fontWeight: "400",
    color: COLORS.black,
    fontSize: 14,
  } as TextStyle,
});

const draftContainer = StyleSheet.flatten([styles.statusContainer, {
  backgroundColor: COLORS.lightRed,
  width: 57,
}]);

const draftLabel = StyleSheet.flatten([styles.statusText, {
  color: COLORS.red,
}]);

const publishedContainer = StyleSheet.flatten([styles.statusContainer, {
  backgroundColor: COLORS.lightGreen,
  width: 85,
}]);

const publishedLabel = StyleSheet.flatten([styles.statusText, {
  color: COLORS.green,
}]);
