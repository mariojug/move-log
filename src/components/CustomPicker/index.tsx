import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Control, Controller } from "react-hook-form";

import CustomText from "../CustomText";

import PickerContainer from "./PickerContainer";
import { PickerItemInterface } from "./PickerItem";

import { theme } from "../../theme";

type CustomPickerProps = {
  name: string;
  options: Array<PickerItemInterface>;
  type: "radio" | "checkbox";
  control: Control<any, any>;
  rules?: object;
  defaultValue?: any;
  orientation: "horizontal" | "vertical";
};

const CustomPicker: React.FC<CustomPickerProps> = ({
  name,
  options,
  type,
  control,
  rules,
  defaultValue,
  orientation,
}) => {
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
            <PickerContainer
              type={type}
              options={options}
              onSelectUpdate={onChange}
              orientation={orientation}
              defaultSelected={value}
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

export default CustomPicker;

const styles = StyleSheet.create({
  container: {
    // backgroundColor: theme.buttonBgSecondary,
    borderColor: theme.placeholderColor,
    borderRadius: theme.buttonBorderRadius,
    padding: theme.buttonPadding,
    marginVertical: theme.inputButtonMarginVertical,
  },
  container_ERROR: {
    borderColor: "red",
    borderWidth: 1,
  },
});
