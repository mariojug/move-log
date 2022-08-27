import { StyleSheet, Text, View, SafeAreaView, ScrollView } from "react-native";
import React from "react";

import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import type { HomeStackParamList } from "..";

type NewLogProps = NativeStackScreenProps<HomeStackParamList, "NewLog">;

const NewLog = () => {
  return (
    <SafeAreaView>
      <ScrollView></ScrollView>
      <View>
        <Text>NewLog</Text>
      </View>
    </SafeAreaView>
  );
};

export default NewLog;

const styles = StyleSheet.create({});
