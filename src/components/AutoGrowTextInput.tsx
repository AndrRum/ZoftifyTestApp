import {
  NativeSyntheticEvent,
  StyleSheet,
  TextInput,
  TextInputContentSizeChangeEventData,
  TextStyle, View,
  ViewStyle,
} from "react-native";
import React, { forwardRef, useState } from "react";
import { COLORS } from "../globalTheme/colors";
import { FONTS } from "../globalTheme/fonts";

function styleSheetFlatten<T>(...args: T[]): T {
  return StyleSheet.flatten(args as any) as any;
}

interface IProps {
  maxHeight: number;
  minHeight?: number;
  style?: TextStyle;
  placeholder?: string;
  onChangeText?: (text: string) => void;
  value?: string;
  maxLength?: number;
  editable?: boolean;
  onFocus?: () => void;
  onBlur?: () => void;
  onLayout?: () => void;
}

export const AutoGrowTextInput = forwardRef((props: IProps, ref: React.ForwardedRef<TextInput>) => {

  const {
    value,
    onChangeText,
    placeholder,
    maxLength,
    editable,
    onFocus,
    onBlur,
    onLayout,
  } = props;

  const errorStyle = {
    borderWidth: 1,
    borderColor: COLORS.red,
    borderRadius: 8,
    paddingHorizontal: 12,
    backgroundColor: COLORS.lightGray,
  } as ViewStyle;

  const [height, setHeight] = useState(props.minHeight);

  const calcHeight = (actualHeight: number): number => {
    return Math.max(Math.min(props.maxHeight, actualHeight), props.minHeight || 0);
  };

  const onContentSizeChange =
    (event: NativeSyntheticEvent<TextInputContentSizeChangeEventData>): void => {
      const prevHeight = calcHeight(event.nativeEvent.contentSize.height);

      if (prevHeight == height) {
        return;
      }
      setHeight(prevHeight);
    };

  return (
    <View style={value?.length! > 250 ? errorStyle : styles.inputContainer}>
      <TextInput
        ref={ref}
        value={value}
        autoFocus={false}
        underlineColorAndroid={"transparent"}
        multiline={true}
        blurOnSubmit={false}
        onChangeText={onChangeText}
        style={styleSheetFlatten(styles.input, { height })}
        placeholder={placeholder}
        placeholderTextColor={COLORS.gray}
        onContentSizeChange={onContentSizeChange}
        maxLength={maxLength}
        editable={editable}
        onFocus={onFocus}
        onBlur={onBlur}
        onLayout={onLayout}
      />
    </View>
  );
});

const styles = StyleSheet.create({
  inputContainer: {
    backgroundColor: COLORS.lightGray,
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 4,
  } as ViewStyle,
  input: {
    fontSize: 16,
    fontFamily: FONTS.regular,
    fontWeight: "400",
    textAlignVertical: "top",
  } as TextStyle,
});
