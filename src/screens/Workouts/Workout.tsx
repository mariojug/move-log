import { StyleSheet, Text, View } from "react-native";
import React, { useState, useEffect } from "react";

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
    <View>
      {/* TODO: show workout notes, most recent date performed, 
        most recent setCount, repCounts, duration, weight - toggle between repCounts, duration
         */}
      {/* TODO: show logs (descending order) with:
        setCount, setCount, repCounts, duration, weight  */}
      <Text>Workout</Text>
    </View>
  );
};

export default Workout;

const styles = StyleSheet.create({});
