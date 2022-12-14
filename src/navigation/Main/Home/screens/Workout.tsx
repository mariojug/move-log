import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import React, { useState, useEffect } from "react";

import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import type { HomeStackParamList } from "..";

import styles from "..";
import CustomText from "../../../../components/CustomText";

type RoutinesProps = NativeStackScreenProps<HomeStackParamList, "Workout">;

const Workout = () => {
  // TODO: make api request to pull workout data
  useEffect(() => {}, []);

  const handleShowEditWorkoutLog = () => {};
  const handleSubmitEditWorkoutLog = () => {};

  const handleShowAddWorkoutLog = () => {};
  const handleSubmitAddWorkoutLog = () => {};

  const handleShowDeleteWorkout = () => {};
  const handleSubmitDeleteWorkout = () => {};

  return (
    <SafeAreaView>
      {/* TODO: show workout notes, most recent date performed, 
        most recent setCount, repCounts, duration, weight - toggle between repCounts, duration
         */}
      {/* TODO: show logs (descending order) with:
        setCount, setCount, repCounts, duration, weight  */}
      <CustomText>Workout</CustomText>
    </SafeAreaView>
  );
};

export default Workout;

const workoutStyles = StyleSheet.create({});
