import React, { createContext, useContext } from "react";

export type UserContextInterface = {
  userId: string | undefined;
  routineIds: Array<number> | undefined;
  workoutIds: Array<number> | undefined;
};

export const UserContext = createContext<UserContextInterface>({
  userId: undefined,
  routineIds: undefined,
  workoutIds: undefined,
});

export const useUser = () => useContext(UserContext);
