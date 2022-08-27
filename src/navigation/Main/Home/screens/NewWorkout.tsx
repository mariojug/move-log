import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";

import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import type { HomeStackParamList } from "..";
import { SafeAreaView } from "react-native-safe-area-context";

type NewWorkoutProps = NativeStackScreenProps<HomeStackParamList, "NewWorkout">;

const NewWorkout = () => {
  return (
    <SafeAreaView>
      <ScrollView></ScrollView>
      <View>
        <Text>NewWorkout</Text>
      </View>
    </SafeAreaView>
  );
};

export default NewWorkout;

const styles = StyleSheet.create({});
