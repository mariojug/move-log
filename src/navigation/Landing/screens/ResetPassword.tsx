import { Text, SafeAreaView, ScrollView, Alert } from "react-native";
import React from "react";
import { StackActions } from "@react-navigation/native";
import { FieldValues, useForm } from "react-hook-form";

import { Auth } from "aws-amplify";

import styles from "../styles";

import BackButtonHeader from "../../../components/BackButtonHeader";
import CustomInput from "../../../components/CustomInput";
import CustomButton from "../../../components/CustomButton";

import { PasswordRegex } from "../../../regex";

import type { LandingStackParamList } from "..";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

type ResetPasswordProps = NativeStackScreenProps<
  LandingStackParamList,
  "ResetPassword"
>;

const ResetPassword = ({ route, navigation }: ResetPasswordProps) => {
  const { control, handleSubmit, watch } = useForm({
    defaultValues: { username: route.params.username, password: "" },
  });

  const handlePressSubmit = async (data: FieldValues) => {
    try {
      const response = await Auth.forgotPasswordSubmit(
        data.username,
        data.code,
        data.password
      );
      Alert.alert(
        "Success",
        "You have successfully reset the password for your account"
      );
      setTimeout(() => navigation.dispatch(StackActions.popToTop()), 2000);
    } catch (err: any) {
      Alert.alert("Error", err.message);
    }
  };

  return (
    <SafeAreaView style={styles.root}>
      <BackButtonHeader
        onPress={() => navigation.dispatch(StackActions.pop(1))}
      />
      <ScrollView style={styles.container}>
        <Text style={styles.header}>Forgot password?</Text>
        <CustomInput
          name="username"
          control={control}
          placeholder="Username"
          autoCapitalize="none"
          secureTextEntry={false}
          rules={{ required: "Username is required" }}
        />
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
          placeholder="Password"
          secureTextEntry
          rules={{
            required: "Password is required",
            minLength: {
              value: 8,
              message: "Password should be at least eight (8) characters long",
            },
            pattern: {
              value: PasswordRegex,
              message:
                "Password must contain a mix of lowercase letters, uppercase letters, and special characters (#?!@$%^&*-)",
            },
          }}
        />
        <CustomInput
          name="confirmPassword"
          control={control}
          placeholder="Confirm password"
          secureTextEntry
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
