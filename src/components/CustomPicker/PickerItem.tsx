import { StyleSheet, Text, TouchableHighlight, View } from "react-native";
import React, { useEffect, useState } from "react";
import { usePicker } from "./PickerContainer";
import CustomText from "../CustomText";
import { theme } from "../../theme";

export interface PickerItemInterface {
  value: any;
  label: string;
}

type PickerItemProps = PickerItemInterface & {
  selected?: boolean;
};

const PickerItem: React.FC<PickerItemProps> = ({ value, label, selected }) => {
  const [itemSelected, setItemSelected] = useState<boolean>(selected || false);

  const { selectedValue, setSelectedValue, pickerType, pickerOrientation } =
    usePicker();

  const handlePress = () => {
    if (pickerType === "radio") {
      setSelectedValue!(value);
      setItemSelected(true);
    } else {
      const lastArr = selectedValue;
      if (lastArr.includes(value)) {
        lastArr.splice(lastArr.indexOf(value), 1);
        setItemSelected(false);
      } else {
        lastArr.push(value);
        setItemSelected(true);
      }
      setSelectedValue!(lastArr);
    }
  };

  return (
    <TouchableHighlight
      underlayColor="inherit"
      onPress={handlePress}
      style={styles.root}
    >
      <View
        style={[
          styles.view,
          itemSelected
            ? [
                styles.view_FOCUS,
                pickerOrientation === "horizontal"
                  ? styles.view_FOCUS_HORIZONTAL
                  : styles.view_FOCUS_VERTICAL,
              ]
            : {},
        ]}
      >
        <CustomText
          style={[styles.label, itemSelected ? styles.label_FOCUS : {}]}
          weight={itemSelected ? 600 : 400}
        >
          {label}
        </CustomText>
      </View>
    </TouchableHighlight>
  );
};

export default PickerItem;

const styles = StyleSheet.create({
  root: {},
  view: {
    backgroundColor: theme.pickerBgBlur,
    padding: 10,
    borderRadius: 5,
  },
  view_FOCUS: {
    backgroundColor: theme.pickerBgFocus,
    borderColor: theme.pickerBorderColorFocus,
    borderWidth: 1,
    elevation: 5,
    padding: 9,
  },
  view_FOCUS_HORIZONTAL: {
    shadowColor: "#000",
    shadowOffset: {
      width: 10,
      height: 10,
    },
  },
  view_FOCUS_VERTICAL: {},
  label: {
    fontSize: 15,
    paddingLeft: 2,
  },
  label_FOCUS: {
    paddingLeft: 0,
  },
});
