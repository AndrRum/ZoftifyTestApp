import React from "react";
import { Image, Modal, StyleSheet, Text, TextStyle, TouchableOpacity, View, ViewStyle } from "react-native";
import { ImageResources } from "../../../globalTheme/ImageResources.g";
import { FONTS } from "../../../globalTheme/fonts";
import { COLORS } from "../../../globalTheme/colors";
import { StatusModalView } from "./StatusModalView";
import { localization } from "../../../localization/rootLocalization";

interface IProps {
  modalVisible: boolean;
  changeModalState: () => void;
  onTouchItem: (index: number) => void;
  modalContent: string[];
  selectedItem: string;
}

export const StatusModal = (props: IProps) => {
  return (
    <View>
      <TouchableOpacity style={styles.container} onPress={props.changeModalState}>
        <Text style={props.selectedItem ? selectedItemTitle : styles.title}>
          {props.selectedItem ? props.selectedItem : localization.common.status}
        </Text>
        <Image source={ImageResources.arrow_down} />
      </TouchableOpacity>
      <Modal
        animationType="slide"
        transparent={true}
        visible={props.modalVisible}
        onRequestClose={props.changeModalState}
      >
        <StatusModalView
          onTouchItem={props.onTouchItem}
          closeModal={props.changeModalState}
          modalContent={props.modalContent}
          selectedItem={props.selectedItem}
        />
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 12,
    minHeight: 58,
    alignItems: "center",
    borderRadius: 8,
    backgroundColor: COLORS.lightGray,
  } as ViewStyle,
  title: {
    fontSize: 16,
    fontFamily: FONTS.regular,
    fontWeight: "400",
    color: COLORS.gray,
  } as TextStyle,
});

const selectedItemTitle = StyleSheet.flatten([styles.title, { color: COLORS.black }]);
