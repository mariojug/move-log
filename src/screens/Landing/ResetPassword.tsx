import { StyleSheet, Text, SafeAreaView, ScrollView, View } from "react-native";
import React, { useState, useEffect } from "react";

import { theme } from "../../theme";

import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/CustomButton";

const ResetPassword = () => {
  const [code, setCode] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");

  const handlePressSubmit = () => {};

  return (
    <SafeAreaView style={styles.root}>
      <ScrollView style={styles.container}>
        <Text style={styles.header}>Forgot password?</Text>
        <CustomInput
          placeholder="Confirmation code"
          value={code}
          setValue={setCode}
          autoCapitalize="none"
          secureTextEntry={false}
        />
        <CustomInput
          placeholder="New password"
          value={newPassword}
          setValue={setNewPassword}
          autoCapitalize="none"
          secureTextEntry={false}
        />
        <CustomInput
          placeholder="Confirm new password"
          value={confirmNewPassword}
          setValue={setConfirmNewPassword}
          autoCapitalize="none"
          secureTextEntry={false}
        />
        <CustomButton text="Submit" onPress={handlePressSubmit} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default ResetPassword;

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
