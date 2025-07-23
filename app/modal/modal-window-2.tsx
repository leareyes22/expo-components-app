import ThemedButton from "@/components/ThemedButton";
import ThemedText from "@/components/ThemedText";
import ThemedView from "@/components/ThemedView";
import { router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Platform } from "react-native";

const Modal2Screen = () => {
  return (
    <ThemedView
      bgColor="#A52182"
      className="justify-center items-center flex-1"
    >
      <ThemedText type="h1">Hi I am another modal</ThemedText>

      <ThemedButton onPress={() => router.dismiss()} className="my-4">
        Close
      </ThemedButton>

      <StatusBar style={Platform.OS === "ios" ? "light" : "auto"} />
    </ThemedView>
  );
};

export default Modal2Screen;
