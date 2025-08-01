import { Image } from "expo-image"
import { StyleSheet } from "react-native"

import ParallaxScrollView from "@/components/ParallaxScrollView"
import { ThemedText } from "@/components/ThemedText"
import { ThemedView } from "@/components/ThemedView"
import { useFeatureFlag, useFeatureFlags } from "posthog-react-native"

export default function HomeScreen() {
  const showFlaggedFeature = useFeatureFlag("my-flag-debug-1")
  const featureFlags = useFeatureFlags()

  console.log(
    "DEBUG HomeScreen RENDERED",
    JSON.stringify({ showFlaggedFeature, featureFlags }, null, 2)
  )

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#A1CEDC", dark: "#1D3D47" }}
      headerImage={
        <Image
          source={require("@/assets/images/partial-react-logo.png")}
          style={styles.reactLogo}
        />
      }
    >
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">PostHog flag value:</ThemedText>
        <ThemedText>{showFlaggedFeature?.toString()}</ThemedText>
      </ThemedView>
    </ParallaxScrollView>
  )
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
})

