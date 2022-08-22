import { StyleSheet, Text, SafeAreaView, ScrollView, View } from "react-native";
import React, { useState, useEffect } from "react";
import { StackActions } from "@react-navigation/native";

import { useForm } from "react-hook-form";

import { theme } from "../../theme";

import BackButtonHeader from "../../components/BackButtonHeader";
import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/CustomButton";

import { EMAIL_REGEX, passwordIsValid } from "../../utils/Signin";

import type { LandingStackParamList } from "../../navigation/Landing";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

type ResetPasswordProps = NativeStackScreenProps<
  LandingStackParamList,
  "ResetPassword"
>;

const ResetPassword = ({ navigation }: ResetPasswordProps) => {
  const { control, handleSubmit, watch } = useForm();

  const handlePressSubmit = () => {};

  const handlePressBackScreen = () => navigation.dispatch(StackActions.pop(1));

  return (
    <SafeAreaView style={styles.root}>
      <BackButtonHeader onPress={handlePressBackScreen} />
      <ScrollView style={styles.container}>
        <Text style={styles.header}>Forgot password?</Text>
        <CustomInput
          name="code"
          control={control}
          placeholder="Confirmation code"
          autoCapitalize="none"
          secureTextEntry={false}
          rules={{ required: "Confirmation code is required" }}
        />
        <CustomInput
          name="password"
          control={control}
          placeholder="New password"
          autoCapitalize="none"
          secureTextEntry={false}
          rules={{
            required: "Password is required",
            minLength: {
              value: 8,
              message: "Password should be at least eight (8) characters long",
            },
            validate: (value: string) =>
              passwordIsValid(value) ||
              "Passwords must contain a mix of lowercase letters, uppercase letters, and special characters ( !\"#$%&'()*+,-./:;<=>?@[]^_`{|}~)",
          }}
        />
        <CustomInput
          name="confirmPassword"
          control={control}
          placeholder="Confirm new password"
          autoCapitalize="none"
          secureTextEntry={false}
          rules={{
            required: "Password is required",
            minLength: {
              value: 8,
              message: "Password should be at least eight (8) characters long",
            },
            validate: (value: string) =>
              value === watch("password") || "Passwords do not match",
          }}
        />
        <CustomButton text="Submit" onPress={handleSubmit(handlePressSubmit)} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default ResetPassword;

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
