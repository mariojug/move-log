import {
  Text,
  SafeAreaView,
  ScrollView,
  View,
  Alert,
  StyleSheet,
} from "react-native";
import React from "react";
import { StackActions } from "@react-navigation/native";
import { useForm, FieldValues } from "react-hook-form";

import { Auth } from "aws-amplify";

import SocialSignInButtons from "./SocialSignInButtons";

import BackButtonHeader from "../../../components/BackButtonHeader";
import CustomInput from "../../../components/CustomInput";
import CustomButton from "../../../components/CustomButton";

import {
  EmailRegex,
  UsernameRegex,
  NumberRegex,
  PasswordRegex,
} from "../../../regex";

import styles from "../styles";

import type { LandingStackParamList } from "../.";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

type SignUpProps = NativeStackScreenProps<LandingStackParamList, "SignUp">;

const SignUp = ({ navigation }: SignUpProps) => {
  const { control, handleSubmit, watch } = useForm();

  const handlePressSignUp = async (data: FieldValues) => {
    const { username, name, email, password, phoneArea, phoneNumber } = data;

    try {
      await Auth.signUp({
        username,
        password,
        attributes: {
          name,
          email,
          phone_number:
            "+" + (phoneArea.trim() === "" ? "1" : phoneArea) + phoneNumber,
        },
      });
      navigation.navigate("ConfirmSignUp", { username });
    } catch (err: any) {
      Alert.alert(err.message);
    }
  };

  const handlePressTerms = () => {};

  const handlePressPrivacy = () => {};

  return (
    <SafeAreaView style={styles.root}>
      <BackButtonHeader
        onPress={() => navigation.dispatch(StackActions.pop(1))}
      />
      <ScrollView style={styles.container}>
        <Text style={styles.header}>Create an account</Text>
        <CustomInput
          name="name"
          control={control}
          placeholder="Name"
          autoCapitalize="words"
          rules={{
            required: "Name is required",
            minLength: {
              value: 3,
              message: "Name should be at least three (3) characters long",
            },
            maxLength: {
              value: 24,
              message:
                "Name should be at most twenty-four (24) characters long",
            },
          }}
        />
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
          name="email"
          control={control}
          placeholder="Email"
          keyboardType="email-address"
          rules={{
            required: "Email is required",
            pattern: { value: EmailRegex, message: "Email is invalid" },
          }}
        />
        <View style={signupStyles.phoneContainer}>
          <View style={signupStyles.phoneArea}>
            <CustomInput
              name="phoneArea"
              control={control}
              placeholder="Area"
              keyboardType="number-pad"
              rules={{ required: "Empty" }}
            />
          </View>
          <View style={signupStyles.phoneNumber}>
            <CustomInput
              name="phoneNumber"
              control={control}
              placeholder="Phone number"
              keyboardType="number-pad"
              rules={{
                required: "Phone number is required",
                minLength: {
                  value: 4,
                  message: "Phone number should have at least 4 digits",
                },
                maxLength: {
                  value: 13,
                  message: "Phone number should have at most 13 digits",
                },
                pattern: {
                  value: NumberRegex,
                  message: "Phone number should contain digits (0-9) only",
                },
              }}
            />
          </View>
        </View>
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
        <View style={styles.disclaimer}>
          <Text>
            By signing up, you confirm that you accept our{" "}
            <Text style={styles.link} onPress={handlePressTerms}>
              Terms of Use
            </Text>{" "}
            and{" "}
            <Text style={styles.link} onPress={handlePressPrivacy}>
              Privacy Policy
            </Text>
            .
          </Text>
        </View>
        <CustomButton
          text="Sign Up"
          onPress={handleSubmit(handlePressSignUp)}
        />

        <SocialSignInButtons type="signup" />
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignUp;

const signupStyles = StyleSheet.create({
  phoneContainer: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "center",
  },
  phoneArea: {
    width: "18%",
    marginRight: "2.5%",
  },
  phoneNumber: {
    width: "79.5%",
  },
});
