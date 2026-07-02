import { Stack } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

export default function RootLayout() {
  return (
    <>
      <SafeAreaView style={{flex:1}}>
        <Stack screenOptions={{ headerShown: true }}>
          <Stack.Screen name="index" options={{ headerStyle: { backgroundColor: "#005712ff" }, headerTintColor: "#fff", headerTitleAlign: "center", title: "Home", headerShown: false }}></Stack.Screen>
        </Stack>
      </SafeAreaView>
    </>
  );
}
