import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableHighlight,
  SafeAreaView,
} from "react-native";
import React, { useState, useEffect } from "react";

import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import type { HomeStackParamList } from "../../navigation/Home";

import { SharedStyles } from "../../styles";

import FeatherIcon from "react-native-vector-icons/Feather";

type RoutinesProps = NativeStackScreenProps<HomeStackParamList, "Routines">;

const Routines: React.FC<RoutinesProps> = ({ navigation }: RoutinesProps) => {
  const [routineComponents, setRoutineComponents] = useState([]);

  // TODO: make api request to pull all user data containing routines
  useEffect(() => {}, []);

  const handleTouchRoutine = (routineId: string) => {
    console.log(routineId);
    navigation.navigate("Routine", {
      name: "routine name",
      id: routineId,
      sub: "sub string",
    });
  };

  const handleShowCreateRoutine = () => {};
  const handleSubmitCreateRoutine = () => {};

  return (
    <SafeAreaView>
      <View>
        <View style={SharedStyles.pageHeaderView}>
          <Text style={SharedStyles.pageHeaderText}>My routines</Text>
        </View>
        <ScrollView>
          <TouchableHighlight onPress={() => handleTouchRoutine("hello")}>
            <View style={styles.pressWrapper}>
              <Text style={styles.pressText}>Hello</Text>
              <View>
                <FeatherIcon name="chevrons-right" size={30} />
              </View>
            </View>
          </TouchableHighlight>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Routines;

const styles = StyleSheet.create({
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
