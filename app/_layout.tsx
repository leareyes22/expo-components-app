import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import "react-native-reanimated";

import { useThemeColor } from "@/hooks/useThemeColor";

import { allRoutes } from "@/constants/Routes";
import { ThemeChangeProvider } from "@/context/ThemeChangesContext";
import "./global.css";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const backgroundColor = useThemeColor({}, "background");

  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <GestureHandlerRootView style={{ backgroundColor, flex: 1 }}>
      <ThemeChangeProvider>
        <Stack
          screenOptions={{
            headerShadowVisible: false,
            contentStyle: {
              backgroundColor,
            },
            headerStyle: {
              backgroundColor,
            },
          }}
        >
          <Stack.Screen
            name="index"
            options={{
              title: "",
            }}
          />
          {allRoutes.map((route) => (
            <Stack.Screen
              key={route.name}
              name={route.name}
              options={{
                title: route.title,
                headerShown: !route.title.includes("Slides"),
              }}
            />
          ))}
        </Stack>
      </ThemeChangeProvider>
    </GestureHandlerRootView>
  );
}
