import { StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";

import {
  createNativeStackNavigator,
  NativeStackScreenProps,
} from "@react-navigation/native-stack";

import { MainStackParamList } from "..";

import Routines from "./screens/Routines";
import Routine from "./screens/Routine";
import Workout from "./screens/Workout";
import NewRoutine from "./screens/NewRoutine";
import NewWorkout from "./screens/NewWorkout";
import NewLog from "./screens/NewLog";

export type HomeStackParamList = {
  Routines: undefined;
  Routine: {
    name: string;
    id: string;
  };
  Workout: undefined;
  NewRoutine: undefined;
  NewWorkout: undefined;
  NewLog: undefined;
};

const HomeStack = createNativeStackNavigator<HomeStackParamList>();

type HomeProps = NativeStackScreenProps<MainStackParamList, "Home">;

// TODO: add logic to pull all routines belonging to a user and display each as link
// TODO: add logic to create routines: name, notes, days of week (optional)
// TODO: add logic to delete routines
const Home: React.FC<HomeProps> = ({ route }: HomeProps) => {
  return (
    <HomeStack.Navigator
      initialRouteName="Routines"
      screenOptions={{ headerShown: false }}
    >
      <HomeStack.Screen name="Routines" component={Routines} />
      <HomeStack.Screen name="Routine" component={Routine} />
      <HomeStack.Screen name="Workout" component={Workout} />
      <HomeStack.Screen name="NewRoutine" component={NewRoutine} />
      <HomeStack.Screen name="NewWorkout" component={NewWorkout} />
      <HomeStack.Screen name="NewLog" component={NewLog} />
    </HomeStack.Navigator>
  );
};

export default Home;

const styles = StyleSheet.create({});
