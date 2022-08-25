/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateUserInput = {
  id?: string | null,
  username: string,
};

export type ModelUserConditionInput = {
  username?: ModelStringInput | null,
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
  id: string,
  username: string,
  workouts?: ModelWorkoutConnection | null,
  routines?: ModelRoutineConnection | null,
  createdAt: string,
  updatedAt: string,
  owner?: string | null,
};

export type ModelWorkoutConnection = {
  __typename: "ModelWorkoutConnection",
  items:  Array<Workout | null >,
  nextToken?: string | null,
};

export type Workout = {
  __typename: "Workout",
  id: string,
  name?: string | null,
  user: User,
  routines?: ModelRoutineWorkoutConnection | null,
  sections?: ModelSectionWorkoutConnection | null,
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
  owner?: string | null,
};

export type ModelRoutineWorkoutConnection = {
  __typename: "ModelRoutineWorkoutConnection",
  items:  Array<RoutineWorkout | null >,
  nextToken?: string | null,
};

export type RoutineWorkout = {
  __typename: "RoutineWorkout",
  id: string,
  routineID: string,
  workoutID: string,
  routine: Routine,
  workout: Workout,
  createdAt: string,
  updatedAt: string,
  owner?: string | null,
};

export type Routine = {
  __typename: "Routine",
  id: string,
  user: User,
  name: string,
  sub: string,
  days?: Array< number | null > | null,
  sections?: ModelSectionConnection | null,
  workouts?: ModelRoutineWorkoutConnection | null,
  notes?: string | null,
  createdAt: string,
  updatedAt: string,
  userRoutinesId?: string | null,
  owner?: string | null,
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
  routine?: Routine | null,
  workouts?: ModelSectionWorkoutConnection | null,
  createdAt: string,
  updatedAt: string,
  routineSectionsId: string,
  owner?: string | null,
};

export type ModelSectionWorkoutConnection = {
  __typename: "ModelSectionWorkoutConnection",
  items:  Array<SectionWorkout | null >,
  nextToken?: string | null,
};

export type SectionWorkout = {
  __typename: "SectionWorkout",
  id: string,
  sectionID: string,
  workoutID: string,
  section: Section,
  workout: Workout,
  createdAt: string,
  updatedAt: string,
  owner?: string | null,
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
  workout?: Workout | null,
  sets?: ModelSetConnection | null,
  notes?: string | null,
  units?: WorkoutUnitType | null,
  createdAt: string,
  updatedAt: string,
  workoutLogsId?: string | null,
  owner?: string | null,
};

export type ModelSetConnection = {
  __typename: "ModelSetConnection",
  items:  Array<Set | null >,
  nextToken?: string | null,
};

export type Set = {
  __typename: "Set",
  id: string,
  log: Log,
  weight?: number | null,
  reps?: number | null,
  duration?: number | null,
  units?: WorkoutUnitType | null,
  createdAt: string,
  updatedAt: string,
  logSetsId?: string | null,
  owner?: string | null,
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

export type UpdateUserInput = {
  id: string,
  username?: string | null,
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
  routineSectionsId: string,
};

export type ModelSectionConditionInput = {
  name?: ModelStringInput | null,
  and?: Array< ModelSectionConditionInput | null > | null,
  or?: Array< ModelSectionConditionInput | null > | null,
  not?: ModelSectionConditionInput | null,
  routineSectionsId?: ModelIDInput | null,
};

export type UpdateSectionInput = {
  id: string,
  name?: string | null,
  routineSectionsId: string,
};

export type DeleteSectionInput = {
  id: string,
};

export type CreateWorkoutInput = {
  id?: string | null,
  name?: string | null,
  type: WorkoutType,
  notes?: string | null,
  units?: WorkoutUnitType | null,
  targetSetRange?: Array< number | null > | null,
  targetRepRange?: Array< number | null > | null,
  targetDurationRange?: Array< number | null > | null,
  userWorkoutsId?: string | null,
};

export type ModelWorkoutConditionInput = {
  name?: ModelStringInput | null,
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
  type?: WorkoutType | null,
  notes?: string | null,
  units?: WorkoutUnitType | null,
  targetSetRange?: Array< number | null > | null,
  targetRepRange?: Array< number | null > | null,
  targetDurationRange?: Array< number | null > | null,
  userWorkoutsId?: string | null,
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

export type CreateRoutineWorkoutInput = {
  id?: string | null,
  routineID: string,
  workoutID: string,
};

export type ModelRoutineWorkoutConditionInput = {
  routineID?: ModelIDInput | null,
  workoutID?: ModelIDInput | null,
  and?: Array< ModelRoutineWorkoutConditionInput | null > | null,
  or?: Array< ModelRoutineWorkoutConditionInput | null > | null,
  not?: ModelRoutineWorkoutConditionInput | null,
};

export type UpdateRoutineWorkoutInput = {
  id: string,
  routineID?: string | null,
  workoutID?: string | null,
};

export type DeleteRoutineWorkoutInput = {
  id: string,
};

export type CreateSectionWorkoutInput = {
  id?: string | null,
  sectionID: string,
  workoutID: string,
};

export type ModelSectionWorkoutConditionInput = {
  sectionID?: ModelIDInput | null,
  workoutID?: ModelIDInput | null,
  and?: Array< ModelSectionWorkoutConditionInput | null > | null,
  or?: Array< ModelSectionWorkoutConditionInput | null > | null,
  not?: ModelSectionWorkoutConditionInput | null,
};

export type UpdateSectionWorkoutInput = {
  id: string,
  sectionID?: string | null,
  workoutID?: string | null,
};

export type DeleteSectionWorkoutInput = {
  id: string,
};

export type ModelUserFilterInput = {
  id?: ModelIDInput | null,
  username?: ModelStringInput | null,
  and?: Array< ModelUserFilterInput | null > | null,
  or?: Array< ModelUserFilterInput | null > | null,
  not?: ModelUserFilterInput | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


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
  and?: Array< ModelSectionFilterInput | null > | null,
  or?: Array< ModelSectionFilterInput | null > | null,
  not?: ModelSectionFilterInput | null,
  routineSectionsId?: ModelIDInput | null,
};

export type ModelWorkoutFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
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

export type ModelRoutineWorkoutFilterInput = {
  id?: ModelIDInput | null,
  routineID?: ModelIDInput | null,
  workoutID?: ModelIDInput | null,
  and?: Array< ModelRoutineWorkoutFilterInput | null > | null,
  or?: Array< ModelRoutineWorkoutFilterInput | null > | null,
  not?: ModelRoutineWorkoutFilterInput | null,
};

export type ModelSectionWorkoutFilterInput = {
  id?: ModelIDInput | null,
  sectionID?: ModelIDInput | null,
  workoutID?: ModelIDInput | null,
  and?: Array< ModelSectionWorkoutFilterInput | null > | null,
  or?: Array< ModelSectionWorkoutFilterInput | null > | null,
  not?: ModelSectionWorkoutFilterInput | null,
};

export type CreateUserMutationVariables = {
  input: CreateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type CreateUserMutation = {
  createUser?:  {
    __typename: "User",
    id: string,
    username: string,
    workouts?:  {
      __typename: "ModelWorkoutConnection",
      items:  Array< {
        __typename: "Workout",
        id: string,
        name?: string | null,
        type: WorkoutType,
        notes?: string | null,
        units?: WorkoutUnitType | null,
        targetSetRange?: Array< number | null > | null,
        targetRepRange?: Array< number | null > | null,
        targetDurationRange?: Array< number | null > | null,
        createdAt: string,
        updatedAt: string,
        userWorkoutsId?: string | null,
        owner?: string | null,
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
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type UpdateUserMutationVariables = {
  input: UpdateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type UpdateUserMutation = {
  updateUser?:  {
    __typename: "User",
    id: string,
    username: string,
    workouts?:  {
      __typename: "ModelWorkoutConnection",
      items:  Array< {
        __typename: "Workout",
        id: string,
        name?: string | null,
        type: WorkoutType,
        notes?: string | null,
        units?: WorkoutUnitType | null,
        targetSetRange?: Array< number | null > | null,
        targetRepRange?: Array< number | null > | null,
        targetDurationRange?: Array< number | null > | null,
        createdAt: string,
        updatedAt: string,
        userWorkoutsId?: string | null,
        owner?: string | null,
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
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type DeleteUserMutationVariables = {
  input: DeleteUserInput,
  condition?: ModelUserConditionInput | null,
};

export type DeleteUserMutation = {
  deleteUser?:  {
    __typename: "User",
    id: string,
    username: string,
    workouts?:  {
      __typename: "ModelWorkoutConnection",
      items:  Array< {
        __typename: "Workout",
        id: string,
        name?: string | null,
        type: WorkoutType,
        notes?: string | null,
        units?: WorkoutUnitType | null,
        targetSetRange?: Array< number | null > | null,
        targetRepRange?: Array< number | null > | null,
        targetDurationRange?: Array< number | null > | null,
        createdAt: string,
        updatedAt: string,
        userWorkoutsId?: string | null,
        owner?: string | null,
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
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
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
    user:  {
      __typename: "User",
      id: string,
      username: string,
      workouts?:  {
        __typename: "ModelWorkoutConnection",
        nextToken?: string | null,
      } | null,
      routines?:  {
        __typename: "ModelRoutineConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    },
    name: string,
    sub: string,
    days?: Array< number | null > | null,
    sections?:  {
      __typename: "ModelSectionConnection",
      items:  Array< {
        __typename: "Section",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
        routineSectionsId: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    workouts?:  {
      __typename: "ModelRoutineWorkoutConnection",
      items:  Array< {
        __typename: "RoutineWorkout",
        id: string,
        routineID: string,
        workoutID: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    notes?: string | null,
    createdAt: string,
    updatedAt: string,
    userRoutinesId?: string | null,
    owner?: string | null,
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
    user:  {
      __typename: "User",
      id: string,
      username: string,
      workouts?:  {
        __typename: "ModelWorkoutConnection",
        nextToken?: string | null,
      } | null,
      routines?:  {
        __typename: "ModelRoutineConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    },
    name: string,
    sub: string,
    days?: Array< number | null > | null,
    sections?:  {
      __typename: "ModelSectionConnection",
      items:  Array< {
        __typename: "Section",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
        routineSectionsId: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    workouts?:  {
      __typename: "ModelRoutineWorkoutConnection",
      items:  Array< {
        __typename: "RoutineWorkout",
        id: string,
        routineID: string,
        workoutID: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    notes?: string | null,
    createdAt: string,
    updatedAt: string,
    userRoutinesId?: string | null,
    owner?: string | null,
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
    user:  {
      __typename: "User",
      id: string,
      username: string,
      workouts?:  {
        __typename: "ModelWorkoutConnection",
        nextToken?: string | null,
      } | null,
      routines?:  {
        __typename: "ModelRoutineConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    },
    name: string,
    sub: string,
    days?: Array< number | null > | null,
    sections?:  {
      __typename: "ModelSectionConnection",
      items:  Array< {
        __typename: "Section",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
        routineSectionsId: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    workouts?:  {
      __typename: "ModelRoutineWorkoutConnection",
      items:  Array< {
        __typename: "RoutineWorkout",
        id: string,
        routineID: string,
        workoutID: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    notes?: string | null,
    createdAt: string,
    updatedAt: string,
    userRoutinesId?: string | null,
    owner?: string | null,
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
    routine?:  {
      __typename: "Routine",
      id: string,
      user:  {
        __typename: "User",
        id: string,
        username: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      },
      name: string,
      sub: string,
      days?: Array< number | null > | null,
      sections?:  {
        __typename: "ModelSectionConnection",
        nextToken?: string | null,
      } | null,
      workouts?:  {
        __typename: "ModelRoutineWorkoutConnection",
        nextToken?: string | null,
      } | null,
      notes?: string | null,
      createdAt: string,
      updatedAt: string,
      userRoutinesId?: string | null,
      owner?: string | null,
    } | null,
    workouts?:  {
      __typename: "ModelSectionWorkoutConnection",
      items:  Array< {
        __typename: "SectionWorkout",
        id: string,
        sectionID: string,
        workoutID: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    routineSectionsId: string,
    owner?: string | null,
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
    routine?:  {
      __typename: "Routine",
      id: string,
      user:  {
        __typename: "User",
        id: string,
        username: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      },
      name: string,
      sub: string,
      days?: Array< number | null > | null,
      sections?:  {
        __typename: "ModelSectionConnection",
        nextToken?: string | null,
      } | null,
      workouts?:  {
        __typename: "ModelRoutineWorkoutConnection",
        nextToken?: string | null,
      } | null,
      notes?: string | null,
      createdAt: string,
      updatedAt: string,
      userRoutinesId?: string | null,
      owner?: string | null,
    } | null,
    workouts?:  {
      __typename: "ModelSectionWorkoutConnection",
      items:  Array< {
        __typename: "SectionWorkout",
        id: string,
        sectionID: string,
        workoutID: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    routineSectionsId: string,
    owner?: string | null,
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
    routine?:  {
      __typename: "Routine",
      id: string,
      user:  {
        __typename: "User",
        id: string,
        username: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      },
      name: string,
      sub: string,
      days?: Array< number | null > | null,
      sections?:  {
        __typename: "ModelSectionConnection",
        nextToken?: string | null,
      } | null,
      workouts?:  {
        __typename: "ModelRoutineWorkoutConnection",
        nextToken?: string | null,
      } | null,
      notes?: string | null,
      createdAt: string,
      updatedAt: string,
      userRoutinesId?: string | null,
      owner?: string | null,
    } | null,
    workouts?:  {
      __typename: "ModelSectionWorkoutConnection",
      items:  Array< {
        __typename: "SectionWorkout",
        id: string,
        sectionID: string,
        workoutID: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    routineSectionsId: string,
    owner?: string | null,
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
    name?: string | null,
    user:  {
      __typename: "User",
      id: string,
      username: string,
      workouts?:  {
        __typename: "ModelWorkoutConnection",
        nextToken?: string | null,
      } | null,
      routines?:  {
        __typename: "ModelRoutineConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    },
    routines?:  {
      __typename: "ModelRoutineWorkoutConnection",
      items:  Array< {
        __typename: "RoutineWorkout",
        id: string,
        routineID: string,
        workoutID: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    sections?:  {
      __typename: "ModelSectionWorkoutConnection",
      items:  Array< {
        __typename: "SectionWorkout",
        id: string,
        sectionID: string,
        workoutID: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
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
        owner?: string | null,
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
    owner?: string | null,
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
    name?: string | null,
    user:  {
      __typename: "User",
      id: string,
      username: string,
      workouts?:  {
        __typename: "ModelWorkoutConnection",
        nextToken?: string | null,
      } | null,
      routines?:  {
        __typename: "ModelRoutineConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    },
    routines?:  {
      __typename: "ModelRoutineWorkoutConnection",
      items:  Array< {
        __typename: "RoutineWorkout",
        id: string,
        routineID: string,
        workoutID: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    sections?:  {
      __typename: "ModelSectionWorkoutConnection",
      items:  Array< {
        __typename: "SectionWorkout",
        id: string,
        sectionID: string,
        workoutID: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
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
        owner?: string | null,
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
    owner?: string | null,
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
    name?: string | null,
    user:  {
      __typename: "User",
      id: string,
      username: string,
      workouts?:  {
        __typename: "ModelWorkoutConnection",
        nextToken?: string | null,
      } | null,
      routines?:  {
        __typename: "ModelRoutineConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    },
    routines?:  {
      __typename: "ModelRoutineWorkoutConnection",
      items:  Array< {
        __typename: "RoutineWorkout",
        id: string,
        routineID: string,
        workoutID: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    sections?:  {
      __typename: "ModelSectionWorkoutConnection",
      items:  Array< {
        __typename: "SectionWorkout",
        id: string,
        sectionID: string,
        workoutID: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
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
        owner?: string | null,
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
    owner?: string | null,
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
    workout?:  {
      __typename: "Workout",
      id: string,
      name?: string | null,
      user:  {
        __typename: "User",
        id: string,
        username: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      },
      routines?:  {
        __typename: "ModelRoutineWorkoutConnection",
        nextToken?: string | null,
      } | null,
      sections?:  {
        __typename: "ModelSectionWorkoutConnection",
        nextToken?: string | null,
      } | null,
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
      owner?: string | null,
    } | null,
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
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    notes?: string | null,
    units?: WorkoutUnitType | null,
    createdAt: string,
    updatedAt: string,
    workoutLogsId?: string | null,
    owner?: string | null,
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
    workout?:  {
      __typename: "Workout",
      id: string,
      name?: string | null,
      user:  {
        __typename: "User",
        id: string,
        username: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      },
      routines?:  {
        __typename: "ModelRoutineWorkoutConnection",
        nextToken?: string | null,
      } | null,
      sections?:  {
        __typename: "ModelSectionWorkoutConnection",
        nextToken?: string | null,
      } | null,
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
      owner?: string | null,
    } | null,
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
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    notes?: string | null,
    units?: WorkoutUnitType | null,
    createdAt: string,
    updatedAt: string,
    workoutLogsId?: string | null,
    owner?: string | null,
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
    workout?:  {
      __typename: "Workout",
      id: string,
      name?: string | null,
      user:  {
        __typename: "User",
        id: string,
        username: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      },
      routines?:  {
        __typename: "ModelRoutineWorkoutConnection",
        nextToken?: string | null,
      } | null,
      sections?:  {
        __typename: "ModelSectionWorkoutConnection",
        nextToken?: string | null,
      } | null,
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
      owner?: string | null,
    } | null,
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
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    notes?: string | null,
    units?: WorkoutUnitType | null,
    createdAt: string,
    updatedAt: string,
    workoutLogsId?: string | null,
    owner?: string | null,
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
    log:  {
      __typename: "Log",
      id: string,
      name: string,
      timestamp?: number | null,
      workout?:  {
        __typename: "Workout",
        id: string,
        name?: string | null,
        type: WorkoutType,
        notes?: string | null,
        units?: WorkoutUnitType | null,
        targetSetRange?: Array< number | null > | null,
        targetRepRange?: Array< number | null > | null,
        targetDurationRange?: Array< number | null > | null,
        createdAt: string,
        updatedAt: string,
        userWorkoutsId?: string | null,
        owner?: string | null,
      } | null,
      sets?:  {
        __typename: "ModelSetConnection",
        nextToken?: string | null,
      } | null,
      notes?: string | null,
      units?: WorkoutUnitType | null,
      createdAt: string,
      updatedAt: string,
      workoutLogsId?: string | null,
      owner?: string | null,
    },
    weight?: number | null,
    reps?: number | null,
    duration?: number | null,
    units?: WorkoutUnitType | null,
    createdAt: string,
    updatedAt: string,
    logSetsId?: string | null,
    owner?: string | null,
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
    log:  {
      __typename: "Log",
      id: string,
      name: string,
      timestamp?: number | null,
      workout?:  {
        __typename: "Workout",
        id: string,
        name?: string | null,
        type: WorkoutType,
        notes?: string | null,
        units?: WorkoutUnitType | null,
        targetSetRange?: Array< number | null > | null,
        targetRepRange?: Array< number | null > | null,
        targetDurationRange?: Array< number | null > | null,
        createdAt: string,
        updatedAt: string,
        userWorkoutsId?: string | null,
        owner?: string | null,
      } | null,
      sets?:  {
        __typename: "ModelSetConnection",
        nextToken?: string | null,
      } | null,
      notes?: string | null,
      units?: WorkoutUnitType | null,
      createdAt: string,
      updatedAt: string,
      workoutLogsId?: string | null,
      owner?: string | null,
    },
    weight?: number | null,
    reps?: number | null,
    duration?: number | null,
    units?: WorkoutUnitType | null,
    createdAt: string,
    updatedAt: string,
    logSetsId?: string | null,
    owner?: string | null,
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
    log:  {
      __typename: "Log",
      id: string,
      name: string,
      timestamp?: number | null,
      workout?:  {
        __typename: "Workout",
        id: string,
        name?: string | null,
        type: WorkoutType,
        notes?: string | null,
        units?: WorkoutUnitType | null,
        targetSetRange?: Array< number | null > | null,
        targetRepRange?: Array< number | null > | null,
        targetDurationRange?: Array< number | null > | null,
        createdAt: string,
        updatedAt: string,
        userWorkoutsId?: string | null,
        owner?: string | null,
      } | null,
      sets?:  {
        __typename: "ModelSetConnection",
        nextToken?: string | null,
      } | null,
      notes?: string | null,
      units?: WorkoutUnitType | null,
      createdAt: string,
      updatedAt: string,
      workoutLogsId?: string | null,
      owner?: string | null,
    },
    weight?: number | null,
    reps?: number | null,
    duration?: number | null,
    units?: WorkoutUnitType | null,
    createdAt: string,
    updatedAt: string,
    logSetsId?: string | null,
    owner?: string | null,
  } | null,
};

export type CreateRoutineWorkoutMutationVariables = {
  input: CreateRoutineWorkoutInput,
  condition?: ModelRoutineWorkoutConditionInput | null,
};

export type CreateRoutineWorkoutMutation = {
  createRoutineWorkout?:  {
    __typename: "RoutineWorkout",
    id: string,
    routineID: string,
    workoutID: string,
    routine:  {
      __typename: "Routine",
      id: string,
      user:  {
        __typename: "User",
        id: string,
        username: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      },
      name: string,
      sub: string,
      days?: Array< number | null > | null,
      sections?:  {
        __typename: "ModelSectionConnection",
        nextToken?: string | null,
      } | null,
      workouts?:  {
        __typename: "ModelRoutineWorkoutConnection",
        nextToken?: string | null,
      } | null,
      notes?: string | null,
      createdAt: string,
      updatedAt: string,
      userRoutinesId?: string | null,
      owner?: string | null,
    },
    workout:  {
      __typename: "Workout",
      id: string,
      name?: string | null,
      user:  {
        __typename: "User",
        id: string,
        username: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      },
      routines?:  {
        __typename: "ModelRoutineWorkoutConnection",
        nextToken?: string | null,
      } | null,
      sections?:  {
        __typename: "ModelSectionWorkoutConnection",
        nextToken?: string | null,
      } | null,
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
      owner?: string | null,
    },
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type UpdateRoutineWorkoutMutationVariables = {
  input: UpdateRoutineWorkoutInput,
  condition?: ModelRoutineWorkoutConditionInput | null,
};

export type UpdateRoutineWorkoutMutation = {
  updateRoutineWorkout?:  {
    __typename: "RoutineWorkout",
    id: string,
    routineID: string,
    workoutID: string,
    routine:  {
      __typename: "Routine",
      id: string,
      user:  {
        __typename: "User",
        id: string,
        username: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      },
      name: string,
      sub: string,
      days?: Array< number | null > | null,
      sections?:  {
        __typename: "ModelSectionConnection",
        nextToken?: string | null,
      } | null,
      workouts?:  {
        __typename: "ModelRoutineWorkoutConnection",
        nextToken?: string | null,
      } | null,
      notes?: string | null,
      createdAt: string,
      updatedAt: string,
      userRoutinesId?: string | null,
      owner?: string | null,
    },
    workout:  {
      __typename: "Workout",
      id: string,
      name?: string | null,
      user:  {
        __typename: "User",
        id: string,
        username: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      },
      routines?:  {
        __typename: "ModelRoutineWorkoutConnection",
        nextToken?: string | null,
      } | null,
      sections?:  {
        __typename: "ModelSectionWorkoutConnection",
        nextToken?: string | null,
      } | null,
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
      owner?: string | null,
    },
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type DeleteRoutineWorkoutMutationVariables = {
  input: DeleteRoutineWorkoutInput,
  condition?: ModelRoutineWorkoutConditionInput | null,
};

export type DeleteRoutineWorkoutMutation = {
  deleteRoutineWorkout?:  {
    __typename: "RoutineWorkout",
    id: string,
    routineID: string,
    workoutID: string,
    routine:  {
      __typename: "Routine",
      id: string,
      user:  {
        __typename: "User",
        id: string,
        username: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      },
      name: string,
      sub: string,
      days?: Array< number | null > | null,
      sections?:  {
        __typename: "ModelSectionConnection",
        nextToken?: string | null,
      } | null,
      workouts?:  {
        __typename: "ModelRoutineWorkoutConnection",
        nextToken?: string | null,
      } | null,
      notes?: string | null,
      createdAt: string,
      updatedAt: string,
      userRoutinesId?: string | null,
      owner?: string | null,
    },
    workout:  {
      __typename: "Workout",
      id: string,
      name?: string | null,
      user:  {
        __typename: "User",
        id: string,
        username: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      },
      routines?:  {
        __typename: "ModelRoutineWorkoutConnection",
        nextToken?: string | null,
      } | null,
      sections?:  {
        __typename: "ModelSectionWorkoutConnection",
        nextToken?: string | null,
      } | null,
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
      owner?: string | null,
    },
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type CreateSectionWorkoutMutationVariables = {
  input: CreateSectionWorkoutInput,
  condition?: ModelSectionWorkoutConditionInput | null,
};

export type CreateSectionWorkoutMutation = {
  createSectionWorkout?:  {
    __typename: "SectionWorkout",
    id: string,
    sectionID: string,
    workoutID: string,
    section:  {
      __typename: "Section",
      id: string,
      name: string,
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
        owner?: string | null,
      } | null,
      workouts?:  {
        __typename: "ModelSectionWorkoutConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      routineSectionsId: string,
      owner?: string | null,
    },
    workout:  {
      __typename: "Workout",
      id: string,
      name?: string | null,
      user:  {
        __typename: "User",
        id: string,
        username: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      },
      routines?:  {
        __typename: "ModelRoutineWorkoutConnection",
        nextToken?: string | null,
      } | null,
      sections?:  {
        __typename: "ModelSectionWorkoutConnection",
        nextToken?: string | null,
      } | null,
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
      owner?: string | null,
    },
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type UpdateSectionWorkoutMutationVariables = {
  input: UpdateSectionWorkoutInput,
  condition?: ModelSectionWorkoutConditionInput | null,
};

export type UpdateSectionWorkoutMutation = {
  updateSectionWorkout?:  {
    __typename: "SectionWorkout",
    id: string,
    sectionID: string,
    workoutID: string,
    section:  {
      __typename: "Section",
      id: string,
      name: string,
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
        owner?: string | null,
      } | null,
      workouts?:  {
        __typename: "ModelSectionWorkoutConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      routineSectionsId: string,
      owner?: string | null,
    },
    workout:  {
      __typename: "Workout",
      id: string,
      name?: string | null,
      user:  {
        __typename: "User",
        id: string,
        username: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      },
      routines?:  {
        __typename: "ModelRoutineWorkoutConnection",
        nextToken?: string | null,
      } | null,
      sections?:  {
        __typename: "ModelSectionWorkoutConnection",
        nextToken?: string | null,
      } | null,
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
      owner?: string | null,
    },
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type DeleteSectionWorkoutMutationVariables = {
  input: DeleteSectionWorkoutInput,
  condition?: ModelSectionWorkoutConditionInput | null,
};

export type DeleteSectionWorkoutMutation = {
  deleteSectionWorkout?:  {
    __typename: "SectionWorkout",
    id: string,
    sectionID: string,
    workoutID: string,
    section:  {
      __typename: "Section",
      id: string,
      name: string,
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
        owner?: string | null,
      } | null,
      workouts?:  {
        __typename: "ModelSectionWorkoutConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      routineSectionsId: string,
      owner?: string | null,
    },
    workout:  {
      __typename: "Workout",
      id: string,
      name?: string | null,
      user:  {
        __typename: "User",
        id: string,
        username: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      },
      routines?:  {
        __typename: "ModelRoutineWorkoutConnection",
        nextToken?: string | null,
      } | null,
      sections?:  {
        __typename: "ModelSectionWorkoutConnection",
        nextToken?: string | null,
      } | null,
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
      owner?: string | null,
    },
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type GetUserQueryVariables = {
  id: string,
};

export type GetUserQuery = {
  getUser?:  {
    __typename: "User",
    id: string,
    username: string,
    workouts?:  {
      __typename: "ModelWorkoutConnection",
      items:  Array< {
        __typename: "Workout",
        id: string,
        name?: string | null,
        type: WorkoutType,
        notes?: string | null,
        units?: WorkoutUnitType | null,
        targetSetRange?: Array< number | null > | null,
        targetRepRange?: Array< number | null > | null,
        targetDurationRange?: Array< number | null > | null,
        createdAt: string,
        updatedAt: string,
        userWorkoutsId?: string | null,
        owner?: string | null,
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
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type ListUsersQueryVariables = {
  id?: string | null,
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListUsersQuery = {
  listUsers?:  {
    __typename: "ModelUserConnection",
    items:  Array< {
      __typename: "User",
      id: string,
      username: string,
      workouts?:  {
        __typename: "ModelWorkoutConnection",
        nextToken?: string | null,
      } | null,
      routines?:  {
        __typename: "ModelRoutineConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
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
    user:  {
      __typename: "User",
      id: string,
      username: string,
      workouts?:  {
        __typename: "ModelWorkoutConnection",
        nextToken?: string | null,
      } | null,
      routines?:  {
        __typename: "ModelRoutineConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    },
    name: string,
    sub: string,
    days?: Array< number | null > | null,
    sections?:  {
      __typename: "ModelSectionConnection",
      items:  Array< {
        __typename: "Section",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
        routineSectionsId: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    workouts?:  {
      __typename: "ModelRoutineWorkoutConnection",
      items:  Array< {
        __typename: "RoutineWorkout",
        id: string,
        routineID: string,
        workoutID: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    notes?: string | null,
    createdAt: string,
    updatedAt: string,
    userRoutinesId?: string | null,
    owner?: string | null,
  } | null,
};

export type ListRoutinesQueryVariables = {
  id?: string | null,
  filter?: ModelRoutineFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListRoutinesQuery = {
  listRoutines?:  {
    __typename: "ModelRoutineConnection",
    items:  Array< {
      __typename: "Routine",
      id: string,
      user:  {
        __typename: "User",
        id: string,
        username: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      },
      name: string,
      sub: string,
      days?: Array< number | null > | null,
      sections?:  {
        __typename: "ModelSectionConnection",
        nextToken?: string | null,
      } | null,
      workouts?:  {
        __typename: "ModelRoutineWorkoutConnection",
        nextToken?: string | null,
      } | null,
      notes?: string | null,
      createdAt: string,
      updatedAt: string,
      userRoutinesId?: string | null,
      owner?: string | null,
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
    routine?:  {
      __typename: "Routine",
      id: string,
      user:  {
        __typename: "User",
        id: string,
        username: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      },
      name: string,
      sub: string,
      days?: Array< number | null > | null,
      sections?:  {
        __typename: "ModelSectionConnection",
        nextToken?: string | null,
      } | null,
      workouts?:  {
        __typename: "ModelRoutineWorkoutConnection",
        nextToken?: string | null,
      } | null,
      notes?: string | null,
      createdAt: string,
      updatedAt: string,
      userRoutinesId?: string | null,
      owner?: string | null,
    } | null,
    workouts?:  {
      __typename: "ModelSectionWorkoutConnection",
      items:  Array< {
        __typename: "SectionWorkout",
        id: string,
        sectionID: string,
        workoutID: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    routineSectionsId: string,
    owner?: string | null,
  } | null,
};

export type ListSectionsQueryVariables = {
  id?: string | null,
  filter?: ModelSectionFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListSectionsQuery = {
  listSections?:  {
    __typename: "ModelSectionConnection",
    items:  Array< {
      __typename: "Section",
      id: string,
      name: string,
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
        owner?: string | null,
      } | null,
      workouts?:  {
        __typename: "ModelSectionWorkoutConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      routineSectionsId: string,
      owner?: string | null,
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
    name?: string | null,
    user:  {
      __typename: "User",
      id: string,
      username: string,
      workouts?:  {
        __typename: "ModelWorkoutConnection",
        nextToken?: string | null,
      } | null,
      routines?:  {
        __typename: "ModelRoutineConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    },
    routines?:  {
      __typename: "ModelRoutineWorkoutConnection",
      items:  Array< {
        __typename: "RoutineWorkout",
        id: string,
        routineID: string,
        workoutID: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    sections?:  {
      __typename: "ModelSectionWorkoutConnection",
      items:  Array< {
        __typename: "SectionWorkout",
        id: string,
        sectionID: string,
        workoutID: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
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
        owner?: string | null,
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
    owner?: string | null,
  } | null,
};

export type ListWorkoutsQueryVariables = {
  id?: string | null,
  filter?: ModelWorkoutFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListWorkoutsQuery = {
  listWorkouts?:  {
    __typename: "ModelWorkoutConnection",
    items:  Array< {
      __typename: "Workout",
      id: string,
      name?: string | null,
      user:  {
        __typename: "User",
        id: string,
        username: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      },
      routines?:  {
        __typename: "ModelRoutineWorkoutConnection",
        nextToken?: string | null,
      } | null,
      sections?:  {
        __typename: "ModelSectionWorkoutConnection",
        nextToken?: string | null,
      } | null,
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
      owner?: string | null,
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
    workout?:  {
      __typename: "Workout",
      id: string,
      name?: string | null,
      user:  {
        __typename: "User",
        id: string,
        username: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      },
      routines?:  {
        __typename: "ModelRoutineWorkoutConnection",
        nextToken?: string | null,
      } | null,
      sections?:  {
        __typename: "ModelSectionWorkoutConnection",
        nextToken?: string | null,
      } | null,
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
      owner?: string | null,
    } | null,
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
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    notes?: string | null,
    units?: WorkoutUnitType | null,
    createdAt: string,
    updatedAt: string,
    workoutLogsId?: string | null,
    owner?: string | null,
  } | null,
};

export type ListLogsQueryVariables = {
  id?: string | null,
  filter?: ModelLogFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListLogsQuery = {
  listLogs?:  {
    __typename: "ModelLogConnection",
    items:  Array< {
      __typename: "Log",
      id: string,
      name: string,
      timestamp?: number | null,
      workout?:  {
        __typename: "Workout",
        id: string,
        name?: string | null,
        type: WorkoutType,
        notes?: string | null,
        units?: WorkoutUnitType | null,
        targetSetRange?: Array< number | null > | null,
        targetRepRange?: Array< number | null > | null,
        targetDurationRange?: Array< number | null > | null,
        createdAt: string,
        updatedAt: string,
        userWorkoutsId?: string | null,
        owner?: string | null,
      } | null,
      sets?:  {
        __typename: "ModelSetConnection",
        nextToken?: string | null,
      } | null,
      notes?: string | null,
      units?: WorkoutUnitType | null,
      createdAt: string,
      updatedAt: string,
      workoutLogsId?: string | null,
      owner?: string | null,
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
    log:  {
      __typename: "Log",
      id: string,
      name: string,
      timestamp?: number | null,
      workout?:  {
        __typename: "Workout",
        id: string,
        name?: string | null,
        type: WorkoutType,
        notes?: string | null,
        units?: WorkoutUnitType | null,
        targetSetRange?: Array< number | null > | null,
        targetRepRange?: Array< number | null > | null,
        targetDurationRange?: Array< number | null > | null,
        createdAt: string,
        updatedAt: string,
        userWorkoutsId?: string | null,
        owner?: string | null,
      } | null,
      sets?:  {
        __typename: "ModelSetConnection",
        nextToken?: string | null,
      } | null,
      notes?: string | null,
      units?: WorkoutUnitType | null,
      createdAt: string,
      updatedAt: string,
      workoutLogsId?: string | null,
      owner?: string | null,
    },
    weight?: number | null,
    reps?: number | null,
    duration?: number | null,
    units?: WorkoutUnitType | null,
    createdAt: string,
    updatedAt: string,
    logSetsId?: string | null,
    owner?: string | null,
  } | null,
};

export type ListSetsQueryVariables = {
  id?: string | null,
  filter?: ModelSetFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListSetsQuery = {
  listSets?:  {
    __typename: "ModelSetConnection",
    items:  Array< {
      __typename: "Set",
      id: string,
      log:  {
        __typename: "Log",
        id: string,
        name: string,
        timestamp?: number | null,
        notes?: string | null,
        units?: WorkoutUnitType | null,
        createdAt: string,
        updatedAt: string,
        workoutLogsId?: string | null,
        owner?: string | null,
      },
      weight?: number | null,
      reps?: number | null,
      duration?: number | null,
      units?: WorkoutUnitType | null,
      createdAt: string,
      updatedAt: string,
      logSetsId?: string | null,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetRoutineWorkoutQueryVariables = {
  id: string,
};

export type GetRoutineWorkoutQuery = {
  getRoutineWorkout?:  {
    __typename: "RoutineWorkout",
    id: string,
    routineID: string,
    workoutID: string,
    routine:  {
      __typename: "Routine",
      id: string,
      user:  {
        __typename: "User",
        id: string,
        username: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      },
      name: string,
      sub: string,
      days?: Array< number | null > | null,
      sections?:  {
        __typename: "ModelSectionConnection",
        nextToken?: string | null,
      } | null,
      workouts?:  {
        __typename: "ModelRoutineWorkoutConnection",
        nextToken?: string | null,
      } | null,
      notes?: string | null,
      createdAt: string,
      updatedAt: string,
      userRoutinesId?: string | null,
      owner?: string | null,
    },
    workout:  {
      __typename: "Workout",
      id: string,
      name?: string | null,
      user:  {
        __typename: "User",
        id: string,
        username: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      },
      routines?:  {
        __typename: "ModelRoutineWorkoutConnection",
        nextToken?: string | null,
      } | null,
      sections?:  {
        __typename: "ModelSectionWorkoutConnection",
        nextToken?: string | null,
      } | null,
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
      owner?: string | null,
    },
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type ListRoutineWorkoutsQueryVariables = {
  filter?: ModelRoutineWorkoutFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListRoutineWorkoutsQuery = {
  listRoutineWorkouts?:  {
    __typename: "ModelRoutineWorkoutConnection",
    items:  Array< {
      __typename: "RoutineWorkout",
      id: string,
      routineID: string,
      workoutID: string,
      routine:  {
        __typename: "Routine",
        id: string,
        name: string,
        sub: string,
        days?: Array< number | null > | null,
        notes?: string | null,
        createdAt: string,
        updatedAt: string,
        userRoutinesId?: string | null,
        owner?: string | null,
      },
      workout:  {
        __typename: "Workout",
        id: string,
        name?: string | null,
        type: WorkoutType,
        notes?: string | null,
        units?: WorkoutUnitType | null,
        targetSetRange?: Array< number | null > | null,
        targetRepRange?: Array< number | null > | null,
        targetDurationRange?: Array< number | null > | null,
        createdAt: string,
        updatedAt: string,
        userWorkoutsId?: string | null,
        owner?: string | null,
      },
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetSectionWorkoutQueryVariables = {
  id: string,
};

export type GetSectionWorkoutQuery = {
  getSectionWorkout?:  {
    __typename: "SectionWorkout",
    id: string,
    sectionID: string,
    workoutID: string,
    section:  {
      __typename: "Section",
      id: string,
      name: string,
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
        owner?: string | null,
      } | null,
      workouts?:  {
        __typename: "ModelSectionWorkoutConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      routineSectionsId: string,
      owner?: string | null,
    },
    workout:  {
      __typename: "Workout",
      id: string,
      name?: string | null,
      user:  {
        __typename: "User",
        id: string,
        username: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      },
      routines?:  {
        __typename: "ModelRoutineWorkoutConnection",
        nextToken?: string | null,
      } | null,
      sections?:  {
        __typename: "ModelSectionWorkoutConnection",
        nextToken?: string | null,
      } | null,
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
      owner?: string | null,
    },
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type ListSectionWorkoutsQueryVariables = {
  filter?: ModelSectionWorkoutFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListSectionWorkoutsQuery = {
  listSectionWorkouts?:  {
    __typename: "ModelSectionWorkoutConnection",
    items:  Array< {
      __typename: "SectionWorkout",
      id: string,
      sectionID: string,
      workoutID: string,
      section:  {
        __typename: "Section",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
        routineSectionsId: string,
        owner?: string | null,
      },
      workout:  {
        __typename: "Workout",
        id: string,
        name?: string | null,
        type: WorkoutType,
        notes?: string | null,
        units?: WorkoutUnitType | null,
        targetSetRange?: Array< number | null > | null,
        targetRepRange?: Array< number | null > | null,
        targetDurationRange?: Array< number | null > | null,
        createdAt: string,
        updatedAt: string,
        userWorkoutsId?: string | null,
        owner?: string | null,
      },
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateUserSubscriptionVariables = {
  owner?: string | null,
};

export type OnCreateUserSubscription = {
  onCreateUser?:  {
    __typename: "User",
    id: string,
    username: string,
    workouts?:  {
      __typename: "ModelWorkoutConnection",
      items:  Array< {
        __typename: "Workout",
        id: string,
        name?: string | null,
        type: WorkoutType,
        notes?: string | null,
        units?: WorkoutUnitType | null,
        targetSetRange?: Array< number | null > | null,
        targetRepRange?: Array< number | null > | null,
        targetDurationRange?: Array< number | null > | null,
        createdAt: string,
        updatedAt: string,
        userWorkoutsId?: string | null,
        owner?: string | null,
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
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnUpdateUserSubscriptionVariables = {
  owner?: string | null,
};

export type OnUpdateUserSubscription = {
  onUpdateUser?:  {
    __typename: "User",
    id: string,
    username: string,
    workouts?:  {
      __typename: "ModelWorkoutConnection",
      items:  Array< {
        __typename: "Workout",
        id: string,
        name?: string | null,
        type: WorkoutType,
        notes?: string | null,
        units?: WorkoutUnitType | null,
        targetSetRange?: Array< number | null > | null,
        targetRepRange?: Array< number | null > | null,
        targetDurationRange?: Array< number | null > | null,
        createdAt: string,
        updatedAt: string,
        userWorkoutsId?: string | null,
        owner?: string | null,
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
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnDeleteUserSubscriptionVariables = {
  owner?: string | null,
};

export type OnDeleteUserSubscription = {
  onDeleteUser?:  {
    __typename: "User",
    id: string,
    username: string,
    workouts?:  {
      __typename: "ModelWorkoutConnection",
      items:  Array< {
        __typename: "Workout",
        id: string,
        name?: string | null,
        type: WorkoutType,
        notes?: string | null,
        units?: WorkoutUnitType | null,
        targetSetRange?: Array< number | null > | null,
        targetRepRange?: Array< number | null > | null,
        targetDurationRange?: Array< number | null > | null,
        createdAt: string,
        updatedAt: string,
        userWorkoutsId?: string | null,
        owner?: string | null,
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
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnCreateRoutineSubscriptionVariables = {
  owner?: string | null,
};

export type OnCreateRoutineSubscription = {
  onCreateRoutine?:  {
    __typename: "Routine",
    id: string,
    user:  {
      __typename: "User",
      id: string,
      username: string,
      workouts?:  {
        __typename: "ModelWorkoutConnection",
        nextToken?: string | null,
      } | null,
      routines?:  {
        __typename: "ModelRoutineConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    },
    name: string,
    sub: string,
    days?: Array< number | null > | null,
    sections?:  {
      __typename: "ModelSectionConnection",
      items:  Array< {
        __typename: "Section",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
        routineSectionsId: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    workouts?:  {
      __typename: "ModelRoutineWorkoutConnection",
      items:  Array< {
        __typename: "RoutineWorkout",
        id: string,
        routineID: string,
        workoutID: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    notes?: string | null,
    createdAt: string,
    updatedAt: string,
    userRoutinesId?: string | null,
    owner?: string | null,
  } | null,
};

export type OnUpdateRoutineSubscriptionVariables = {
  owner?: string | null,
};

export type OnUpdateRoutineSubscription = {
  onUpdateRoutine?:  {
    __typename: "Routine",
    id: string,
    user:  {
      __typename: "User",
      id: string,
      username: string,
      workouts?:  {
        __typename: "ModelWorkoutConnection",
        nextToken?: string | null,
      } | null,
      routines?:  {
        __typename: "ModelRoutineConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    },
    name: string,
    sub: string,
    days?: Array< number | null > | null,
    sections?:  {
      __typename: "ModelSectionConnection",
      items:  Array< {
        __typename: "Section",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
        routineSectionsId: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    workouts?:  {
      __typename: "ModelRoutineWorkoutConnection",
      items:  Array< {
        __typename: "RoutineWorkout",
        id: string,
        routineID: string,
        workoutID: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    notes?: string | null,
    createdAt: string,
    updatedAt: string,
    userRoutinesId?: string | null,
    owner?: string | null,
  } | null,
};

export type OnDeleteRoutineSubscriptionVariables = {
  owner?: string | null,
};

export type OnDeleteRoutineSubscription = {
  onDeleteRoutine?:  {
    __typename: "Routine",
    id: string,
    user:  {
      __typename: "User",
      id: string,
      username: string,
      workouts?:  {
        __typename: "ModelWorkoutConnection",
        nextToken?: string | null,
      } | null,
      routines?:  {
        __typename: "ModelRoutineConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    },
    name: string,
    sub: string,
    days?: Array< number | null > | null,
    sections?:  {
      __typename: "ModelSectionConnection",
      items:  Array< {
        __typename: "Section",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
        routineSectionsId: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    workouts?:  {
      __typename: "ModelRoutineWorkoutConnection",
      items:  Array< {
        __typename: "RoutineWorkout",
        id: string,
        routineID: string,
        workoutID: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    notes?: string | null,
    createdAt: string,
    updatedAt: string,
    userRoutinesId?: string | null,
    owner?: string | null,
  } | null,
};

export type OnCreateSectionSubscriptionVariables = {
  owner?: string | null,
};

export type OnCreateSectionSubscription = {
  onCreateSection?:  {
    __typename: "Section",
    id: string,
    name: string,
    routine?:  {
      __typename: "Routine",
      id: string,
      user:  {
        __typename: "User",
        id: string,
        username: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      },
      name: string,
      sub: string,
      days?: Array< number | null > | null,
      sections?:  {
        __typename: "ModelSectionConnection",
        nextToken?: string | null,
      } | null,
      workouts?:  {
        __typename: "ModelRoutineWorkoutConnection",
        nextToken?: string | null,
      } | null,
      notes?: string | null,
      createdAt: string,
      updatedAt: string,
      userRoutinesId?: string | null,
      owner?: string | null,
    } | null,
    workouts?:  {
      __typename: "ModelSectionWorkoutConnection",
      items:  Array< {
        __typename: "SectionWorkout",
        id: string,
        sectionID: string,
        workoutID: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    routineSectionsId: string,
    owner?: string | null,
  } | null,
};

export type OnUpdateSectionSubscriptionVariables = {
  owner?: string | null,
};

export type OnUpdateSectionSubscription = {
  onUpdateSection?:  {
    __typename: "Section",
    id: string,
    name: string,
    routine?:  {
      __typename: "Routine",
      id: string,
      user:  {
        __typename: "User",
        id: string,
        username: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      },
      name: string,
      sub: string,
      days?: Array< number | null > | null,
      sections?:  {
        __typename: "ModelSectionConnection",
        nextToken?: string | null,
      } | null,
      workouts?:  {
        __typename: "ModelRoutineWorkoutConnection",
        nextToken?: string | null,
      } | null,
      notes?: string | null,
      createdAt: string,
      updatedAt: string,
      userRoutinesId?: string | null,
      owner?: string | null,
    } | null,
    workouts?:  {
      __typename: "ModelSectionWorkoutConnection",
      items:  Array< {
        __typename: "SectionWorkout",
        id: string,
        sectionID: string,
        workoutID: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    routineSectionsId: string,
    owner?: string | null,
  } | null,
};

export type OnDeleteSectionSubscriptionVariables = {
  owner?: string | null,
};

export type OnDeleteSectionSubscription = {
  onDeleteSection?:  {
    __typename: "Section",
    id: string,
    name: string,
    routine?:  {
      __typename: "Routine",
      id: string,
      user:  {
        __typename: "User",
        id: string,
        username: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      },
      name: string,
      sub: string,
      days?: Array< number | null > | null,
      sections?:  {
        __typename: "ModelSectionConnection",
        nextToken?: string | null,
      } | null,
      workouts?:  {
        __typename: "ModelRoutineWorkoutConnection",
        nextToken?: string | null,
      } | null,
      notes?: string | null,
      createdAt: string,
      updatedAt: string,
      userRoutinesId?: string | null,
      owner?: string | null,
    } | null,
    workouts?:  {
      __typename: "ModelSectionWorkoutConnection",
      items:  Array< {
        __typename: "SectionWorkout",
        id: string,
        sectionID: string,
        workoutID: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    routineSectionsId: string,
    owner?: string | null,
  } | null,
};

export type OnCreateWorkoutSubscriptionVariables = {
  owner?: string | null,
};

export type OnCreateWorkoutSubscription = {
  onCreateWorkout?:  {
    __typename: "Workout",
    id: string,
    name?: string | null,
    user:  {
      __typename: "User",
      id: string,
      username: string,
      workouts?:  {
        __typename: "ModelWorkoutConnection",
        nextToken?: string | null,
      } | null,
      routines?:  {
        __typename: "ModelRoutineConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    },
    routines?:  {
      __typename: "ModelRoutineWorkoutConnection",
      items:  Array< {
        __typename: "RoutineWorkout",
        id: string,
        routineID: string,
        workoutID: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    sections?:  {
      __typename: "ModelSectionWorkoutConnection",
      items:  Array< {
        __typename: "SectionWorkout",
        id: string,
        sectionID: string,
        workoutID: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
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
        owner?: string | null,
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
    owner?: string | null,
  } | null,
};

export type OnUpdateWorkoutSubscriptionVariables = {
  owner?: string | null,
};

export type OnUpdateWorkoutSubscription = {
  onUpdateWorkout?:  {
    __typename: "Workout",
    id: string,
    name?: string | null,
    user:  {
      __typename: "User",
      id: string,
      username: string,
      workouts?:  {
        __typename: "ModelWorkoutConnection",
        nextToken?: string | null,
      } | null,
      routines?:  {
        __typename: "ModelRoutineConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    },
    routines?:  {
      __typename: "ModelRoutineWorkoutConnection",
      items:  Array< {
        __typename: "RoutineWorkout",
        id: string,
        routineID: string,
        workoutID: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    sections?:  {
      __typename: "ModelSectionWorkoutConnection",
      items:  Array< {
        __typename: "SectionWorkout",
        id: string,
        sectionID: string,
        workoutID: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
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
        owner?: string | null,
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
    owner?: string | null,
  } | null,
};

export type OnDeleteWorkoutSubscriptionVariables = {
  owner?: string | null,
};

export type OnDeleteWorkoutSubscription = {
  onDeleteWorkout?:  {
    __typename: "Workout",
    id: string,
    name?: string | null,
    user:  {
      __typename: "User",
      id: string,
      username: string,
      workouts?:  {
        __typename: "ModelWorkoutConnection",
        nextToken?: string | null,
      } | null,
      routines?:  {
        __typename: "ModelRoutineConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    },
    routines?:  {
      __typename: "ModelRoutineWorkoutConnection",
      items:  Array< {
        __typename: "RoutineWorkout",
        id: string,
        routineID: string,
        workoutID: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    sections?:  {
      __typename: "ModelSectionWorkoutConnection",
      items:  Array< {
        __typename: "SectionWorkout",
        id: string,
        sectionID: string,
        workoutID: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
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
        owner?: string | null,
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
    owner?: string | null,
  } | null,
};

export type OnCreateLogSubscriptionVariables = {
  owner?: string | null,
};

export type OnCreateLogSubscription = {
  onCreateLog?:  {
    __typename: "Log",
    id: string,
    name: string,
    timestamp?: number | null,
    workout?:  {
      __typename: "Workout",
      id: string,
      name?: string | null,
      user:  {
        __typename: "User",
        id: string,
        username: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      },
      routines?:  {
        __typename: "ModelRoutineWorkoutConnection",
        nextToken?: string | null,
      } | null,
      sections?:  {
        __typename: "ModelSectionWorkoutConnection",
        nextToken?: string | null,
      } | null,
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
      owner?: string | null,
    } | null,
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
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    notes?: string | null,
    units?: WorkoutUnitType | null,
    createdAt: string,
    updatedAt: string,
    workoutLogsId?: string | null,
    owner?: string | null,
  } | null,
};

export type OnUpdateLogSubscriptionVariables = {
  owner?: string | null,
};

export type OnUpdateLogSubscription = {
  onUpdateLog?:  {
    __typename: "Log",
    id: string,
    name: string,
    timestamp?: number | null,
    workout?:  {
      __typename: "Workout",
      id: string,
      name?: string | null,
      user:  {
        __typename: "User",
        id: string,
        username: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      },
      routines?:  {
        __typename: "ModelRoutineWorkoutConnection",
        nextToken?: string | null,
      } | null,
      sections?:  {
        __typename: "ModelSectionWorkoutConnection",
        nextToken?: string | null,
      } | null,
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
      owner?: string | null,
    } | null,
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
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    notes?: string | null,
    units?: WorkoutUnitType | null,
    createdAt: string,
    updatedAt: string,
    workoutLogsId?: string | null,
    owner?: string | null,
  } | null,
};

export type OnDeleteLogSubscriptionVariables = {
  owner?: string | null,
};

export type OnDeleteLogSubscription = {
  onDeleteLog?:  {
    __typename: "Log",
    id: string,
    name: string,
    timestamp?: number | null,
    workout?:  {
      __typename: "Workout",
      id: string,
      name?: string | null,
      user:  {
        __typename: "User",
        id: string,
        username: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      },
      routines?:  {
        __typename: "ModelRoutineWorkoutConnection",
        nextToken?: string | null,
      } | null,
      sections?:  {
        __typename: "ModelSectionWorkoutConnection",
        nextToken?: string | null,
      } | null,
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
      owner?: string | null,
    } | null,
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
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    notes?: string | null,
    units?: WorkoutUnitType | null,
    createdAt: string,
    updatedAt: string,
    workoutLogsId?: string | null,
    owner?: string | null,
  } | null,
};

export type OnCreateSetSubscriptionVariables = {
  owner?: string | null,
};

export type OnCreateSetSubscription = {
  onCreateSet?:  {
    __typename: "Set",
    id: string,
    log:  {
      __typename: "Log",
      id: string,
      name: string,
      timestamp?: number | null,
      workout?:  {
        __typename: "Workout",
        id: string,
        name?: string | null,
        type: WorkoutType,
        notes?: string | null,
        units?: WorkoutUnitType | null,
        targetSetRange?: Array< number | null > | null,
        targetRepRange?: Array< number | null > | null,
        targetDurationRange?: Array< number | null > | null,
        createdAt: string,
        updatedAt: string,
        userWorkoutsId?: string | null,
        owner?: string | null,
      } | null,
      sets?:  {
        __typename: "ModelSetConnection",
        nextToken?: string | null,
      } | null,
      notes?: string | null,
      units?: WorkoutUnitType | null,
      createdAt: string,
      updatedAt: string,
      workoutLogsId?: string | null,
      owner?: string | null,
    },
    weight?: number | null,
    reps?: number | null,
    duration?: number | null,
    units?: WorkoutUnitType | null,
    createdAt: string,
    updatedAt: string,
    logSetsId?: string | null,
    owner?: string | null,
  } | null,
};

export type OnUpdateSetSubscriptionVariables = {
  owner?: string | null,
};

export type OnUpdateSetSubscription = {
  onUpdateSet?:  {
    __typename: "Set",
    id: string,
    log:  {
      __typename: "Log",
      id: string,
      name: string,
      timestamp?: number | null,
      workout?:  {
        __typename: "Workout",
        id: string,
        name?: string | null,
        type: WorkoutType,
        notes?: string | null,
        units?: WorkoutUnitType | null,
        targetSetRange?: Array< number | null > | null,
        targetRepRange?: Array< number | null > | null,
        targetDurationRange?: Array< number | null > | null,
        createdAt: string,
        updatedAt: string,
        userWorkoutsId?: string | null,
        owner?: string | null,
      } | null,
      sets?:  {
        __typename: "ModelSetConnection",
        nextToken?: string | null,
      } | null,
      notes?: string | null,
      units?: WorkoutUnitType | null,
      createdAt: string,
      updatedAt: string,
      workoutLogsId?: string | null,
      owner?: string | null,
    },
    weight?: number | null,
    reps?: number | null,
    duration?: number | null,
    units?: WorkoutUnitType | null,
    createdAt: string,
    updatedAt: string,
    logSetsId?: string | null,
    owner?: string | null,
  } | null,
};

export type OnDeleteSetSubscriptionVariables = {
  owner?: string | null,
};

export type OnDeleteSetSubscription = {
  onDeleteSet?:  {
    __typename: "Set",
    id: string,
    log:  {
      __typename: "Log",
      id: string,
      name: string,
      timestamp?: number | null,
      workout?:  {
        __typename: "Workout",
        id: string,
        name?: string | null,
        type: WorkoutType,
        notes?: string | null,
        units?: WorkoutUnitType | null,
        targetSetRange?: Array< number | null > | null,
        targetRepRange?: Array< number | null > | null,
        targetDurationRange?: Array< number | null > | null,
        createdAt: string,
        updatedAt: string,
        userWorkoutsId?: string | null,
        owner?: string | null,
      } | null,
      sets?:  {
        __typename: "ModelSetConnection",
        nextToken?: string | null,
      } | null,
      notes?: string | null,
      units?: WorkoutUnitType | null,
      createdAt: string,
      updatedAt: string,
      workoutLogsId?: string | null,
      owner?: string | null,
    },
    weight?: number | null,
    reps?: number | null,
    duration?: number | null,
    units?: WorkoutUnitType | null,
    createdAt: string,
    updatedAt: string,
    logSetsId?: string | null,
    owner?: string | null,
  } | null,
};

export type OnCreateRoutineWorkoutSubscriptionVariables = {
  owner?: string | null,
};

export type OnCreateRoutineWorkoutSubscription = {
  onCreateRoutineWorkout?:  {
    __typename: "RoutineWorkout",
    id: string,
    routineID: string,
    workoutID: string,
    routine:  {
      __typename: "Routine",
      id: string,
      user:  {
        __typename: "User",
        id: string,
        username: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      },
      name: string,
      sub: string,
      days?: Array< number | null > | null,
      sections?:  {
        __typename: "ModelSectionConnection",
        nextToken?: string | null,
      } | null,
      workouts?:  {
        __typename: "ModelRoutineWorkoutConnection",
        nextToken?: string | null,
      } | null,
      notes?: string | null,
      createdAt: string,
      updatedAt: string,
      userRoutinesId?: string | null,
      owner?: string | null,
    },
    workout:  {
      __typename: "Workout",
      id: string,
      name?: string | null,
      user:  {
        __typename: "User",
        id: string,
        username: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      },
      routines?:  {
        __typename: "ModelRoutineWorkoutConnection",
        nextToken?: string | null,
      } | null,
      sections?:  {
        __typename: "ModelSectionWorkoutConnection",
        nextToken?: string | null,
      } | null,
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
      owner?: string | null,
    },
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnUpdateRoutineWorkoutSubscriptionVariables = {
  owner?: string | null,
};

export type OnUpdateRoutineWorkoutSubscription = {
  onUpdateRoutineWorkout?:  {
    __typename: "RoutineWorkout",
    id: string,
    routineID: string,
    workoutID: string,
    routine:  {
      __typename: "Routine",
      id: string,
      user:  {
        __typename: "User",
        id: string,
        username: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      },
      name: string,
      sub: string,
      days?: Array< number | null > | null,
      sections?:  {
        __typename: "ModelSectionConnection",
        nextToken?: string | null,
      } | null,
      workouts?:  {
        __typename: "ModelRoutineWorkoutConnection",
        nextToken?: string | null,
      } | null,
      notes?: string | null,
      createdAt: string,
      updatedAt: string,
      userRoutinesId?: string | null,
      owner?: string | null,
    },
    workout:  {
      __typename: "Workout",
      id: string,
      name?: string | null,
      user:  {
        __typename: "User",
        id: string,
        username: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      },
      routines?:  {
        __typename: "ModelRoutineWorkoutConnection",
        nextToken?: string | null,
      } | null,
      sections?:  {
        __typename: "ModelSectionWorkoutConnection",
        nextToken?: string | null,
      } | null,
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
      owner?: string | null,
    },
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnDeleteRoutineWorkoutSubscriptionVariables = {
  owner?: string | null,
};

export type OnDeleteRoutineWorkoutSubscription = {
  onDeleteRoutineWorkout?:  {
    __typename: "RoutineWorkout",
    id: string,
    routineID: string,
    workoutID: string,
    routine:  {
      __typename: "Routine",
      id: string,
      user:  {
        __typename: "User",
        id: string,
        username: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      },
      name: string,
      sub: string,
      days?: Array< number | null > | null,
      sections?:  {
        __typename: "ModelSectionConnection",
        nextToken?: string | null,
      } | null,
      workouts?:  {
        __typename: "ModelRoutineWorkoutConnection",
        nextToken?: string | null,
      } | null,
      notes?: string | null,
      createdAt: string,
      updatedAt: string,
      userRoutinesId?: string | null,
      owner?: string | null,
    },
    workout:  {
      __typename: "Workout",
      id: string,
      name?: string | null,
      user:  {
        __typename: "User",
        id: string,
        username: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      },
      routines?:  {
        __typename: "ModelRoutineWorkoutConnection",
        nextToken?: string | null,
      } | null,
      sections?:  {
        __typename: "ModelSectionWorkoutConnection",
        nextToken?: string | null,
      } | null,
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
      owner?: string | null,
    },
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnCreateSectionWorkoutSubscriptionVariables = {
  owner?: string | null,
};

export type OnCreateSectionWorkoutSubscription = {
  onCreateSectionWorkout?:  {
    __typename: "SectionWorkout",
    id: string,
    sectionID: string,
    workoutID: string,
    section:  {
      __typename: "Section",
      id: string,
      name: string,
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
        owner?: string | null,
      } | null,
      workouts?:  {
        __typename: "ModelSectionWorkoutConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      routineSectionsId: string,
      owner?: string | null,
    },
    workout:  {
      __typename: "Workout",
      id: string,
      name?: string | null,
      user:  {
        __typename: "User",
        id: string,
        username: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      },
      routines?:  {
        __typename: "ModelRoutineWorkoutConnection",
        nextToken?: string | null,
      } | null,
      sections?:  {
        __typename: "ModelSectionWorkoutConnection",
        nextToken?: string | null,
      } | null,
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
      owner?: string | null,
    },
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnUpdateSectionWorkoutSubscriptionVariables = {
  owner?: string | null,
};

export type OnUpdateSectionWorkoutSubscription = {
  onUpdateSectionWorkout?:  {
    __typename: "SectionWorkout",
    id: string,
    sectionID: string,
    workoutID: string,
    section:  {
      __typename: "Section",
      id: string,
      name: string,
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
        owner?: string | null,
      } | null,
      workouts?:  {
        __typename: "ModelSectionWorkoutConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      routineSectionsId: string,
      owner?: string | null,
    },
    workout:  {
      __typename: "Workout",
      id: string,
      name?: string | null,
      user:  {
        __typename: "User",
        id: string,
        username: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      },
      routines?:  {
        __typename: "ModelRoutineWorkoutConnection",
        nextToken?: string | null,
      } | null,
      sections?:  {
        __typename: "ModelSectionWorkoutConnection",
        nextToken?: string | null,
      } | null,
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
      owner?: string | null,
    },
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnDeleteSectionWorkoutSubscriptionVariables = {
  owner?: string | null,
};

export type OnDeleteSectionWorkoutSubscription = {
  onDeleteSectionWorkout?:  {
    __typename: "SectionWorkout",
    id: string,
    sectionID: string,
    workoutID: string,
    section:  {
      __typename: "Section",
      id: string,
      name: string,
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
        owner?: string | null,
      } | null,
      workouts?:  {
        __typename: "ModelSectionWorkoutConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      routineSectionsId: string,
      owner?: string | null,
    },
    workout:  {
      __typename: "Workout",
      id: string,
      name?: string | null,
      user:  {
        __typename: "User",
        id: string,
        username: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      },
      routines?:  {
        __typename: "ModelRoutineWorkoutConnection",
        nextToken?: string | null,
      } | null,
      sections?:  {
        __typename: "ModelSectionWorkoutConnection",
        nextToken?: string | null,
      } | null,
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
      owner?: string | null,
    },
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};
