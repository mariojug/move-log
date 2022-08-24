import { Text, SafeAreaView, ScrollView, Alert } from "react-native";
import React from "react";
import { StackActions } from "@react-navigation/native";
import { useForm } from "react-hook-form";

import { Auth } from "aws-amplify";

import { UsernameRegex } from "../../../regex";

import BackButtonHeader from "../../../components/BackButtonHeader";
import CustomInput from "../../../components/CustomInput";
import CustomButton from "../../../components/CustomButton";

import styles from "../styles";

import type { LandingStackParamList } from "..";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

type ForgotPasswordProps = NativeStackScreenProps<
  LandingStackParamList,
  "ForgotPassword"
>;

const ForgotPassword = ({ navigation }: ForgotPasswordProps) => {
  const { control, handleSubmit } = useForm();

  const handlePressSendLink = () => navigation.navigate("ResetPassword");

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
              value: UsernameRegex,
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
