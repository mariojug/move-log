import { StyleSheet, Text, View } from "react-native";
import React from "react";

import CustomButton from "../../components/CustomButton";

const SocialSigninButtons = () => {
  const handlePressSignInWithGoogle = () => {};
  const handlePressSignInWithApple = () => {};
  return (
    <View style={styles.signupView}>
      <CustomButton
        text="Sign In with Google"
        onPress={handlePressSignInWithGoogle}
        bgColor="#FAE9EA"
        fgColor="#DD4D44"
        iconName="google"
      />
      <CustomButton
        text="Sign In with Apple"
        onPress={handlePressSignInWithApple}
        bgColor="#e3e3e3"
        fgColor="#363636"
        iconName="apple"
      />
    </View>
  );
};

export default SocialSigninButtons;

const styles = StyleSheet.create({
  signupView: {
    marginTop: 20,
  },
});
