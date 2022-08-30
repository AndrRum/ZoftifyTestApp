import { ActionSheetIOS, ActionSheetIOSOptions, Alert, AlertButton } from "react-native";
import { isIos } from "../globalTheme/constants";

export function showActionSheet(options: ActionSheetIOSOptions, onOptionSelected: (optionIndex: number) => void) {
  if (isIos) {
    ActionSheetIOS.showActionSheetWithOptions(options, onOptionSelected);
  } else if (!isIos) {
    const buttons: AlertButton[] = options.options.map((value, index) => {
      return {
        text: value,
        onPress: () => {
          onOptionSelected(index);
        },
        style: "default",
      };
    });

    Alert.alert(options.title || "", options.message, buttons, {cancelable: true});
  }
}
