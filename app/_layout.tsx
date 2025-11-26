import { Stack } from "expo-router";
import { MD3DarkTheme as DefaultTheme, Provider as PaperProvider } from "react-native-paper";

export default function Layout() {
  return (
    <PaperProvider theme={DefaultTheme}>
      <Stack screenOptions={{ headerShown: false }} />
    </PaperProvider>
  )
}