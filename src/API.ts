/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateRoutineInput = {
  id?: string | null,
  name: string,
  sub: string,
  days?: Array< number | null > | null,
};

export type ModelRoutineConditionInput = {
  name?: ModelStringInput | null,
  sub?: ModelStringInput | null,
  days?: ModelIntInput | null,
  and?: Array< ModelRoutineConditionInput | null > | null,
  or?: Array< ModelRoutineConditionInput | null > | null,
  not?: ModelRoutineConditionInput | null,
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

export type Routine = {
  __typename: "Routine",
  id: string,
  name: string,
  sub: string,
  days?: Array< number | null > | null,
  sections?: ModelSectionConnection | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelSectionConnection = {
  __typename: "ModelSectionConnection",
  items:  Array<Section | null >,
  nextToken?: string | null,
};

export type Section = {
  __typename: "Section",
  name: string,
  sub: string,
  routine?: Routine | null,
  workouts?: ModelWorkoutConnection | null,
  id: string,
  createdAt: string,
  updatedAt: string,
  routineSectionsId?: string | null,
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
  type: string,
  logs?: ModelLogConnection | null,
  notes?: string | null,
  createdAt: string,
  updatedAt: string,
  sectionWorkoutsId?: string | null,
};

export type ModelLogConnection = {
  __typename: "ModelLogConnection",
  items:  Array<Log | null >,
  nextToken?: string | null,
};

export type Log = {
  __typename: "Log",
  name: string,
  timestamp?: number | null,
  sets?: ModelSetConnection | null,
  notes?: string | null,
  id: string,
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
  weight?: number | null,
  reps?: number | null,
  id: string,
  createdAt: string,
  updatedAt: string,
  logSetsId?: string | null,
};

export type UpdateRoutineInput = {
  id: string,
  name?: string | null,
  sub?: string | null,
  days?: Array< number | null > | null,
};

export type DeleteRoutineInput = {
  id: string,
};

export type CreateSectionInput = {
  name: string,
  sub: string,
  id?: string | null,
  routineSectionsId?: string | null,
};

export type ModelSectionConditionInput = {
  name?: ModelStringInput | null,
  sub?: ModelStringInput | null,
  and?: Array< ModelSectionConditionInput | null > | null,
  or?: Array< ModelSectionConditionInput | null > | null,
  not?: ModelSectionConditionInput | null,
  routineSectionsId?: ModelIDInput | null,
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

export type UpdateSectionInput = {
  name?: string | null,
  sub?: string | null,
  id: string,
  routineSectionsId?: string | null,
};

export type DeleteSectionInput = {
  id: string,
};

export type CreateWorkoutInput = {
  id?: string | null,
  name: string,
  sub: string,
  type: string,
  notes?: string | null,
  sectionWorkoutsId?: string | null,
};

export type ModelWorkoutConditionInput = {
  name?: ModelStringInput | null,
  sub?: ModelStringInput | null,
  type?: ModelStringInput | null,
  notes?: ModelStringInput | null,
  and?: Array< ModelWorkoutConditionInput | null > | null,
  or?: Array< ModelWorkoutConditionInput | null > | null,
  not?: ModelWorkoutConditionInput | null,
  sectionWorkoutsId?: ModelIDInput | null,
};

export type UpdateWorkoutInput = {
  id: string,
  name?: string | null,
  sub?: string | null,
  type?: string | null,
  notes?: string | null,
  sectionWorkoutsId?: string | null,
};

export type DeleteWorkoutInput = {
  id: string,
};

export type CreateLogInput = {
  name: string,
  timestamp?: number | null,
  notes?: string | null,
  id?: string | null,
  workoutLogsId?: string | null,
};

export type ModelLogConditionInput = {
  name?: ModelStringInput | null,
  timestamp?: ModelIntInput | null,
  notes?: ModelStringInput | null,
  and?: Array< ModelLogConditionInput | null > | null,
  or?: Array< ModelLogConditionInput | null > | null,
  not?: ModelLogConditionInput | null,
  workoutLogsId?: ModelIDInput | null,
};

export type UpdateLogInput = {
  name?: string | null,
  timestamp?: number | null,
  notes?: string | null,
  id: string,
  workoutLogsId?: string | null,
};

export type DeleteLogInput = {
  id: string,
};

export type CreateSetInput = {
  weight?: number | null,
  reps?: number | null,
  id?: string | null,
  logSetsId?: string | null,
};

export type ModelSetConditionInput = {
  weight?: ModelIntInput | null,
  reps?: ModelIntInput | null,
  and?: Array< ModelSetConditionInput | null > | null,
  or?: Array< ModelSetConditionInput | null > | null,
  not?: ModelSetConditionInput | null,
  logSetsId?: ModelIDInput | null,
};

export type UpdateSetInput = {
  weight?: number | null,
  reps?: number | null,
  id: string,
  logSetsId?: string | null,
};

export type DeleteSetInput = {
  id: string,
};

export type ModelRoutineFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  sub?: ModelStringInput | null,
  days?: ModelIntInput | null,
  and?: Array< ModelRoutineFilterInput | null > | null,
  or?: Array< ModelRoutineFilterInput | null > | null,
  not?: ModelRoutineFilterInput | null,
};

export type ModelRoutineConnection = {
  __typename: "ModelRoutineConnection",
  items:  Array<Routine | null >,
  nextToken?: string | null,
};

export type ModelSectionFilterInput = {
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
  type?: ModelStringInput | null,
  notes?: ModelStringInput | null,
  and?: Array< ModelWorkoutFilterInput | null > | null,
  or?: Array< ModelWorkoutFilterInput | null > | null,
  not?: ModelWorkoutFilterInput | null,
  sectionWorkoutsId?: ModelIDInput | null,
};

export type ModelLogFilterInput = {
  name?: ModelStringInput | null,
  timestamp?: ModelIntInput | null,
  notes?: ModelStringInput | null,
  and?: Array< ModelLogFilterInput | null > | null,
  or?: Array< ModelLogFilterInput | null > | null,
  not?: ModelLogFilterInput | null,
  workoutLogsId?: ModelIDInput | null,
};

export type ModelSetFilterInput = {
  weight?: ModelIntInput | null,
  reps?: ModelIntInput | null,
  and?: Array< ModelSetFilterInput | null > | null,
  or?: Array< ModelSetFilterInput | null > | null,
  not?: ModelSetFilterInput | null,
  logSetsId?: ModelIDInput | null,
};

export type ModelSubscriptionRoutineFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  sub?: ModelSubscriptionStringInput | null,
  days?: ModelSubscriptionIntInput | null,
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
  and?: Array< ModelSubscriptionWorkoutFilterInput | null > | null,
  or?: Array< ModelSubscriptionWorkoutFilterInput | null > | null,
};

export type ModelSubscriptionLogFilterInput = {
  name?: ModelSubscriptionStringInput | null,
  timestamp?: ModelSubscriptionIntInput | null,
  notes?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionLogFilterInput | null > | null,
  or?: Array< ModelSubscriptionLogFilterInput | null > | null,
};

export type ModelSubscriptionSetFilterInput = {
  weight?: ModelSubscriptionIntInput | null,
  reps?: ModelSubscriptionIntInput | null,
  and?: Array< ModelSubscriptionSetFilterInput | null > | null,
  or?: Array< ModelSubscriptionSetFilterInput | null > | null,
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
        name: string,
        sub: string,
        id: string,
        createdAt: string,
        updatedAt: string,
        routineSectionsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
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
        name: string,
        sub: string,
        id: string,
        createdAt: string,
        updatedAt: string,
        routineSectionsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
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
        name: string,
        sub: string,
        id: string,
        createdAt: string,
        updatedAt: string,
        routineSectionsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateSectionMutationVariables = {
  input: CreateSectionInput,
  condition?: ModelSectionConditionInput | null,
};

export type CreateSectionMutation = {
  createSection?:  {
    __typename: "Section",
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
      createdAt: string,
      updatedAt: string,
    } | null,
    workouts?:  {
      __typename: "ModelWorkoutConnection",
      items:  Array< {
        __typename: "Workout",
        id: string,
        name: string,
        sub: string,
        type: string,
        notes?: string | null,
        createdAt: string,
        updatedAt: string,
        sectionWorkoutsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    id: string,
    createdAt: string,
    updatedAt: string,
    routineSectionsId?: string | null,
  } | null,
};

export type UpdateSectionMutationVariables = {
  input: UpdateSectionInput,
  condition?: ModelSectionConditionInput | null,
};

export type UpdateSectionMutation = {
  updateSection?:  {
    __typename: "Section",
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
      createdAt: string,
      updatedAt: string,
    } | null,
    workouts?:  {
      __typename: "ModelWorkoutConnection",
      items:  Array< {
        __typename: "Workout",
        id: string,
        name: string,
        sub: string,
        type: string,
        notes?: string | null,
        createdAt: string,
        updatedAt: string,
        sectionWorkoutsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    id: string,
    createdAt: string,
    updatedAt: string,
    routineSectionsId?: string | null,
  } | null,
};

export type DeleteSectionMutationVariables = {
  input: DeleteSectionInput,
  condition?: ModelSectionConditionInput | null,
};

export type DeleteSectionMutation = {
  deleteSection?:  {
    __typename: "Section",
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
      createdAt: string,
      updatedAt: string,
    } | null,
    workouts?:  {
      __typename: "ModelWorkoutConnection",
      items:  Array< {
        __typename: "Workout",
        id: string,
        name: string,
        sub: string,
        type: string,
        notes?: string | null,
        createdAt: string,
        updatedAt: string,
        sectionWorkoutsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    id: string,
    createdAt: string,
    updatedAt: string,
    routineSectionsId?: string | null,
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
    type: string,
    logs?:  {
      __typename: "ModelLogConnection",
      items:  Array< {
        __typename: "Log",
        name: string,
        timestamp?: number | null,
        notes?: string | null,
        id: string,
        createdAt: string,
        updatedAt: string,
        workoutLogsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    notes?: string | null,
    createdAt: string,
    updatedAt: string,
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
    type: string,
    logs?:  {
      __typename: "ModelLogConnection",
      items:  Array< {
        __typename: "Log",
        name: string,
        timestamp?: number | null,
        notes?: string | null,
        id: string,
        createdAt: string,
        updatedAt: string,
        workoutLogsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    notes?: string | null,
    createdAt: string,
    updatedAt: string,
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
    type: string,
    logs?:  {
      __typename: "ModelLogConnection",
      items:  Array< {
        __typename: "Log",
        name: string,
        timestamp?: number | null,
        notes?: string | null,
        id: string,
        createdAt: string,
        updatedAt: string,
        workoutLogsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    notes?: string | null,
    createdAt: string,
    updatedAt: string,
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
    name: string,
    timestamp?: number | null,
    sets?:  {
      __typename: "ModelSetConnection",
      items:  Array< {
        __typename: "Set",
        weight?: number | null,
        reps?: number | null,
        id: string,
        createdAt: string,
        updatedAt: string,
        logSetsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    notes?: string | null,
    id: string,
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
    name: string,
    timestamp?: number | null,
    sets?:  {
      __typename: "ModelSetConnection",
      items:  Array< {
        __typename: "Set",
        weight?: number | null,
        reps?: number | null,
        id: string,
        createdAt: string,
        updatedAt: string,
        logSetsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    notes?: string | null,
    id: string,
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
    name: string,
    timestamp?: number | null,
    sets?:  {
      __typename: "ModelSetConnection",
      items:  Array< {
        __typename: "Set",
        weight?: number | null,
        reps?: number | null,
        id: string,
        createdAt: string,
        updatedAt: string,
        logSetsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    notes?: string | null,
    id: string,
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
    weight?: number | null,
    reps?: number | null,
    id: string,
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
    weight?: number | null,
    reps?: number | null,
    id: string,
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
    weight?: number | null,
    reps?: number | null,
    id: string,
    createdAt: string,
    updatedAt: string,
    logSetsId?: string | null,
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
        name: string,
        sub: string,
        id: string,
        createdAt: string,
        updatedAt: string,
        routineSectionsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
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
      createdAt: string,
      updatedAt: string,
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
      createdAt: string,
      updatedAt: string,
    } | null,
    workouts?:  {
      __typename: "ModelWorkoutConnection",
      items:  Array< {
        __typename: "Workout",
        id: string,
        name: string,
        sub: string,
        type: string,
        notes?: string | null,
        createdAt: string,
        updatedAt: string,
        sectionWorkoutsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    id: string,
    createdAt: string,
    updatedAt: string,
    routineSectionsId?: string | null,
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
      name: string,
      sub: string,
      routine?:  {
        __typename: "Routine",
        id: string,
        name: string,
        sub: string,
        days?: Array< number | null > | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      workouts?:  {
        __typename: "ModelWorkoutConnection",
        nextToken?: string | null,
      } | null,
      id: string,
      createdAt: string,
      updatedAt: string,
      routineSectionsId?: string | null,
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
    type: string,
    logs?:  {
      __typename: "ModelLogConnection",
      items:  Array< {
        __typename: "Log",
        name: string,
        timestamp?: number | null,
        notes?: string | null,
        id: string,
        createdAt: string,
        updatedAt: string,
        workoutLogsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    notes?: string | null,
    createdAt: string,
    updatedAt: string,
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
      type: string,
      logs?:  {
        __typename: "ModelLogConnection",
        nextToken?: string | null,
      } | null,
      notes?: string | null,
      createdAt: string,
      updatedAt: string,
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
    name: string,
    timestamp?: number | null,
    sets?:  {
      __typename: "ModelSetConnection",
      items:  Array< {
        __typename: "Set",
        weight?: number | null,
        reps?: number | null,
        id: string,
        createdAt: string,
        updatedAt: string,
        logSetsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    notes?: string | null,
    id: string,
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
      name: string,
      timestamp?: number | null,
      sets?:  {
        __typename: "ModelSetConnection",
        nextToken?: string | null,
      } | null,
      notes?: string | null,
      id: string,
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
    weight?: number | null,
    reps?: number | null,
    id: string,
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
      weight?: number | null,
      reps?: number | null,
      id: string,
      createdAt: string,
      updatedAt: string,
      logSetsId?: string | null,
    } | null >,
    nextToken?: string | null,
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
        name: string,
        sub: string,
        id: string,
        createdAt: string,
        updatedAt: string,
        routineSectionsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
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
        name: string,
        sub: string,
        id: string,
        createdAt: string,
        updatedAt: string,
        routineSectionsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
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
        name: string,
        sub: string,
        id: string,
        createdAt: string,
        updatedAt: string,
        routineSectionsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateSectionSubscriptionVariables = {
  filter?: ModelSubscriptionSectionFilterInput | null,
};

export type OnCreateSectionSubscription = {
  onCreateSection?:  {
    __typename: "Section",
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
      createdAt: string,
      updatedAt: string,
    } | null,
    workouts?:  {
      __typename: "ModelWorkoutConnection",
      items:  Array< {
        __typename: "Workout",
        id: string,
        name: string,
        sub: string,
        type: string,
        notes?: string | null,
        createdAt: string,
        updatedAt: string,
        sectionWorkoutsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    id: string,
    createdAt: string,
    updatedAt: string,
    routineSectionsId?: string | null,
  } | null,
};

export type OnUpdateSectionSubscriptionVariables = {
  filter?: ModelSubscriptionSectionFilterInput | null,
};

export type OnUpdateSectionSubscription = {
  onUpdateSection?:  {
    __typename: "Section",
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
      createdAt: string,
      updatedAt: string,
    } | null,
    workouts?:  {
      __typename: "ModelWorkoutConnection",
      items:  Array< {
        __typename: "Workout",
        id: string,
        name: string,
        sub: string,
        type: string,
        notes?: string | null,
        createdAt: string,
        updatedAt: string,
        sectionWorkoutsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    id: string,
    createdAt: string,
    updatedAt: string,
    routineSectionsId?: string | null,
  } | null,
};

export type OnDeleteSectionSubscriptionVariables = {
  filter?: ModelSubscriptionSectionFilterInput | null,
};

export type OnDeleteSectionSubscription = {
  onDeleteSection?:  {
    __typename: "Section",
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
      createdAt: string,
      updatedAt: string,
    } | null,
    workouts?:  {
      __typename: "ModelWorkoutConnection",
      items:  Array< {
        __typename: "Workout",
        id: string,
        name: string,
        sub: string,
        type: string,
        notes?: string | null,
        createdAt: string,
        updatedAt: string,
        sectionWorkoutsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    id: string,
    createdAt: string,
    updatedAt: string,
    routineSectionsId?: string | null,
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
    type: string,
    logs?:  {
      __typename: "ModelLogConnection",
      items:  Array< {
        __typename: "Log",
        name: string,
        timestamp?: number | null,
        notes?: string | null,
        id: string,
        createdAt: string,
        updatedAt: string,
        workoutLogsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    notes?: string | null,
    createdAt: string,
    updatedAt: string,
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
    type: string,
    logs?:  {
      __typename: "ModelLogConnection",
      items:  Array< {
        __typename: "Log",
        name: string,
        timestamp?: number | null,
        notes?: string | null,
        id: string,
        createdAt: string,
        updatedAt: string,
        workoutLogsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    notes?: string | null,
    createdAt: string,
    updatedAt: string,
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
    type: string,
    logs?:  {
      __typename: "ModelLogConnection",
      items:  Array< {
        __typename: "Log",
        name: string,
        timestamp?: number | null,
        notes?: string | null,
        id: string,
        createdAt: string,
        updatedAt: string,
        workoutLogsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    notes?: string | null,
    createdAt: string,
    updatedAt: string,
    sectionWorkoutsId?: string | null,
  } | null,
};

export type OnCreateLogSubscriptionVariables = {
  filter?: ModelSubscriptionLogFilterInput | null,
};

export type OnCreateLogSubscription = {
  onCreateLog?:  {
    __typename: "Log",
    name: string,
    timestamp?: number | null,
    sets?:  {
      __typename: "ModelSetConnection",
      items:  Array< {
        __typename: "Set",
        weight?: number | null,
        reps?: number | null,
        id: string,
        createdAt: string,
        updatedAt: string,
        logSetsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    notes?: string | null,
    id: string,
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
    name: string,
    timestamp?: number | null,
    sets?:  {
      __typename: "ModelSetConnection",
      items:  Array< {
        __typename: "Set",
        weight?: number | null,
        reps?: number | null,
        id: string,
        createdAt: string,
        updatedAt: string,
        logSetsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    notes?: string | null,
    id: string,
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
    name: string,
    timestamp?: number | null,
    sets?:  {
      __typename: "ModelSetConnection",
      items:  Array< {
        __typename: "Set",
        weight?: number | null,
        reps?: number | null,
        id: string,
        createdAt: string,
        updatedAt: string,
        logSetsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    notes?: string | null,
    id: string,
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
    weight?: number | null,
    reps?: number | null,
    id: string,
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
    weight?: number | null,
    reps?: number | null,
    id: string,
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
    weight?: number | null,
    reps?: number | null,
    id: string,
    createdAt: string,
    updatedAt: string,
    logSetsId?: string | null,
  } | null,
};
