import { StyleSheet, Text, View, TextInput } from "react-native";
import React from "react";

import { Control, Controller, FieldValues } from "react-hook-form";

import { theme } from "../theme";

type CustomInputProps = {
  name: string;
  control: Control<FieldValues, any>;
  placeholder: string | undefined;
  secureTextEntry?: boolean | false;
  autoCapitalize?: "none" | "sentences" | "words" | "characters" | undefined;
  rules?: object | {};
};

const CustomInput: React.FC<CustomInputProps> = ({
  name,
  control,
  placeholder,
  secureTextEntry,
  autoCapitalize,
  rules,
}: CustomInputProps) => {
  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({
        field: { value, onChange, onBlur },
        fieldState: { error },
      }) => (
        <>
          <View style={[styles.container, styles.container_ERROR]}>
            <TextInput
              placeholder={placeholder}
              value={value}
              onChangeText={onChange}
              onBlur={onBlur}
              secureTextEntry={secureTextEntry}
              autoCapitalize={autoCapitalize}
              autoCorrect={false}
            />
          </View>
          {error && (
            <Text style={{ color: "red", alignSelf: "stretch" }}>
              {error.message || "Error"}
            </Text>
          )}
        </>
      )}
    />
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
  container_ERROR: {
    borderColor: "red",
  },
});
