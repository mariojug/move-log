import { StyleSheet, Text, SafeAreaView, ScrollView, View } from "react-native";
import React, { useState, useEffect } from "react";

import { theme } from "../../theme";

import { useForm } from "react-hook-form";

import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/CustomButton";

import type { LandingStackParamList } from "../../navigation/Landing";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

type ConfirmSignUpProps = NativeStackScreenProps<
  LandingStackParamList,
  "ConfirmSignUp"
>;

const ConfirmSignUp = ({ navigation }: ConfirmSignUpProps) => {
  const { control, handleSubmit } = useForm();

  const handlePressConfirm = () => {};

  return (
    <SafeAreaView style={styles.root}>
      <ScrollView style={styles.container}>
        <Text style={styles.header}>Confirm Sign Up</Text>
        <CustomInput
          name="username"
          control={control}
          placeholder="Username"
          autoCapitalize="none"
          secureTextEntry={false}
          rules={{
            required: "Username is required",
            minLength: {
              value: 3,
              message: "Username should be at least three (3) characters long",
            },
            maxLength: {
              value: 24,
              message:
                "Username should be at most twenty-four (24) characters long",
            },
          }}
        />
        <CustomInput
          name="code"
          control={control}
          placeholder="Confirmation code"
          autoCapitalize="none"
          secureTextEntry={false}
          rules={{ required: "Confirmation code is required" }}
        />
        <CustomButton
          text="Confirm account"
          onPress={handleSubmit(handlePressConfirm)}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default ConfirmSignUp;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: theme.screenBg,
    height: "100%",
    alignItems: "center",
  },
  container: { padding: 10 },
  header: {
    paddingHorizontal: 15,
    paddingVertical: 25,
    fontSize: 36,
    textAlign: "center",
    fontWeight: "bold",
  },
  link: {
    color: theme.textLinkColor,
  },
});
