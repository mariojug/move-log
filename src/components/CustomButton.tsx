import {
  StyleSheet,
  Text,
  Pressable,
  TouchableHighlight,
  GestureResponderEvent,
  View,
} from "react-native";
import React from "react";

import Icon from "react-native-vector-icons/FontAwesome";

import { theme } from "../theme";

type CustomButtonProps = {
  text: string;
  onPress: ((event: GestureResponderEvent) => void) | undefined;
  type?: string | "primary";
  bgColor?: string;
  fgColor?: string;
  iconName?: string;
};

const CustomButton: React.FC<CustomButtonProps> = ({
  text,
  onPress,
  type,
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
        <Text
          style={[
            styles.text,
            type === "secondary"
              ? styles.text_SECONDARY
              : type === "tertiary"
              ? styles.text_TERTIARY
              : styles.text_PRIMARY,
            fgColor ? { color: fgColor } : {},
          ]}
        >
          {text}
        </Text>
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
    width: "100%",
  },
  container_PRIMARY: {
    backgroundColor: theme.buttonBgPrimary,
  },
  container_SECONDARY: {
    backgroundColor: theme.buttonBgSecondary,
  },
  container_TERTIARY: {
    backgroundColor: theme.buttonBgTertiary,
  },
  text: {
    fontWeight: "bold",
  },
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
