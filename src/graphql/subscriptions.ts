/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser($owner: String) {
    onCreateUser(owner: $owner) {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser($owner: String) {
    onUpdateUser(owner: $owner) {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser($owner: String) {
    onDeleteUser(owner: $owner) {
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
export const onCreateRoutine = /* GraphQL */ `
  subscription OnCreateRoutine($owner: String) {
    onCreateRoutine(owner: $owner) {
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
export const onUpdateRoutine = /* GraphQL */ `
  subscription OnUpdateRoutine($owner: String) {
    onUpdateRoutine(owner: $owner) {
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
export const onDeleteRoutine = /* GraphQL */ `
  subscription OnDeleteRoutine($owner: String) {
    onDeleteRoutine(owner: $owner) {
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
export const onCreateSection = /* GraphQL */ `
  subscription OnCreateSection($owner: String) {
    onCreateSection(owner: $owner) {
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
export const onUpdateSection = /* GraphQL */ `
  subscription OnUpdateSection($owner: String) {
    onUpdateSection(owner: $owner) {
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
export const onDeleteSection = /* GraphQL */ `
  subscription OnDeleteSection($owner: String) {
    onDeleteSection(owner: $owner) {
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
export const onCreateWorkout = /* GraphQL */ `
  subscription OnCreateWorkout($owner: String) {
    onCreateWorkout(owner: $owner) {
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
export const onUpdateWorkout = /* GraphQL */ `
  subscription OnUpdateWorkout($owner: String) {
    onUpdateWorkout(owner: $owner) {
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
export const onDeleteWorkout = /* GraphQL */ `
  subscription OnDeleteWorkout($owner: String) {
    onDeleteWorkout(owner: $owner) {
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
export const onCreateLog = /* GraphQL */ `
  subscription OnCreateLog($owner: String) {
    onCreateLog(owner: $owner) {
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
export const onUpdateLog = /* GraphQL */ `
  subscription OnUpdateLog($owner: String) {
    onUpdateLog(owner: $owner) {
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
export const onDeleteLog = /* GraphQL */ `
  subscription OnDeleteLog($owner: String) {
    onDeleteLog(owner: $owner) {
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
export const onCreateSet = /* GraphQL */ `
  subscription OnCreateSet($owner: String) {
    onCreateSet(owner: $owner) {
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
export const onUpdateSet = /* GraphQL */ `
  subscription OnUpdateSet($owner: String) {
    onUpdateSet(owner: $owner) {
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
export const onDeleteSet = /* GraphQL */ `
  subscription OnDeleteSet($owner: String) {
    onDeleteSet(owner: $owner) {
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
export const onCreateRoutineWorkout = /* GraphQL */ `
  subscription OnCreateRoutineWorkout($owner: String) {
    onCreateRoutineWorkout(owner: $owner) {
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
export const onUpdateRoutineWorkout = /* GraphQL */ `
  subscription OnUpdateRoutineWorkout($owner: String) {
    onUpdateRoutineWorkout(owner: $owner) {
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
export const onDeleteRoutineWorkout = /* GraphQL */ `
  subscription OnDeleteRoutineWorkout($owner: String) {
    onDeleteRoutineWorkout(owner: $owner) {
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
export const onCreateSectionWorkout = /* GraphQL */ `
  subscription OnCreateSectionWorkout($owner: String) {
    onCreateSectionWorkout(owner: $owner) {
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
export const onUpdateSectionWorkout = /* GraphQL */ `
  subscription OnUpdateSectionWorkout($owner: String) {
    onUpdateSectionWorkout(owner: $owner) {
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
export const onDeleteSectionWorkout = /* GraphQL */ `
  subscription OnDeleteSectionWorkout($owner: String) {
    onDeleteSectionWorkout(owner: $owner) {
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
