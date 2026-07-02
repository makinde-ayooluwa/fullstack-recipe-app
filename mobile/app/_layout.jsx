import { Stack } from "expo-router";

export default function RootLayout() {
  return <Stack screenOptions={{ headerShown: true }}>
    <Stack.Screen name="index" options={{ headerStyle: { backgroundColor: "#005712ff" }, headerTintColor: "#fff", headerTitleAlign: "center", title: "Home", headerShown:false }}></Stack.Screen>
  </Stack>;
}
