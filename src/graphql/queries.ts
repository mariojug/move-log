/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
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
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        sub
        workouts {
          nextToken
        }
        routines {
          nextToken
        }
        id
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getRoutine = /* GraphQL */ `
  query GetRoutine($id: ID!) {
    getRoutine(id: $id) {
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
export const listRoutines = /* GraphQL */ `
  query ListRoutines(
    $filter: ModelRoutineFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listRoutines(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getSection = /* GraphQL */ `
  query GetSection($id: ID!) {
    getSection(id: $id) {
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
export const listSections = /* GraphQL */ `
  query ListSections(
    $filter: ModelSectionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSections(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        sub
        routine {
          id
          name
          sub
          days
          notes
          createdAt
          updatedAt
          userRoutinesId
        }
        workouts {
          nextToken
        }
        createdAt
        updatedAt
        routineSectionsId
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
export const listWorkouts = /* GraphQL */ `
  query ListWorkouts(
    $filter: ModelWorkoutFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listWorkouts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        sub
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
        sectionWorkoutsId
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
export const listLogs = /* GraphQL */ `
  query ListLogs(
    $filter: ModelLogFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listLogs(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        timestamp
        sets {
          nextToken
        }
        notes
        units
        createdAt
        updatedAt
        workoutLogsId
      }
      nextToken
    }
  }
`;
export const getSet = /* GraphQL */ `
  query GetSet($id: ID!) {
    getSet(id: $id) {
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
export const listSets = /* GraphQL */ `
  query ListSets(
    $filter: ModelSetFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSets(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
  }
`;
