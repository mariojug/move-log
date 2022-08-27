import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableHighlight,
  SafeAreaView,
} from "react-native";
import React, { useState, useEffect, ReactElement } from "react";
import FeatherIcon from "react-native-vector-icons/Feather";

import { API, graphqlOperation } from "aws-amplify";

import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import type { HomeStackParamList } from "..";

import { useUser } from "../../context/UserId";

import CustomButton from "../../../../components/CustomButton";
import CustomHr from "../../../../components/CustomHr";
import CustomModal from "../../../../components/CustomModal";
import CustomClickableBar from "../../../../components/CustomClickableBar";
import CustomInput from "../../../../components/CustomInput";

import styles from "../styles";
import CustomPageHeader from "../../../../components/CustomPageHeader";

type RoutinesProps = NativeStackScreenProps<HomeStackParamList, "Routines">;

const Routines: React.FC<RoutinesProps> = ({ navigation }: RoutinesProps) => {
  const [routineComponents, setRoutineComponents] = useState([
    <CustomClickableBar
      title="hello"
      subtitle="world"
      onPress={() => {}}
      iconName="chevron-forward"
      key="1"
    />,
    <CustomClickableBar
      title="hello"
      subtitle="world"
      onPress={() => {}}
      iconName="chevron-forward"
      key="12"
    />,
    <CustomClickableBar
      title="hello"
      subtitle="world"
      onPress={() => {}}
      iconName="chevron-forward"
      key="13"
    />,
    <CustomClickableBar
      title="hello"
      subtitle="world"
      onPress={() => {}}
      iconName="chevron-forward"
      key="14"
    />,
    <CustomClickableBar
      title="hello"
      subtitle="world"
      onPress={() => {}}
      iconName="chevron-forward"
      key="15"
    />,
    <CustomClickableBar
      title="hello"
      subtitle="world"
      onPress={() => {}}
      iconName="chevron-forward"
      key="2"
    />,
    <CustomClickableBar
      title="hello"
      subtitle="world"
      onPress={() => {}}
      iconName="chevron-forward"
      key="22"
    />,
    <CustomClickableBar
      title="hello"
      subtitle="world"
      onPress={() => {}}
      iconName="chevron-forward"
      key="23"
    />,
    <CustomClickableBar
      title="hello"
      subtitle="world"
      onPress={() => {}}
      iconName="chevron-forward"
      key="24"
    />,
    <CustomClickableBar
      title="hello"
      subtitle="world"
      onPress={() => {}}
      iconName="chevron-forward"
      key="25"
    />,
  ]);

  const { userId } = useUser();

  // TODO: make api request to pull all user data containing routines
  useEffect(() => {
    console.log(userId);
  }, [userId]);

  const handlePressNewRoutine = () => navigation.navigate("NewRoutine");

  const handlePressRoutine = (routineId: string) => {
    console.log(routineId);
    navigation.navigate("Routine", {
      name: "routine name",
      id: routineId,
    });
  };

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.root}>
          {/* <View style={styles.pageHeaderView}>
            <CustomText style={styles.pageHeaderText} weight={600}>
              Routines
            </CustomText>
          </View> */}
          <CustomPageHeader
            title="Routines"
            // showBackIcon
            forwardIconLibrary="Feather"
            forwardIconName="plus-square"
            onForwardPress={handlePressNewRoutine}
          />
          <View style={styles.container}>{routineComponents}</View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Routines;
