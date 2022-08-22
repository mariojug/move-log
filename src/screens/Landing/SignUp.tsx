import { StyleSheet, Text, SafeAreaView, ScrollView, View } from "react-native";
import React, { useState, useEffect } from "react";
import { StackActions } from "@react-navigation/native";

import { useForm } from "react-hook-form";

import { theme } from "../../theme";
import { SharedStyles } from "../../styles";

import SocialSigninButtons from "./SocialSigninButtons";

import BackButtonHeader from "../../components/BackButtonHeader";
import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/CustomButton";

import {
  EMAIL_REGEX,
  USERNAME_REGEX,
  NUMBER_REGEX,
  passwordIsValid,
} from "../../utils/Signin";

import type { LandingStackParamList } from "../../navigation/Landing";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

type SignUpProps = NativeStackScreenProps<LandingStackParamList, "SignUp">;

const SignUp = ({ navigation }: SignUpProps) => {
  const { control, handleSubmit, watch } = useForm();

  // TODO: implement form validation
  const handlePressSignUp = () => navigation.navigate("ConfirmSignUp");

  const handlePressTerms = () => {};

  const handlePressPrivacy = () => {};

  const handlePressBackScreen = () => navigation.dispatch(StackActions.pop(1));

  return (
    <SafeAreaView style={styles.root}>
      <BackButtonHeader onPress={handlePressBackScreen} />
      <ScrollView style={styles.container}>
        <Text style={styles.header}>Create an account</Text>
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
        <CustomInput
          name="email"
          control={control}
          placeholder="Email"
          autoCapitalize="none"
          secureTextEntry={false}
          rules={{
            required: "Email is required",
            pattern: { value: EMAIL_REGEX, message: "Email is invalid" },
          }}
        />
        <CustomInput
          name="phoneNumber"
          control={control}
          placeholder="Phone number"
          autoCapitalize="none"
          secureTextEntry={false}
          rules={{
            required: "Phone number is required",
            minLength: {
              value: 10,
              message: "Phone number should have at least 10 digits",
            },
            pattern: {
              value: NUMBER_REGEX,
              message: "Phone number should contain digits (0-9) only",
            },
          }}
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
            validate: {
              chars: (value: string) =>
                passwordIsValid(value) &&
                "Passwords must contain a mix of lowercase letters, uppercase letters, and special characters ( !\"#$%&'()*+,-./:;<=>?@[]^_`{|}~)",
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
        <View style={styles.container}>
          <Text>
            By signing up, you confirm that you accept our{" "}
            <Text style={SharedStyles.textLink} onPress={handlePressTerms}>
              Terms of Use
            </Text>{" "}
            and{" "}
            <Text style={SharedStyles.textLink} onPress={handlePressPrivacy}>
              Privacy Policy
            </Text>
            .
          </Text>
        </View>
        <CustomButton
          text="Sign Up"
          onPress={handleSubmit(handlePressSignUp)}
        />

        <SocialSigninButtons />
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignUp;

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
});
