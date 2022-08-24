import { StyleSheet } from "react-native";
import { theme } from "../../../theme";

export default StyleSheet.create({
  pageHeaderView: {
    alignItems: "center",
    justifyContent: "center",
  },
  pageHeaderText: {
    fontSize: 30,
    fontWeight: "bold",
    paddingVertical: 20,
  },
  textLink: {
    color: theme.textLinkColor,
  },
});
