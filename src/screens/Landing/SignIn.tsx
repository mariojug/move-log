import { StyleSheet, Text, SafeAreaView, ScrollView, View } from "react-native";
import React, { useState, useEffect } from "react";

import { theme } from "../../theme";
import { SharedStyles } from "../../styles";

import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/CustomButton";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

import SocialSigninButtons from "./SocialSigninButtons";

const SignIn = ({ navigation }: NativeStackScreenProps) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handlePressSignIn = () => {};

  const handlePressSignUp = () => navigation.navigate("SignUp");

  const handlePressForgotPassword = () => navigation.navigate("ForgotPassword");

  useEffect(() => console.log(username, password), [username, password]);

  return (
    <SafeAreaView style={styles.root}>
      <ScrollView style={styles.container}>
        <Text style={styles.header}>Move Log</Text>
        <CustomInput
          placeholder="Username"
          value={username}
          setValue={setUsername}
          autoCapitalize="none"
          secureTextEntry={false}
        />
        <CustomInput
          placeholder="Password"
          value={password}
          setValue={setPassword}
          secureTextEntry
        />
        <CustomButton text="Sign In" onPress={handlePressSignIn} />
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
