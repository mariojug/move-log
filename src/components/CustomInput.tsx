import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TextInputProps,
} from "react-native";
import React from "react";
import { Control, Controller } from "react-hook-form";
import { useFonts, WorkSans_500Medium } from "@expo-google-fonts/work-sans";

import CustomText from "./CustomText";

import { theme } from "../theme";

type CustomInputProps = TextInputProps & {
  name: string;
  control: Control<any, any>;
  rules?: object | {};
  disabled?: boolean | false;
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
  multiline,
}: CustomInputProps) => {
  const [fontsLoaded] = useFonts({ WorkSans_500Medium });

  if (!fontsLoaded) return null;

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
              multiline={multiline}
              placeholder={placeholder}
              value={value}
              onChangeText={onChange}
              onBlur={onBlur}
              secureTextEntry={secureTextEntry ? secureTextEntry : false}
              autoCapitalize={autoCapitalize ? autoCapitalize : "none"}
              autoCorrect={false}
              editable={!disabled}
              keyboardType={keyboardType}
              placeholderTextColor={theme.placeholderColor}
              style={{ fontFamily: "WorkSans_500Medium" }}
            />
          </View>
          {error && (
            <CustomText style={{ color: "red", alignSelf: "stretch" }}>
              {error.message || "Error"}
            </CustomText>
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
    borderColor: theme.placeholderColor,
    borderWidth: 1,
    borderRadius: theme.buttonBorderRadius,
    padding: theme.buttonPadding,
    marginVertical: theme.inputButtonMarginVertical,
  },
  container_ERROR: {
    borderColor: "red",
  },
});
