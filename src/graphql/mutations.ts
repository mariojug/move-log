/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createRoutine = /* GraphQL */ `
  mutation CreateRoutine(
    $input: CreateRoutineInput!
    $condition: ModelRoutineConditionInput
  ) {
    createRoutine(input: $input, condition: $condition) {
      id
      name
      sub
      days
      sections {
        items {
          name
          sub
          id
          createdAt
          updatedAt
          routineSectionsId
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateRoutine = /* GraphQL */ `
  mutation UpdateRoutine(
    $input: UpdateRoutineInput!
    $condition: ModelRoutineConditionInput
  ) {
    updateRoutine(input: $input, condition: $condition) {
      id
      name
      sub
      days
      sections {
        items {
          name
          sub
          id
          createdAt
          updatedAt
          routineSectionsId
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteRoutine = /* GraphQL */ `
  mutation DeleteRoutine(
    $input: DeleteRoutineInput!
    $condition: ModelRoutineConditionInput
  ) {
    deleteRoutine(input: $input, condition: $condition) {
      id
      name
      sub
      days
      sections {
        items {
          name
          sub
          id
          createdAt
          updatedAt
          routineSectionsId
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const createSection = /* GraphQL */ `
  mutation CreateSection(
    $input: CreateSectionInput!
    $condition: ModelSectionConditionInput
  ) {
    createSection(input: $input, condition: $condition) {
      name
      sub
      routine {
        id
        name
        sub
        days
        sections {
          nextToken
        }
        createdAt
        updatedAt
      }
      workouts {
        items {
          id
          name
          sub
          type
          notes
          createdAt
          updatedAt
          sectionWorkoutsId
        }
        nextToken
      }
      id
      createdAt
      updatedAt
      routineSectionsId
    }
  }
`;
export const updateSection = /* GraphQL */ `
  mutation UpdateSection(
    $input: UpdateSectionInput!
    $condition: ModelSectionConditionInput
  ) {
    updateSection(input: $input, condition: $condition) {
      name
      sub
      routine {
        id
        name
        sub
        days
        sections {
          nextToken
        }
        createdAt
        updatedAt
      }
      workouts {
        items {
          id
          name
          sub
          type
          notes
          createdAt
          updatedAt
          sectionWorkoutsId
        }
        nextToken
      }
      id
      createdAt
      updatedAt
      routineSectionsId
    }
  }
`;
export const deleteSection = /* GraphQL */ `
  mutation DeleteSection(
    $input: DeleteSectionInput!
    $condition: ModelSectionConditionInput
  ) {
    deleteSection(input: $input, condition: $condition) {
      name
      sub
      routine {
        id
        name
        sub
        days
        sections {
          nextToken
        }
        createdAt
        updatedAt
      }
      workouts {
        items {
          id
          name
          sub
          type
          notes
          createdAt
          updatedAt
          sectionWorkoutsId
        }
        nextToken
      }
      id
      createdAt
      updatedAt
      routineSectionsId
    }
  }
`;
export const createWorkout = /* GraphQL */ `
  mutation CreateWorkout(
    $input: CreateWorkoutInput!
    $condition: ModelWorkoutConditionInput
  ) {
    createWorkout(input: $input, condition: $condition) {
      id
      name
      sub
      type
      logs {
        items {
          name
          timestamp
          notes
          id
          createdAt
          updatedAt
          workoutLogsId
        }
        nextToken
      }
      notes
      createdAt
      updatedAt
      sectionWorkoutsId
    }
  }
`;
export const updateWorkout = /* GraphQL */ `
  mutation UpdateWorkout(
    $input: UpdateWorkoutInput!
    $condition: ModelWorkoutConditionInput
  ) {
    updateWorkout(input: $input, condition: $condition) {
      id
      name
      sub
      type
      logs {
        items {
          name
          timestamp
          notes
          id
          createdAt
          updatedAt
          workoutLogsId
        }
        nextToken
      }
      notes
      createdAt
      updatedAt
      sectionWorkoutsId
    }
  }
`;
export const deleteWorkout = /* GraphQL */ `
  mutation DeleteWorkout(
    $input: DeleteWorkoutInput!
    $condition: ModelWorkoutConditionInput
  ) {
    deleteWorkout(input: $input, condition: $condition) {
      id
      name
      sub
      type
      logs {
        items {
          name
          timestamp
          notes
          id
          createdAt
          updatedAt
          workoutLogsId
        }
        nextToken
      }
      notes
      createdAt
      updatedAt
      sectionWorkoutsId
    }
  }
`;
export const createLog = /* GraphQL */ `
  mutation CreateLog(
    $input: CreateLogInput!
    $condition: ModelLogConditionInput
  ) {
    createLog(input: $input, condition: $condition) {
      name
      timestamp
      sets {
        items {
          weight
          reps
          id
          createdAt
          updatedAt
          logSetsId
        }
        nextToken
      }
      notes
      id
      createdAt
      updatedAt
      workoutLogsId
    }
  }
`;
export const updateLog = /* GraphQL */ `
  mutation UpdateLog(
    $input: UpdateLogInput!
    $condition: ModelLogConditionInput
  ) {
    updateLog(input: $input, condition: $condition) {
      name
      timestamp
      sets {
        items {
          weight
          reps
          id
          createdAt
          updatedAt
          logSetsId
        }
        nextToken
      }
      notes
      id
      createdAt
      updatedAt
      workoutLogsId
    }
  }
`;
export const deleteLog = /* GraphQL */ `
  mutation DeleteLog(
    $input: DeleteLogInput!
    $condition: ModelLogConditionInput
  ) {
    deleteLog(input: $input, condition: $condition) {
      name
      timestamp
      sets {
        items {
          weight
          reps
          id
          createdAt
          updatedAt
          logSetsId
        }
        nextToken
      }
      notes
      id
      createdAt
      updatedAt
      workoutLogsId
    }
  }
`;
export const createSet = /* GraphQL */ `
  mutation CreateSet(
    $input: CreateSetInput!
    $condition: ModelSetConditionInput
  ) {
    createSet(input: $input, condition: $condition) {
      weight
      reps
      id
      createdAt
      updatedAt
      logSetsId
    }
  }
`;
export const updateSet = /* GraphQL */ `
  mutation UpdateSet(
    $input: UpdateSetInput!
    $condition: ModelSetConditionInput
  ) {
    updateSet(input: $input, condition: $condition) {
      weight
      reps
      id
      createdAt
      updatedAt
      logSetsId
    }
  }
`;
export const deleteSet = /* GraphQL */ `
  mutation DeleteSet(
    $input: DeleteSetInput!
    $condition: ModelSetConditionInput
  ) {
    deleteSet(input: $input, condition: $condition) {
      weight
      reps
      id
      createdAt
      updatedAt
      logSetsId
    }
  }
`;
