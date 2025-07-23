import ThemedButton from "@/components/ThemedButton";
import ThemedView from "@/components/ThemedView";
import { Link, router } from "expo-router";
import { Text } from "react-native";

const ModalScreen = () => {
  return (
    <ThemedView margin>
      <Link asChild href={"/modal/modal-window"} className="mx-4">
        <Text className="text-light-text dark:text-dark-text my-2 text-xl">
          Open Modal
        </Text>
      </Link>

      <ThemedButton
        onPress={() => router.push("/modal/modal-window")}
        className="mx-4"
      >
        Open Modal
      </ThemedButton>
    </ThemedView>
  );
};
export default ModalScreen;
