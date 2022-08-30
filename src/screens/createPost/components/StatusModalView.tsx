import React from "react";
import { StyleSheet, View, Text, ViewStyle, TextStyle, TouchableOpacity, Image } from "react-native";
import { windowHeight, windowWidth } from "../../../globalTheme/constants";
import { COLORS } from "../../../globalTheme/colors";
import { CustomButton } from "../../../components/CustomButton";
import { FONTS } from "../../../globalTheme/fonts";
import { ImageResources } from "../../../globalTheme/ImageResources.g";

interface IProps {
  onTouchItem: (index: number) => void;
  closeModal: () => void;
  modalContent: string[];
  selectedItem: string;
}

export const StatusModalView = (props: IProps) => {

  return (
    <View style={styles.container}>
      <View style={styles.elContainer}>
        <View>
          {props.modalContent.map((e, i) => (
            <TouchableOpacity
              style={styles.listElement}
              onPress={() => props.onTouchItem(i)}
            >
              <Text style={styles.text}>{e}</Text>
              {e === props.selectedItem ?
                <Image source={ImageResources.arrow_down} /> : null
              }
            </TouchableOpacity>
          ))}
        </View>
        <View style={styles.buttonContainer}>
          <CustomButton title={"Close"} onPress={props.closeModal} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: "auto",
    justifyContent: "flex-end",
    backgroundColor: COLORS.modalBackground,
    flex: 1,
  } as ViewStyle,
  elContainer: {
    justifyContent: "space-between",
    backgroundColor: "white",
    borderTopStartRadius: 12,
    borderTopEndRadius: 12,
    height: windowHeight / 2,
    alignItems: "center",
    paddingVertical: 48,
  } as ViewStyle,
  buttonContainer: {
    width: windowWidth,
    paddingHorizontal: 16,
  } as ViewStyle,
  listElement: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: windowWidth,
    paddingHorizontal: 16,
    borderBottomWidth: 0.3,
    borderColor: COLORS.gray,
  } as ViewStyle,
  text: {
    fontSize: 18,
    fontFamily: FONTS.regular,
    paddingVertical: 4,

  } as TextStyle,
});
