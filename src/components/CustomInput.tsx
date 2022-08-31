import React, { useState } from "react";
import { forwardRef } from "react";
import { TextInput, View, StyleSheet, ViewStyle, TextStyle } from "react-native";
import { COLORS } from "../globalTheme/colors";
import { FONTS } from "../globalTheme/fonts";

interface IProps {
  onChangeText: (value: React.SetStateAction<string>) => void;
  onBlur?: () => void;
  inputContainerStyle?: ViewStyle;
  onSubmitEditing?: () => void;
  blurOnSubmit?: boolean;
  error?: string;
  value: string;
  placeholder?: string;
}

export const CustomInput = forwardRef((props: IProps, ref: React.ForwardedRef<TextInput>) => {
  const {
    onChangeText,
    onBlur,
    inputContainerStyle,
    onSubmitEditing,
    blurOnSubmit,
    value,
    //error,
    placeholder,
  } = props;
  const [focused, setFocused] = useState(false);
  const [text, setText] = useState("");

  const onChange = (value: React.SetStateAction<string>) => {
    setText(value);
    onChangeText(value);
  };

  const onFocusMethod = () => {
    setFocused(true);
  };

  const onBlurMethod = () => {
    setFocused(false);
    onBlur && onBlur();
  };

  return (
    <View style={inputContainerStyle}>
      <View style={styles.inputContainer}>
        <TextInput
          ref={ref}
          style={styles.input}
          onChangeText={onChange}
          placeholder={!focused ? placeholder : ""}
          placeholderTextColor={COLORS.gray}
          onFocus={onFocusMethod}
          onBlur={onBlurMethod}
          value={text || value}
          selectionColor={COLORS.blue}
          onSubmitEditing={onSubmitEditing}
          blurOnSubmit={blurOnSubmit}
        />
      </View>
    </View>
  );
});

const styles = StyleSheet.create({
  inputContainer: {
    backgroundColor: COLORS.lightGray,
    minHeight: 58,
    borderRadius: 8,
    justifyContent: "center",
    paddingHorizontal: 12,
  } as ViewStyle,
  input: {
    fontSize: 16,
    fontFamily: FONTS.regular,
    fontWeight: "400",
  } as TextStyle,
});
