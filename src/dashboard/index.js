import React, { useEffect, useRef } from "react";
import { View, Text, Animated, StyleSheet } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { BottomNavigation, TextInput } from "react-native-paper";
import Home from "./home";
import Input from "./input";
import { width } from "react-native-dimension";
import CustomTabBar from "../../component/costume_tab_bar";
import Top_navigation from "../../component/top_navigation";

const AlbumsRoute = () => <Text>Albums</Text>;
const RecentsRoute = () => <Text>Recents</Text>;
const NotificationsRoute = () => <Text>Notifications</Text>;

const Layout = ({ navigation }) => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {
      key: "music",
      title: "Favorites",
      focusedIcon: "heart",
      unfocusedIcon: "heart-outline",
    },
    { key: "albums", title: "Albums", focusedIcon: "album" },
    { key: "recents", title: "Recents", focusedIcon: "history" },
    {
      key: "notifications",
      title: "Notifications",
      focusedIcon: "bell",
      unfocusedIcon: "bell-outline",
    },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    music: Home,
    albums: Input,
    recents: RecentsRoute,
    notifications: NotificationsRoute,
  });

  // Animated value for transition
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start();
  }, [index]);

  return (
    <View style={{ display: "flex", flex: 1, width: "100%" }}>
      <Top_navigation />
      <Animated.View style={{ opacity: fadeAnim, flex: 1 }}>
        <BottomNavigation
          navigationState={{ index, routes }}
          onIndexChange={setIndex}
          renderScene={renderScene}
          labeled={false}
        />
      </Animated.View>
    </View>
  );
};

export default Layout;
