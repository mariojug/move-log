import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableHighlight,
  SafeAreaView,
} from "react-native";
import React, { useState, useEffect } from "react";
import FeatherIcon from "react-native-vector-icons/Feather";

import { API, graphqlOperation } from "aws-amplify";

import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import type { HomeStackParamList } from "..";

import { useUser } from "../../context/UserId";

import styles from "../styles";

type RoutinesProps = NativeStackScreenProps<HomeStackParamList, "Routines">;

const Routines: React.FC<RoutinesProps> = ({ navigation }: RoutinesProps) => {
  const [routineComponents, setRoutineComponents] = useState([
    <TouchableHighlight key="test" onPress={() => handleTouchRoutine("hello")}>
      <View style={routinesStyles.pressWrapper}>
        <Text style={routinesStyles.pressText}>Hello</Text>
        <View>
          <FeatherIcon name="chevrons-right" size={30} />
        </View>
      </View>
    </TouchableHighlight>,
  ]);

  const { userId } = useUser();

  // TODO: make api request to pull all user data containing routines
  useEffect(() => {
    console.log(userId);
  }, [userId]);

  const handleTouchRoutine = (routineId: string) => {
    console.log(routineId);
    navigation.navigate("Routine", {
      name: "routine name",
      id: routineId,
    });
  };

  const handleShowCreateRoutine = () => {};
  const handleSubmitCreateRoutine = () => {};

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.pageHeaderView}>
          <Text style={styles.pageHeaderText}>My routines</Text>
        </View>
        <View>{routineComponents}</View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Routines;

const routinesStyles = StyleSheet.create({
  pressWrapper: {
    backgroundColor: "#eee",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 15,
    paddingHorizontal: 10,
  },
  pressText: {
    fontSize: 18,
  },
});
