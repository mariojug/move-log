import { StyleSheet, Text, SafeAreaView, ScrollView, View } from "react-native";
import React, { useState, useEffect } from "react";

import { theme } from "../../theme";
import { SharedStyles } from "../../styles";

import SocialSigninButtons from "./SocialSigninButtons";

import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/CustomButton";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

const SignUp = ({ navigation }: NativeStackScreenProps) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // TODO: implement form validation
  const handlePressSignUp = () => {
    navigation.navigate("ConfirmSignUp");
  };

  const handlePressTerms = () => {};

  const handlePressPrivacy = () => {};

  useEffect(() => console.log(username, password), [username, password]);

  return (
    <SafeAreaView style={styles.root}>
      <ScrollView style={styles.container}>
        <Text style={styles.header}>Create an account</Text>
        <CustomInput
          placeholder="Username"
          value={username}
          setValue={setUsername}
          autoCapitalize="none"
          secureTextEntry={false}
        />
        <CustomInput
          placeholder="Email"
          value={email}
          setValue={setEmail}
          autoCapitalize="none"
          secureTextEntry={false}
        />
        <CustomInput
          placeholder="Phone number"
          value={phoneNumber}
          setValue={setPhoneNumber}
          autoCapitalize="none"
          secureTextEntry={false}
          dataDetectorTypes="phoneNumber"
        />
        <CustomInput
          placeholder="Password"
          value={password}
          setValue={setPassword}
          secureTextEntry
        />
        <CustomInput
          placeholder="Confirm password"
          value={confirmPassword}
          setValue={setConfirmPassword}
          secureTextEntry
        />
        <View style={styles.container}>
          <Text>
            By signing up, you confirm that you accept our{" "}
            <Text style={SharedStyles.text} onPress={handlePressTerms}>
              Terms of Use
            </Text>{" "}
            and{" "}
            <Text style={SharedStyles.text} onPress={handlePressPrivacy}>
              Privacy Policy
            </Text>
            .
          </Text>
        </View>
        <CustomButton text="Sign Up" onPress={handlePressSignUp} />

        <SocialSigninButtons />
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignUp;

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
