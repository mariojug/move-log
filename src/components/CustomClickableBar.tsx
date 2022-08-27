import {
  StyleSheet,
  View,
  TouchableHighlight,
  GestureResponderEvent,
} from "react-native";
import React from "react";
import FeatherIcon from "react-native-vector-icons/Feather";
import Icon from "react-native-vector-icons/Ionicons";
import { theme } from "../theme";
import CustomText from "./CustomText";

type CustomClickableBarProps = {
  title: string;
  subtitle?: string | undefined;
  onPress?: ((event: GestureResponderEvent) => void) | undefined | undefined;
  showArrowhead?: boolean | true | undefined;
  centerText?: boolean | false | undefined;
  variant?: string | undefined;
  iconName?: string;
};

const CustomClickableBar: React.FC<CustomClickableBarProps> = ({
  title,
  subtitle,
  onPress,
  showArrowhead,
  centerText,
  variant,
  iconName,
}: CustomClickableBarProps) => {
  return (
    <TouchableHighlight
      onPress={onPress}
      style={styles.root}
      underlayColor="none"
    >
      <View
        style={[
          styles.container,
          variant === "secondary"
            ? styles.container_SECONDARY
            : variant === "tertiary"
            ? styles.container_TERTIARY
            : styles.container_PRIMARY,
        ]}
      >
        <View style={[centerText ? { alignItems: "center", width: 300 } : {}]}>
          <CustomText
            weight={500}
            style={[
              styles.titleText,
              {
                color:
                  variant === "secondary"
                    ? theme.barTextSecondary
                    : variant === "tertiary"
                    ? theme.barTextTertiary
                    : theme.barTextPrimary,
              },
            ]}
          >
            {title}
          </CustomText>
          {subtitle && (
            <CustomText
              style={[
                styles.subtitleText,
                {
                  color:
                    variant === "secondary"
                      ? theme.barTextSecondary
                      : variant === "tertiary"
                      ? theme.barTextTertiary
                      : theme.barTextPrimary,
                },
              ]}
            >
              {subtitle}
            </CustomText>
          )}
        </View>
        <View style={styles.iconContainer}>
          {iconName && (
            <Icon
              name={iconName}
              size={30}
              color={
                variant === "secondary"
                  ? theme.barTextSecondary
                  : variant === "tertiary"
                  ? theme.barTextTertiary
                  : theme.barTextPrimary
              }
            />
          )}
        </View>
      </View>
    </TouchableHighlight>
  );
};

export default CustomClickableBar;

const styles = StyleSheet.create({
  root: {
    width: "100%",
  },
  container: {
    flexDirection: "row",
    backgroundColor: "red",
    marginVertical: 5,
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 5,
    justifyContent: "space-between",
  },
  container_PRIMARY: {
    backgroundColor: theme.barBgPrimary,
  },
  container_SECONDARY: {
    backgroundColor: theme.barBgSecondary,
  },
  container_TERTIARY: {
    backgroundColor: theme.barBgTertiary,
  },
  iconContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  titleText: {
    fontSize: 24,
  },
  subtitleText: {},
});
