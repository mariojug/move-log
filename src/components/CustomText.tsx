import { StyleSheet, Text, TextProps } from "react-native";
import React from "react";
import {
  useFonts,
  WorkSans_100Thin,
  WorkSans_100Thin_Italic,
  WorkSans_200ExtraLight,
  WorkSans_200ExtraLight_Italic,
  WorkSans_300Light,
  WorkSans_300Light_Italic,
  WorkSans_400Regular,
  WorkSans_400Regular_Italic,
  WorkSans_500Medium,
  WorkSans_500Medium_Italic,
  WorkSans_600SemiBold,
  WorkSans_600SemiBold_Italic,
  WorkSans_700Bold,
  WorkSans_700Bold_Italic,
  WorkSans_800ExtraBold,
  WorkSans_800ExtraBold_Italic,
  WorkSans_900Black,
  WorkSans_900Black_Italic,
} from "@expo-google-fonts/work-sans";

type CustomTextProps = TextProps & {
  weight?: number;
  italic?: boolean;
};

const CustomText: React.FC<CustomTextProps> = ({
  children,
  style,
  weight,
  italic,
}) => {
  const [fontsLoaded] = useFonts({
    WorkSans_100Thin,
    WorkSans_100Thin_Italic,
    WorkSans_200ExtraLight,
    WorkSans_200ExtraLight_Italic,
    WorkSans_300Light,
    WorkSans_300Light_Italic,
    WorkSans_400Regular,
    WorkSans_400Regular_Italic,
    WorkSans_500Medium,
    WorkSans_500Medium_Italic,
    WorkSans_600SemiBold,
    WorkSans_600SemiBold_Italic,
    WorkSans_700Bold,
    WorkSans_700Bold_Italic,
    WorkSans_800ExtraBold,
    WorkSans_800ExtraBold_Italic,
    WorkSans_900Black,
    WorkSans_900Black_Italic,
  });

  const getFontFamily = (wt: number | undefined, it: boolean | undefined) => {
    let fontWeight;
    if (wt) {
      fontWeight = Math.round(wt / 100);
      if (fontWeight > 9) {
        fontWeight = 9;
      }
    } else fontWeight = 4;

    let suffix;
    switch (fontWeight) {
      case 1:
        suffix = "Thin";
        break;
      case 2:
        suffix = "ExtraLight";
        break;
      case 3:
        suffix = "Light";
        break;
      case 4:
        suffix = "Regular";
        break;
      case 5:
        suffix = "Medium";
        break;
      case 6:
        suffix = "SemiBold";
        break;
      case 7:
        suffix = "Bold";
        break;
      case 8:
        suffix = "ExtraBold";
        break;
      case 9:
        suffix = "Black";
      default:
        suffix = "Black";
    }
    return `WorkSans_${fontWeight}00${suffix}${it ? "_Italic" : ""}`;
  };

  if (!fontsLoaded) {
    return null;
  }
  return (
    <Text style={[{ fontFamily: getFontFamily(weight, italic) }, style]}>
      {children}
    </Text>
  );
};

export default CustomText;

const styles = StyleSheet.create({});
