import React, { useEffect } from "react";
import { StyleSheet, View, Text } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Icon from "react-native-vector-icons/Ionicons";

import Home from "./Home";
import Settings from "./Settings";

import { theme } from "../../theme";

import { AppStackParamList } from "../../../App";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

type MainProps = NativeStackScreenProps<AppStackParamList, "Main">;

export type MainStackParamList = {
  Home: undefined;
  Settings: undefined;
};

const MainStack = createBottomTabNavigator<MainStackParamList>();

const Main: React.FC<MainProps> = ({ navigation }) => {
  useEffect(
    () =>
      navigation.addListener("beforeRemove", (e) => {
        e.preventDefault();
      }),
    [navigation]
  );
  return (
    <MainStack.Navigator
      initialRouteName="Home"
      screenOptions={{ headerShown: false }}
    >
      <MainStack.Screen
        name="Home"
        component={Home}
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
                Home
              </Text>
            </View>
          ),
          tabBarLabel: "",
        }}
      />
      <MainStack.Screen
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
    </MainStack.Navigator>
  );
};

const styles = StyleSheet.create({
  tabIconView: {
    alignItems: "center",
    justifyContent: "center",
    top: 20,
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

export default Main;
