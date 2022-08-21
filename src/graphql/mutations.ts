/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
      sub
      workouts {
        items {
          id
          name
          sub
          type
          notes
          units
          targetSetRange
          targetRepRange
          targetDurationRange
          createdAt
          updatedAt
          userWorkoutsId
          sectionWorkoutsId
        }
        nextToken
      }
      routines {
        items {
          id
          name
          sub
          days
          notes
          createdAt
          updatedAt
          userRoutinesId
        }
        nextToken
      }
      id
      createdAt
      updatedAt
    }
  }
`;
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
      sub
      workouts {
        items {
          id
          name
          sub
          type
          notes
          units
          targetSetRange
          targetRepRange
          targetDurationRange
          createdAt
          updatedAt
          userWorkoutsId
          sectionWorkoutsId
        }
        nextToken
      }
      routines {
        items {
          id
          name
          sub
          days
          notes
          createdAt
          updatedAt
          userRoutinesId
        }
        nextToken
      }
      id
      createdAt
      updatedAt
    }
  }
`;
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
      sub
      workouts {
        items {
          id
          name
          sub
          type
          notes
          units
          targetSetRange
          targetRepRange
          targetDurationRange
          createdAt
          updatedAt
          userWorkoutsId
          sectionWorkoutsId
        }
        nextToken
      }
      routines {
        items {
          id
          name
          sub
          days
          notes
          createdAt
          updatedAt
          userRoutinesId
        }
        nextToken
      }
      id
      createdAt
      updatedAt
    }
  }
`;
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
          id
          name
          sub
          createdAt
          updatedAt
          routineSectionsId
        }
        nextToken
      }
      notes
      createdAt
      updatedAt
      userRoutinesId
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
          id
          name
          sub
          createdAt
          updatedAt
          routineSectionsId
        }
        nextToken
      }
      notes
      createdAt
      updatedAt
      userRoutinesId
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
          id
          name
          sub
          createdAt
          updatedAt
          routineSectionsId
        }
        nextToken
      }
      notes
      createdAt
      updatedAt
      userRoutinesId
    }
  }
`;
export const createSection = /* GraphQL */ `
  mutation CreateSection(
    $input: CreateSectionInput!
    $condition: ModelSectionConditionInput
  ) {
    createSection(input: $input, condition: $condition) {
      id
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
        notes
        createdAt
        updatedAt
        userRoutinesId
      }
      workouts {
        items {
          id
          name
          sub
          type
          notes
          units
          targetSetRange
          targetRepRange
          targetDurationRange
          createdAt
          updatedAt
          userWorkoutsId
          sectionWorkoutsId
        }
        nextToken
      }
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
      id
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
        notes
        createdAt
        updatedAt
        userRoutinesId
      }
      workouts {
        items {
          id
          name
          sub
          type
          notes
          units
          targetSetRange
          targetRepRange
          targetDurationRange
          createdAt
          updatedAt
          userWorkoutsId
          sectionWorkoutsId
        }
        nextToken
      }
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
      id
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
        notes
        createdAt
        updatedAt
        userRoutinesId
      }
      workouts {
        items {
          id
          name
          sub
          type
          notes
          units
          targetSetRange
          targetRepRange
          targetDurationRange
          createdAt
          updatedAt
          userWorkoutsId
          sectionWorkoutsId
        }
        nextToken
      }
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
          id
          name
          timestamp
          notes
          units
          createdAt
          updatedAt
          workoutLogsId
        }
        nextToken
      }
      notes
      units
      targetSetRange
      targetRepRange
      targetDurationRange
      createdAt
      updatedAt
      userWorkoutsId
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
          id
          name
          timestamp
          notes
          units
          createdAt
          updatedAt
          workoutLogsId
        }
        nextToken
      }
      notes
      units
      targetSetRange
      targetRepRange
      targetDurationRange
      createdAt
      updatedAt
      userWorkoutsId
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
          id
          name
          timestamp
          notes
          units
          createdAt
          updatedAt
          workoutLogsId
        }
        nextToken
      }
      notes
      units
      targetSetRange
      targetRepRange
      targetDurationRange
      createdAt
      updatedAt
      userWorkoutsId
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
      id
      name
      timestamp
      sets {
        items {
          id
          weight
          reps
          duration
          units
          createdAt
          updatedAt
          logSetsId
        }
        nextToken
      }
      notes
      units
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
      id
      name
      timestamp
      sets {
        items {
          id
          weight
          reps
          duration
          units
          createdAt
          updatedAt
          logSetsId
        }
        nextToken
      }
      notes
      units
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
      id
      name
      timestamp
      sets {
        items {
          id
          weight
          reps
          duration
          units
          createdAt
          updatedAt
          logSetsId
        }
        nextToken
      }
      notes
      units
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
      id
      weight
      reps
      duration
      units
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
      id
      weight
      reps
      duration
      units
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
      id
      weight
      reps
      duration
      units
      createdAt
      updatedAt
      logSetsId
    }
  }
`;
