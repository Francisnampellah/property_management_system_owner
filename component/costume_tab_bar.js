// CustomTabBar.js
import React from 'react';
import { View, StyleSheet } from 'react-native';
import { BottomNavigation, Text } from 'react-native-paper';
import { Entypo } from '@expo/vector-icons';

const CustomTabBar = ({ navigationState, onIndexChange }) => {
  return (
    <View style={styles.container}>
      {navigationState.routes.map((route, index) => {
        const isFocused = navigationState.index === index;
        const icon = route.focusedIcon ? route.focusedIcon : route.icon;

        return (
          <View key={route.key} style={styles.tab}>
            <Entypo
              name={icon}
              size={24}
              color={isFocused ? 'blue' : 'gray'}
              style={isFocused ? styles.selectedIcon : styles.icon}
              onPress={() => onIndexChange(index)}
            />
          </View>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 56,
    backgroundColor: 'white',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  tab: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    padding: 10,
  },
  selectedIcon: {
    backgroundColor: 'lightblue',
    borderRadius: 50,
    padding: 10,
  },
});

export default CustomTabBar;
