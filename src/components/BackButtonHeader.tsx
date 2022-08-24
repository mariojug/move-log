import { GestureResponderEvent, StyleSheet, Text, View } from "react-native";
import React from "react";

import Icon from "react-native-vector-icons/AntDesign";

type BackButtonHeaderProps = {
  onPress?: ((event: GestureResponderEvent) => void) | undefined;
  hideButton?: boolean | false;
};

const BackButtonHeader: React.FC<BackButtonHeaderProps> = ({
  onPress,
  hideButton,
}: BackButtonHeaderProps) => {
  return (
    <View style={styles.container}>
      {hideButton ? (
        <Text style={styles.icon}>&nbsp;</Text>
      ) : (
        <Icon name="left" onPress={onPress} style={styles.icon} />
      )}
    </View>
  );
};

export default BackButtonHeader;

const styles = StyleSheet.create({
  container: {
    alignItems: "flex-start",
    width: "100%",
    paddingLeft: 24,
    marginTop: 12,
    marginBottom: 6,
    backgroundColor: "none",
  },
  icon: {
    fontSize: 18,
    fontWeight: "bold",
  },
});
