import React from "react";
import { TouchableOpacity, Text, StyleSheet, ViewStyle, TextStyle } from "react-native";
import { COLORS } from "../globalTheme/colors";
import { FONTS } from "../globalTheme/fonts";

interface IProps {
  title: string;
  onPress: () => void;
  disabled?: boolean;
}

export const CustomButton = (props: IProps) => {
  return (
    <TouchableOpacity
      style={props.disabled ? disabledButtonContainer : styles.container}
      onPress={props.onPress}
      disabled={props.disabled}
    >
      <Text style={styles.title}>{props.title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.blue,
    paddingVertical: 12,
    borderRadius: 8,
  } as ViewStyle,
  title: {
    color: COLORS.white,
    fontSize: 16,
    fontFamily: FONTS.regular,
    fontWeight: "400",
  } as TextStyle,
});

const disabledButtonContainer = StyleSheet.flatten([
  styles.container, { backgroundColor: COLORS.gray },
]);
