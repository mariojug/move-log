import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Icon from "react-native-vector-icons/Ionicons";

import Workouts from "./Workouts";
import Settings from "./Settings";

import { theme } from "../theme";

type TabParamList = {
  Workouts: undefined;
  Settings: undefined;
};

const Tab = createBottomTabNavigator<TabParamList>();

const BottomNavbar: React.FC = () => {
  return (
    <Tab.Navigator
      initialRouteName="Workouts"
      screenOptions={{ headerShown: false }}
    >
      <Tab.Screen
        name="Workouts"
        component={Workouts}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.tabIconView}>
              <Icon
                name="barbell-outline"
                size={30}
                color={focused ? theme.focusColor : theme.blurColor}
              />
              <Text
                style={focused ? styles.tabLabelFocus : styles.tabLabelBlur}
              >
                Workouts
              </Text>
            </View>
          ),
          tabBarLabel: "",
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.tabIconView}>
              <Icon
                name="settings-sharp"
                size={30}
                color={focused ? theme.focusColor : theme.blurColor}
              />
              <Text
                style={focused ? styles.tabLabelFocus : styles.tabLabelBlur}
              >
                Settings
              </Text>
            </View>
          ),
          tabBarLabel: "",
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabIconView: {
    alignItems: "center",
    justifyContent: "center",
    top: 10,
  },
  tabLabelFocus: {
    color: theme.focusColor,
    fontSize: 14,
    fontWeight: "bold",
  },
  tabLabelBlur: {
    color: theme.blurColor,
    fontSize: 14,
  },
});

export default BottomNavbar;
