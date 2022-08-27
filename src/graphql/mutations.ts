/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
      id
      username
      workouts {
        items {
          id
          name
          type
          notes
          units
          targetSetRange
          targetRepRange
          targetDurationRange
          createdAt
          updatedAt
          userWorkoutsId
          owner
        }
        nextToken
      }
      routines {
        items {
          id
          name
          days
          notes
          createdAt
          updatedAt
          userRoutinesId
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
      id
      username
      workouts {
        items {
          id
          name
          type
          notes
          units
          targetSetRange
          targetRepRange
          targetDurationRange
          createdAt
          updatedAt
          userWorkoutsId
          owner
        }
        nextToken
      }
      routines {
        items {
          id
          name
          days
          notes
          createdAt
          updatedAt
          userRoutinesId
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
      id
      username
      workouts {
        items {
          id
          name
          type
          notes
          units
          targetSetRange
          targetRepRange
          targetDurationRange
          createdAt
          updatedAt
          userWorkoutsId
          owner
        }
        nextToken
      }
      routines {
        items {
          id
          name
          days
          notes
          createdAt
          updatedAt
          userRoutinesId
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      owner
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
      user {
        id
        username
        workouts {
          nextToken
        }
        routines {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      name
      days
      sections {
        items {
          id
          name
          notes
          createdAt
          updatedAt
          routineSectionsId
          owner
        }
        nextToken
      }
      workouts {
        items {
          id
          routineID
          workoutID
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      notes
      createdAt
      updatedAt
      userRoutinesId
      owner
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
      user {
        id
        username
        workouts {
          nextToken
        }
        routines {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      name
      days
      sections {
        items {
          id
          name
          notes
          createdAt
          updatedAt
          routineSectionsId
          owner
        }
        nextToken
      }
      workouts {
        items {
          id
          routineID
          workoutID
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      notes
      createdAt
      updatedAt
      userRoutinesId
      owner
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
      user {
        id
        username
        workouts {
          nextToken
        }
        routines {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      name
      days
      sections {
        items {
          id
          name
          notes
          createdAt
          updatedAt
          routineSectionsId
          owner
        }
        nextToken
      }
      workouts {
        items {
          id
          routineID
          workoutID
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      notes
      createdAt
      updatedAt
      userRoutinesId
      owner
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
      routine {
        id
        user {
          id
          username
          createdAt
          updatedAt
          owner
        }
        name
        days
        sections {
          nextToken
        }
        workouts {
          nextToken
        }
        notes
        createdAt
        updatedAt
        userRoutinesId
        owner
      }
      workouts {
        items {
          id
          sectionID
          workoutID
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      notes
      createdAt
      updatedAt
      routineSectionsId
      owner
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
      routine {
        id
        user {
          id
          username
          createdAt
          updatedAt
          owner
        }
        name
        days
        sections {
          nextToken
        }
        workouts {
          nextToken
        }
        notes
        createdAt
        updatedAt
        userRoutinesId
        owner
      }
      workouts {
        items {
          id
          sectionID
          workoutID
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      notes
      createdAt
      updatedAt
      routineSectionsId
      owner
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
      routine {
        id
        user {
          id
          username
          createdAt
          updatedAt
          owner
        }
        name
        days
        sections {
          nextToken
        }
        workouts {
          nextToken
        }
        notes
        createdAt
        updatedAt
        userRoutinesId
        owner
      }
      workouts {
        items {
          id
          sectionID
          workoutID
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      notes
      createdAt
      updatedAt
      routineSectionsId
      owner
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
      user {
        id
        username
        workouts {
          nextToken
        }
        routines {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      routines {
        items {
          id
          routineID
          workoutID
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      sections {
        items {
          id
          sectionID
          workoutID
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
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
          owner
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
      owner
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
      user {
        id
        username
        workouts {
          nextToken
        }
        routines {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      routines {
        items {
          id
          routineID
          workoutID
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      sections {
        items {
          id
          sectionID
          workoutID
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
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
          owner
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
      owner
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
      user {
        id
        username
        workouts {
          nextToken
        }
        routines {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      routines {
        items {
          id
          routineID
          workoutID
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      sections {
        items {
          id
          sectionID
          workoutID
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
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
          owner
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
      owner
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
      workout {
        id
        name
        user {
          id
          username
          createdAt
          updatedAt
          owner
        }
        routines {
          nextToken
        }
        sections {
          nextToken
        }
        type
        logs {
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
        owner
      }
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
          owner
        }
        nextToken
      }
      notes
      units
      createdAt
      updatedAt
      workoutLogsId
      owner
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
      workout {
        id
        name
        user {
          id
          username
          createdAt
          updatedAt
          owner
        }
        routines {
          nextToken
        }
        sections {
          nextToken
        }
        type
        logs {
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
        owner
      }
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
          owner
        }
        nextToken
      }
      notes
      units
      createdAt
      updatedAt
      workoutLogsId
      owner
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
      workout {
        id
        name
        user {
          id
          username
          createdAt
          updatedAt
          owner
        }
        routines {
          nextToken
        }
        sections {
          nextToken
        }
        type
        logs {
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
        owner
      }
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
          owner
        }
        nextToken
      }
      notes
      units
      createdAt
      updatedAt
      workoutLogsId
      owner
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
      log {
        id
        name
        timestamp
        workout {
          id
          name
          type
          notes
          units
          targetSetRange
          targetRepRange
          targetDurationRange
          createdAt
          updatedAt
          userWorkoutsId
          owner
        }
        sets {
          nextToken
        }
        notes
        units
        createdAt
        updatedAt
        workoutLogsId
        owner
      }
      weight
      reps
      duration
      units
      createdAt
      updatedAt
      logSetsId
      owner
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
      log {
        id
        name
        timestamp
        workout {
          id
          name
          type
          notes
          units
          targetSetRange
          targetRepRange
          targetDurationRange
          createdAt
          updatedAt
          userWorkoutsId
          owner
        }
        sets {
          nextToken
        }
        notes
        units
        createdAt
        updatedAt
        workoutLogsId
        owner
      }
      weight
      reps
      duration
      units
      createdAt
      updatedAt
      logSetsId
      owner
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
      log {
        id
        name
        timestamp
        workout {
          id
          name
          type
          notes
          units
          targetSetRange
          targetRepRange
          targetDurationRange
          createdAt
          updatedAt
          userWorkoutsId
          owner
        }
        sets {
          nextToken
        }
        notes
        units
        createdAt
        updatedAt
        workoutLogsId
        owner
      }
      weight
      reps
      duration
      units
      createdAt
      updatedAt
      logSetsId
      owner
    }
  }
`;
export const createRoutineWorkout = /* GraphQL */ `
  mutation CreateRoutineWorkout(
    $input: CreateRoutineWorkoutInput!
    $condition: ModelRoutineWorkoutConditionInput
  ) {
    createRoutineWorkout(input: $input, condition: $condition) {
      id
      routineID
      workoutID
      routine {
        id
        user {
          id
          username
          createdAt
          updatedAt
          owner
        }
        name
        days
        sections {
          nextToken
        }
        workouts {
          nextToken
        }
        notes
        createdAt
        updatedAt
        userRoutinesId
        owner
      }
      workout {
        id
        name
        user {
          id
          username
          createdAt
          updatedAt
          owner
        }
        routines {
          nextToken
        }
        sections {
          nextToken
        }
        type
        logs {
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
        owner
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const updateRoutineWorkout = /* GraphQL */ `
  mutation UpdateRoutineWorkout(
    $input: UpdateRoutineWorkoutInput!
    $condition: ModelRoutineWorkoutConditionInput
  ) {
    updateRoutineWorkout(input: $input, condition: $condition) {
      id
      routineID
      workoutID
      routine {
        id
        user {
          id
          username
          createdAt
          updatedAt
          owner
        }
        name
        days
        sections {
          nextToken
        }
        workouts {
          nextToken
        }
        notes
        createdAt
        updatedAt
        userRoutinesId
        owner
      }
      workout {
        id
        name
        user {
          id
          username
          createdAt
          updatedAt
          owner
        }
        routines {
          nextToken
        }
        sections {
          nextToken
        }
        type
        logs {
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
        owner
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const deleteRoutineWorkout = /* GraphQL */ `
  mutation DeleteRoutineWorkout(
    $input: DeleteRoutineWorkoutInput!
    $condition: ModelRoutineWorkoutConditionInput
  ) {
    deleteRoutineWorkout(input: $input, condition: $condition) {
      id
      routineID
      workoutID
      routine {
        id
        user {
          id
          username
          createdAt
          updatedAt
          owner
        }
        name
        days
        sections {
          nextToken
        }
        workouts {
          nextToken
        }
        notes
        createdAt
        updatedAt
        userRoutinesId
        owner
      }
      workout {
        id
        name
        user {
          id
          username
          createdAt
          updatedAt
          owner
        }
        routines {
          nextToken
        }
        sections {
          nextToken
        }
        type
        logs {
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
        owner
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const createSectionWorkout = /* GraphQL */ `
  mutation CreateSectionWorkout(
    $input: CreateSectionWorkoutInput!
    $condition: ModelSectionWorkoutConditionInput
  ) {
    createSectionWorkout(input: $input, condition: $condition) {
      id
      sectionID
      workoutID
      section {
        id
        name
        routine {
          id
          name
          days
          notes
          createdAt
          updatedAt
          userRoutinesId
          owner
        }
        workouts {
          nextToken
        }
        notes
        createdAt
        updatedAt
        routineSectionsId
        owner
      }
      workout {
        id
        name
        user {
          id
          username
          createdAt
          updatedAt
          owner
        }
        routines {
          nextToken
        }
        sections {
          nextToken
        }
        type
        logs {
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
        owner
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const updateSectionWorkout = /* GraphQL */ `
  mutation UpdateSectionWorkout(
    $input: UpdateSectionWorkoutInput!
    $condition: ModelSectionWorkoutConditionInput
  ) {
    updateSectionWorkout(input: $input, condition: $condition) {
      id
      sectionID
      workoutID
      section {
        id
        name
        routine {
          id
          name
          days
          notes
          createdAt
          updatedAt
          userRoutinesId
          owner
        }
        workouts {
          nextToken
        }
        notes
        createdAt
        updatedAt
        routineSectionsId
        owner
      }
      workout {
        id
        name
        user {
          id
          username
          createdAt
          updatedAt
          owner
        }
        routines {
          nextToken
        }
        sections {
          nextToken
        }
        type
        logs {
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
        owner
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const deleteSectionWorkout = /* GraphQL */ `
  mutation DeleteSectionWorkout(
    $input: DeleteSectionWorkoutInput!
    $condition: ModelSectionWorkoutConditionInput
  ) {
    deleteSectionWorkout(input: $input, condition: $condition) {
      id
      sectionID
      workoutID
      section {
        id
        name
        routine {
          id
          name
          days
          notes
          createdAt
          updatedAt
          userRoutinesId
          owner
        }
        workouts {
          nextToken
        }
        notes
        createdAt
        updatedAt
        routineSectionsId
        owner
      }
      workout {
        id
        name
        user {
          id
          username
          createdAt
          updatedAt
          owner
        }
        routines {
          nextToken
        }
        sections {
          nextToken
        }
        type
        logs {
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
        owner
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
