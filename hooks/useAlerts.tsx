import { Alert } from "react-native";

interface Props {
  title: string;
  message: string;
  onCancelPress: () => void;
  onOkPress: () => void;
  onOptionalPress?: () => void;
}

export const useAlert = () => {
  const createTwoButtonAlert = ({
    title,
    message,
    onCancelPress,
    onOkPress,
  }: Props) =>
    Alert.alert(title, message, [
      {
        text: "Cancel",
        onPress: onCancelPress,
        style: "cancel",
      },
      { text: "OK", onPress: onOkPress },
    ]);

  const createThreeButtonAlert = ({
    title,
    message,
    onCancelPress,
    onOkPress,
    onOptionalPress,
  }: Props) =>
    Alert.alert(title, message, [
      {
        text: "Ask me later",
        onPress: onOptionalPress,
      },
      {
        text: "Cancel",
        onPress: onCancelPress,
        style: "cancel",
      },
      { text: "OK", onPress: onOkPress },
    ]);

  return { createTwoButtonAlert, createThreeButtonAlert };
};
