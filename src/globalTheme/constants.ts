import { Dimensions, Platform } from "react-native";
import Device from "react-native-device-detection";

export const windowWidth = Dimensions.get('window').width;
export const windowHeight = Dimensions.get('window').height;

export const isIos = Device.isIos;
export const isIphoneX = Device.isIphoneX;

export const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : 0;
