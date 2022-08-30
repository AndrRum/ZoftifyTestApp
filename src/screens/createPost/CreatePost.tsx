import React, { MutableRefObject, SetStateAction, useCallback, useRef, useState } from "react";
import { ImageStyle, SafeAreaView, ScrollView, StyleSheet, Text, TextStyle, View, ViewStyle } from "react-native";
import { HeaderComponent } from "../../components/HeaderComponent";
import { CustomButton } from "../../components/CustomButton";
import { isIos } from "../../globalTheme/constants";
import { useNavigation } from "@react-navigation/native";
import { rootStyles } from "../../globalTheme/styles";
import { CustomInput } from "../../components/CustomInput";
import { COLORS } from "../../globalTheme/colors";
import { AutoGrowTextInput } from "../../components/AutoGrowTextInput";
import { StatusModal } from "./components/StatusModal";
import { statuses } from "./components/statuses";
import { ImageCropPickerButton } from "../../components/ImageCropPickerButton";
import { FONTS } from "../../globalTheme/fonts";
import { useDispatch } from "react-redux";
import { createPost } from "../../redux/posts/postsSlice";
import { dateFormatter } from "../../helpers/dateFormatter";

export const CreatePost = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const [titleInputValue, setTitleInputValue] = useState("");
  const [description, setDescription] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedItemStatus, setSelectedItem] = useState("");
  const [photo, setPhoto] = useState(null);

  const descriptionRef: MutableRefObject<any> = useRef();

  const next = useCallback((ref: {
    current: { focus: () => void }
  }) => {
    return setTimeout(() => ref.current.focus(), 100);
  }, []);

  const changeModalState = useCallback(() => {
    setModalVisible(!modalVisible);
  }, [modalVisible]);

  const onTouchItem = useCallback((index: number) => {
    setSelectedItem(statuses[index]);
    setModalVisible(false);
  }, []);

  const onBackHandler = () => {
    navigation.goBack();
  };

  const addPhoto = (ph: { path: SetStateAction<any> }) => {
    setPhoto(ph.path);
  };

  const onSubmitHandler = () => {
    dispatch(createPost({
      title: titleInputValue,
      description: description,
      createAt: dateFormatter(new Date),
      status: selectedItemStatus,
      image: photo,
    }));
    onBackHandler();
  };

  return (
    <SafeAreaView style={{ ...rootStyles.flex1 }}>
      <View style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.headerContainer}>
            <HeaderComponent title={"Create new post"} onBackPress={onBackHandler} />
          </View>
          <View style={styles.inputs}>
            <CustomInput
              inputContainerStyle={styles.inputContainerStyle}
              value={titleInputValue}
              onChangeText={text => setTitleInputValue(text)}
              placeholder={"Title"}
              onSubmitEditing={() => next(descriptionRef)}
            />
            <View style={styles.inputContainerStyle}>
              <StatusModal
                modalVisible={modalVisible}
                changeModalState={changeModalState}
                onTouchItem={onTouchItem}
                modalContent={statuses}
                selectedItem={selectedItemStatus}
              />
            </View>
            <View>
              <AutoGrowTextInput
                ref={descriptionRef}
                value={description}
                onChangeText={text => setDescription(text)}
                placeholder={"Description"}
                minHeight={118}
                maxHeight={250}
              />
            </View>
          </View>
          <View style={styles.empty} />
          <View style={styles.photoContainer}>
            <Text style={styles.photoTitle}>Photo</Text>
            <ImageCropPickerButton
              onImagePicked={addPhoto}
              onPressClose={() => setPhoto(null)}
              image={photo}
              disabled={!!photo}
              imageStyle={styles.imageStyle}
              style={styles.imageContainerStyle}
            />
          </View>
        </ScrollView>
        <View style={styles.buttonContainer}>
          <CustomButton
            title={"Submit"}
            onPress={onSubmitHandler}
            disabled={!titleInputValue || !description || !selectedItemStatus}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "space-between",
      backgroundColor: COLORS.lightGray,
    } as ViewStyle,
    headerContainer: {
      paddingBottom: 8,
    } as ViewStyle,
    inputs: {
      paddingHorizontal: 16,
      backgroundColor: COLORS.white,
      paddingVertical: 20,
    } as ViewStyle,
    buttonContainer: {
      paddingHorizontal: 16,
      paddingBottom: isIos ? 80 : 40,
    } as ViewStyle,
    inputContainerStyle: {
      paddingBottom: 8,
    } as ViewStyle,
    photoContainer: {
      backgroundColor: COLORS.white,
      paddingVertical: 16,
      paddingHorizontal: 16,
    } as ViewStyle,
    empty: {
      height: 12,
    } as ViewStyle,
    photoTitle: {
      fontSize: 18,
      fontFamily: FONTS.regular,
      fontWeight: "500",
      color: COLORS.black,
      paddingBottom: 18,
    } as TextStyle,
    imageStyle: {
      minWidth: 80,
      minHeight: 80,
      borderRadius: 12,
    } as ImageStyle,
    imageContainerStyle: {
      justifyContent: "center",
      alignItems: "flex-start",
    } as ViewStyle,
  },
);
