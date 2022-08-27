import {
  GestureResponderEvent,
  StyleSheet,
  Text,
  TextProps,
  View,
} from "react-native";
import React, { ReactElement } from "react";

import AntIcon from "react-native-vector-icons/AntDesign";
import FeatherIcon from "react-native-vector-icons/Feather";
import IonIcon from "react-native-vector-icons/Ionicons";

import CustomText from "./CustomText";
import CustomHr from "./CustomHr";

type PageHeaderProps = {
  title: string;
  showBackIcon?: boolean;
  forwardIconLibrary?: "AntDesign" | "Feather" | "Ionicons";
  forwardIconName?: string;
  onBackPress?: ((event: GestureResponderEvent) => void) | undefined;
  onForwardPress?: ((event: GestureResponderEvent) => void) | undefined;
  navigation?: string;
};

const PageHeader: React.FC<PageHeaderProps> = ({
  title,
  showBackIcon,
  forwardIconLibrary,
  forwardIconName,
  onBackPress,
  onForwardPress,
}: PageHeaderProps) => {
  return (
    <View>
      <View style={styles.contentContainer}>
        <View style={styles.headerContainer}>
          {showBackIcon && (
            <View style={styles.container}>
              <AntIcon name="left" style={styles.icon} onPress={onBackPress} />
            </View>
          )}
          <View style={styles.container}>
            <CustomText style={styles.titleText} weight={700}>
              {title}
            </CustomText>
          </View>
        </View>

        {forwardIconLibrary && forwardIconName && (
          <View style={styles.container}>
            {forwardIconLibrary === "AntDesign" ? (
              <AntIcon
                name={forwardIconName}
                style={styles.icon}
                onPress={onForwardPress}
              />
            ) : forwardIconLibrary === "Feather" ? (
              <FeatherIcon
                name={forwardIconName}
                style={styles.icon}
                onPress={onForwardPress}
              />
            ) : (
              <IonIcon
                name={forwardIconName}
                style={styles.icon}
                onPress={onForwardPress}
              />
            )}
          </View>
        )}
      </View>
      <CustomHr />
    </View>
  );
};

export default PageHeader;

const styles = StyleSheet.create({
  root: {},
  contentContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 10,
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
  titleText: {
    fontSize: 28,
  },
  container: {
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
  },
  icon: {
    fontSize: 24,
    fontWeight: "bold",
  },
});
