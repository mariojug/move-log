/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
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
          sub
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
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $id: ID
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listUsers(
      id: $id
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
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
      nextToken
    }
  }
`;
export const getRoutine = /* GraphQL */ `
  query GetRoutine($id: ID!) {
    getRoutine(id: $id) {
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
      sub
      days
      sections {
        items {
          id
          name
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
export const listRoutines = /* GraphQL */ `
  query ListRoutines(
    $id: ID
    $filter: ModelRoutineFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listRoutines(
      id: $id
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        id
        user {
          id
          username
          createdAt
          updatedAt
          owner
        }
        name
        sub
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
      nextToken
    }
  }
`;
export const getSection = /* GraphQL */ `
  query GetSection($id: ID!) {
    getSection(id: $id) {
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
        sub
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
      createdAt
      updatedAt
      routineSectionsId
      owner
    }
  }
`;
export const listSections = /* GraphQL */ `
  query ListSections(
    $id: ID
    $filter: ModelSectionFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listSections(
      id: $id
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        id
        name
        routine {
          id
          name
          sub
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
        createdAt
        updatedAt
        routineSectionsId
        owner
      }
      nextToken
    }
  }
`;
export const getWorkout = /* GraphQL */ `
  query GetWorkout($id: ID!) {
    getWorkout(id: $id) {
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
export const listWorkouts = /* GraphQL */ `
  query ListWorkouts(
    $id: ID
    $filter: ModelWorkoutFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listWorkouts(
      id: $id
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
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
      nextToken
    }
  }
`;
export const getLog = /* GraphQL */ `
  query GetLog($id: ID!) {
    getLog(id: $id) {
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
export const listLogs = /* GraphQL */ `
  query ListLogs(
    $id: ID
    $filter: ModelLogFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listLogs(
      id: $id
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
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
      nextToken
    }
  }
`;
export const getSet = /* GraphQL */ `
  query GetSet($id: ID!) {
    getSet(id: $id) {
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
export const listSets = /* GraphQL */ `
  query ListSets(
    $id: ID
    $filter: ModelSetFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listSets(
      id: $id
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        id
        log {
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
  }
`;
export const getRoutineWorkout = /* GraphQL */ `
  query GetRoutineWorkout($id: ID!) {
    getRoutineWorkout(id: $id) {
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
        sub
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
export const listRoutineWorkouts = /* GraphQL */ `
  query ListRoutineWorkouts(
    $filter: ModelRoutineWorkoutFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listRoutineWorkouts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        routineID
        workoutID
        routine {
          id
          name
          sub
          days
          notes
          createdAt
          updatedAt
          userRoutinesId
          owner
        }
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
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const getSectionWorkout = /* GraphQL */ `
  query GetSectionWorkout($id: ID!) {
    getSectionWorkout(id: $id) {
      id
      sectionID
      workoutID
      section {
        id
        name
        routine {
          id
          name
          sub
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
export const listSectionWorkouts = /* GraphQL */ `
  query ListSectionWorkouts(
    $filter: ModelSectionWorkoutFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSectionWorkouts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        sectionID
        workoutID
        section {
          id
          name
          createdAt
          updatedAt
          routineSectionsId
          owner
        }
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
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
