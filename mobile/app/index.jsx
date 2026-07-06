import { Dimensions, ImageBackground, StyleSheet, Text, View, ScrollView } from "react-native";
import BackgroundImage from "@/assets/images/favicon.png";
import ws from "@/config/websocket";
export default function Index() {
  ws.onopen = () => {
    ws.send(JSON.stringify({ type: "join" }))
    
  }
  return (
    <>
      <ImageBackground source={BackgroundImage} style={styles.container} resizeMode="cover">
        {/* <ScrollView> */}
        <View style={styles.innerContent}>
          <Text style={styles.text}>Your Content Here</Text>
        </View>
        {/* </ScrollView> */}
      </ImageBackground>
    </>
  );
}
const { width, height } = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: width,
    height: height,
    justifyContent: "center",
    alignItems: "center"
  }
})