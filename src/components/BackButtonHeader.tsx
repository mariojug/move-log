import { GestureResponderEvent, StyleSheet, Text, View } from "react-native";
import React from "react";

import Icon from "react-native-vector-icons/AntDesign";

type BackButtonHeaderProps = {
  onPress: ((event: GestureResponderEvent) => void) | undefined;
};

const BackButtonHeader: React.FC<BackButtonHeaderProps> = ({
  onPress,
}: BackButtonHeaderProps) => {
  return (
    <View style={styles.container}>
      <Icon name="left" onPress={onPress} style={styles.icon} />
    </View>
  );
};

export default BackButtonHeader;

const styles = StyleSheet.create({
  container: {
    alignItems: "flex-start",
    width: "100%",
    paddingLeft: 24,
    marginVertical: 12,
  },
  icon: {
    fontSize: 18,
  },
});
