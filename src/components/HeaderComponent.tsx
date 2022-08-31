import React from "react";
import { Image, StyleSheet, Text, TextStyle, TouchableOpacity, View, ViewStyle } from "react-native";
import { ImageResources } from "../globalTheme/ImageResources.g";
import { COLORS } from "../globalTheme/colors";
import { FONTS } from "../globalTheme/fonts";
import { isIphoneX, STATUSBAR_HEIGHT } from "../globalTheme/constants";

interface IProps {
  isLogoHeader?: boolean;
  title?: string;
  onBackPress?:  () => void;
}

export const HeaderComponent = (props: IProps) => {
  return (
    props.isLogoHeader ?
      <View style={styles.container}>
        <Image source={ImageResources.logo} />
      </View> :
      <View style={styles.backButtonContainer}>
        <TouchableOpacity onPress={props.onBackPress}>
          <Image source={ImageResources.arrow_left} />
        </TouchableOpacity>
        <Text style={styles.label}>{props.title}</Text>
        <View style={styles.empty} />
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: isIphoneX ? STATUSBAR_HEIGHT + 32 : 14,
    paddingBottom: 14,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.white
  } as ViewStyle,
  backButtonContainer: {
    backgroundColor: COLORS.white,
    paddingVertical: 14,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20
  } as ViewStyle,
  empty: {
    width: 28,
  } as ViewStyle,
  label: {
    fontSize: 18,
    fontWeight: "500",
    fontFamily: FONTS.regular,
    color: COLORS.black
  } as TextStyle,
});
