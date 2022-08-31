import React, { FC, memo, useCallback } from "react";
import ImagePicker, { Image as CropperImage, Options } from "react-native-image-crop-picker";
import { ImageStyle, ImageURISource, ViewStyle } from "react-native";
import { ImageResources } from "../globalTheme/ImageResources.g";
import { PhotoTakingButton } from "./PhotoTakingButton";
import { showActionSheet } from "../helpers/showActionSheet";
import { localization } from "../localization/rootLocalization";

interface IProps {
  onImagePicked: (image: CropperImage) => void;
  onPressClose?: () => void;
  onRemoveImage?: () => void;
  onPickerError?: (error: Error) => void;
  image?: ImageURISource | null;
  img?: ImageURISource;
  style?: ViewStyle;
  imageStyle?: ImageStyle;
  title?: string;
  disabled?: boolean;
}

export const ImageCropPickerButton: FC<IProps> = memo(
  ({
     onPickerError,
     onPressClose,
     onImagePicked,
     onRemoveImage,
     image,
     img,
     style,
     imageStyle,
     title,
     disabled,
   }) => {
    const openGallery = useCallback(() => {
      ImagePicker.openPicker(pickerOptions)
        .then((imageResult) => {
          onImagePicked(imageResult);
        })
        .catch((error) => {
          onPickerError && onPickerError(error);
        });
    }, [onImagePicked, onPickerError]);

    const openCamera = useCallback(() => {
      ImagePicker.openCamera(pickerOptions)
        .then((imageResult) => {
          onImagePicked(imageResult);
        })
        .catch((error) => {
          onPickerError && onPickerError(error);
        });
    }, [onImagePicked, onPickerError]);

    const onPress = useCallback(() => {
      const options = [localization.common.cancel, localization.common.choose, localization.common.takePhoto];

      showActionSheet(
        {
          title: "Select photo",
          options: options,
          cancelButtonIndex: 0,
          destructiveButtonIndex: 3,
        },
        (optionIndex: number) => {
          switch (optionIndex) {
            case 1: {
              openGallery();
              break;
            }
            case 2: {
              openCamera();
              break;
            }
            case 3: {
              onRemoveImage && onRemoveImage();
              break;
            }

          }
        },
      );
    }, [openGallery, openCamera, image, onRemoveImage]);

    return (
      <PhotoTakingButton
        style={style}
        imageStyle={imageStyle}
        onPress={onPress}
        backgroundImage={image}
        img={img}
        title={title}
        disabled={disabled}
        onPressClose={onPressClose}
      />
    );
  },
);

ImageCropPickerButton.defaultProps = {
  img: ImageResources.picker,
};

const pickerOptions: Options = {
  height: 1000,
  width: 1000,
  cropping: true,
  compressImageQuality: 0.5,
  multiple: false,
  mediaType: "photo",
  includeBase64: true,
};
