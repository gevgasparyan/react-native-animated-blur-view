import React, { useRef, useEffect } from "react";

import { StyleSheet, View, Text } from "react-native";
import AnimatedBlurView, {
  AnimatedBlurViewMethods,
} from "react-native-animated-blur-view";

export default function App() {
  const blurViewRef = useRef<AnimatedBlurViewMethods>();

  useEffect(() => {
    blurViewRef.current?.start(true);
  }, []);

  return (
    <View style={styles.container}>
      <Text>React Native Animated Blur View</Text>
      <AnimatedBlurView
        ref={blurViewRef}
        style={StyleSheet.absoluteFillObject}
        blurStart={10}
        blurEnd={20}
        animationDuration={200}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
