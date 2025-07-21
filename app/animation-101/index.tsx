import ThemedButton from "@/components/ThemedButton";
import ThemedView from "@/components/ThemedView";
import { Animated, Easing } from "react-native";
import { useAnimation } from "../../hooks/useAnimation";

const Animation101Screen = () => {
  const {
    animatedOpacity,
    animatedTop,
    fadeIn,
    fadeOut,
    startMovingTopPosition,
  } = useAnimation();

  return (
    <ThemedView margin className="justify-center items-center flex-1">
      <Animated.View
        style={{
          width: 150,
          height: 150,
          opacity: animatedOpacity,
          transform: [
            {
              translateY: animatedTop,
            },
          ],
        }}
        className="bg-light-secondary dark:bg-dark-secondary rounded xl"
      />

      <ThemedButton
        className="my-5"
        onPress={() => {
          fadeIn({});
          startMovingTopPosition({ easing: Easing.bounce, duration: 700 });
        }}
      >
        FadeIn
      </ThemedButton>

      <ThemedButton className="my-5" onPress={() => fadeOut({})}>
        FadeOut
      </ThemedButton>
    </ThemedView>
  );
};
export default Animation101Screen;
