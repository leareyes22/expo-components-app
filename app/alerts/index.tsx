import ThemedButton from "@/components/ThemedButton";
import ThemedView from "@/components/ThemedView";
import { useAlert } from "@/hooks/useAlerts";
import { View } from "react-native";

const AlertsScreen = () => {
  const { createTwoButtonAlert, createThreeButtonAlert } = useAlert();

  return (
    <ThemedView margin>
      <View className="mx-5 my-5 flex-1 items-center justify-center">
        <ThemedButton
          className="mb-5"
          onPress={() =>
            createTwoButtonAlert({
              title: "This is a 2-Button Alert",
              message: "2-Button Alert Message",
              onCancelPress: () => console.log("Cancel Pressed"),
              onOkPress: () => console.log("Ok Pressed"),
            })
          }
        >
          2 Button Alert
        </ThemedButton>
        <ThemedButton
          onPress={() =>
            createThreeButtonAlert({
              title: "This is a 3-Button Alert",
              message: "3-Button Alert Message",
              onCancelPress: () => console.log("Cancel Pressed"),
              onOkPress: () => console.log("Ok Pressed"),
              onOptionalPress: () => console.log("Ask me later pressed"),
            })
          }
        >
          3 Button Alert
        </ThemedButton>
      </View>
    </ThemedView>
  );
};
export default AlertsScreen;
