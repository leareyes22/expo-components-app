import { useThemeColor } from "@/hooks/useThemeColor";
import React from "react";
import { Platform, Pressable } from "react-native";
import { Switch } from "react-native-gesture-handler";
import ThemedText from "./ThemedText";

interface Props {
  text: string;
  value: boolean;
  className?: string;
  onValueChange: (value: boolean) => void;
}

const isAndroid = Platform.OS === "android";

const ThemedSwitch = ({ text, value, className, onValueChange }: Props) => {
  const switchActiveColor = useThemeColor({}, "primary");

  return (
    <Pressable
      className={`flex mx-2 flex-row items-center justify-between active:opacity-80 ${className}`}
      onPress={() => onValueChange(!value)}
    >
      {text && <ThemedText type="h2">{text}</ThemedText>}
      <Switch
        onValueChange={onValueChange}
        value={value}
        thumbColor={isAndroid ? switchActiveColor : ""}
        trackColor={{
          false: "grey",
          true: switchActiveColor,
        }}
      />
    </Pressable>
  );
};

export default ThemedSwitch;
