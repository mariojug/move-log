import { StyleSheet, Text, SafeAreaView, ScrollView, View } from "react-native";
import React, { useState, useEffect } from "react";

import { theme } from "../../theme";

import SocialSigninButtons from "./SocialSigninButtons";

import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/CustomButton";

const ConfirmSignUp = () => {
  const [username, setUsername] = useState("");
  const [code, setCode] = useState("");

  const handlePressConfirm = () => {};
  return (
    <SafeAreaView style={styles.root}>
      <ScrollView style={styles.container}>
        <Text style={styles.header}>Confirm Sign Up</Text>
        <CustomInput
          placeholder="Username"
          value={username}
          setValue={setUsername}
          autoCapitalize="none"
          secureTextEntry={false}
        />
        <CustomInput
          placeholder="Confirmation code"
          value={code}
          setValue={setCode}
          autoCapitalize="none"
          secureTextEntry={false}
        />
        <CustomButton text="Confirm account" onPress={handlePressConfirm} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default ConfirmSignUp;

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
  link: {
    color: theme.textLinkColor,
  },
});
