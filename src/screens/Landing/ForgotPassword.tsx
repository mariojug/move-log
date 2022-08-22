import { StyleSheet, Text, SafeAreaView, ScrollView, View } from "react-native";
import React, { useState, useEffect } from "react";
import { StackActions } from "@react-navigation/native";

import { useForm } from "react-hook-form";

import { theme } from "../../theme";

import { USERNAME_REGEX } from "../../utils/Signin";

import BackButtonHeader from "../../components/BackButtonHeader";
import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/CustomButton";

import type { LandingStackParamList } from "../../navigation/Landing";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

type ForgotPasswordProps = NativeStackScreenProps<
  LandingStackParamList,
  "ForgotPassword"
>;

const ForgotPassword = ({ navigation }: ForgotPasswordProps) => {
  const { control, handleSubmit } = useForm();

  const handlePressSendLink = () => navigation.navigate("ResetPassword");

  const handlePressBackScreen = () => navigation.dispatch(StackActions.pop(1));

  return (
    <SafeAreaView style={styles.root}>
      <BackButtonHeader onPress={handlePressBackScreen} />
      <ScrollView style={styles.container}>
        <Text style={styles.header}>Forgot password?</Text>
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
            pattern: {
              value: USERNAME_REGEX,
              message:
                "Username is invalid. Use only alphanumeric characters (a-z, A-Z, 0-9)",
            },
          }}
        />
        <CustomButton
          text="Send reset link"
          onPress={handleSubmit(handlePressSendLink)}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default ForgotPassword;

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
