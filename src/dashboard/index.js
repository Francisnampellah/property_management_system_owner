import React, { useEffect, useRef } from "react";
import { View, Text, Animated, StyleSheet } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { BottomNavigation, TextInput } from "react-native-paper";
import Home from "./home";
import Input from "./input";
import { width } from "react-native-dimension";
import CustomTabBar from "../../component/costume_tab_bar";
import Top_navigation from "../../component/top_navigation";
import { colors } from "../../constants/color";
import Forms from "./forms/index.js";
import Add_property from "./forms/add_property.js";

const AlbumsRoute = () => <Text>Albums</Text>;
const RecentsRoute = () => <Text>Recents</Text>;
const NotificationsRoute = () => <Text>Notifications</Text>;

const Layout = ({ navigation }) => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {
      key: "music",
      title: "Favorites",
      focusedIcon: "home",
      unfocusedIcon: "home-outline",
    },
    { key: "albums", title: "Albums", focusedIcon: "plus" },
    { key: "recents", title: "Recents", focusedIcon: "history" },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    music: Home,
    albums: Forms,
    recents: RecentsRoute,
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
    <View
      style={{
        display: "flex",
        flex: 1,
        width: "100%",
        backgroundColor: colors.background,
      }}
    >
      <Top_navigation navigation={navigation} />
      <Animated.View style={{ opacity: fadeAnim, flex: 1 }}>
        <BottomNavigation
          navigationState={{ index, routes }}
          onIndexChange={setIndex}
          renderScene={renderScene}
          labeled={false}
          barStyle={{ backgroundColor: colors.background }}
        />
      </Animated.View>
    </View>
  );
};

export default Layout;
