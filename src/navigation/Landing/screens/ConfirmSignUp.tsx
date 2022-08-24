import { Text, SafeAreaView, ScrollView, Alert } from "react-native";
import React from "react";
import { StackActions } from "@react-navigation/native";
import { FieldValues, useForm } from "react-hook-form";

import { Auth } from "aws-amplify";

import BackButtonHeader from "../../../components/BackButtonHeader";
import CustomInput from "../../../components/CustomInput";
import CustomButton from "../../../components/CustomButton";

import styles from "../styles";

import type { LandingStackParamList } from "..";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

type ConfirmSignUpProps = NativeStackScreenProps<
  LandingStackParamList,
  "ConfirmSignUp"
>;

const ConfirmSignUp = ({ route, navigation }: ConfirmSignUpProps) => {
  const { control, handleSubmit } = useForm({
    defaultValues: { username: route.params.username },
  });

  const handlePressConfirm = async (data: FieldValues) => {
    try {
      await Auth.confirmSignUp(data.username, data.code);

      Alert.alert("Success", "You have successfully signed up for an account");
      setTimeout(() => navigation.dispatch(StackActions.popToTop()), 2000);
    } catch (err: any) {
      Alert.alert(err.message);
    }
  };

  const handlePressResend = async (data: FieldValues) => {
    try {
      await Auth.resendSignUp(data.username);
      Alert.alert("Success", "Code was resent to your email");
    } catch (err: any) {
      Alert.alert(err.message);
    }
    navigation.dispatch(StackActions.popToTop());
  };

  return (
    <SafeAreaView style={styles.root}>
      <BackButtonHeader
        onPress={() => navigation.dispatch(StackActions.pop(1))}
      />
      <ScrollView style={styles.container}>
        <Text style={styles.header}>Confirm Sign Up</Text>
        <CustomInput
          name="username"
          control={control}
          placeholder="Username"
          autoCapitalize="none"
          secureTextEntry={false}
          disabled
        />
        <CustomInput
          name="code"
          control={control}
          placeholder="Confirmation code"
          autoCapitalize="none"
          secureTextEntry={false}
          rules={{ required: "Confirmation code is required" }}
        />
        <CustomButton
          text="Confirm account"
          onPress={handleSubmit(handlePressConfirm)}
        />
        <CustomButton
          text="Resend code"
          type="secondary"
          onPress={handlePressResend}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default ConfirmSignUp;
