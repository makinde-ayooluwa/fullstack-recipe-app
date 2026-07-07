import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomView from "@/components/customView";
export default function RootLayout() {
  return (
    <>
      <StatusBar style="" />
      <CustomView style={{ flex: 1 }}>
        <Stack screenOptions={{ headerShown: false }}>
          <Stack.Screen name="index" options={{ headerStyle: { backgroundColor: "#005712ff" }, headerTintColor: "#fff", headerTitleAlign: "center", title: "Home", headerShown: false }}></Stack.Screen>
          <Stack.Screen name="(auth)" options={{ headerShown: false }}></Stack.Screen>
        </Stack>
      </CustomView>
    </>
  );
}
