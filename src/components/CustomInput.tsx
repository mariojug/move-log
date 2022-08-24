import { StyleSheet, Text, View, TextInput } from "react-native";
import React from "react";

import { Control, Controller } from "react-hook-form";

import { theme } from "../theme";

type CustomInputProps = {
  name: string;
  control: Control<any, any>;
  placeholder: string | undefined;
  secureTextEntry?: boolean | false;
  autoCapitalize?: "none" | "sentences" | "words" | "characters" | undefined;
  rules?: object | {};
  disabled?: boolean | false;
  keyboardType?:
    | "default"
    | "number-pad"
    | "decimal-pad"
    | "numeric"
    | "email-address"
    | "phone-pad"
    | "url";
};

const CustomInput: React.FC<CustomInputProps> = ({
  name,
  control,
  placeholder,
  secureTextEntry,
  autoCapitalize,
  rules,
  disabled,
  keyboardType,
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
          <View style={[styles.container, error ? styles.container_ERROR : {}]}>
            <TextInput
              placeholder={placeholder}
              value={value}
              onChangeText={onChange}
              onBlur={onBlur}
              secureTextEntry={secureTextEntry ? secureTextEntry : false}
              autoCapitalize={autoCapitalize ? autoCapitalize : "none"}
              autoCorrect={false}
              editable={!disabled}
              keyboardType={keyboardType}
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
