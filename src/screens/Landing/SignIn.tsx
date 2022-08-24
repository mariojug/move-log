import { Text, SafeAreaView, ScrollView, Alert } from "react-native";
import React, { useState } from "react";
import { useForm, FieldValues } from "react-hook-form";

import { Auth } from "aws-amplify";

import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/CustomButton";

import BackButtonHeader from "../../components/BackButtonHeader";
import SocialSignInButtons from "./SocialSignInButtons";

import { UsernameRegex } from "../../regex";
import type { LandingStackParamList } from "../../navigation/Landing";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

import { styles } from "./styles";

type SignInProps = NativeStackScreenProps<LandingStackParamList, "SignIn">;

const SignIn = ({ navigation }: SignInProps) => {
  const { control, handleSubmit } = useForm<FieldValues>();

  const [loading, setLoading] = useState(false);

  const handlePressSignIn = async (data: FieldValues) => {
    if (loading) return;

    setLoading(true);
    try {
      const response = await Auth.signIn(data.username, data.password);
      console.log(response);
      navigation.getParent()?.navigate("Main");
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
      <BackButtonHeader hideButton />
      <ScrollView style={styles.container}>
        <Text style={styles.header}>Move Log</Text>
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
          type="secondary"
        />
        <SocialSignInButtons />
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
