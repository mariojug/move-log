/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateUserInput = {
  sub: string,
  id?: string | null,
};

export type ModelUserConditionInput = {
  sub?: ModelStringInput | null,
  and?: Array< ModelUserConditionInput | null > | null,
  or?: Array< ModelUserConditionInput | null > | null,
  not?: ModelUserConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type User = {
  __typename: "User",
  sub: string,
  workouts?: ModelWorkoutConnection | null,
  routines?: ModelRoutineConnection | null,
  id: string,
  createdAt: string,
  updatedAt: string,
};

export type ModelWorkoutConnection = {
  __typename: "ModelWorkoutConnection",
  items:  Array<Workout | null >,
  nextToken?: string | null,
};

export type Workout = {
  __typename: "Workout",
  id: string,
  name: string,
  sub: string,
  type: WorkoutType,
  logs?: ModelLogConnection | null,
  notes?: string | null,
  units?: WorkoutUnitType | null,
  targetSetRange?: Array< number | null > | null,
  targetRepRange?: Array< number | null > | null,
  targetDurationRange?: Array< number | null > | null,
  createdAt: string,
  updatedAt: string,
  userWorkoutsId?: string | null,
  sectionWorkoutsId?: string | null,
};

export enum WorkoutType {
  WEIGHT = "WEIGHT",
  CARDIO = "CARDIO",
}


export type ModelLogConnection = {
  __typename: "ModelLogConnection",
  items:  Array<Log | null >,
  nextToken?: string | null,
};

export type Log = {
  __typename: "Log",
  id: string,
  name: string,
  timestamp?: number | null,
  sets?: ModelSetConnection | null,
  notes?: string | null,
  units?: WorkoutUnitType | null,
  createdAt: string,
  updatedAt: string,
  workoutLogsId?: string | null,
};

export type ModelSetConnection = {
  __typename: "ModelSetConnection",
  items:  Array<Set | null >,
  nextToken?: string | null,
};

export type Set = {
  __typename: "Set",
  id: string,
  weight?: number | null,
  reps?: number | null,
  duration?: number | null,
  units?: WorkoutUnitType | null,
  createdAt: string,
  updatedAt: string,
  logSetsId?: string | null,
};

export enum WorkoutUnitType {
  LB = "LB",
  KG = "KG",
  MIN = "MIN",
  SEC = "SEC",
}


export type ModelRoutineConnection = {
  __typename: "ModelRoutineConnection",
  items:  Array<Routine | null >,
  nextToken?: string | null,
};

export type Routine = {
  __typename: "Routine",
  id: string,
  name: string,
  sub: string,
  days?: Array< number | null > | null,
  sections?: ModelSectionConnection | null,
  notes?: string | null,
  createdAt: string,
  updatedAt: string,
  userRoutinesId?: string | null,
};

export type ModelSectionConnection = {
  __typename: "ModelSectionConnection",
  items:  Array<Section | null >,
  nextToken?: string | null,
};

export type Section = {
  __typename: "Section",
  id: string,
  name: string,
  sub: string,
  routine?: Routine | null,
  workouts?: ModelWorkoutConnection | null,
  createdAt: string,
  updatedAt: string,
  routineSectionsId: string,
};

export type UpdateUserInput = {
  sub?: string | null,
  id: string,
};

export type DeleteUserInput = {
  id: string,
};

export type CreateRoutineInput = {
  id?: string | null,
  name: string,
  sub: string,
  days?: Array< number | null > | null,
  notes?: string | null,
  userRoutinesId?: string | null,
};

export type ModelRoutineConditionInput = {
  name?: ModelStringInput | null,
  sub?: ModelStringInput | null,
  days?: ModelIntInput | null,
  notes?: ModelStringInput | null,
  and?: Array< ModelRoutineConditionInput | null > | null,
  or?: Array< ModelRoutineConditionInput | null > | null,
  not?: ModelRoutineConditionInput | null,
  userRoutinesId?: ModelIDInput | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type UpdateRoutineInput = {
  id: string,
  name?: string | null,
  sub?: string | null,
  days?: Array< number | null > | null,
  notes?: string | null,
  userRoutinesId?: string | null,
};

export type DeleteRoutineInput = {
  id: string,
};

export type CreateSectionInput = {
  id?: string | null,
  name: string,
  sub: string,
  routineSectionsId: string,
};

export type ModelSectionConditionInput = {
  name?: ModelStringInput | null,
  sub?: ModelStringInput | null,
  and?: Array< ModelSectionConditionInput | null > | null,
  or?: Array< ModelSectionConditionInput | null > | null,
  not?: ModelSectionConditionInput | null,
  routineSectionsId?: ModelIDInput | null,
};

export type UpdateSectionInput = {
  id: string,
  name?: string | null,
  sub?: string | null,
  routineSectionsId: string,
};

export type DeleteSectionInput = {
  id: string,
};

export type CreateWorkoutInput = {
  id?: string | null,
  name: string,
  sub: string,
  type: WorkoutType,
  notes?: string | null,
  units?: WorkoutUnitType | null,
  targetSetRange?: Array< number | null > | null,
  targetRepRange?: Array< number | null > | null,
  targetDurationRange?: Array< number | null > | null,
  userWorkoutsId?: string | null,
  sectionWorkoutsId?: string | null,
};

export type ModelWorkoutConditionInput = {
  name?: ModelStringInput | null,
  sub?: ModelStringInput | null,
  type?: ModelWorkoutTypeInput | null,
  notes?: ModelStringInput | null,
  units?: ModelWorkoutUnitTypeInput | null,
  targetSetRange?: ModelIntInput | null,
  targetRepRange?: ModelIntInput | null,
  targetDurationRange?: ModelIntInput | null,
  and?: Array< ModelWorkoutConditionInput | null > | null,
  or?: Array< ModelWorkoutConditionInput | null > | null,
  not?: ModelWorkoutConditionInput | null,
  userWorkoutsId?: ModelIDInput | null,
  sectionWorkoutsId?: ModelIDInput | null,
};

export type ModelWorkoutTypeInput = {
  eq?: WorkoutType | null,
  ne?: WorkoutType | null,
};

export type ModelWorkoutUnitTypeInput = {
  eq?: WorkoutUnitType | null,
  ne?: WorkoutUnitType | null,
};

export type UpdateWorkoutInput = {
  id: string,
  name?: string | null,
  sub?: string | null,
  type?: WorkoutType | null,
  notes?: string | null,
  units?: WorkoutUnitType | null,
  targetSetRange?: Array< number | null > | null,
  targetRepRange?: Array< number | null > | null,
  targetDurationRange?: Array< number | null > | null,
  userWorkoutsId?: string | null,
  sectionWorkoutsId?: string | null,
};

export type DeleteWorkoutInput = {
  id: string,
};

export type CreateLogInput = {
  id?: string | null,
  name: string,
  timestamp?: number | null,
  notes?: string | null,
  units?: WorkoutUnitType | null,
  workoutLogsId?: string | null,
};

export type ModelLogConditionInput = {
  name?: ModelStringInput | null,
  timestamp?: ModelIntInput | null,
  notes?: ModelStringInput | null,
  units?: ModelWorkoutUnitTypeInput | null,
  and?: Array< ModelLogConditionInput | null > | null,
  or?: Array< ModelLogConditionInput | null > | null,
  not?: ModelLogConditionInput | null,
  workoutLogsId?: ModelIDInput | null,
};

export type UpdateLogInput = {
  id: string,
  name?: string | null,
  timestamp?: number | null,
  notes?: string | null,
  units?: WorkoutUnitType | null,
  workoutLogsId?: string | null,
};

export type DeleteLogInput = {
  id: string,
};

export type CreateSetInput = {
  id?: string | null,
  weight?: number | null,
  reps?: number | null,
  duration?: number | null,
  units?: WorkoutUnitType | null,
  logSetsId?: string | null,
};

export type ModelSetConditionInput = {
  weight?: ModelIntInput | null,
  reps?: ModelIntInput | null,
  duration?: ModelIntInput | null,
  units?: ModelWorkoutUnitTypeInput | null,
  and?: Array< ModelSetConditionInput | null > | null,
  or?: Array< ModelSetConditionInput | null > | null,
  not?: ModelSetConditionInput | null,
  logSetsId?: ModelIDInput | null,
};

export type UpdateSetInput = {
  id: string,
  weight?: number | null,
  reps?: number | null,
  duration?: number | null,
  units?: WorkoutUnitType | null,
  logSetsId?: string | null,
};

export type DeleteSetInput = {
  id: string,
};

export type ModelUserFilterInput = {
  sub?: ModelStringInput | null,
  and?: Array< ModelUserFilterInput | null > | null,
  or?: Array< ModelUserFilterInput | null > | null,
  not?: ModelUserFilterInput | null,
};

export type ModelUserConnection = {
  __typename: "ModelUserConnection",
  items:  Array<User | null >,
  nextToken?: string | null,
};

export type ModelRoutineFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  sub?: ModelStringInput | null,
  days?: ModelIntInput | null,
  notes?: ModelStringInput | null,
  and?: Array< ModelRoutineFilterInput | null > | null,
  or?: Array< ModelRoutineFilterInput | null > | null,
  not?: ModelRoutineFilterInput | null,
  userRoutinesId?: ModelIDInput | null,
};

export type ModelSectionFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  sub?: ModelStringInput | null,
  and?: Array< ModelSectionFilterInput | null > | null,
  or?: Array< ModelSectionFilterInput | null > | null,
  not?: ModelSectionFilterInput | null,
  routineSectionsId?: ModelIDInput | null,
};

export type ModelWorkoutFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  sub?: ModelStringInput | null,
  type?: ModelWorkoutTypeInput | null,
  notes?: ModelStringInput | null,
  units?: ModelWorkoutUnitTypeInput | null,
  targetSetRange?: ModelIntInput | null,
  targetRepRange?: ModelIntInput | null,
  targetDurationRange?: ModelIntInput | null,
  and?: Array< ModelWorkoutFilterInput | null > | null,
  or?: Array< ModelWorkoutFilterInput | null > | null,
  not?: ModelWorkoutFilterInput | null,
  userWorkoutsId?: ModelIDInput | null,
  sectionWorkoutsId?: ModelIDInput | null,
};

export type ModelLogFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  timestamp?: ModelIntInput | null,
  notes?: ModelStringInput | null,
  units?: ModelWorkoutUnitTypeInput | null,
  and?: Array< ModelLogFilterInput | null > | null,
  or?: Array< ModelLogFilterInput | null > | null,
  not?: ModelLogFilterInput | null,
  workoutLogsId?: ModelIDInput | null,
};

export type ModelSetFilterInput = {
  id?: ModelIDInput | null,
  weight?: ModelIntInput | null,
  reps?: ModelIntInput | null,
  duration?: ModelIntInput | null,
  units?: ModelWorkoutUnitTypeInput | null,
  and?: Array< ModelSetFilterInput | null > | null,
  or?: Array< ModelSetFilterInput | null > | null,
  not?: ModelSetFilterInput | null,
  logSetsId?: ModelIDInput | null,
};

export type ModelSubscriptionUserFilterInput = {
  sub?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionUserFilterInput | null > | null,
  or?: Array< ModelSubscriptionUserFilterInput | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionRoutineFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  sub?: ModelSubscriptionStringInput | null,
  days?: ModelSubscriptionIntInput | null,
  notes?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionRoutineFilterInput | null > | null,
  or?: Array< ModelSubscriptionRoutineFilterInput | null > | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  in?: Array< number | null > | null,
  notIn?: Array< number | null > | null,
};

export type ModelSubscriptionSectionFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  sub?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionSectionFilterInput | null > | null,
  or?: Array< ModelSubscriptionSectionFilterInput | null > | null,
};

export type ModelSubscriptionWorkoutFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  sub?: ModelSubscriptionStringInput | null,
  type?: ModelSubscriptionStringInput | null,
  notes?: ModelSubscriptionStringInput | null,
  units?: ModelSubscriptionStringInput | null,
  targetSetRange?: ModelSubscriptionIntInput | null,
  targetRepRange?: ModelSubscriptionIntInput | null,
  targetDurationRange?: ModelSubscriptionIntInput | null,
  and?: Array< ModelSubscriptionWorkoutFilterInput | null > | null,
  or?: Array< ModelSubscriptionWorkoutFilterInput | null > | null,
};

export type ModelSubscriptionLogFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  timestamp?: ModelSubscriptionIntInput | null,
  notes?: ModelSubscriptionStringInput | null,
  units?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionLogFilterInput | null > | null,
  or?: Array< ModelSubscriptionLogFilterInput | null > | null,
};

export type ModelSubscriptionSetFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  weight?: ModelSubscriptionIntInput | null,
  reps?: ModelSubscriptionIntInput | null,
  duration?: ModelSubscriptionIntInput | null,
  units?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionSetFilterInput | null > | null,
  or?: Array< ModelSubscriptionSetFilterInput | null > | null,
};

export type CreateUserMutationVariables = {
  input: CreateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type CreateUserMutation = {
  createUser?:  {
    __typename: "User",
    sub: string,
    workouts?:  {
      __typename: "ModelWorkoutConnection",
      items:  Array< {
        __typename: "Workout",
        id: string,
        name: string,
        sub: string,
        type: WorkoutType,
        notes?: string | null,
        units?: WorkoutUnitType | null,
        targetSetRange?: Array< number | null > | null,
        targetRepRange?: Array< number | null > | null,
        targetDurationRange?: Array< number | null > | null,
        createdAt: string,
        updatedAt: string,
        userWorkoutsId?: string | null,
        sectionWorkoutsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    routines?:  {
      __typename: "ModelRoutineConnection",
      items:  Array< {
        __typename: "Routine",
        id: string,
        name: string,
        sub: string,
        days?: Array< number | null > | null,
        notes?: string | null,
        createdAt: string,
        updatedAt: string,
        userRoutinesId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateUserMutationVariables = {
  input: UpdateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type UpdateUserMutation = {
  updateUser?:  {
    __typename: "User",
    sub: string,
    workouts?:  {
      __typename: "ModelWorkoutConnection",
      items:  Array< {
        __typename: "Workout",
        id: string,
        name: string,
        sub: string,
        type: WorkoutType,
        notes?: string | null,
        units?: WorkoutUnitType | null,
        targetSetRange?: Array< number | null > | null,
        targetRepRange?: Array< number | null > | null,
        targetDurationRange?: Array< number | null > | null,
        createdAt: string,
        updatedAt: string,
        userWorkoutsId?: string | null,
        sectionWorkoutsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    routines?:  {
      __typename: "ModelRoutineConnection",
      items:  Array< {
        __typename: "Routine",
        id: string,
        name: string,
        sub: string,
        days?: Array< number | null > | null,
        notes?: string | null,
        createdAt: string,
        updatedAt: string,
        userRoutinesId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteUserMutationVariables = {
  input: DeleteUserInput,
  condition?: ModelUserConditionInput | null,
};

export type DeleteUserMutation = {
  deleteUser?:  {
    __typename: "User",
    sub: string,
    workouts?:  {
      __typename: "ModelWorkoutConnection",
      items:  Array< {
        __typename: "Workout",
        id: string,
        name: string,
        sub: string,
        type: WorkoutType,
        notes?: string | null,
        units?: WorkoutUnitType | null,
        targetSetRange?: Array< number | null > | null,
        targetRepRange?: Array< number | null > | null,
        targetDurationRange?: Array< number | null > | null,
        createdAt: string,
        updatedAt: string,
        userWorkoutsId?: string | null,
        sectionWorkoutsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    routines?:  {
      __typename: "ModelRoutineConnection",
      items:  Array< {
        __typename: "Routine",
        id: string,
        name: string,
        sub: string,
        days?: Array< number | null > | null,
        notes?: string | null,
        createdAt: string,
        updatedAt: string,
        userRoutinesId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateRoutineMutationVariables = {
  input: CreateRoutineInput,
  condition?: ModelRoutineConditionInput | null,
};

export type CreateRoutineMutation = {
  createRoutine?:  {
    __typename: "Routine",
    id: string,
    name: string,
    sub: string,
    days?: Array< number | null > | null,
    sections?:  {
      __typename: "ModelSectionConnection",
      items:  Array< {
        __typename: "Section",
        id: string,
        name: string,
        sub: string,
        createdAt: string,
        updatedAt: string,
        routineSectionsId: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    notes?: string | null,
    createdAt: string,
    updatedAt: string,
    userRoutinesId?: string | null,
  } | null,
};

export type UpdateRoutineMutationVariables = {
  input: UpdateRoutineInput,
  condition?: ModelRoutineConditionInput | null,
};

export type UpdateRoutineMutation = {
  updateRoutine?:  {
    __typename: "Routine",
    id: string,
    name: string,
    sub: string,
    days?: Array< number | null > | null,
    sections?:  {
      __typename: "ModelSectionConnection",
      items:  Array< {
        __typename: "Section",
        id: string,
        name: string,
        sub: string,
        createdAt: string,
        updatedAt: string,
        routineSectionsId: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    notes?: string | null,
    createdAt: string,
    updatedAt: string,
    userRoutinesId?: string | null,
  } | null,
};

export type DeleteRoutineMutationVariables = {
  input: DeleteRoutineInput,
  condition?: ModelRoutineConditionInput | null,
};

export type DeleteRoutineMutation = {
  deleteRoutine?:  {
    __typename: "Routine",
    id: string,
    name: string,
    sub: string,
    days?: Array< number | null > | null,
    sections?:  {
      __typename: "ModelSectionConnection",
      items:  Array< {
        __typename: "Section",
        id: string,
        name: string,
        sub: string,
        createdAt: string,
        updatedAt: string,
        routineSectionsId: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    notes?: string | null,
    createdAt: string,
    updatedAt: string,
    userRoutinesId?: string | null,
  } | null,
};

export type CreateSectionMutationVariables = {
  input: CreateSectionInput,
  condition?: ModelSectionConditionInput | null,
};

export type CreateSectionMutation = {
  createSection?:  {
    __typename: "Section",
    id: string,
    name: string,
    sub: string,
    routine?:  {
      __typename: "Routine",
      id: string,
      name: string,
      sub: string,
      days?: Array< number | null > | null,
      sections?:  {
        __typename: "ModelSectionConnection",
        nextToken?: string | null,
      } | null,
      notes?: string | null,
      createdAt: string,
      updatedAt: string,
      userRoutinesId?: string | null,
    } | null,
    workouts?:  {
      __typename: "ModelWorkoutConnection",
      items:  Array< {
        __typename: "Workout",
        id: string,
        name: string,
        sub: string,
        type: WorkoutType,
        notes?: string | null,
        units?: WorkoutUnitType | null,
        targetSetRange?: Array< number | null > | null,
        targetRepRange?: Array< number | null > | null,
        targetDurationRange?: Array< number | null > | null,
        createdAt: string,
        updatedAt: string,
        userWorkoutsId?: string | null,
        sectionWorkoutsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    routineSectionsId: string,
  } | null,
};

export type UpdateSectionMutationVariables = {
  input: UpdateSectionInput,
  condition?: ModelSectionConditionInput | null,
};

export type UpdateSectionMutation = {
  updateSection?:  {
    __typename: "Section",
    id: string,
    name: string,
    sub: string,
    routine?:  {
      __typename: "Routine",
      id: string,
      name: string,
      sub: string,
      days?: Array< number | null > | null,
      sections?:  {
        __typename: "ModelSectionConnection",
        nextToken?: string | null,
      } | null,
      notes?: string | null,
      createdAt: string,
      updatedAt: string,
      userRoutinesId?: string | null,
    } | null,
    workouts?:  {
      __typename: "ModelWorkoutConnection",
      items:  Array< {
        __typename: "Workout",
        id: string,
        name: string,
        sub: string,
        type: WorkoutType,
        notes?: string | null,
        units?: WorkoutUnitType | null,
        targetSetRange?: Array< number | null > | null,
        targetRepRange?: Array< number | null > | null,
        targetDurationRange?: Array< number | null > | null,
        createdAt: string,
        updatedAt: string,
        userWorkoutsId?: string | null,
        sectionWorkoutsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    routineSectionsId: string,
  } | null,
};

export type DeleteSectionMutationVariables = {
  input: DeleteSectionInput,
  condition?: ModelSectionConditionInput | null,
};

export type DeleteSectionMutation = {
  deleteSection?:  {
    __typename: "Section",
    id: string,
    name: string,
    sub: string,
    routine?:  {
      __typename: "Routine",
      id: string,
      name: string,
      sub: string,
      days?: Array< number | null > | null,
      sections?:  {
        __typename: "ModelSectionConnection",
        nextToken?: string | null,
      } | null,
      notes?: string | null,
      createdAt: string,
      updatedAt: string,
      userRoutinesId?: string | null,
    } | null,
    workouts?:  {
      __typename: "ModelWorkoutConnection",
      items:  Array< {
        __typename: "Workout",
        id: string,
        name: string,
        sub: string,
        type: WorkoutType,
        notes?: string | null,
        units?: WorkoutUnitType | null,
        targetSetRange?: Array< number | null > | null,
        targetRepRange?: Array< number | null > | null,
        targetDurationRange?: Array< number | null > | null,
        createdAt: string,
        updatedAt: string,
        userWorkoutsId?: string | null,
        sectionWorkoutsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    routineSectionsId: string,
  } | null,
};

export type CreateWorkoutMutationVariables = {
  input: CreateWorkoutInput,
  condition?: ModelWorkoutConditionInput | null,
};

export type CreateWorkoutMutation = {
  createWorkout?:  {
    __typename: "Workout",
    id: string,
    name: string,
    sub: string,
    type: WorkoutType,
    logs?:  {
      __typename: "ModelLogConnection",
      items:  Array< {
        __typename: "Log",
        id: string,
        name: string,
        timestamp?: number | null,
        notes?: string | null,
        units?: WorkoutUnitType | null,
        createdAt: string,
        updatedAt: string,
        workoutLogsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    notes?: string | null,
    units?: WorkoutUnitType | null,
    targetSetRange?: Array< number | null > | null,
    targetRepRange?: Array< number | null > | null,
    targetDurationRange?: Array< number | null > | null,
    createdAt: string,
    updatedAt: string,
    userWorkoutsId?: string | null,
    sectionWorkoutsId?: string | null,
  } | null,
};

export type UpdateWorkoutMutationVariables = {
  input: UpdateWorkoutInput,
  condition?: ModelWorkoutConditionInput | null,
};

export type UpdateWorkoutMutation = {
  updateWorkout?:  {
    __typename: "Workout",
    id: string,
    name: string,
    sub: string,
    type: WorkoutType,
    logs?:  {
      __typename: "ModelLogConnection",
      items:  Array< {
        __typename: "Log",
        id: string,
        name: string,
        timestamp?: number | null,
        notes?: string | null,
        units?: WorkoutUnitType | null,
        createdAt: string,
        updatedAt: string,
        workoutLogsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    notes?: string | null,
    units?: WorkoutUnitType | null,
    targetSetRange?: Array< number | null > | null,
    targetRepRange?: Array< number | null > | null,
    targetDurationRange?: Array< number | null > | null,
    createdAt: string,
    updatedAt: string,
    userWorkoutsId?: string | null,
    sectionWorkoutsId?: string | null,
  } | null,
};

export type DeleteWorkoutMutationVariables = {
  input: DeleteWorkoutInput,
  condition?: ModelWorkoutConditionInput | null,
};

export type DeleteWorkoutMutation = {
  deleteWorkout?:  {
    __typename: "Workout",
    id: string,
    name: string,
    sub: string,
    type: WorkoutType,
    logs?:  {
      __typename: "ModelLogConnection",
      items:  Array< {
        __typename: "Log",
        id: string,
        name: string,
        timestamp?: number | null,
        notes?: string | null,
        units?: WorkoutUnitType | null,
        createdAt: string,
        updatedAt: string,
        workoutLogsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    notes?: string | null,
    units?: WorkoutUnitType | null,
    targetSetRange?: Array< number | null > | null,
    targetRepRange?: Array< number | null > | null,
    targetDurationRange?: Array< number | null > | null,
    createdAt: string,
    updatedAt: string,
    userWorkoutsId?: string | null,
    sectionWorkoutsId?: string | null,
  } | null,
};

export type CreateLogMutationVariables = {
  input: CreateLogInput,
  condition?: ModelLogConditionInput | null,
};

export type CreateLogMutation = {
  createLog?:  {
    __typename: "Log",
    id: string,
    name: string,
    timestamp?: number | null,
    sets?:  {
      __typename: "ModelSetConnection",
      items:  Array< {
        __typename: "Set",
        id: string,
        weight?: number | null,
        reps?: number | null,
        duration?: number | null,
        units?: WorkoutUnitType | null,
        createdAt: string,
        updatedAt: string,
        logSetsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    notes?: string | null,
    units?: WorkoutUnitType | null,
    createdAt: string,
    updatedAt: string,
    workoutLogsId?: string | null,
  } | null,
};

export type UpdateLogMutationVariables = {
  input: UpdateLogInput,
  condition?: ModelLogConditionInput | null,
};

export type UpdateLogMutation = {
  updateLog?:  {
    __typename: "Log",
    id: string,
    name: string,
    timestamp?: number | null,
    sets?:  {
      __typename: "ModelSetConnection",
      items:  Array< {
        __typename: "Set",
        id: string,
        weight?: number | null,
        reps?: number | null,
        duration?: number | null,
        units?: WorkoutUnitType | null,
        createdAt: string,
        updatedAt: string,
        logSetsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    notes?: string | null,
    units?: WorkoutUnitType | null,
    createdAt: string,
    updatedAt: string,
    workoutLogsId?: string | null,
  } | null,
};

export type DeleteLogMutationVariables = {
  input: DeleteLogInput,
  condition?: ModelLogConditionInput | null,
};

export type DeleteLogMutation = {
  deleteLog?:  {
    __typename: "Log",
    id: string,
    name: string,
    timestamp?: number | null,
    sets?:  {
      __typename: "ModelSetConnection",
      items:  Array< {
        __typename: "Set",
        id: string,
        weight?: number | null,
        reps?: number | null,
        duration?: number | null,
        units?: WorkoutUnitType | null,
        createdAt: string,
        updatedAt: string,
        logSetsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    notes?: string | null,
    units?: WorkoutUnitType | null,
    createdAt: string,
    updatedAt: string,
    workoutLogsId?: string | null,
  } | null,
};

export type CreateSetMutationVariables = {
  input: CreateSetInput,
  condition?: ModelSetConditionInput | null,
};

export type CreateSetMutation = {
  createSet?:  {
    __typename: "Set",
    id: string,
    weight?: number | null,
    reps?: number | null,
    duration?: number | null,
    units?: WorkoutUnitType | null,
    createdAt: string,
    updatedAt: string,
    logSetsId?: string | null,
  } | null,
};

export type UpdateSetMutationVariables = {
  input: UpdateSetInput,
  condition?: ModelSetConditionInput | null,
};

export type UpdateSetMutation = {
  updateSet?:  {
    __typename: "Set",
    id: string,
    weight?: number | null,
    reps?: number | null,
    duration?: number | null,
    units?: WorkoutUnitType | null,
    createdAt: string,
    updatedAt: string,
    logSetsId?: string | null,
  } | null,
};

export type DeleteSetMutationVariables = {
  input: DeleteSetInput,
  condition?: ModelSetConditionInput | null,
};

export type DeleteSetMutation = {
  deleteSet?:  {
    __typename: "Set",
    id: string,
    weight?: number | null,
    reps?: number | null,
    duration?: number | null,
    units?: WorkoutUnitType | null,
    createdAt: string,
    updatedAt: string,
    logSetsId?: string | null,
  } | null,
};

export type GetUserQueryVariables = {
  id: string,
};

export type GetUserQuery = {
  getUser?:  {
    __typename: "User",
    sub: string,
    workouts?:  {
      __typename: "ModelWorkoutConnection",
      items:  Array< {
        __typename: "Workout",
        id: string,
        name: string,
        sub: string,
        type: WorkoutType,
        notes?: string | null,
        units?: WorkoutUnitType | null,
        targetSetRange?: Array< number | null > | null,
        targetRepRange?: Array< number | null > | null,
        targetDurationRange?: Array< number | null > | null,
        createdAt: string,
        updatedAt: string,
        userWorkoutsId?: string | null,
        sectionWorkoutsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    routines?:  {
      __typename: "ModelRoutineConnection",
      items:  Array< {
        __typename: "Routine",
        id: string,
        name: string,
        sub: string,
        days?: Array< number | null > | null,
        notes?: string | null,
        createdAt: string,
        updatedAt: string,
        userRoutinesId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListUsersQueryVariables = {
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUsersQuery = {
  listUsers?:  {
    __typename: "ModelUserConnection",
    items:  Array< {
      __typename: "User",
      sub: string,
      workouts?:  {
        __typename: "ModelWorkoutConnection",
        nextToken?: string | null,
      } | null,
      routines?:  {
        __typename: "ModelRoutineConnection",
        nextToken?: string | null,
      } | null,
      id: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetRoutineQueryVariables = {
  id: string,
};

export type GetRoutineQuery = {
  getRoutine?:  {
    __typename: "Routine",
    id: string,
    name: string,
    sub: string,
    days?: Array< number | null > | null,
    sections?:  {
      __typename: "ModelSectionConnection",
      items:  Array< {
        __typename: "Section",
        id: string,
        name: string,
        sub: string,
        createdAt: string,
        updatedAt: string,
        routineSectionsId: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    notes?: string | null,
    createdAt: string,
    updatedAt: string,
    userRoutinesId?: string | null,
  } | null,
};

export type ListRoutinesQueryVariables = {
  filter?: ModelRoutineFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListRoutinesQuery = {
  listRoutines?:  {
    __typename: "ModelRoutineConnection",
    items:  Array< {
      __typename: "Routine",
      id: string,
      name: string,
      sub: string,
      days?: Array< number | null > | null,
      sections?:  {
        __typename: "ModelSectionConnection",
        nextToken?: string | null,
      } | null,
      notes?: string | null,
      createdAt: string,
      updatedAt: string,
      userRoutinesId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetSectionQueryVariables = {
  id: string,
};

export type GetSectionQuery = {
  getSection?:  {
    __typename: "Section",
    id: string,
    name: string,
    sub: string,
    routine?:  {
      __typename: "Routine",
      id: string,
      name: string,
      sub: string,
      days?: Array< number | null > | null,
      sections?:  {
        __typename: "ModelSectionConnection",
        nextToken?: string | null,
      } | null,
      notes?: string | null,
      createdAt: string,
      updatedAt: string,
      userRoutinesId?: string | null,
    } | null,
    workouts?:  {
      __typename: "ModelWorkoutConnection",
      items:  Array< {
        __typename: "Workout",
        id: string,
        name: string,
        sub: string,
        type: WorkoutType,
        notes?: string | null,
        units?: WorkoutUnitType | null,
        targetSetRange?: Array< number | null > | null,
        targetRepRange?: Array< number | null > | null,
        targetDurationRange?: Array< number | null > | null,
        createdAt: string,
        updatedAt: string,
        userWorkoutsId?: string | null,
        sectionWorkoutsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    routineSectionsId: string,
  } | null,
};

export type ListSectionsQueryVariables = {
  filter?: ModelSectionFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListSectionsQuery = {
  listSections?:  {
    __typename: "ModelSectionConnection",
    items:  Array< {
      __typename: "Section",
      id: string,
      name: string,
      sub: string,
      routine?:  {
        __typename: "Routine",
        id: string,
        name: string,
        sub: string,
        days?: Array< number | null > | null,
        notes?: string | null,
        createdAt: string,
        updatedAt: string,
        userRoutinesId?: string | null,
      } | null,
      workouts?:  {
        __typename: "ModelWorkoutConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      routineSectionsId: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetWorkoutQueryVariables = {
  id: string,
};

export type GetWorkoutQuery = {
  getWorkout?:  {
    __typename: "Workout",
    id: string,
    name: string,
    sub: string,
    type: WorkoutType,
    logs?:  {
      __typename: "ModelLogConnection",
      items:  Array< {
        __typename: "Log",
        id: string,
        name: string,
        timestamp?: number | null,
        notes?: string | null,
        units?: WorkoutUnitType | null,
        createdAt: string,
        updatedAt: string,
        workoutLogsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    notes?: string | null,
    units?: WorkoutUnitType | null,
    targetSetRange?: Array< number | null > | null,
    targetRepRange?: Array< number | null > | null,
    targetDurationRange?: Array< number | null > | null,
    createdAt: string,
    updatedAt: string,
    userWorkoutsId?: string | null,
    sectionWorkoutsId?: string | null,
  } | null,
};

export type ListWorkoutsQueryVariables = {
  filter?: ModelWorkoutFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListWorkoutsQuery = {
  listWorkouts?:  {
    __typename: "ModelWorkoutConnection",
    items:  Array< {
      __typename: "Workout",
      id: string,
      name: string,
      sub: string,
      type: WorkoutType,
      logs?:  {
        __typename: "ModelLogConnection",
        nextToken?: string | null,
      } | null,
      notes?: string | null,
      units?: WorkoutUnitType | null,
      targetSetRange?: Array< number | null > | null,
      targetRepRange?: Array< number | null > | null,
      targetDurationRange?: Array< number | null > | null,
      createdAt: string,
      updatedAt: string,
      userWorkoutsId?: string | null,
      sectionWorkoutsId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetLogQueryVariables = {
  id: string,
};

export type GetLogQuery = {
  getLog?:  {
    __typename: "Log",
    id: string,
    name: string,
    timestamp?: number | null,
    sets?:  {
      __typename: "ModelSetConnection",
      items:  Array< {
        __typename: "Set",
        id: string,
        weight?: number | null,
        reps?: number | null,
        duration?: number | null,
        units?: WorkoutUnitType | null,
        createdAt: string,
        updatedAt: string,
        logSetsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    notes?: string | null,
    units?: WorkoutUnitType | null,
    createdAt: string,
    updatedAt: string,
    workoutLogsId?: string | null,
  } | null,
};

export type ListLogsQueryVariables = {
  filter?: ModelLogFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListLogsQuery = {
  listLogs?:  {
    __typename: "ModelLogConnection",
    items:  Array< {
      __typename: "Log",
      id: string,
      name: string,
      timestamp?: number | null,
      sets?:  {
        __typename: "ModelSetConnection",
        nextToken?: string | null,
      } | null,
      notes?: string | null,
      units?: WorkoutUnitType | null,
      createdAt: string,
      updatedAt: string,
      workoutLogsId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetSetQueryVariables = {
  id: string,
};

export type GetSetQuery = {
  getSet?:  {
    __typename: "Set",
    id: string,
    weight?: number | null,
    reps?: number | null,
    duration?: number | null,
    units?: WorkoutUnitType | null,
    createdAt: string,
    updatedAt: string,
    logSetsId?: string | null,
  } | null,
};

export type ListSetsQueryVariables = {
  filter?: ModelSetFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListSetsQuery = {
  listSets?:  {
    __typename: "ModelSetConnection",
    items:  Array< {
      __typename: "Set",
      id: string,
      weight?: number | null,
      reps?: number | null,
      duration?: number | null,
      units?: WorkoutUnitType | null,
      createdAt: string,
      updatedAt: string,
      logSetsId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
};

export type OnCreateUserSubscription = {
  onCreateUser?:  {
    __typename: "User",
    sub: string,
    workouts?:  {
      __typename: "ModelWorkoutConnection",
      items:  Array< {
        __typename: "Workout",
        id: string,
        name: string,
        sub: string,
        type: WorkoutType,
        notes?: string | null,
        units?: WorkoutUnitType | null,
        targetSetRange?: Array< number | null > | null,
        targetRepRange?: Array< number | null > | null,
        targetDurationRange?: Array< number | null > | null,
        createdAt: string,
        updatedAt: string,
        userWorkoutsId?: string | null,
        sectionWorkoutsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    routines?:  {
      __typename: "ModelRoutineConnection",
      items:  Array< {
        __typename: "Routine",
        id: string,
        name: string,
        sub: string,
        days?: Array< number | null > | null,
        notes?: string | null,
        createdAt: string,
        updatedAt: string,
        userRoutinesId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
};

export type OnUpdateUserSubscription = {
  onUpdateUser?:  {
    __typename: "User",
    sub: string,
    workouts?:  {
      __typename: "ModelWorkoutConnection",
      items:  Array< {
        __typename: "Workout",
        id: string,
        name: string,
        sub: string,
        type: WorkoutType,
        notes?: string | null,
        units?: WorkoutUnitType | null,
        targetSetRange?: Array< number | null > | null,
        targetRepRange?: Array< number | null > | null,
        targetDurationRange?: Array< number | null > | null,
        createdAt: string,
        updatedAt: string,
        userWorkoutsId?: string | null,
        sectionWorkoutsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    routines?:  {
      __typename: "ModelRoutineConnection",
      items:  Array< {
        __typename: "Routine",
        id: string,
        name: string,
        sub: string,
        days?: Array< number | null > | null,
        notes?: string | null,
        createdAt: string,
        updatedAt: string,
        userRoutinesId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
};

export type OnDeleteUserSubscription = {
  onDeleteUser?:  {
    __typename: "User",
    sub: string,
    workouts?:  {
      __typename: "ModelWorkoutConnection",
      items:  Array< {
        __typename: "Workout",
        id: string,
        name: string,
        sub: string,
        type: WorkoutType,
        notes?: string | null,
        units?: WorkoutUnitType | null,
        targetSetRange?: Array< number | null > | null,
        targetRepRange?: Array< number | null > | null,
        targetDurationRange?: Array< number | null > | null,
        createdAt: string,
        updatedAt: string,
        userWorkoutsId?: string | null,
        sectionWorkoutsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    routines?:  {
      __typename: "ModelRoutineConnection",
      items:  Array< {
        __typename: "Routine",
        id: string,
        name: string,
        sub: string,
        days?: Array< number | null > | null,
        notes?: string | null,
        createdAt: string,
        updatedAt: string,
        userRoutinesId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateRoutineSubscriptionVariables = {
  filter?: ModelSubscriptionRoutineFilterInput | null,
};

export type OnCreateRoutineSubscription = {
  onCreateRoutine?:  {
    __typename: "Routine",
    id: string,
    name: string,
    sub: string,
    days?: Array< number | null > | null,
    sections?:  {
      __typename: "ModelSectionConnection",
      items:  Array< {
        __typename: "Section",
        id: string,
        name: string,
        sub: string,
        createdAt: string,
        updatedAt: string,
        routineSectionsId: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    notes?: string | null,
    createdAt: string,
    updatedAt: string,
    userRoutinesId?: string | null,
  } | null,
};

export type OnUpdateRoutineSubscriptionVariables = {
  filter?: ModelSubscriptionRoutineFilterInput | null,
};

export type OnUpdateRoutineSubscription = {
  onUpdateRoutine?:  {
    __typename: "Routine",
    id: string,
    name: string,
    sub: string,
    days?: Array< number | null > | null,
    sections?:  {
      __typename: "ModelSectionConnection",
      items:  Array< {
        __typename: "Section",
        id: string,
        name: string,
        sub: string,
        createdAt: string,
        updatedAt: string,
        routineSectionsId: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    notes?: string | null,
    createdAt: string,
    updatedAt: string,
    userRoutinesId?: string | null,
  } | null,
};

export type OnDeleteRoutineSubscriptionVariables = {
  filter?: ModelSubscriptionRoutineFilterInput | null,
};

export type OnDeleteRoutineSubscription = {
  onDeleteRoutine?:  {
    __typename: "Routine",
    id: string,
    name: string,
    sub: string,
    days?: Array< number | null > | null,
    sections?:  {
      __typename: "ModelSectionConnection",
      items:  Array< {
        __typename: "Section",
        id: string,
        name: string,
        sub: string,
        createdAt: string,
        updatedAt: string,
        routineSectionsId: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    notes?: string | null,
    createdAt: string,
    updatedAt: string,
    userRoutinesId?: string | null,
  } | null,
};

export type OnCreateSectionSubscriptionVariables = {
  filter?: ModelSubscriptionSectionFilterInput | null,
};

export type OnCreateSectionSubscription = {
  onCreateSection?:  {
    __typename: "Section",
    id: string,
    name: string,
    sub: string,
    routine?:  {
      __typename: "Routine",
      id: string,
      name: string,
      sub: string,
      days?: Array< number | null > | null,
      sections?:  {
        __typename: "ModelSectionConnection",
        nextToken?: string | null,
      } | null,
      notes?: string | null,
      createdAt: string,
      updatedAt: string,
      userRoutinesId?: string | null,
    } | null,
    workouts?:  {
      __typename: "ModelWorkoutConnection",
      items:  Array< {
        __typename: "Workout",
        id: string,
        name: string,
        sub: string,
        type: WorkoutType,
        notes?: string | null,
        units?: WorkoutUnitType | null,
        targetSetRange?: Array< number | null > | null,
        targetRepRange?: Array< number | null > | null,
        targetDurationRange?: Array< number | null > | null,
        createdAt: string,
        updatedAt: string,
        userWorkoutsId?: string | null,
        sectionWorkoutsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    routineSectionsId: string,
  } | null,
};

export type OnUpdateSectionSubscriptionVariables = {
  filter?: ModelSubscriptionSectionFilterInput | null,
};

export type OnUpdateSectionSubscription = {
  onUpdateSection?:  {
    __typename: "Section",
    id: string,
    name: string,
    sub: string,
    routine?:  {
      __typename: "Routine",
      id: string,
      name: string,
      sub: string,
      days?: Array< number | null > | null,
      sections?:  {
        __typename: "ModelSectionConnection",
        nextToken?: string | null,
      } | null,
      notes?: string | null,
      createdAt: string,
      updatedAt: string,
      userRoutinesId?: string | null,
    } | null,
    workouts?:  {
      __typename: "ModelWorkoutConnection",
      items:  Array< {
        __typename: "Workout",
        id: string,
        name: string,
        sub: string,
        type: WorkoutType,
        notes?: string | null,
        units?: WorkoutUnitType | null,
        targetSetRange?: Array< number | null > | null,
        targetRepRange?: Array< number | null > | null,
        targetDurationRange?: Array< number | null > | null,
        createdAt: string,
        updatedAt: string,
        userWorkoutsId?: string | null,
        sectionWorkoutsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    routineSectionsId: string,
  } | null,
};

export type OnDeleteSectionSubscriptionVariables = {
  filter?: ModelSubscriptionSectionFilterInput | null,
};

export type OnDeleteSectionSubscription = {
  onDeleteSection?:  {
    __typename: "Section",
    id: string,
    name: string,
    sub: string,
    routine?:  {
      __typename: "Routine",
      id: string,
      name: string,
      sub: string,
      days?: Array< number | null > | null,
      sections?:  {
        __typename: "ModelSectionConnection",
        nextToken?: string | null,
      } | null,
      notes?: string | null,
      createdAt: string,
      updatedAt: string,
      userRoutinesId?: string | null,
    } | null,
    workouts?:  {
      __typename: "ModelWorkoutConnection",
      items:  Array< {
        __typename: "Workout",
        id: string,
        name: string,
        sub: string,
        type: WorkoutType,
        notes?: string | null,
        units?: WorkoutUnitType | null,
        targetSetRange?: Array< number | null > | null,
        targetRepRange?: Array< number | null > | null,
        targetDurationRange?: Array< number | null > | null,
        createdAt: string,
        updatedAt: string,
        userWorkoutsId?: string | null,
        sectionWorkoutsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    routineSectionsId: string,
  } | null,
};

export type OnCreateWorkoutSubscriptionVariables = {
  filter?: ModelSubscriptionWorkoutFilterInput | null,
};

export type OnCreateWorkoutSubscription = {
  onCreateWorkout?:  {
    __typename: "Workout",
    id: string,
    name: string,
    sub: string,
    type: WorkoutType,
    logs?:  {
      __typename: "ModelLogConnection",
      items:  Array< {
        __typename: "Log",
        id: string,
        name: string,
        timestamp?: number | null,
        notes?: string | null,
        units?: WorkoutUnitType | null,
        createdAt: string,
        updatedAt: string,
        workoutLogsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    notes?: string | null,
    units?: WorkoutUnitType | null,
    targetSetRange?: Array< number | null > | null,
    targetRepRange?: Array< number | null > | null,
    targetDurationRange?: Array< number | null > | null,
    createdAt: string,
    updatedAt: string,
    userWorkoutsId?: string | null,
    sectionWorkoutsId?: string | null,
  } | null,
};

export type OnUpdateWorkoutSubscriptionVariables = {
  filter?: ModelSubscriptionWorkoutFilterInput | null,
};

export type OnUpdateWorkoutSubscription = {
  onUpdateWorkout?:  {
    __typename: "Workout",
    id: string,
    name: string,
    sub: string,
    type: WorkoutType,
    logs?:  {
      __typename: "ModelLogConnection",
      items:  Array< {
        __typename: "Log",
        id: string,
        name: string,
        timestamp?: number | null,
        notes?: string | null,
        units?: WorkoutUnitType | null,
        createdAt: string,
        updatedAt: string,
        workoutLogsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    notes?: string | null,
    units?: WorkoutUnitType | null,
    targetSetRange?: Array< number | null > | null,
    targetRepRange?: Array< number | null > | null,
    targetDurationRange?: Array< number | null > | null,
    createdAt: string,
    updatedAt: string,
    userWorkoutsId?: string | null,
    sectionWorkoutsId?: string | null,
  } | null,
};

export type OnDeleteWorkoutSubscriptionVariables = {
  filter?: ModelSubscriptionWorkoutFilterInput | null,
};

export type OnDeleteWorkoutSubscription = {
  onDeleteWorkout?:  {
    __typename: "Workout",
    id: string,
    name: string,
    sub: string,
    type: WorkoutType,
    logs?:  {
      __typename: "ModelLogConnection",
      items:  Array< {
        __typename: "Log",
        id: string,
        name: string,
        timestamp?: number | null,
        notes?: string | null,
        units?: WorkoutUnitType | null,
        createdAt: string,
        updatedAt: string,
        workoutLogsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    notes?: string | null,
    units?: WorkoutUnitType | null,
    targetSetRange?: Array< number | null > | null,
    targetRepRange?: Array< number | null > | null,
    targetDurationRange?: Array< number | null > | null,
    createdAt: string,
    updatedAt: string,
    userWorkoutsId?: string | null,
    sectionWorkoutsId?: string | null,
  } | null,
};

export type OnCreateLogSubscriptionVariables = {
  filter?: ModelSubscriptionLogFilterInput | null,
};

export type OnCreateLogSubscription = {
  onCreateLog?:  {
    __typename: "Log",
    id: string,
    name: string,
    timestamp?: number | null,
    sets?:  {
      __typename: "ModelSetConnection",
      items:  Array< {
        __typename: "Set",
        id: string,
        weight?: number | null,
        reps?: number | null,
        duration?: number | null,
        units?: WorkoutUnitType | null,
        createdAt: string,
        updatedAt: string,
        logSetsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    notes?: string | null,
    units?: WorkoutUnitType | null,
    createdAt: string,
    updatedAt: string,
    workoutLogsId?: string | null,
  } | null,
};

export type OnUpdateLogSubscriptionVariables = {
  filter?: ModelSubscriptionLogFilterInput | null,
};

export type OnUpdateLogSubscription = {
  onUpdateLog?:  {
    __typename: "Log",
    id: string,
    name: string,
    timestamp?: number | null,
    sets?:  {
      __typename: "ModelSetConnection",
      items:  Array< {
        __typename: "Set",
        id: string,
        weight?: number | null,
        reps?: number | null,
        duration?: number | null,
        units?: WorkoutUnitType | null,
        createdAt: string,
        updatedAt: string,
        logSetsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    notes?: string | null,
    units?: WorkoutUnitType | null,
    createdAt: string,
    updatedAt: string,
    workoutLogsId?: string | null,
  } | null,
};

export type OnDeleteLogSubscriptionVariables = {
  filter?: ModelSubscriptionLogFilterInput | null,
};

export type OnDeleteLogSubscription = {
  onDeleteLog?:  {
    __typename: "Log",
    id: string,
    name: string,
    timestamp?: number | null,
    sets?:  {
      __typename: "ModelSetConnection",
      items:  Array< {
        __typename: "Set",
        id: string,
        weight?: number | null,
        reps?: number | null,
        duration?: number | null,
        units?: WorkoutUnitType | null,
        createdAt: string,
        updatedAt: string,
        logSetsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    notes?: string | null,
    units?: WorkoutUnitType | null,
    createdAt: string,
    updatedAt: string,
    workoutLogsId?: string | null,
  } | null,
};

export type OnCreateSetSubscriptionVariables = {
  filter?: ModelSubscriptionSetFilterInput | null,
};

export type OnCreateSetSubscription = {
  onCreateSet?:  {
    __typename: "Set",
    id: string,
    weight?: number | null,
    reps?: number | null,
    duration?: number | null,
    units?: WorkoutUnitType | null,
    createdAt: string,
    updatedAt: string,
    logSetsId?: string | null,
  } | null,
};

export type OnUpdateSetSubscriptionVariables = {
  filter?: ModelSubscriptionSetFilterInput | null,
};

export type OnUpdateSetSubscription = {
  onUpdateSet?:  {
    __typename: "Set",
    id: string,
    weight?: number | null,
    reps?: number | null,
    duration?: number | null,
    units?: WorkoutUnitType | null,
    createdAt: string,
    updatedAt: string,
    logSetsId?: string | null,
  } | null,
};

export type OnDeleteSetSubscriptionVariables = {
  filter?: ModelSubscriptionSetFilterInput | null,
};

export type OnDeleteSetSubscription = {
  onDeleteSet?:  {
    __typename: "Set",
    id: string,
    weight?: number | null,
    reps?: number | null,
    duration?: number | null,
    units?: WorkoutUnitType | null,
    createdAt: string,
    updatedAt: string,
    logSetsId?: string | null,
  } | null,
};
