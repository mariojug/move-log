import { StyleSheet, View } from "react-native";
import React from "react";

const CustomHr = () => {
  return (
    <>
      <View
        style={{
          borderBottomColor: "black",
          borderBottomWidth: StyleSheet.hairlineWidth,
          margin: 5,
        }}
      />
    </>
  );
};

export default CustomHr;
