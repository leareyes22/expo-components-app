import ThemedText from "@/components/ThemedText";
import ThemedView from "@/components/ThemedView";
import { useThemeColor } from "@/hooks/useThemeColor";
import { useState } from "react";
import { RefreshControl, ScrollView } from "react-native";

const PullToRefreshScreen = () => {
  const primaryColor = useThemeColor({}, "primary");
  const backgroundColor = useThemeColor(
    {
      dark: "black",
      light: "white",
    },
    "background"
  );

  const [isRefreshing, setIsRefreshing] = useState(false);

  const onRefresh = async () => {
    setIsRefreshing(true);

    setTimeout(() => {
      setIsRefreshing(false);
    }, 3000);
  };

  return (
    <ScrollView
      refreshControl={
        <RefreshControl
          onRefresh={onRefresh}
          refreshing={isRefreshing}
          colors={[primaryColor, "red", "orange", "green"]}
          progressBackgroundColor={backgroundColor}
        />
      }
    >
      <ThemedView margin className="flex-1 justify-start items-start">
        <ThemedText type="h1">
          {isRefreshing ? "Refreshing..." : "Pull to Refresh Screen"}
        </ThemedText>
      </ThemedView>
    </ScrollView>
  );
};
export default PullToRefreshScreen;
