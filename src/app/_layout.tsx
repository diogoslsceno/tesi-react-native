import { Loading } from "@/components/loading"
import { ActivitiesProvider } from "@/contexts/ActivitiesContext"
import {
  Manrope_300Light,
  Manrope_400Regular,
  Manrope_500Medium,
  Manrope_600SemiBold,
  Manrope_700Bold,
  useFonts,
} from "@expo-google-fonts/manrope"
import { Stack } from "expo-router"
import { Text, View } from "react-native"

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    Manrope_300Light,
    Manrope_400Regular,
    Manrope_500Medium,
    Manrope_600SemiBold,
    Manrope_700Bold,
  })

  if (!fontsLoaded) {
    return (
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Loading />
        <Text>Carregando dados...</Text>
      </View>
    )
  }

  return (
    <ActivitiesProvider>
      <Stack
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="index" />
        <Stack.Screen name="(tabs)" />
        <Stack.Screen name="new-activity" />
        <Stack.Screen name="activity-details" />
      </Stack>
    </ActivitiesProvider>
  )
}
