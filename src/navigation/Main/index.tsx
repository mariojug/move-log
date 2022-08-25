import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text, Alert } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Icon from "react-native-vector-icons/Ionicons";

import { API, Auth } from "aws-amplify";
import { createUser } from "../../graphql/mutations";
import { UserContext, UserContextInterface } from "./context/UserId";

import Home from "./Home";
import Settings from "./Settings";

import { theme } from "../../theme";

import { AppStackParamList } from "../../../App";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

export type MainStackParamList = {
  Home: undefined;
  Settings: undefined;
};

const MainStack = createBottomTabNavigator<MainStackParamList>();

type MainProps = NativeStackScreenProps<AppStackParamList, "Main">;

const Main: React.FC<MainProps> = ({ navigation }: MainProps) => {
  const [userId, setUserId] = useState<string>("");
  const [routineIds, setRoutineIds] = useState<Array<number>>([]);
  const [workoutIds, setWorkoutIds] = useState<Array<number>>([]);

  const getRoutineIds = () => {};

  const getWorkoutIds = () => {};

  useEffect(() => {
    // prevent user from going back to login screens
    navigation.addListener("beforeRemove", (e) => {
      e.preventDefault();
    });

    // get the current authenticated user
    Auth.currentAuthenticatedUser()
      .then(async (user) => {
        // if custom:userId exists on user, set the userId as the value
        if (Object.keys(user.attributes).includes("custom:userId")) {
          setUserId(user.attributes["custom:userId"]);
        } else {
          // user api data does not exist, create it
          try {
            const data: any = await API.graphql({
              query: createUser,
              variables: {
                input: { username: user.username },
              },
              authMode: "AMAZON_COGNITO_USER_POOLS",
            });
            const id = data.data.createUser.id;
            await Auth.updateUserAttributes(user, {
              "custom:userId": id,
            });
            setUserId(id);
          } catch (err: any) {
            Alert.alert("Error", err);
          }
        }
      })
      .catch((err) => Alert.alert("Could not authenticate user", err.message));
  }, [navigation]);

  const userIdContext: UserContextInterface = {
    userId,
    routineIds,
    workoutIds,
  };

  return (
    <UserContext.Provider value={userIdContext}>
      <MainStack.Navigator
        initialRouteName="Home"
        screenOptions={{ headerShown: false }}
      >
        <MainStack.Screen
          name="Home"
          component={Home}
          options={{
            tabBarIcon: ({ focused }) => (
              <View style={styles.tabIconView}>
                <Icon
                  name="barbell-outline"
                  size={30}
                  color={focused ? theme.focusColor : theme.blurColor}
                />
                <Text
                  style={focused ? styles.tabLabelFocus : styles.tabLabelBlur}
                >
                  Home
                </Text>
              </View>
            ),
            tabBarLabel: "",
          }}
        />
        <MainStack.Screen
          name="Settings"
          component={Settings}
          options={{
            tabBarIcon: ({ focused }) => (
              <View style={styles.tabIconView}>
                <Icon
                  name="settings-sharp"
                  size={30}
                  color={focused ? theme.focusColor : theme.blurColor}
                />
                <Text
                  style={focused ? styles.tabLabelFocus : styles.tabLabelBlur}
                >
                  Settings
                </Text>
              </View>
            ),
            tabBarLabel: "",
          }}
        />
      </MainStack.Navigator>
    </UserContext.Provider>
  );
};

const styles = StyleSheet.create({
  tabIconView: {
    alignItems: "center",
    justifyContent: "center",
    top: 20,
  },
  tabLabelFocus: {
    color: theme.focusColor,
    fontSize: 14,
    fontWeight: "bold",
  },
  tabLabelBlur: {
    color: theme.blurColor,
    fontSize: 14,
  },
});

export default Main;
