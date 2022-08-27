import { View, SafeAreaView, ScrollView, Alert } from "react-native";
import React from "react";
import { StackActions } from "@react-navigation/native";
import { FieldValues, useForm } from "react-hook-form";

import { Auth } from "aws-amplify";

import { UsernameRegex } from "../../../regex";

import CustomInput from "../../../components/CustomInput";
import CustomButton from "../../../components/CustomButton";

import styles from "../styles";

import type { LandingStackParamList } from "..";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import PageHeader from "../../../components/CustomPageHeader";

type ForgotPasswordProps = NativeStackScreenProps<
  LandingStackParamList,
  "ForgotPassword"
>;

const ForgotPassword = ({ navigation }: ForgotPasswordProps) => {
  const { control, handleSubmit } = useForm();

  const handlePressSendLink = async (data: FieldValues) => {
    try {
      const response = await Auth.forgotPassword(data.username);
      navigation.navigate("ResetPassword", { username: data.username });
    } catch (err: any) {
      Alert.alert("Error", err.message);
    }
  };

  return (
    <SafeAreaView style={styles.root}>
      <ScrollView>
        <PageHeader
          title="Forgot password?"
          showBackIcon
          onBackPress={() => navigation.dispatch(StackActions.pop(1))}
        />
        <View style={styles.container}>
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
                message:
                  "Username should be at least three (3) characters long",
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
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ForgotPassword;
