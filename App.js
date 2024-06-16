import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import { useFonts } from "expo-font";
import HomeScreen from "./src/dashboard";
import Source from "./src";
import { PaperProvider } from "react-native-paper";

export default function App() {
  const [fontsLoaded] = useFonts({
    TwemojiMozilla: require("./assets/font/Poppins-Bold.ttf"),
    "Lato-Bold": require("./assets/font/Lato-Bold.ttf"),
    "Josefin-Bold": require("./assets/font/JosefinSans-Bold.ttf"),
    "Poppins-Regular": require("./assets/font/Poppins-Regular.ttf"),
    "Poppins-Bold": require("./assets/font/Poppins-Bold.ttf"),
  });

  if (!fontsLoaded) {
    return (
      <View className="flex-1 justify-around flex-col">
        <Text>text</Text>
      </View>
    );
  }
  return (
    <PaperProvider>
      <View
        style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        className="bg-red-400"
      >
        <Source />
      </View>
    </PaperProvider>
  );
}
