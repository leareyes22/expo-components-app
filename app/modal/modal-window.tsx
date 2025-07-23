import ThemedButton from "@/components/ThemedButton";
import ThemedText from "@/components/ThemedText";
import ThemedView from "@/components/ThemedView";
import { router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Platform } from "react-native";

const ModalScreen = () => {
  return (
    <ThemedView
      bgColor="#A52182"
      className="justify-center items-center flex-1"
    >
      <ThemedText type="h1">Hi I am a modal</ThemedText>

      <ThemedButton
        onPress={() => router.push("/modal/modal-window-2")}
        className="my-4"
      >
        Other Modal
      </ThemedButton>

      <ThemedButton onPress={() => router.dismiss()}>Close</ThemedButton>

      <StatusBar style={Platform.OS === "ios" ? "light" : "auto"} />
    </ThemedView>
  );
};

export default ModalScreen;
