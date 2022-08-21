import { StyleSheet } from "react-native";
import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Routines from "../screens/Workouts/Routines";
import Routine from "../screens/Workouts/Routine";
import Workout from "../screens/Workouts/Workout";

export type WorkoutsStackParamList = {
  Routines: undefined;
  Routine: {
    name: string;
    id: string;
    sub: string;
  };
  Workout: undefined;
};

const WorkoutsStack = createNativeStackNavigator<WorkoutsStackParamList>();

// TODO: add logic to pull all routines belonging to a user and display each as link
// TODO: add logic to create routines: name, notes, days of week (optional)
// TODO: add logic to delete routines
const Workouts: React.FC = () => {
  return (
    <WorkoutsStack.Navigator
      initialRouteName="Routines"
      screenOptions={{ headerShown: false }}
    >
      <WorkoutsStack.Screen name="Routines" component={Routines} />
      <WorkoutsStack.Screen name="Routine" component={Routine} />
      <WorkoutsStack.Screen name="Workout" component={Workout} />
    </WorkoutsStack.Navigator>
  );
};

export default Workouts;

const styles = StyleSheet.create({});
