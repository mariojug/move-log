import {
  StyleSheet,
  Text,
  TouchableHighlight,
  GestureResponderEvent,
  View,
} from "react-native";
import React from "react";

import Icon from "react-native-vector-icons/FontAwesome";

import { theme } from "../theme";
import CustomText from "./CustomText";

type CustomButtonProps = {
  text: string;
  onPress: ((event: GestureResponderEvent) => void) | undefined;
  variant?: "primary" | "secondary" | "tertiary";
  bgColor?: string;
  fgColor?: string;
  iconName?: string;
};

const CustomButton: React.FC<CustomButtonProps> = ({
  text,
  onPress,
  variant: type,
  bgColor,
  fgColor,
  iconName,
}: CustomButtonProps) => {
  return (
    <TouchableHighlight underlayColor="inherit" onPress={onPress}>
      <View
        style={[
          styles.container,
          type === "secondary"
            ? styles.container_SECONDARY
            : type === "tertiary"
            ? styles.container_TERTIARY
            : styles.container_PRIMARY,
          bgColor ? { backgroundColor: bgColor } : {},
        ]}
      >
        {iconName && (
          <View>
            <Icon
              name={iconName}
              style={[styles.icon, fgColor ? { color: fgColor } : {}]}
            />
          </View>
        )}
        <CustomText
          style={[
            styles.text,
            type === "secondary"
              ? styles.text_SECONDARY
              : type === "tertiary"
              ? styles.text_TERTIARY
              : styles.text_PRIMARY,
            fgColor ? { color: fgColor } : {},
          ]}
          weight={600}
        >
          {text}
        </CustomText>
      </View>
    </TouchableHighlight>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    borderRadius: theme.buttonBorderRadius,

    padding: theme.buttonPadding,
    marginVertical: theme.inputButtonMarginVertical,

    alignItems: "center",
    justifyContent: "center",
    // width: "max-content",
  },
  container_PRIMARY: {
    backgroundColor: theme.buttonBgPrimary,
  },
  container_SECONDARY: {
    backgroundColor: theme.buttonBgSecondary,
    // borderColor: "#555",
    // borderWidth: 1,
  },
  container_TERTIARY: {
    backgroundColor: theme.buttonBgTertiary,
  },
  text: {},
  text_PRIMARY: {
    color: theme.buttonTextPrimary,
  },
  text_SECONDARY: {
    color: theme.buttonTextSecondary,
  },
  text_TERTIARY: {
    color: theme.buttonTextTertiary,
  },
  icon: { fontSize: 18, marginRight: 12 },
});
