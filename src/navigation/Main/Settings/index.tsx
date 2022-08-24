import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import React from "react";

import { MainStackParamList } from "..";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

type SettingsProps = NativeStackScreenProps<MainStackParamList, "Settings">;

// TODO: add logic to allow user to update information
// TODO: add logic to allow user to sign out
const Settings: React.FC<SettingsProps> = ({
  route,
  navigation,
}: SettingsProps) => {
  return (
    <SafeAreaView>
      <View>
        <Text>Settings</Text>
      </View>
    </SafeAreaView>
  );
};

export default Settings;

const styles = StyleSheet.create({});
