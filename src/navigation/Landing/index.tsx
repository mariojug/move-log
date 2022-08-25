import { StyleSheet } from "react-native";
import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import SignIn from "./screens/SignIn";
import SignUp from "./screens/SignUp";
import ConfirmSignUp from "./screens/ConfirmSignUp";
import ForgotPassword from "./screens/ForgotPassword";
import ResetPassword from "./screens/ResetPassword";

export type LandingStackParamList = {
  SignIn: undefined;
  SignUp: undefined;
  ConfirmSignUp: {
    username: string;
  };
  ForgotPassword: undefined;
  ResetPassword: {
    username: string;
  };
};

const LandingStack = createNativeStackNavigator<LandingStackParamList>();

const Landing = () => {
  return (
    <LandingStack.Navigator
      initialRouteName="SignIn"
      screenOptions={{ headerShown: false }}
    >
      <LandingStack.Screen name="SignIn" component={SignIn} />
      <LandingStack.Screen name="SignUp" component={SignUp} />
      <LandingStack.Screen name="ConfirmSignUp" component={ConfirmSignUp} />
      <LandingStack.Screen name="ForgotPassword" component={ForgotPassword} />
      <LandingStack.Screen name="ResetPassword" component={ResetPassword} />
    </LandingStack.Navigator>
  );
};

export default Landing;

const styles = StyleSheet.create({});
