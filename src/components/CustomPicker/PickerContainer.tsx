import { StyleSheet, Text, View } from "react-native";
import React, { useState, useEffect } from "react";

import PickerItem, { PickerItemInterface } from "./PickerItem";
import { theme } from "../../theme";

interface PickerInterface {
  selectedValue?: any;
  setSelectedValue?: React.Dispatch<any>;
  pickerType?: "radio" | "checkbox";
  pickerOrientation?: "horizontal" | "vertical";
}

const PickerContext = React.createContext<PickerInterface>({});

export const usePicker = () => React.useContext(PickerContext);

export type PickerContainerProps = {
  options: Array<PickerItemInterface>;
  type: "radio" | "checkbox";
  defaultSelected?: any;
  onSelectUpdate?: Function;
  orientation: "horizontal" | "vertical";
};

const PickerContainer: React.FC<PickerContainerProps> = ({
  options,
  type,
  defaultSelected,
  onSelectUpdate,
  orientation,
}) => {
  const pickerType: "radio" | "checkbox" = type || "radio";
  const pickerOrientation: "horizontal" | "vertical" =
    orientation || "vertical";
  const [selectedValue, setSelectedValue] = useState<Array<any> | any>(
    defaultSelected
      ? defaultSelected
      : pickerType === "checkbox"
      ? []
      : undefined
  );

  // TODO: fix not use effect not calling
  useEffect(() => {
    console.log("here");
    if (onSelectUpdate) {
      onSelectUpdate(selectedValue);
    }
  }, [selectedValue]);

  const exports = {
    selectedValue,
    setSelectedValue,
    pickerType,
    pickerOrientation,
  };

  return (
    <PickerContext.Provider value={exports}>
      <View
        style={[
          styles.container,
          ,
          orientation === "vertical"
            ? { flexDirection: "column" }
            : { flexDirection: "row" },
        ]}
      >
        {options.map((option) => (
          <PickerItem
            value={option.value}
            label={option.label}
            key={option.value}
          />
        ))}
      </View>
    </PickerContext.Provider>
  );
};

export default PickerContainer;

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.pickerBgBlur,
    borderRadius: 5,
  },
});
