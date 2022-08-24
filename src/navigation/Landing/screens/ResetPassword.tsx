import { Text, SafeAreaView, ScrollView } from "react-native";
import React from "react";
import { StackActions } from "@react-navigation/native";

import { useForm } from "react-hook-form";

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

const ResetPassword = ({ navigation }: ResetPasswordProps) => {
  const { control, handleSubmit, watch } = useForm();

  const handlePressSubmit = () => {};

  return (
    <SafeAreaView style={styles.root}>
      <BackButtonHeader
        onPress={() => navigation.dispatch(StackActions.pop(1))}
      />
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
            pattern: {
              value: PasswordRegex,
              message:
                "Passwords must contain a mix of lowercase letters, uppercase letters, and special characters (#?!@$%^&*-)",
            },
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
