import { StyleSheet, Text, View, TextInput } from "react-native";
import React from "react";

import { theme } from "../theme";

type CustomInputProps = {
  placeholder: string | undefined;
  value: string | undefined;
  setValue: ((text: string) => void) | undefined;
  secureTextEntry?: boolean | false;
  autoCapitalize?: "none" | "sentences" | "words" | "characters" | undefined;
  dataDetectorTypes?:
    | "phoneNumber"
    | "link"
    | "address"
    | "calendarEvent"
    | "none"
    | "all";
};

const CustomInput: React.FC<CustomInputProps> = ({
  placeholder,
  value,
  setValue,
  secureTextEntry,
  autoCapitalize,
  dataDetectorTypes,
}: CustomInputProps) => {
  return (
    <View style={styles.container}>
      <TextInput
        placeholder={placeholder}
        style={styles.input}
        value={value}
        onChangeText={setValue}
        secureTextEntry={secureTextEntry}
        autoCapitalize={autoCapitalize}
        autoCorrect={false}
        dataDetectorTypes={dataDetectorTypes || "all"}
      />
    </View>
  );
};

export default CustomInput;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    borderColor: "#e8e8e8",
    borderWidth: 1,
    borderRadius: theme.buttonBorderRadius,

    padding: theme.buttonPadding,
    marginVertical: theme.inputButtonMarginVertical,
  },
  input: {},
});
