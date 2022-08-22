import { StyleSheet, Text, SafeAreaView, ScrollView, View } from "react-native";
import React, { useState, useEffect } from "react";

import { theme } from "../../theme";
import { SharedStyles } from "../../styles";

import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/CustomButton";

import { useForm } from "react-hook-form";

import SocialSigninButtons from "./SocialSigninButtons";

import type { LandingStackParamList } from "../../navigation/Landing";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

type SignInProps = NativeStackScreenProps<LandingStackParamList, "SignIn">;

const SignIn = ({ navigation }: SignInProps) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handlePressSignIn = () => {};

  const handlePressSignUp = () => navigation.navigate("SignUp");

  const handlePressForgotPassword = () => navigation.navigate("ForgotPassword");

  return (
    <SafeAreaView style={styles.root}>
      <ScrollView style={styles.container}>
        <Text style={styles.header}>Move Log</Text>
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
          name="password"
          control={control}
          placeholder="Password"
          secureTextEntry
          rules={{
            required: "Password is required",
            minLength: {
              value: 8,
              message: "Password should be minimum eight (8) characters long",
            },
          }}
        />
        <CustomButton
          text="Sign In"
          onPress={handleSubmit(handlePressSignIn)}
        />
        <CustomButton
          text="Forgot password?"
          onPress={handlePressForgotPassword}
          type="secondary"
        />
        <SocialSigninButtons />
        <CustomButton
          text="Don't have an account? Create one"
          onPress={handlePressSignUp}
          type="secondary"
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;

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
