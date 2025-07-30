/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useRef } from "react";
import { Animated, StyleSheet, View } from "react-native";

const WaveformVisualizer = ({ playing }: { playing: boolean }) => {
  const scale = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    if (playing) {
      Animated.loop(
        Animated.sequence([
          Animated.timing(scale, {
            toValue: 1.4,
            duration: 300,
            useNativeDriver: true,
          }),
          Animated.timing(scale, {
            toValue: 1,
            duration: 300,
            useNativeDriver: true,
          }),
        ])
      ).start();
    } else {
      scale.stopAnimation();
      scale.setValue(1);
    }
  }, [playing]);

  return (
    <View style={styles.container}>
      {Array.from({ length: 50 }).map((_, i) => (
        <Animated.View
          key={i}
          style={[
            styles.bar,
            { transform: [{ scaleY: scale }], opacity: i % 2 === 0 ? 1 : 0.5 },
          ]}
        />
      ))}
    </View>
  );
};

export default WaveformVisualizer;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    gap: 2,
    alignItems: "center",
    marginTop: 20,
  },
  bar: {
    width: 2,
    height: 20,
    backgroundColor: "#6200EE",
    borderRadius: 1,
  },
});
