import { StyleSheet, Text, View } from "react-native";
import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import SignIn from "../screens/Landing/SignIn";
import SignUp from "../screens/Landing/SignUp";
import ConfirmSignUp from "../screens/Landing/ConfirmSignUp";
import ForgotPassword from "../screens/Landing/ForgotPassword";
import ResetPassword from "../screens/Landing/ResetPassword";

const LandingStack = createNativeStackNavigator();

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
