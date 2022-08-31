import React, { FC, memo } from "react";
import { Image, ImageStyle, ImageURISource, StyleSheet, TouchableOpacity, ViewStyle } from "react-native";
import { Image as CropperImage } from "react-native-image-crop-picker";
import { ImageResources } from "../globalTheme/ImageResources.g";

interface IProps {
  onPress?: () => void;
  onPressClose?: () => void;
  img?: ImageURISource | CropperImage;
  backgroundImage?: ImageURISource | CropperImage | null;
  style?: ViewStyle;
  imageStyle?: ImageStyle;
  title?: string;
  disabled?: boolean;
}

export const PhotoTakingButton: FC<IProps> = memo(
  ({
     img,
     onPress,
     backgroundImage,
     style,
     imageStyle,
     disabled,
     onPressClose,
   }) => {
    return (
      <TouchableOpacity
        style={[styles.button, style] as ViewStyle}
        onPress={onPress}
        disabled={disabled}
      >
        <Image source={
          backgroundImage ?
            { uri: backgroundImage! } as ImageURISource :
            img!
        } style={imageStyle} />
        {backgroundImage ?
          <TouchableOpacity style={styles.closeStyle} onPress={onPressClose}>
            <Image source={ImageResources.close} />
          </TouchableOpacity> : null}
      </TouchableOpacity>
    );
  },
);

PhotoTakingButton.defaultProps = {
  img: ImageResources.picker,
};

const styles = StyleSheet.create({
  button: {
    justifyContent: "center",
    width: 80,
  } as ViewStyle,
  closeStyle: {
    position: "absolute",
    top: 0,
    right: 0,
  } as ImageStyle,
});
