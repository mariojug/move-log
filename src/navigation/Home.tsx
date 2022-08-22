import { StyleSheet } from "react-native";
import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Routines from "../screens/Home/Routines";
import Routine from "../screens/Home/Routine";
import Workout from "../screens/Home/Workout";

export type HomeStackParamList = {
  Routines: undefined;
  Routine: {
    name: string;
    id: string;
    sub: string;
  };
  Workout: undefined;
};

const HomeStack = createNativeStackNavigator<HomeStackParamList>();

// TODO: add logic to pull all routines belonging to a user and display each as link
// TODO: add logic to create routines: name, notes, days of week (optional)
// TODO: add logic to delete routines
const Home: React.FC = () => {
  return (
    <HomeStack.Navigator
      initialRouteName="Routines"
      screenOptions={{ headerShown: false }}
    >
      <HomeStack.Screen name="Routines" component={Routines} />
      <HomeStack.Screen name="Routine" component={Routine} />
      <HomeStack.Screen name="Workout" component={Workout} />
    </HomeStack.Navigator>
  );
};

export default Home;

const styles = StyleSheet.create({});
