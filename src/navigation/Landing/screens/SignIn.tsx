import { Text, SafeAreaView, ScrollView, Alert } from "react-native";
import React, { useState } from "react";
import { useForm, FieldValues } from "react-hook-form";

import { Auth } from "aws-amplify";

import CustomInput from "../../../components/CustomInput";
import CustomButton from "../../../components/CustomButton";

import SocialSignInButtons from "./SocialSignInButtons";

import { UsernameRegex } from "../../../regex";
import type { LandingStackParamList } from "../../../navigation/Landing";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

import styles from "../styles";
import { StackActions } from "@react-navigation/native";
import CustomText from "../../../components/CustomText";

type SignInProps = NativeStackScreenProps<LandingStackParamList, "SignIn">;

const SignIn = ({ navigation }: SignInProps) => {
  const { control, handleSubmit } = useForm<FieldValues>();

  const [loading, setLoading] = useState(false);

  const handlePressSignIn = async (data: FieldValues) => {
    if (loading) return;

    setLoading(true);
    try {
      const response = await Auth.signIn(data.username, data.password);
      navigation.getParent()?.dispatch(StackActions.replace("Main"));
    } catch (err: any) {
      console.log("error", err, err.code);
      Alert.alert("Login error", err.message);
    }
    setLoading(false);
  };

  const handlePressSignUp = () => navigation.navigate("SignUp");

  const handlePressForgotPassword = () => navigation.navigate("ForgotPassword");

  return (
    <SafeAreaView style={styles.root}>
      <ScrollView style={styles.container}>
        <CustomText style={styles.header} weight={700}>
          Move Log
        </CustomText>
        <CustomInput
          name="username"
          control={control}
          placeholder="Username"
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
          }}
        />
        <CustomButton
          text={loading ? "Loading..." : "Sign In"}
          onPress={handleSubmit(handlePressSignIn)}
        />
        <CustomButton
          text="Forgot password?"
          onPress={handlePressForgotPassword}
          variant="secondary"
        />
        <SocialSignInButtons />
        <CustomButton
          text="Don't have an account? Create one"
          onPress={handlePressSignUp}
          variant="secondary"
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;
