/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getRoutine = /* GraphQL */ `
  query GetRoutine($id: ID!) {
    getRoutine(id: $id) {
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
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getSection = /* GraphQL */ `
  query GetSection($id: ID!) {
    getSection(id: $id) {
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
export const listSections = /* GraphQL */ `
  query ListSections(
    $filter: ModelSectionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSections(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        name
        sub
        routine {
          id
          name
          sub
          days
          createdAt
          updatedAt
        }
        workouts {
          nextToken
        }
        id
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
        createdAt
        updatedAt
        sectionWorkoutsId
      }
      nextToken
    }
  }
`;
export const getLog = /* GraphQL */ `
  query GetLog($id: ID!) {
    getLog(id: $id) {
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
export const listLogs = /* GraphQL */ `
  query ListLogs(
    $filter: ModelLogFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listLogs(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        name
        timestamp
        sets {
          nextToken
        }
        notes
        id
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
      weight
      reps
      id
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
        weight
        reps
        id
        createdAt
        updatedAt
        logSetsId
      }
      nextToken
    }
  }
`;
