import { StyleSheet, Text, View, SafeAreaView, ScrollView } from "react-native";
import React, { useState, useEffect } from "react";

import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import type { HomeStackParamList } from "..";

import { theme } from "../../../../theme";
import styles from "../styles";

type RoutineProps = NativeStackScreenProps<HomeStackParamList, "Routine">;

const Routine: React.FC<RoutineProps> = ({ navigation, route }) => {
  const params = route.params;
  console.log(params.id, params.sub, params.name);

  const [workoutComponents, setWorkoutComponents] = useState([]);

  // TODO: make an api request to pull all routine data
  useEffect(() => {}, []);

  const handleShowEditRoutine = () => {};
  const handleSubmitEditRoutine = () => {};

  const handleShowDeleteRoutine = () => {};
  const handleSubmitDeleteRoutine = () => {};

  const handleShowAddWorkout = () => {};
  const handleSubmitAddWorkout = () => {};

  const handleShowDeleteWorkout = () => {};
  const handleSubmitDeleteWorkout = () => {};

  return (
    <SafeAreaView>
      <View style={styles.pageHeaderView}>
        <Text style={styles.pageHeaderText}>{params.name}</Text>
      </View>
      {/* TODO: show routine notes, day(s) when it should be performed */}
      {/* TODO: separate workout components by sections */}
      {/* TODO: show most recent workout data (set count, rep count, weight)
            in each workout component
      */}
      <ScrollView>{workoutComponents && workoutComponents}</ScrollView>
    </SafeAreaView>
  );
};

export default Routine;

const routineStyles = StyleSheet.create({});
