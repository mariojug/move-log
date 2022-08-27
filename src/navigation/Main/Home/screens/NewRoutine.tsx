import {
  StyleSheet,
  TouchableHighlight,
  View,
  SafeAreaView,
  ScrollView,
} from "react-native";
import React, { ReactElement, useState, useEffect } from "react";

import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import type { HomeStackParamList } from "..";
import { StackActions } from "@react-navigation/native";
import { FieldValues, useForm, Control } from "react-hook-form";

import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";

import CustomText from "../../../../components/CustomText";
import CustomPageHeader from "../../../../components/CustomPageHeader";
import CustomInput from "../../../../components/CustomInput";

import styles from "../styles";
import CustomButton from "../../../../components/CustomButton";
import CustomModal from "../../../../components/CustomModal";
import CustomPicker from "../../../../components/CustomPicker";

import { Days } from "../../../../constants/Routines";

type NewSectionsProps = {
  count: number;
  control: Control<any, any>;
};

const NewSections: React.FC<NewSectionsProps> = ({
  count,
  control,
}: NewSectionsProps) => {
  const body = [];
  for (let i = 0; i < count; i++) {
    // TODO: fix controls not updating
    body.push(
      <View key={i}>
        <CustomText style={{ fontSize: 18 }} weight={500}>
          Section {i + 1}
        </CustomText>
        <CustomInput
          name={`section[${i}]name`}
          control={control}
          placeholder="Section name"
        />
        <CustomInput
          name={`section[${i}]notes`}
          control={control}
          placeholder="Notes (optional)"
          multiline
        />
        <CustomPicker
          name={`section[${i}]days`}
          control={control}
          options={Object.values(Days)}
          type="checkbox"
          orientation="vertical"
        />

        <CustomButton
          text="Add workouts to section"
          onPress={() => {}}
          variant="secondary"
        />
        {/* <CustomModal /> */}
      </View>
    );
  }
  return <View style={newRoutineStyles.newSectionsRoot}>{body}</View>;
};

type NewRoutineProps = NativeStackScreenProps<HomeStackParamList, "NewRoutine">;
const NewRoutine: React.FC<NewRoutineProps> = ({ navigation }) => {
  const { control, handleSubmit, watch } = useForm();

  const [numSections, setNumSections] = useState<number>(1);

  const handlePressCreateRoutine = (data: FieldValues) => {
    console.log(data);
  };

  const handlePressAddSection = () => {
    setNumSections(numSections === 10 ? 10 : numSections + 1);
  };

  const handlePressRemoveSection = () => {
    setNumSections(numSections === 1 ? 1 : numSections - 1);
  };

  return (
    <SafeAreaView>
      <ScrollView>
        <CustomPageHeader
          title="Create a routine"
          showBackIcon
          onBackPress={() => navigation.dispatch(StackActions.pop(1))}
        />
        <View style={styles.container}>
          <CustomInput
            name="name"
            control={control}
            placeholder="New routine name"
            autoCapitalize="sentences"
            rules={{ minLength: 1 || "Routine name cannot be empty" }}
          />
          <View style={newRoutineStyles.numSectionsContainer}>
            <CustomText>
              Number of sections (maximum 10): {numSections}
            </CustomText>
            <View style={newRoutineStyles.numSectionsButtonsContainer}>
              {numSections > 1 && (
                <View style={newRoutineStyles.buttonIconContainer}>
                  <TouchableHighlight
                    underlayColor="inherit"
                    onPress={handlePressRemoveSection}
                  >
                    <FontAwesomeIcon name="minus-square" size={20} />
                  </TouchableHighlight>
                </View>
              )}
              <View style={newRoutineStyles.buttonIconContainer}>
                <TouchableHighlight
                  underlayColor="inherit"
                  onPress={handlePressAddSection}
                >
                  <FontAwesomeIcon name="plus-square" size={20} />
                </TouchableHighlight>
              </View>
            </View>
          </View>
          <NewSections count={numSections} control={control} />
          <CustomButton
            text="Create routine"
            onPress={handleSubmit(handlePressCreateRoutine)}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default NewRoutine;

const newRoutineStyles = StyleSheet.create({
  buttonIconContainer: {
    padding: 5,
  },
  numSectionsContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  numSectionsButtonsContainer: {
    flexDirection: "row",
  },
  newSectionsRoot: {
    padding: 10,
  },
});
